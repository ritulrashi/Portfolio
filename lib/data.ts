export const profile = {
  name: "Ritul Rashi",
  heroLead: "Hi, Ritul here.",
  heroBody:
    "CS graduate from Virginia Tech with an interest in backend engineering, distributed systems, and fintech. I enjoy building reliable software and understanding how systems work from the ground up.",
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
  period: "GRADUATED MAY 2026",
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
    role: "Software Developer",
    period: "JAN 2025 - PRESENT",
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
  description: string;
  stack: string[];
  href: string;
  collabNote?: string;
};

export const projects: Project[] = [
  {
    id: "personal-server",
    title: "HTTP Server from Scratch",
    description:
      "I wanted to understand what frameworks like Spring Boot are actually doing underneath, so I built an HTTP/1.1 server from scratch in C instead of relying on one. It gave me a deeper understanding of TCP connections, multithreading, HTTP request parsing, and how web servers work behind the scenes. Built for Virginia Tech CS3214.",
    stack: ["C", "pthreads", "JWT", "Linux"],
    href: "https://github.com/ritulrashi/Personal-Server",
  },
  {
    id: "midas-core",
    title: "Distributed Event Pipeline",
    description:
      "Built a Kafka based event pipeline using Spring Boot microservices, PostgreSQL, and Docker. I focused on designing services that communicate reliably and remain scalable as the system grows. Building this taught me how distributed systems handle communication and why fault tolerance and decoupling matter from the beginning instead of being added later.",
    stack: ["Spring Boot", "Kafka", "PostgreSQL", "Docker"],
    href: "https://github.com/ritulrashi/Midas-Core",
  },
  {
    id: "insightops",
    title: "InsightOps",
    description:
      "Co-built a Kubernetes based observability stack with Prometheus, Loki, and Helm. I wrote a Go anomaly detection service integrated with FastAPI to classify failures and trigger alerts in real time, which taught me how to reason about a system's health from the outside instead of just its application logs.",
    stack: ["Go", "Kubernetes", "FastAPI"],
    href: "https://github.com/ishitagupta5/InsightOps",
    collabNote: "Co-built with @ishitagupta5",
  },
  {
    id: "upicrypto",
    title: "UPICrypto",
    description:
      "Developed 6 Solidity smart contracts on Ethereum and Polygon for decentralized payment processing, using EIP-712 typed signature workflows and gas optimized contract logic. I wrote 84 automated Hardhat tests to push on the edge cases, since a financial contract only earns trust once it has been tested as hard as it has been written.",
    stack: ["Solidity", "Hardhat", "Blockchain"],
    href: "https://github.com/ritulrashi/UPICrypto",
  },
];
