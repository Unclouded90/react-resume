import { type I18nKey } from "../i18n/keys";

export type CertificateData = {
    id: number;
    titleKey: string;
    subtitleKey?: string;
    descriptionKey?: I18nKey;
    toolKeys?: string[];
    featured?: boolean;
};

export const certificates: CertificateData[] = [
    {
        id: 1,
        titleKey: "IBM DevOps and Software Engineering Professional Certificate",
        subtitleKey: "Coursera · 2023",
        descriptionKey: "certificates.devops.description",
        toolKeys: ["DevOps",
            "Agile & Scrum",
            "Cloud Native",
            "Shell Scripting",
            "GitHub",
            "Microservices",
            "Docker",
            "Kubernetes",
            "OpenShift",
            "Serverless",
            "CI/CD",
            "Automation"],
        featured: true,
    },
    {
        id: 2,
        titleKey: "IBM Back-End Development Professional Certificate",
        subtitleKey: "Coursera · 2023",
        descriptionKey: "certificates.backend.description",
        toolKeys: ["Back-End Development",
            "SQL",
            "Django",
            "Python",
            "REST APIs",
            "Application Security",
            "Monitoring & Observability"],
        featured: true,
    },
    {
        id: 3,
        titleKey: "Spring Boot 3, Spring 6 & Hibernate for Beginners",
        subtitleKey: "Udemy · 2023",
        descriptionKey: "certificates.spring.description",
        toolKeys: ["Java",
            "Spring Boot 3",
            "Spring Framework 6",
            "Spring Core",
            "Spring MVC",
            "REST API",
            "Spring Security",
            "Hibernate",
            "JPA",
            "Spring Data JPA",
            "Spring Data REST",
            "Thymeleaf",
            "AOP (Aspect-Oriented Programming)",
            "OpenAPI",
            "Swagger",
            "Maven",
            "MySQL"],
        featured: true,
    },
    {
        id: 4,
        titleKey: "Java Data Structures & Algorithms",
        subtitleKey: "Udemy · 2023",
        descriptionKey: "certificates.data.description",
        toolKeys: [
            "Java",
            "Data Structures",
            "Algorithms",
            "Big-O Complexity"],
    },
    {
        id: 5,
        titleKey: "Complete C# Masterclass",
        subtitleKey: "Udemy · 2023",
        descriptionKey: "certificates.c.description",
        toolKeys: [
            "C#",
            ".NET",
            "OOP",
            "ASP.NET",
            "WPF",
            "Unity3D"],
    },
    {
        id: 6,
        titleKey: "Python for Everybody",
        subtitleKey: "Coursera · 2021",
        descriptionKey: "certificates.python.description",
        toolKeys: [
            "Python",
            "REST APIs",
            "Data analysis",
            "OOP",
            "SQL",
            "ORM"],
    },
    {
        id: 7,
        titleKey: "Machine Learning",
        subtitleKey: "Coursera · 2021",
        descriptionKey: "certificates.machine.description",
        toolKeys: [
            "Python",
            "Machine Learning (Supervised & Unsupervised)",
            "AI fundamentals",
            "Deep Learning",
            "ML algorithms",
            "ML workflows"],
    }
];
