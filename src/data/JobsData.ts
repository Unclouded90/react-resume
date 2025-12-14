import type { ExperienceDetailsPanelProps } from "../components/ExperienceDetailsPanel";

export type Job = ExperienceDetailsPanelProps & { id: number };

export const jobs: Job[] = [
    {
        id: 1,
        title: "Full Stack Developer",
        companyName: "Eufinity Solutions",
        companyUrl: "https://www.eufinity.com/",
        dates: "April 2024 - Present",
        description:
            "Currently working as a Full Stack Developer on Eufinity Solutions," +
            " a company focused on developing end-to-end retail and ERP (Enterprise Resource Planning) software solutions" +
            " targeting medium to large-scale retail operations.",
        bullets: [
            "Full-stack development of ERP systems, responsible for both back-end and front-end features",
            "Implementing SAF-T (PT) solutions in full compliance with Portuguese fiscal legislation",
            "Integrating our software with automatic payment terminals across multiple countries",
            "Providing technical support, addressing and resolving client incidents and feature requests",
        ],
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
