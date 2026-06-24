export const profile = {
  name: "Ritul Rashi",
  heroLead: "Hi, Ritul here.",
  heroBody:
    "CS student at Virginia Tech with an interest in backend engineering, distributed systems, and fintech. I enjoy building reliable software and understanding how systems work from the ground up.",
  email: "rashiritul6@gmail.com",
  github: "https://github.com/ritulrashi",
  linkedin: "https://linkedin.com/in/ritulrashi/",
  resumeHref: "/ritul-rashi-resume.pdf",
};

export const skills = [
  "Java",
  "Spring Boot",
  "Kafka",
  "PostgreSQL",
  "AWS",
  "Kubernetes",
  "Python",
  "C++",
  "React",
  "Docker",
];

export const education = {
  org: "VIRGINIA TECH",
  degree: "B.S. Computer Science",
  period: "EXPECTED AUGUST 2026",
  coursework: [
    "Software Design and Data Structures",
    "Computer Organization",
    "Discrete Mathematics",
    "Statistics",
    "Applied Combinatorics",
    "Agile/Scrum Development",
    "Mobile App Development (Swift)",
    "Computer Systems",
  ],
  clubs: ["Association for Women in Computing at Virginia Tech"],
  certifications: [
    { name: "Options 101 Course", issuer: "Akuna Capital", date: "AUG 2025" },
    { name: "AWS Solutions Architect", issuer: "AWS", date: "AUG 2023" },
    { name: "Machine Learning", issuer: "IIT Allahabad", date: "AUG 2024" },
  ],
};

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
    id: "vt",
    org: "VIRGINIA TECH",
    role: "Research & Backend Engineer",
    period: "JAN 2026 - PRESENT",
    current: true,
    bullets: [
      "Designed a PostgreSQL backed sandbox supporting concurrent query execution and real time grading for 170+ users",
      "Implemented JWT, bcrypt, and CAS authentication enforcing strict RBAC policies across roles",
      "Built automated Postman API validation suites ensuring payload integrity and access control correctness",
    ],
  },
  {
    id: "psn",
    org: "PSN MUSICALS",
    role: "Full-Stack Developer",
    period: "JUN 2024 - AUG 2024",
    bullets: [
      "Architected a multi-service platform on AWS (EC2, S3, Lambda) with containerized, scalable APIs",
      "Optimized SQL queries and request handling, reducing latency by 25% under concurrent load",
      "Implemented OAuth2 and RBAC, enforcing least privilege access across distributed components",
    ],
  },
  {
    id: "duofits",
    org: "DUOFITS",
    role: "Software Developer Intern",
    period: "MAY 2023 - AUG 2023",
    bullets: [
      "Optimized SQL pipelines and indexing strategies, improving query performance under production load",
      "Built automated reporting systems generating real time KPIs for internal stakeholders",
      "Partnered with engineering and QA teams to design and validate testing workflows",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  points: string[];
  stack: string[];
  href: string;
  collabNote?: string;
};

export const projects: Project[] = [
  {
    id: "personal-server",
    title: "Personal-Server",
    points: [
      "A production-grade HTTP/1.1 web server built from scratch in C.",
      "Supports multi-threading, JWT authentication, video streaming, and IPv6.",
      "Built for CS3214 at Virginia Tech with a security-hardened request pipeline.",
    ],
    stack: ["C", "pthreads", "JWT", "IPv6"],
    href: "https://github.com/ritulrashi/Personal-Server",
  },
  {
    id: "midas-core",
    title: "Midas-Core",
    points: [
      "A production-grade distributed transaction processing system.",
      "Built with Java 17, Spring Boot 3, Apache Kafka, and PostgreSQL.",
      "Implements a double-entry ledger with automated reconciliation.",
    ],
    stack: ["Java", "Spring Boot", "Kafka", "PostgreSQL"],
    href: "https://github.com/ritulrashi/Midas-Core",
  },
  {
    id: "insightops",
    title: "InsightOps",
    points: [
      "A Kubernetes copilot that explains cluster failures in plain English.",
      "Reads cluster logs and metrics to spot patterns like OOM crashes or missing GPUs.",
      "Sends a chat or CLI alert once it identifies the issue.",
    ],
    stack: ["Python", "Kubernetes", "Helm"],
    href: "https://github.com/ishitagupta5/InsightOps",
    collabNote: "Co-built with @ishitagupta5",
  },
  {
    id: "upicrypto",
    title: "UPICrypto",
    points: [
      "Decentralized cross-border payment infrastructure on Ethereum and Polygon.",
      "Includes an ERC-20 stablecoin, ZK proof privacy, and an L1/L2 bridge.",
      "Ships with a Go backend API, a React dashboard, and a React Native app.",
    ],
    stack: ["Go", "TypeScript", "React", "Solidity"],
    href: "https://github.com/ritulrashi/UPICrypto",
  },
];
