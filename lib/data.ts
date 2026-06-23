export const profile = {
  name: "Ritul Rashi",
  displayName: "RITUL",
  role: "BACKEND ENGINEER // DISTRIBUTED SYSTEMS // VIRGINIA TECH '26",
  tagline:
    "Specializing in concurrent systems, transaction-processing pipelines, and observability tooling — from a C HTTP server to Kafka-backed financial ledgers.",
  email: "rashiritul6@gmail.com",
  github: "https://github.com/ritulrashi",
  linkedin: "https://linkedin.com/in/ritulrashi/",
  resumeHref: "/ritul-rashi-resume.pdf",
  coordinates: "37.2284° N",
  level: "UNDERGRAD '26",
};

export const tickerItems = [
  "BACKEND ENGINEER",
  "DISTRIBUTED SYSTEMS",
  "GO",
  "PYTHON",
  "JAVA",
  "C++",
  "KUBERNETES",
  "KAFKA",
  "170+ USERS SERVED",
  "25% LATENCY REDUCTION",
  "84 AUTOMATED TESTS",
  "VIRGINIA TECH CS '26",
];

export const skillGroups = [
  { label: "LANGS", items: ["JAVA", "PYTHON", "GO", "C++/C"] },
  { label: "BACKEND", items: ["SPRING BOOT", "FASTAPI", "NODE.JS", "KAFKA"] },
  { label: "CLOUD", items: ["AWS", "KUBERNETES", "DOCKER", "LINUX"] },
  { label: "SECURITY", items: ["RBAC", "OAUTH2", "JWT", "POSTMAN"] },
];

export type ExperienceEntry = {
  id: string;
  org: string;
  role: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "dbworkout",
    org: "VIRGINIA TECH",
    role: "Research & Backend Engineer // DBWorkout Platform",
    period: "JAN 2025 — PRESENT",
    current: true,
    bullets: [
      "Designed a PostgreSQL-backed sandbox supporting concurrent query execution and real-time grading for 170+ users",
      "Implemented JWT, bcrypt, and CAS authentication enforcing strict RBAC policies across roles",
      "Built automated Postman API validation suites ensuring payload integrity and access-control correctness",
    ],
  },
  {
    id: "psn",
    org: "PSN MUSICALS",
    role: "Full-Stack Developer",
    period: "JUN 2024 — AUG 2024",
    bullets: [
      "Architected a multi-service platform on AWS (EC2, S3, Lambda) with containerized, scalable APIs",
      "Optimized SQL queries and request handling, reducing latency by 25% under concurrent load",
      "Implemented OAuth2 and RBAC, enforcing least-privilege access across distributed components",
    ],
  },
  {
    id: "duofits",
    org: "DUOFITS",
    role: "Software Developer Intern",
    period: "MAY 2023 — AUG 2023",
    bullets: [
      "Optimized SQL pipelines and indexing strategies, improving query performance under production load",
      "Built automated reporting systems generating real-time KPIs for internal stakeholders",
      "Partnered with engineering and QA teams to design and validate testing workflows",
    ],
  },
  {
    id: "vt-edu",
    org: "VIRGINIA TECH",
    role: "B.S. Computer Science",
    period: "EXPECTED MAY 2026",
    bullets: [
      "Coursework: Software Design & Data Structures, Computer Organization, Discrete Math, Agile/Scrum, Computer Systems",
      "Member, Association for Women in Computing at Virginia Tech",
    ],
  },
];

export type Project = {
  id: string;
  tag: string;
  title: string;
  description: string;
  stack: string[];
  href: string;
  linkLabel: string;
  collabNote?: string;
};

export const projects: Project[] = [
  {
    id: "personal-server",
    tag: "AUTH_TOKEN: HTTP_0X44",
    title: "PERSONAL WEB & VIDEO SERVER",
    description:
      "A concurrent HTTP/1.1 server in C — persistent connections, video streaming, and IPv4/IPv6 networking, with stateless JWT auth via HMAC signing. Built for Virginia Tech CS3214.",
    stack: ["C", "LINUX_KERNEL", "JWT"],
    href: "https://github.com/ritulrashi/Personal-Server",
    linkLabel: "VIEW_REPOSITORY",
  },
  {
    id: "insightops",
    tag: "RUNTIME: GO_ENV_V1",
    title: "INSIGHTOPS",
    description:
      "A Kubernetes-based observability stack (Prometheus, Loki, Helm) with a Go anomaly-detection service integrated with FastAPI for real-time failure classification and alerting.",
    stack: ["GO", "KUBERNETES", "FASTAPI"],
    href: "https://github.com/ishitagupta5/InsightOps",
    linkLabel: "VIEW_REPOSITORY",
    collabNote: "COLLAB // co-built with @ishitagupta5",
  },
  {
    id: "midas-core",
    tag: "LEDGER: FIN_0X07",
    title: "MIDAS CORE",
    description:
      "A distributed transaction platform — 7 Spring Boot microservices, Kafka, and PostgreSQL — with a double-entry ledger, automated reconciliation, and a centralized JWT/RBAC API gateway.",
    stack: ["SPRING_BOOT", "KAFKA", "POSTGRES"],
    href: "https://github.com/ritulrashi/Midas-Core",
    linkLabel: "VIEW_REPOSITORY",
  },
  {
    id: "upicrypto",
    tag: "CHAIN: EVM_POLYGON",
    title: "UPICRYPTO",
    description:
      "Decentralized payment infrastructure — 6 Solidity smart contracts on Ethereum and Polygon, EIP-712 typed-signature workflows, and 84 automated Hardhat tests.",
    stack: ["SOLIDITY", "HARDHAT", "BLOCKCHAIN"],
    href: "https://github.com/ritulrashi/UPICrypto",
    linkLabel: "VIEW_REPOSITORY",
  },
];
