"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Game Mode — Pac-Man easter egg, playable over the whole page.
 *
 * Customize here:
 * - GHOSTS              ghost name + color
 * - COLORS              mirrors the theme vars in app/globals.css — edit both together if you re-theme
 * - DOT_SPACING         grid density of the dots scattered across the viewport
 * - LIVES_START         starting lives
 * - DOT/PELLET_REVEAL_RADIUS  how much of the real page peeks through where you've eaten
 * - Levels are endless: clearing the board rebuilds dots/pellets/ghosts and bumps LEVEL;
 *   only running out of lives ends the run (no fixed "win" state)
 * - Button position: the "top-20 left-6" classes on the trigger button below
 *   (kept clear of the fixed site header, which occupies the very top of the page)
 */

const COLORS = {
  dim: "rgba(10, 25, 47, 0.82)",
  dot: "#ccd6f6",
  pellet: "#64ffda",
  text: "#ccd6f6",
  textMuted: "#8892b0",
  accent: "#64ffda",
  pacman: "#f5c842",
  frightened: "#8892b0",
  eyes: "#ffffff",
};

const FONT_SANS = "var(--font-carlito), system-ui, sans-serif";
const FONT_MONO = "ui-monospace, 'SF Mono', Menlo, Consolas, monospace";

const GHOSTS = [
  { name: "Kafka", color: "#ef4444" },
  { name: "NullPtr", color: "#f472b6" },
  { name: "Latency", color: "#38bdf8" },
  { name: "404", color: "#fb923c" },
] as const;

const DOT_SPACING = 48;
const DOT_RADIUS = 4.5;
const DOT_EAT_RADIUS = 20;
const PELLET_RADIUS = 8;
const PACMAN_RADIUS = 14;
const GHOST_RADIUS = 13;
const PACMAN_SPEED = 200;
const GHOST_SPEED = 130;
const FRIGHTENED_SPEED = 100;
const EATEN_SPEED = 280;
const FRIGHTENED_MS = 8000;
const INVULNERABLE_MS = 1200;
const LIVES_START = 5;
const LEVEL_START_GRACE_MS = 1500;
const DOT_REVEAL_RADIUS = 22;
const PELLET_REVEAL_RADIUS = 34;

type Vec = { x: number; y: number };
type Dot = Vec & { eaten: boolean };
type GhostStatus = "chase" | "frightened" | "eaten";
type Ghost = Vec & { name: string; color: string; state: GhostStatus; chaseOffset: Vec };

const CHASE_OFFSETS: Vec[] = [
  { x: 30, y: -30 },
  { x: -30, y: -30 },
  { x: 30, y: 30 },
  { x: -30, y: 30 },
];

function dist(a: Vec, b: Vec) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

type GameState = {
  pacman: Vec & { angle: number; moving: boolean };
  ghosts: Ghost[];
  dots: Dot[];
  pellets: Dot[];
  score: number;
  lives: number;
  level: number;
  invulnerableUntil: number;
  frightenedUntil: number;
  toast: string | null;
  toastUntil: number;
  keys: Set<string>;
};

function buildPellets(w: number, h: number): Dot[] {
  const xInset = 56;
  const bottomInset = 56;
  // Top corners sit below the GAME MODE button / lives row / score+level HUD
  // so a pellet never spawns hidden underneath that always-visible UI.
  const topInset = 190;
  return [
    { x: xInset, y: topInset, eaten: false },
    { x: w - xInset, y: topInset, eaten: false },
    { x: xInset, y: h - bottomInset, eaten: false },
    { x: w - xInset, y: h - bottomInset, eaten: false },
  ];
}

function buildDots(w: number, h: number, pellets: Dot[]): Dot[] {
  const margin = 40;
  // Top margin clears the GAME MODE button, lives row, and score+level HUD
  // (all fixed UI that sits above the canvas) so every dot is reachable and visible.
  const marginTop = 175;
  const dots: Dot[] = [];
  for (let x = margin; x <= w - margin; x += DOT_SPACING) {
    for (let y = marginTop; y <= h - margin; y += DOT_SPACING) {
      if (pellets.some((p) => dist({ x, y }, p) < 32)) continue;
      dots.push({ x, y, eaten: false });
    }
  }
  return dots;
}

function buildGhosts(w: number, h: number): Ghost[] {
  const cx = w / 2;
  const cy = h / 2;
  const offsets = [
    { x: -0.32 * w, y: -0.32 * h },
    { x: 0.32 * w, y: -0.32 * h },
    { x: -0.32 * w, y: 0.32 * h },
    { x: 0.32 * w, y: 0.32 * h },
  ];
  return GHOSTS.map((g, i) => ({
    x: cx + offsets[i].x,
    y: cy + offsets[i].y,
    name: g.name,
    color: g.color,
    state: "chase" as GhostStatus,
    chaseOffset: CHASE_OFFSETS[i],
  }));
}

