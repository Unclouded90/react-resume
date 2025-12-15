import { K, type I18nKey } from "../i18n/keys";

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

export type TechInfoData = {
    id: TechId;
    titleKey: I18nKey;
    level: ProficiencyLevel;
    descriptionKey: I18nKey;
};

export const techInfoById: Record<TechId, TechInfoData> = {
    TypeScript: {
        id: "TypeScript",
        titleKey: K.tech.typescript.title,
        level: "advanced",
        descriptionKey: K.tech.typescript.description,
    },
    "C++": {
        id: "C++",
        titleKey: K.tech.cplus.title,
        level: "advanced",
        descriptionKey: K.tech.cplus.description,
    },
    JavaScript: {
        id: "JavaScript",
        titleKey: K.tech.javascript.title,
        level: "advanced",
        descriptionKey: K.tech.javascript.description,
    },
    Java: {
        id: "Java",
        titleKey: K.tech.java.title,
        level: "intermediate",
        descriptionKey: K.tech.java.description,
    },
    Python: {
        id: "Python",
        titleKey: K.tech.python.title,
        level: "intermediate",
        descriptionKey: K.tech.python.description,
    },
    "C#": {
        id: "C#",
        titleKey: K.tech.csharp.title,
        level: "intermediate",
        descriptionKey: K.tech.csharp.description,
    },
    "Node.js": {
        id: "Node.js",
        titleKey: K.tech.node.title,
        level: "advanced",
        descriptionKey: K.tech.node.description,
    },
    NestJS: {
        id: "NestJS",
        titleKey: K.tech.nest.title,
        level: "advanced",
        descriptionKey: K.tech.nest.description,
    },
    Angular: {
        id: "Angular",
        titleKey: K.tech.angular.title,
        level: "intermediate",
        descriptionKey: K.tech.angular.description,
    },
    React: {
        id: "React",
        titleKey: K.tech.react.title,
        level: "intermediate",
        descriptionKey: K.tech.react.description,
    },
    HTML: {
        id: "HTML",
        titleKey: K.tech.html.title,
        level: "advanced",
        descriptionKey: K.tech.html.description,
    },
    CSS: {
        id: "CSS",
        titleKey: K.tech.css.title,
        level: "advanced",
        descriptionKey: K.tech.css.description,
    },
    TypeORM: {
        id: "TypeORM",
        titleKey: K.tech.typeorm.title,
        level: "advanced",
        descriptionKey: K.tech.typeorm.description,
    },
    "Sequelize.js": {
        id: "Sequelize.js",
        titleKey: K.tech.sequelize.title,
        level: "intermediate",
        descriptionKey: K.tech.sequelize.description,
    },
    PostgreSQL: {
        id: "PostgreSQL",
        titleKey: K.tech.postgresql.title,
        level: "advanced",
        descriptionKey: K.tech.postgresql.description,
    },
    "MS SQL Server": {
        id: "MS SQL Server",
        titleKey: K.tech.mssql.title,
        level: "advanced",
        descriptionKey: K.tech.mssql.description,
    },
    MongoDB: {
        id: "MongoDB",
        titleKey: K.tech.mongodb.title,
        level: "intermediate",
        descriptionKey: K.tech.mongodb.description,
    },
    Docker: {
        id: "Docker",
        titleKey: K.tech.docker.title,
        level: "intermediate",
        descriptionKey: K.tech.docker.description,
    },
    Git: {
        id: "Git",
        titleKey: K.tech.git.title,
        level: "advanced",
        descriptionKey: K.tech.git.description,
    },
    ETL: {
        id: "ETL",
        titleKey: K.tech.etl.title,
        level: "intermediate",
        descriptionKey: K.tech.etl.description,
    },
    "Technical Support": {
        id: "Technical Support",
        titleKey: K.tech.technicalsupport.title,
        level: "advanced",
        descriptionKey: K.tech.technicalsupport.description,
    },
};
