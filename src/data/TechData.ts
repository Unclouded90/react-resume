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
        description: "Used extensively in full-stack development at Eufinity Solutions and in personal projects, focusing on type-safe backend and frontend applications.",
    },
    "C++": {
        id: "C++",
        title: "C++",
        level: "advanced",
        levelLabel: "Advanced",
        description: "Applied in a full-stack environment at Eufinity Solutions, including performance-critical modules and integration with existing systems.",
    },
    JavaScript: {
        id: "JavaScript",
        title: "JavaScript",
        level: "advanced",
        levelLabel: "Advanced",
        description: "Used professionally at Eufinity Solutions for backend services, APIs, and application logic.",
    },
    Java: {
        id: "Java",
        title: "Java",
        level: "intermediate",
        levelLabel: "Intermediate",
        description: "Applied in both professional work and personal projects for full-stack development; also used in certification-based learning.",
    },
    Python: {
        id: "Python",
        title: "Python",
        level: "intermediate",
        levelLabel: "Intermediate",
        description: "Used in academic work, certifications, and personal projects for scripting, data processing, and automation tasks.",
    },
    "C#": {
        id: "C#",
        title: "C#",
        level: "intermediate",
        levelLabel: "Intermediate",
        description: "Used in personal projects and certification exercises, primarily for object-oriented application development.",
    },
    "Node.js": {
        id: "Node.js",
        title: "Node.js",
        level: "advanced",
        levelLabel: "Advanced",
        description: "Used professionally at Eufinity Solutions with JavaScript to build backend services, APIs, and system integrations.",
    },
    NestJS: {
        id: "NestJS",
        title: "NestJS",
        level: "advanced",
        levelLabel: "Advanced",
        description: "Used in personal projects as the primary backend framework, applying modular architecture, dependency injection, and TypeScript best practices.",
    },
    Angular: {
        id: "Angular",
        title: "Angular",
        level: "intermediate",
        levelLabel: "Intermediate",
        description: "Used professionally for ERP frontends, building robust component-based UIs and working with reactive forms and stateful workflows.",
    },
    React: {
        id: "React",
        title: "React",
        level: "intermediate",
        levelLabel: "Intermediate",
        description: "Used for this portfolio and for SPA-oriented interfaces focused on reusable components, hooks, and clean UI composition.",
    },
    HTML: {
        id: "HTML",
        title: "HTML",
        level: "advanced",
        levelLabel: "Advanced",
        description: "Used professionally and in personal projects to structure modern responsive interfaces.",
    },
    CSS: {
        id: "TypeScript",
        title: "CSS",
        level: "advanced",
        levelLabel: "Advanced",
        description: "Used professionally and in personal projects to style responsive layouts, reusable UI components, and modern web interfaces."
    },
    TypeORM: {
        id: "TypeORM",
        title: "TypeORM",
        level: "advanced",
        levelLabel: "Advanced",
        description: "Primary ORM in personal NestJS projects, implementing entities, relations, migrations, and consistent schema design.",
    },
    "Sequelize.js": {
        id: "Sequelize.js",
        title: "Sequelize.js",
        level: "intermediate",
        levelLabel: "Intermediate",
        description: "Used professionally in Node.js ERP modules for relational modeling, query building, and structured data access.",
    },
    PostgreSQL: {
        id: "PostgreSQL",
        title: "PostgreSQL",
        level: "advanced",
        levelLabel: "Advanced",
        description: "Used for backend APIs and personal projects with experience in schema design, indexing, relationships, and advanced SQL queries.",
    },
    "MS SQL Server": {
        id: "MS SQL Server",
        title: "MS SQL Server",
        level: "advanced",
        levelLabel: "Advanced",
        description: "Used professionally for ERP data storage, reporting workflows, and complex SQL logic; also used in personal projects, certifications, and academic work.",
    },
    MongoDB: {
        id: "MongoDB",
        title: "MongoDB",
        level: "intermediate",
        levelLabel: "Intermediate",
        description: "Used professionally and in personal projects for document-based modeling, aggregation, and flexible schema design.",
    },
    Docker: {
        id: "Docker",
        title: "Docker",
        level: "intermediate",
        levelLabel: "Intermediate",
        description: "Used professionally and in personal projects to containerize applications, standardize development environments, and orchestrate services with Docker Compose.",
    },
    Git: {
        id: "Git",
        title: "Git",
        level: "advanced",
        levelLabel: "Advanced",
        description: "Used daily in professional team environments involving feature branches, pull requests, code reviews, and conflict resolution across GitHub and GitLab.",
    },
    ETL: {
        id: "ETL",
        title: "ETL",
        level: "intermediate",
        levelLabel: "Intermediate",
        description: "Professional experience designing and maintaining ETL pipelines for integrating, transforming, and synchronizing data between systems.",
    },
    "Technical Support": {
        id: "Technical Support",
        title: "Technical Support",
        level: "advanced",
        levelLabel: "Advanced",
        description: "Hands-on professional experience troubleshooting production issues, analyzing logs, and supporting clients in live environments at Eufinity Solutions.",
    },
};
