import type { I18nKey } from "../i18n/keys";

export type ProjectData = {
    id: number;
    titleKey: I18nKey;
    subtitleKey?: I18nKey;
    descriptionKey?: I18nKey;
    tech?: string[];
    githubUrl?: string;
    extraDetailsKey?: I18nKey[];
    featured?: boolean;
};

export const projects: ProjectData[] = [
    {
        id: 1,
        titleKey: "projects.nestjs.title",
        subtitleKey: "projects.nestjs.subtitle",
        descriptionKey: "projects.nestjs.description",
        extraDetailsKey: [
            "projects.nestjs.extra1",
            "projects.nestjs.extra2",
            "projects.nestjs.extra3",
            "projects.nestjs.extra4",
            "projects.nestjs.extra5",
            "projects.nestjs.extra6",
            "projects.nestjs.extra7",
            "projects.nestjs.extra8",
            "projects.nestjs.extra9",
            "projects.nestjs.extra10",
            "projects.nestjs.extra11",
            "projects.nestjs.extra12",
        ],
        tech: ["TypeScript", "NestJS", "PostgreSQL", "TypeORM", "Docker"],
        featured: true,
    },
    {
        id: 2,
        titleKey: "projects.portfolio.title",
        subtitleKey: "projects.portfolio.subtitle",
        descriptionKey: "projects.portfolio.description",
        extraDetailsKey: [
            "projects.portfolio.extra1",
            "projects.portfolio.extra2",
            "projects.portfolio.extra3",
            "projects.portfolio.extra4",
            "projects.portfolio.extra5",
            "projects.portfolio.extra6",
            "projects.portfolio.extra7",
            "projects.portfolio.extra8",
            "projects.portfolio.extra9",
        ],
        tech: ["TypeScript", "React", "HTML", "CSS", "Git"],
        githubUrl: "https://github.com/Unclouded90/react-resume",
        featured: true,
    },
    {
        id: 3,
        titleKey: "projects.employee.title",
        subtitleKey: "projects.employee.subtitle",
        descriptionKey: "projects.employee.description",
        tech: ["Java", "MS SQL Server"],
        featured: true,
    },
    {
        id: 4,
        titleKey: "projects.ticket.title",
        subtitleKey: "projects.ticket.subtitle",
        descriptionKey: "projects.ticket.description",
        tech: ["Python", "MongoDB"],
    },
    {
        id: 5,
        titleKey: "projects.currency.title",
        subtitleKey: "projects.currency.subtitle",
        descriptionKey: "projects.currency.description",
        tech: ["C#", "MS SQL Server"],
    },
    {
        id: 6,
        titleKey: "projects.tictactoe.title",
        subtitleKey: "projects.tictactoe.subtitle",
        descriptionKey: "projects.tictactoe.description",
        tech: ["C#"],
    },
    {
        id: 7,
        titleKey: "projects.pong.title",
        subtitleKey: "projects.pong.subtitle",
        descriptionKey: "projects.pong.description",
        tech: ["C#"],
    },
    {
        id: 8,
        titleKey: "projects.zigzag.title",
        subtitleKey: "projects.zigzag.subtitle",
        descriptionKey: "projects.zigzag.description",
        tech: ["C#"],
    },
    {
        id: 9,
        titleKey: "projects.fruit.title",
        subtitleKey: "projects.fruit.subtitle",
        descriptionKey: "projects.fruit.description",
        tech: ["C#"],
    },
];
