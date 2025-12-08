// techData.ts
export type ProficiencyLevel = "basic" | "intermediate" | "advanced";

export type TechId =
    | "TypeScript"
    | "C++"
    | "JavaScript"
    | "Java"
    | "Python"
    | "C#"
    | "Node.js"
    | "NestJS"
    | "Angular"
    | "React"
    | "HTML"
    | "CSS"
    | "TypeORM"
    | "Sequelize.js"
    | "PostgreSQL"
    | "MS SQL Server"
    | "MongoDB"
    | "Docker"
    | "Git"
    | "ETL"
    | "Technical Support";

export type TechInfo = {
    id: TechId;
    title: string;
    level: ProficiencyLevel;
    levelLabel: string;
    description: string;
};

export const techInfoById: Record<TechId, TechInfo> = {
    TypeScript: {
        id: "TypeScript",
        title: "TypeScript",
        level: "advanced",
        levelLabel: "Advanced",
        description: "Preferred language for new projects, using strict typing, generics and clean API design.",
    },
    "C++": {
        id: "C++",
        title: "C++",
        level: "advanced",
        levelLabel: "Advanced",
        description: "Used in performance-sensitive and systems-style work, with focus on modern C++ features.",
    },
    JavaScript: {
        id: "JavaScript",
        title: "JavaScript",
        level: "advanced",
        levelLabel: "Advanced",
        description: "Daily driver for frontend work and scripting; comfortable with modern ES features and async patterns.",
    },
    Java: {
        id: "Java",
        title: "Java",
        level: "intermediate",
        levelLabel: "Intermediate",
        description: "Used for backend services and Spring-based applications, familiar with OOP and common libraries.",
    },
    Python: {
        id: "Python",
        title: "Python",
        level: "intermediate",
        levelLabel: "Intermediate",
        description: "Used for scripting, small APIs and learning ML/data concepts.",
    },
    "C#": {
        id: "C#",
        title: "C#",
        level: "intermediate",
        levelLabel: "Intermediate",
        description: "Used for WPF, Unity projects and small desktop tools.",
    },
    "Node.js": {
        id: "Node.js",
        title: "Node.js",
        level: "advanced",
        levelLabel: "Advanced",
        description: "Core runtime for backend services, APIs and integration work in production environments.",
    },
    NestJS: {
        id: "NestJS",
        title: "NestJS",
        level: "advanced",
        levelLabel: "Advanced",
        description: "Main framework for structured, modular backends with TypeORM, Swagger and strong conventions.",
    },
    Angular: {
        id: "Angular",
        title: "Angular",
        level: "intermediate",
        levelLabel: "Intermediate",
        description: "Used professionally for ERP frontends, complex forms and component-based UIs.",
    },
    React: {
        id: "React",
        title: "React",
        level: "intermediate",
        levelLabel: "Intermediate",
        description: "Used for this portfolio and SPA-style interfaces with hooks and reusable components.",
    },
    HTML: {
        id: "HTML",
        title: "HTML",
        level: "advanced",
        levelLabel: "Advanced",
        description: "Solid understanding of semantic HTML and structure for accessible UIs.",
    },
    CSS: {
        id: "TypeScript",
        title: "CSS",
        level: "advanced",
        levelLabel: "Advanced",
        description: ""
    },
    TypeORM: {
        id: "TypeORM",
        title: "TypeORM",
        level: "advanced",
        levelLabel: "Advanced",
        description: "Primary ORM in NestJS projects, using entities, relations and migrations in real projects.",
    },
    "Sequelize.js": {
        id: "Sequelize.js",
        title: "Sequelize.js",
        level: "intermediate",
        levelLabel: "Intermediate",
        description: "Used in Node.js ERP modules for relational modeling and data access.",
    },
    PostgreSQL: {
        id: "PostgreSQL",
        title: "PostgreSQL",
        level: "advanced",
        levelLabel: "Advanced",
        description: "Used for APIs and side projects, with experience in schema design and SQL querying.",
    },
    "MS SQL Server": {
        id: "MS SQL Server",
        title: "MS SQL Server",
        level: "advanced",
        levelLabel: "Advanced",
        description: "Used professionally for ERP data storage, reporting and complex joins.",
    },
    MongoDB: {
        id: "MongoDB",
        title: "MongoDB",
        level: "intermediate",
        levelLabel: "Intermediate",
        description: "Used for learning document databases and simple side projects.",
    },
    Docker: {
        id: "Docker",
        title: "Docker",
        level: "intermediate",
        levelLabel: "Intermediate",
        description: "Used to containerize services and run local stacks with Docker Compose.",
    },
    Git: {
        id: "Git",
        title: "Git",
        level: "advanced",
        levelLabel: "Advanced",
        description: "Daily use in collaborative workflows with branching, PRs and conflict resolution.",
    },
    ETL: {
        id: "ETL",
        title: "ETL",
        level: "intermediate",
        levelLabel: "Intermediate",
        description: "Experience designing and running extract/transform/load processes across different systems.",
    },
    "Technical Support": {
        id: "Technical Support",
        title: "Technical Support",
        level: "advanced",
        levelLabel: "Advanced",
        description: "Hands-on experience diagnosing issues, reading logs and helping clients in production environments.",
    },
};
