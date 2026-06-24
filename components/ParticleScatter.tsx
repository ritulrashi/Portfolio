function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const SIZE = 320;
const CENTER = SIZE / 2;
const COUNT = 220;

const random = mulberry32(42);

const dots = Array.from({ length: COUNT }, () => {
  const angle = random() * Math.PI * 2;
  const radius = CENTER * Math.pow(random(), 1.6);
  const x = CENTER + Math.cos(angle) * radius;
  const y = CENTER + Math.sin(angle) * radius * 1.2;
  const r = 1 + random() * 2;
  const delay = random() * 4;
  const duration = 2 + random() * 3;
  return { x, y, r, delay, duration };
});

export default function ParticleScatter() {
  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className="w-full max-w-sm aspect-square"
      aria-hidden="true"
    >
      {dots.map((dot, i) => (
        <circle
          key={i}
          cx={dot.x}
          cy={dot.y}
          r={dot.r}
          fill="var(--color-accent)"
          style={{
            animation: `twinkle ${dot.duration}s ease-in-out ${dot.delay}s infinite`,
          }}
        />
      ))}
    </svg>
  );
}