function wrap(v: number, max: number) {
  if (v < 0) return max;
  if (v > max) return 0;
  return v;
}

function drawPacman(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  angle: number,
  mouth: number,
  color: string
) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.arc(x, y, r, angle + mouth, angle - mouth + Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function drawGhostBody(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, color: string) {
  ctx.beginPath();
  ctx.arc(x, y, r, Math.PI, 0);
  ctx.lineTo(x + r, y + r * 0.85);
  const notchWidth = (2 * r) / 4;
  for (let i = 0; i < 4; i++) {
    const nx = x + r - notchWidth * (i + 1);
    const ny = i % 2 === 0 ? y + r * 1.1 : y + r * 0.85;
    ctx.lineTo(nx, ny);
  }
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function drawEyes(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, dirX: number, dirY: number) {
  for (const side of [-1, 1]) {
    const ex = x + side * r * 0.35;
    ctx.beginPath();
    ctx.fillStyle = COLORS.eyes;
    ctx.ellipse(ex, y, r * 0.22, r * 0.28, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "#1b2942";
    ctx.ellipse(ex + dirX * r * 0.08, y + dirY * r * 0.1, r * 0.1, r * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function GameMode() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTouch] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(hover: none)").matches &&
      window.matchMedia("(pointer: coarse)").matches
  );
  const [showTooltip, setShowTooltip] = useState(false);
  const [result, setResult] = useState<"lose" | null>(null);
  const [finalScore, setFinalScore] = useState(0);
  const [finalLevel, setFinalLevel] = useState(1);
  const [fadingResult, setFadingResult] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stateRef = useRef<GameState | null>(null);
  const rafRef = useRef<number | null>(null);
  const tooltipTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resultTimeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const exitInstant = useCallback(() => {
    setIsOpen(false);
    setResult(null);
    setFadingResult(false);
  }, []);

  const start = useCallback(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const pellets = buildPellets(w, h);
    stateRef.current = {
      pacman: { x: w / 2, y: h / 2 + 120, angle: 0, moving: false },
      ghosts: buildGhosts(w, h),
      dots: buildDots(w, h, pellets),
      pellets,
      score: 0,
      lives: LIVES_START,
      level: 1,
      invulnerableUntil: performance.now() + LEVEL_START_GRACE_MS,
      frightenedUntil: 0,
      toast: null,
      toastUntil: 0,
      keys: new Set(),
    };
    resultTimeoutsRef.current.forEach(clearTimeout);
    resultTimeoutsRef.current = [];
    setResult(null);
    setFadingResult(false);
    setIsOpen(true);
  }, []);

  const handleToggle = useCallback(() => {
    if (isOpen) {
      exitInstant();
      return;
    }
    if (isTouch) {
      if (tooltipTimeoutRef.current) clearTimeout(tooltipTimeoutRef.current);
      setShowTooltip(true);
      tooltipTimeoutRef.current = setTimeout(() => setShowTooltip(false), 2500);
      return;
    }
    start();
  }, [isOpen, isTouch, start, exitInstant]);

  const triggerLose = useCallback(() => {
    const state = stateRef.current;
    setResult("lose");
    setFinalScore(state?.score ?? 0);
    setFinalLevel(state?.level ?? 1);
    const t1 = setTimeout(() => setFadingResult(true), 3000);
    const t2 = setTimeout(() => exitInstant(), 3500);
    resultTimeoutsRef.current = [t1, t2];
  }, [exitInstant]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";

    const movementKeys = ["w", "a", "s", "d", "arrowup", "arrowdown", "arrowleft", "arrowright"];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        exitInstant();
        return;
      }
      const k = e.key.toLowerCase();
      if (movementKeys.includes(k)) {
        e.preventDefault();
        stateRef.current?.keys.add(k);
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      stateRef.current?.keys.delete(e.key.toLowerCase());
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let last = performance.now();

    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.scale(dpr, dpr);
      }

      const state = stateRef.current;
      ctx.clearRect(0, 0, w, h);

      if (state && !result) {
        const keys = state.keys;
        let dx = 0;
        let dy = 0;
        if (keys.has("w") || keys.has("arrowup")) dy -= 1;
        if (keys.has("s") || keys.has("arrowdown")) dy += 1;
        if (keys.has("a") || keys.has("arrowleft")) dx -= 1;
        if (keys.has("d") || keys.has("arrowright")) dx += 1;
        const len = Math.hypot(dx, dy);
        state.pacman.moving = len > 0;
        if (state.pacman.moving) {
          const nx = dx / len;
          const ny = dy / len;
          state.pacman.angle = Math.atan2(ny, nx);
          state.pacman.x += nx * PACMAN_SPEED * dt;
          state.pacman.y += ny * PACMAN_SPEED * dt;
        }
        state.pacman.x = wrap(state.pacman.x, w);
        state.pacman.y = wrap(state.pacman.y, h);

        const frightenedActive = now < state.frightenedUntil;

        for (const ghost of state.ghosts) {
          if (ghost.state === "eaten") {
            const cx = w / 2;
            const cy = h / 2;
            const d = dist(ghost, { x: cx, y: cy });
            if (d < 6) {
              ghost.state = "chase";
            } else {
              // Clamp the step so a fast-moving ghost can't overshoot a
              // near (or stationary) target and oscillate back and forth.
              const step = Math.min(EATEN_SPEED * dt, d);
              ghost.x += ((cx - ghost.x) / d) * step;
              ghost.y += ((cy - ghost.y) / d) * step;
            }
            continue;
          }

          if (ghost.state === "frightened" && !frightenedActive) {
            ghost.state = "chase";
          } else if (ghost.state === "chase" && frightenedActive) {
            ghost.state = "frightened";
          }

          const target =
            ghost.state === "frightened"
              ? state.pacman
              : { x: state.pacman.x + ghost.chaseOffset.x, y: state.pacman.y + ghost.chaseOffset.y };
          const d = Math.max(dist(ghost, target), 0.001);
          const ux = (target.x - ghost.x) / d;
          const uy = (target.y - ghost.y) / d;
          if (ghost.state === "frightened") {
            // Fleeing only ever increases distance from the target, so there's no overshoot to clamp.
            ghost.x -= ux * FRIGHTENED_SPEED * dt;
            ghost.y -= uy * FRIGHTENED_SPEED * dt;
          } else {
            const step = Math.min(GHOST_SPEED * dt, d);
            ghost.x += ux * step;
            ghost.y += uy * step;
          }
          ghost.x = wrap(ghost.x, w);
          ghost.y = wrap(ghost.y, h);
        }

        for (const dot of state.dots) {
          if (!dot.eaten && dist(dot, state.pacman) < DOT_EAT_RADIUS) {
            dot.eaten = true;
            state.score += 10;
          }
        }
        for (const pellet of state.pellets) {
          if (!pellet.eaten && dist(pellet, state.pacman) < PACMAN_RADIUS + PELLET_RADIUS) {
            pellet.eaten = true;
            state.score += 50;
            state.frightenedUntil = now + FRIGHTENED_MS;
          }
        }

        if (now >= state.invulnerableUntil) {
          for (const ghost of state.ghosts) {
            if (dist(ghost, state.pacman) > PACMAN_RADIUS + GHOST_RADIUS - 4) continue;
            if (ghost.state === "frightened") {
              ghost.state = "eaten";
              state.score += 200;
            } else if (ghost.state === "chase") {
              state.lives -= 1;
              state.invulnerableUntil = now + INVULNERABLE_MS;
              state.pacman.x = w / 2;
              state.pacman.y = h / 2 + 120;
              if (state.lives <= 0) triggerLose();
            }
          }
        }

        const dotsLeft = state.dots.some((d) => !d.eaten);
        const pelletsLeft = state.pellets.some((p) => !p.eaten);
        if (!dotsLeft && !pelletsLeft) {
          state.level += 1;
          const freshPellets = buildPellets(w, h);
          state.pellets = freshPellets;
          state.dots = buildDots(w, h, freshPellets);
          state.ghosts = buildGhosts(w, h);
          state.invulnerableUntil = now + LEVEL_START_GRACE_MS;
          state.toast = `LEVEL ${state.level}`;
          state.toastUntil = now + 1800;
        }
      }

      if (state) {
        ctx.fillStyle = COLORS.dim;
        ctx.fillRect(0, 0, w, h);

        ctx.save();
        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        for (const dot of state.dots) {
          if (!dot.eaten) continue;
          ctx.moveTo(dot.x + DOT_REVEAL_RADIUS, dot.y);
          ctx.arc(dot.x, dot.y, DOT_REVEAL_RADIUS, 0, Math.PI * 2);
        }
        for (const pellet of state.pellets) {
          if (!pellet.eaten) continue;
          ctx.moveTo(pellet.x + PELLET_REVEAL_RADIUS, pellet.y);
          ctx.arc(pellet.x, pellet.y, PELLET_REVEAL_RADIUS, 0, Math.PI * 2);
        }
        ctx.fillStyle = "#000";
        ctx.fill();
        ctx.restore();

        ctx.beginPath();
        for (const dot of state.dots) {
          if (dot.eaten) continue;
          ctx.moveTo(dot.x + DOT_RADIUS, dot.y);
          ctx.arc(dot.x, dot.y, DOT_RADIUS, 0, Math.PI * 2);
        }
        ctx.fillStyle = COLORS.dot;
        ctx.fill();

        for (const pellet of state.pellets) {
          if (pellet.eaten) continue;
          const pulse = 1 + Math.sin(now / 180) * 0.15;
          ctx.beginPath();
          ctx.arc(pellet.x, pellet.y, PELLET_RADIUS * pulse, 0, Math.PI * 2);
          ctx.fillStyle = COLORS.pellet;
          ctx.fill();
        }

        for (const ghost of state.ghosts) {
          if (ghost.state === "eaten") {
            const dx = state.pacman.x - ghost.x;
            const dy = state.pacman.y - ghost.y;
            const len = Math.hypot(dx, dy) || 1;
            drawEyes(ctx, ghost.x, ghost.y, GHOST_RADIUS, dx / len, dy / len);
          } else {
            const color = ghost.state === "frightened" ? COLORS.frightened : ghost.color;
            drawGhostBody(ctx, ghost.x, ghost.y, GHOST_RADIUS, color);
            const dx = state.pacman.x - ghost.x;
            const dy = state.pacman.y - ghost.y;
            const len = Math.hypot(dx, dy) || 1;
            drawEyes(ctx, ghost.x, ghost.y - GHOST_RADIUS * 0.1, GHOST_RADIUS * 0.8, dx / len, dy / len);
          }
          ctx.font = `10px ${FONT_MONO}`;
          ctx.fillStyle = COLORS.textMuted;
          ctx.textAlign = "center";
          ctx.fillText(ghost.name, ghost.x, ghost.y + GHOST_RADIUS + 13);
        }

        const flicker = now < state.invulnerableUntil ? Math.sin(now / 60) > 0 : true;
        if (flicker) {
          const mouth = state.pacman.moving ? Math.abs(Math.sin(now / 100)) * 0.55 + 0.08 : 0.08;
          drawPacman(ctx, state.pacman.x, state.pacman.y, PACMAN_RADIUS, state.pacman.angle, mouth, COLORS.pacman);
        }

        ctx.textAlign = "right";
        ctx.font = `bold 18px ${FONT_SANS}`;
        ctx.fillStyle = COLORS.text;
        ctx.fillText(`SCORE ${state.score}`, w - 32, 40);
        ctx.font = `13px ${FONT_MONO}`;
        ctx.fillStyle = COLORS.textMuted;
        ctx.fillText(`LEVEL ${state.level}`, w - 32, 60);

        ctx.textAlign = "left";
        for (let i = 0; i < state.lives; i++) {
          drawPacman(ctx, 32 + i * 26, 152, 9, 0, 0.35, COLORS.pacman);
        }

        if (state.toast && now < state.toastUntil) {
          ctx.textAlign = "center";
          ctx.font = `bold 22px ${FONT_SANS}`;
          ctx.fillStyle = COLORS.accent;
          ctx.fillText(state.toast, w / 2, h / 2 - 80);
        }
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isOpen, result, exitInstant, triggerLose]);

  return (
    <>
      <button
        onClick={handleToggle}
        aria-label={isOpen ? "Exit game mode" : "Enter game mode"}
        className={`fixed top-20 left-6 z-[10000] flex items-center gap-2.5 rounded-full border-2 px-6 py-3 font-mono text-base font-bold transition-all ${
          isOpen
            ? "border-accent text-accent bg-surface opacity-100"
            : "border-border text-text-muted opacity-50 hover:opacity-100 hover:text-accent hover:border-accent"
        }`}
      >
        <span>●</span> GAME MODE
      </button>

      {showTooltip && (
        <div className="fixed top-36 left-6 z-[10000] max-w-[200px] rounded border border-border bg-surface px-3 py-2 font-mono text-xs text-text-muted">
          Desktop only — needs a keyboard.
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-[9999]" style={{ width: "100vw", height: "100vh" }}>
          <canvas ref={canvasRef} className="absolute inset-0" />

          {result && (
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                fadingResult ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="text-center">
                <p className="text-4xl text-accent mb-3" style={{ fontFamily: FONT_SANS }}>
                  game over
                </p>
                <p className="font-mono text-sm text-text-muted">
                  LEVEL {finalLevel} &middot; SCORE {finalScore}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
