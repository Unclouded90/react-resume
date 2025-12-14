import type { CertificateDetailsPanelProps } from "../components/CertificateDetailsPanel";

export type Certificate = CertificateDetailsPanelProps & {
    id: number;
    featured?: boolean;
};

export const certificates: Certificate[] = [
    {
        id: 1,
        title: "IBM DevOps and Software Engineering Professional Certificate",
        subtitle: "Coursera · 2023",
        description:
            "Professional certification given by IBM, where I acquired skills related to DevOps in a software development environment using Agile and Scrum " +
            "methodologies. I was also trained in Cloud Native technologies, Shell Script automation, using platforms such as Github, developing applications " +
            "using Microservices, learning about Containers (Docker/Kubernetes/OpenShift) and Serverless technologies, as well as implementing automation, CI and CD tools.",
        tools: ["DevOps",
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
        title: "IBM Back-End Development Professional Certificate",
        subtitle: "Coursera · 2023",
        description:
            "Professional certification given by IBM, where I deepened my knowledge of Back-End development. I applied the techniques I obtained in the previous " +
            "certification (IBM DevOps and Software Engineering) and further developed my skills with tools such as SQL, Django, and also obtained training in " +
            "the area of Application Security and Monitoring.",
        tools: ["Back-End Development",
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
        title: "Spring Boot 3, Spring 6 & Hibernate for Beginners",
        subtitle: "Udemy · 2023",
        description:
            "Enhanced my Java expertise through comprehensive training in Spring Boot 3 and Spring Framework 6, covering Spring Core, Spring MVC, RESTful CRUD APIs, " +
            "Spring Security (with encrypted passwords), Hibernate/JPA CRUD and advanced mappings, Spring Data JPA/REST, Thymeleaf, and AOP. Developed several real-time " +
            "projects from scratch, including secure REST APIs, MVC CRUD applications, and full OpenAPI/Swagger documentation integrated with MySQL.",
        tools: ["Java",
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
        title: "Java Data Structures & Algorithms",
        subtitle: "Udemy · 2023",
        description: "Strengthened foundational problem-solving skills by learning how core data structures and algorithms work under the hood. This included analyzing time and " +
            "space complexity, implementing classical algorithms, and applying them in multiple coding challenges designed to improve logical reasoning.",
        tools: [
            "Java",
            "Data Structures",
            "Algorithms",
            "Big-O Complexity"],
    },
    {
        id: 5,
        title: "Complete C# Masterclass",
        subtitle: "Udemy · 2023",
        description: "Expanded my knowledge of C# and the .NET ecosystem through hands-on projects, acquiring practical experience in object-oriented programming, application " +
            "architecture, and UI development. The course also introduced game development workflows and desktop application design.",
        tools: [
            "C#",
            ".NET",
            "OOP",
            "ASP.NET",
            "WPF",
            "Unity3D"],
    },
    {
        id: 6,
        title: "Python for Everybody",
        subtitle: "Coursera · 2021",
        description: "Built a strong foundation in Python programming, covering everything from scripting fundamentals to working with real data. Gained experience with REST APIs, " +
            "data analysis techniques, and SQL integration, enabling me to work with end-to-end Python applications.",
        tools: [
            "Python",
            "REST APIs",
            "Data analysis",
            "OOP",
            "SQL",
            "ORM"],
    },
    {
        id: 7,
        title: "Machine Learning",
        subtitle: "Coursera · 2021",
        description: "Developed a working understanding of machine learning concepts using Python, exploring supervised and unsupervised learning, neural networks, and common AI " +
            "workflows. Gained practical experience training models, evaluating performance, and experimenting with modern ML techniques.",
        tools: [
            "Python",
            "Machine Learning (Supervised & Unsupervised)",
            "AI fundamentals",
            "Deep Learning",
            "ML algorithms",
            "ML workflows"],
    }
];
