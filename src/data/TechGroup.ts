import type { TechId } from "./TechData";
import { K, type I18nKey } from "../i18n/keys";

export type TechGroupId =
    | "languages"
    | "backend"
    | "frontend"
    | "database"
    | "orms"
    | "devops";

export type TechGroup = {
    id: TechGroupId;
    titleKey: I18nKey;
    techIds: TechId[];
    searchAliases: readonly string[];
};

export const techGroups: readonly TechGroup[] = [
    {
        id: "languages",
        titleKey: K.tech.languages,
        techIds: ["TypeScript", "C++", "JavaScript", "Java", "Python", "C#"],
        searchAliases: ["language", "languages"],
    },
    {
        id: "backend",
        titleKey: K.tech.backend,
        techIds: ["Node.js", "NestJS"],
        searchAliases: ["backend"],
    },
    {
        id: "frontend",
        titleKey: K.tech.frontend,
        techIds: ["React", "Angular", "CSS", "HTML"],
        searchAliases: ["frontend", "ui"],
    },
    {
        id: "database",
        titleKey: K.tech.databases,
        techIds: ["PostgreSQL", "MS SQL Server", "MongoDB"],
        searchAliases: ["database", "databases", "db", "sql"],
    },
    {
        id: "orms",
        titleKey: K.tech.orms,
        techIds: ["TypeORM", "Sequelize.js"],
        searchAliases: ["orms", "orm"],
    },
    {
        id: "devops",
        titleKey: K.tech.devops,
        techIds: ["Docker", "Git"],
        searchAliases: ["devops"],
    },
];
