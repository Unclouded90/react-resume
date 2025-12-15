import type { ExperienceDetailsPanelProps } from "../components/ExperienceDetailsPanel";

import { K, type I18nKey } from "../i18n/keys";

export type Job = Omit<ExperienceDetailsPanelProps, "title" | "companyName" | "dates" | "description" | "bullets"> & {
    id: number;
    titleKey: I18nKey;
    companyNameKey: I18nKey;
    datesKey: I18nKey;
    descriptionKey: I18nKey;
    bulletKeys?: I18nKey[];
};

export const jobs: Job[] = [
    {
        id: 1,
        titleKey: K.jobs.eufinity.title,
        companyNameKey: K.jobs.eufinity.companyName,
        companyUrl: "https://www.eufinity.com/",
        datesKey: K.jobs.eufinity.dates,
        descriptionKey: K.jobs.eufinity.description,
        bulletKeys: [K.jobs.eufinity.b1, K.jobs.eufinity.b2, K.jobs.eufinity.b3, K.jobs.eufinity.b4],
        tech: [
            "TypeScript",
            "C++",
            "JavaScript",
            "Java",
            "Node.js",
            "Angular",
            "Sequelize.js",
            "PostgreSQL",
            "MS SQL Server",
            "MongoDB",
            "Git",
            "ETL",
            "Technical Support",
        ],
    },
];
