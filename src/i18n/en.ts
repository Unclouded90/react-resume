import type { I18nKey } from "./keys";

export const en: Record<I18nKey, string> = {
    "ui.lightMode": "Light mode",
    "ui.darkMode": "Dark mode",
    "ui.close": "Close",
    "ui.description": "Description",
    "ui.viewPublication": "View publication",
    "ui.downloadResume": "Download resume",
    "ui.viewAll": "View All",
    "ui.experience": "Experience",
    "ui.personalProjects": "Personal Projects",
    "ui.certificates": "Certificates",
    "ui.levels.basic": "Basic",
    "ui.levels.intermediate": "Intermediate",
    "ui.levels.advanced": "Advanced",

    "about.title": "About me",
    "about.tagline": "Full Stack Developer · Enjoys solving problems",
    "about.languagesLabel": "Languages:",
    "about.languagesValue": "Portuguese (Native), English (Professional)",
    "about.whoTitle": "Who am I?",
    "about.whoP1": "Hello, my name is Mauro. I'm currently working as a Full Stack Developer, a role I truly enjoy. Since I was young, I've " +
        "loved challenges, puzzles, and logic-based problems, so it often feels like I'm turning a hobby into a career.",
    "about.whoP2": "I'm very enthusiastic about everything I do and constantly strive to improve myself. This website, for example, exists " +
        "because I wanted to learn React — and here we are.",
    "about.whoP3": "I consider myself a friendly, easy-going person and a loyal friend. In the workplace, I value being part of a team with " +
        "the same spirit — one that grows together, supports each other, and motivates everyone to be the best version of themselves.",
    "about.hobbiesTitle": "Hobbies",
    "about.hobbies": "When I'm not working, I'm usually learning something new, just like when I decided I wanted to learn " +
        "React. I also game a lot, love listening to music, and enjoy watching series and movies with my wife.",
    "about.more": "If you'd like to know more, feel free to reach out by email or connect with me on LinkedIn — I would be happy to talk.",

    "exp.roleOverview": "Role overview",
    "exp.tech": "Tech",

    "jobs.eufinity.title": "Full Stack Developer",
    "jobs.eufinity.companyName": "Eufinity Solutions",
    "jobs.eufinity.dates": "April 2024 - Present",
    "jobs.eufinity.description":
        "Currently working as a Full Stack Developer on Eufinity Solutions, a company focused on developing end-to-end" +
        " retail and ERP (Enterprise Resource Planning) software solutions targeting medium to large-scale retail operations.",
    "jobs.eufinity.b1": "Full-stack development of ERP systems, responsible for both back-end and front-end features",
    "jobs.eufinity.b2": "Implementing SAF-T (PT) solutions in full compliance with Portuguese fiscal legislation",
    "jobs.eufinity.b3": "Integrating our software with automatic payment terminals across multiple countries",
    "jobs.eufinity.b4": "Providing technical support, addressing and resolving client incidents and feature requests",

    "educations.title": "Education",
    "educations.degreeTitle": "Bachelor's Degree in Biomedical Engineering",
    "educations.dates": "Oct 2020 – Jul 2023",
    "educations.highlights": "Highlights",
    "educations.description": "Undergraduate degree focused on the intersection of engineering, health and technology, " + 
        "combining strong foundations in mathematics, physics and programming.",
    "educations.projectLabel": "Undergraduate Project (Graded 19 out of 20) - ",
    "educations.projectValue": "Development of two neural networks based on semantic segmentation to automatically detect landmarks" + 
        " in X-ray images, using a dataset of 200 encephalogram images: the UNet architecture and the FPN architecture. The study " + 
        "also aimed at a direct application in a medical context to diagnose the models and their predictions, with the development " + 
        "of an automatic metric analysis, based on the encephalograms in the dataset, on the type of Mandibular Occlusion of the patients, " + 
        "thus allowing a quick and precise response in the identification and classification of a diagnosis.",
    "educations.hightlightDescription": "Published my Undergraduate Project on Springer",

    "projects.title": "Personal Projects",
    "projects.readMore": "Read more...",
    "projects.hideDetails": "Hide details...",

    "projects.nestjs.title": "NestJS API Template",
    "projects.nestjs.subtitle": "API starter with auth, Swagger, TypeORM & Docker",
    "projects.nestjs.description": "A production-ready NestJS API template that includes built-in authentication, OpenAPI (Swagger), TypeORM setup, rate limiting, and other common features." +
        " It was designed to help people start new projects quickly by focusing on actual business logic instead of boilerplate. Developed collaboratively with two teammates," +
        " this project represents a blend of our shared ideas, existing knowledge, and new skills acquired throughout the development process. It was an exciting team effort" +
        " and remains an ongoing project that we continue to refine and improve regularly.",
    "projects.nestjs.extra1": "Production-ready NestJS API template focused on reducing boilerplate so new services can start from a solid base instead of from scratch.",
    "projects.nestjs.extra2": "Implements JWT-based authentication with support for access and refresh tokens, multi-session device tracking and protected/public routes via custom decorators.",
    "projects.nestjs.extra3": "Uses a modular architecture with feature-based modules (Auth, User, Health, etc.) and a shared common layer for base classes, decorators, utilities and configuration.",
    "projects.nestjs.extra4": "Provides BaseEntity and BaseService abstractions to standardize CRUD, soft deletes, pagination, filtering, sorting and lifecycle hooks across all domain modules.",
    "projects.nestjs.extra5": "Integrates TypeORM with PostgreSQL, including a migrations setup and helper scripts to generate, run and revert schema migrations.",
    "projects.nestjs.extra6": "Exposes OpenAPI (Swagger) documentation out of the box, driven by NestJS decorators on controllers and DTOs, available at the /api endpoint.",
    "projects.nestjs.extra7": "Centralizes configuration via environment variables validated with Joi at startup, ensuring required values (DB, JWT, CORS, rate limiting) are present before the app boots.",
    "projects.nestjs.extra8": "Includes rate limiting, CORS, global validation pipe and other cross-cutting middleware pre-configured for production-style hardening.",
    "projects.nestjs.extra9": "Ships with a Jest-based testing setup, using jest-mock-extended and a custom createMockRepository utility to make TypeORM repository mocks type-safe and predictable.",
    "projects.nestjs.extra10": "Supports both local development and VS Code Dev Containers with Docker, so the entire stack (API + database) can be brought up quickly in a reproducible environment.",
    "projects.nestjs.extra11": "Documents how to add new feature modules using the Nest CLI, extending BaseService and wiring entities, DTOs, controllers and tests to follow the same conventions.",
    "projects.nestjs.extra12": "Provides npm scripts for common tasks such as linting, formatting, running tests, building the app and managing migrations, keeping day-to-day workflows standardized.",

    "projects.portfolio.title": "Developer Portfolio",
    "projects.portfolio.subtitle": "React(Vite) + Typescript single-page CV",
    "projects.portfolio.description": "Single-page developer portfolio built with React, TypeScript and Vite. It uses a modular grid layout with reusable panels, plus overlay dialogs for " +
        "detailed views, all styled with a custom and responsive design. This portfolio became one of the most interesting projects I have worked on, since I managed to " +
        "learn React, which was the primary goal when I decided to develop the website, as well as to complete an objective of mine of having my own domain with my CV.",
    "projects.portfolio.extra1": "Built as a single-page React application using TypeScript and Vite, with a fully modular component architecture.",
    "projects.portfolio.extra2": "Main layout uses a reusable grid system where each panel is an isolated component with its own CSS.",
    "projects.portfolio.extra3": "All overlays are managed through a centralized state machine using a discriminated union for active panels.",
    "projects.portfolio.extra4": "Detail panels follow a shared layered-card design with consistent structure for headers, descriptions and tech sections.",
    "projects.portfolio.extra5": "The Projects section is data-driven, rendered through a responsive CSS grid (3×3 desktop, 2 or 1 column on smaller screens).",
    "projects.portfolio.extra6": "Hover animations and lift effects are handcrafted with CSS transitions to maintain full stylistic control.",
    "projects.portfolio.extra7": "Background blur and scale effects create depth when a modal is open.",
    "projects.portfolio.extra8": "Responsive layout adapts naturally via CSS Grid and Flexbox.",
    "projects.portfolio.extra9": "Architecture supports future additions such as theme switching and language toggling in the header.",

    "projects.employee.title": "Employee DB Manager",
    "projects.employee.subtitle": "Java Spring boot CRUD app for managing employees",
    "projects.employee.description": "Created a web application to manage employee records as a hands-on exercise to learn CRUD workflows, API creation, database integration, " +
        "and basic UI development. The project strengthened my understanding of how data flows between the frontend, backend, and database layer.",

    "projects.ticket.title": "Event Ticketing Web App",
    "projects.ticket.subtitle": "Python platform for managing event ticket sales",
    "projects.ticket.description": "Developed a full-stack event booking platform to explore backend development with Python frameworks and working with NoSQL databases." +
        "This project helped me understand user flows, data modeling, and how to build APIs and views that interact with real application data.",

    "projects.currency.title": "Currency Converter",
    "projects.currency.subtitle": "WPF App for live rates conversion",
    "projects.currency.description": "Built a WPF application that performs real-time currency conversion as a way to learn API consumption, data binding, and desktop UI development." +
        " The project introduced concepts such as handling external HTTP requests, updating UI elements dynamically, and storing data with MS SQL Server.",

    "projects.tictactoe.title": "Tic-Tac-Toe Game",
    "projects.tictactoe.subtitle": "WPF game of Tic Tac Toe",
    "projects.tictactoe.description": "Created a Tic-Tac-Toe game in WPF to practice building desktop UI applications and implementing simple game logic. It helped me understand" +
        " state management, UI updates, and creating user-friendly interactive components.",

    "projects.pong.title": "Pong",
    "projects.pong.subtitle": "2D local-multiplayer Pong game",
    "projects.pong.description": "Created a 2D Pong game in Unity as an introduction to game development fundamentals. The project taught me the basics of physics simulation," +
        " input handling, collision detection, and building simple interactive gameplay loops.",

    "projects.zigzag.title": "Zig Zag Game",
    "projects.zigzag.subtitle": "3D game using Unity3D",
    "projects.zigzag.description": "Developed a 3D Zig Zag runner game to learn how to work with Unity’s 3D environment, object spawning, score tracking, and camera control." +
        " This project strengthened my understanding of game mechanics and real-time scene interactions.",

    "projects.fruit.title": "Fruit Ninja Game",
    "projects.fruit.subtitle": "Unity game for slicing fruit while dodging the bombs",
    "projects.fruit.description": "Built a Fruit Ninja-style game to practice gesture-based gameplay, random object generation, and game state management. It served as a" +
        " learning experience in creating dynamic interactions, animations, and challenge escalation.",

    "certificates.title": "Certificates",

    "achievements.title": "Achievements",
    "achievements.springer.title": "Detection of Landmarks in X-Ray Images through Deep Learning",
    "achievements.springer.subtitle": "Published in Springer",
    "achievements.springer.linkLabel": "View publication",

    "tech.title": "Tech Stack",
    "tech.languages": "Languages",
    "tech.databases": "Databases",
    "tech.otherSkills": "Other Skills",

    "tech.typescript.title": "TypeScript",
    "tech.typescript.description": "Used extensively in full-stack development at Eufinity Solutions and in personal projects, focusing on type-safe backend and frontend applications.",
    "tech.cplus.title": "C++",
    "tech.cplus.description": "Applied in a full-stack environment at Eufinity Solutions, including performance-critical modules and integration with existing systems.",
    "tech.javascript.title": "JavaScript",
    "tech.javascript.description": "Used professionally at Eufinity Solutions for backend services, APIs, and application logic.",
    "tech.java.title": "Java",
    "tech.java.description": "Applied in both professional work and personal projects for full-stack development; also used in certification-based learning.",
    "tech.python.title": "Python",
    "tech.python.description": "Used in academic work, certifications, and personal projects for scripting, data processing, and automation tasks.",
    "tech.csharp.title": "C#",
    "tech.csharp.description": "Used in personal projects and certification exercises, primarily for object-oriented application development.",
    "tech.node.title": "Node.js",
    "tech.node.description": "Used professionally at Eufinity Solutions with JavaScript to build backend services, APIs, and system integrations.",
    "tech.nest.title": "NestJS",
    "tech.nest.description": "Used in personal projects as the primary backend framework, applying modular architecture, dependency injection, and TypeScript best practices.",
    "tech.angular.title": "Angular",
    "tech.angular.description": "Used professionally for ERP frontends, building robust component-based UIs and working with reactive forms and stateful workflows.",
    "tech.react.title": "React",
    "tech.react.description": "Used for this portfolio and for SPA-oriented interfaces focused on reusable components, hooks, and clean UI composition.",
    "tech.html.title": "HTML",
    "tech.html.description": "Used professionally and in personal projects to structure modern responsive interfaces.",
    "tech.css.title": "CSS",
    "tech.css.description": "Used professionally and in personal projects to style responsive layouts, reusable UI components, and modern web interfaces.",
    "tech.typeorm.title": "TypeORM",
    "tech.typeorm.description": "Primary ORM in personal NestJS projects, implementing entities, relations, migrations, and consistent schema design.",
    "tech.sequelize.title": "Sequelize.js",
    "tech.sequelize.description": "Used professionally in Node.js ERP modules for relational modeling, query building, and structured data access.",
    "tech.postgresql.title": "PostgreSQL",
    "tech.postgresql.description": "Used for backend APIs and personal projects with experience in schema design, indexing, relationships, and advanced SQL queries.",
    "tech.mssql.title": "MS SQL Server",
    "tech.mssql.description": "Used professionally for ERP data storage, reporting workflows, and complex SQL logic; also used in personal projects, certifications, and academic work.",
    "tech.mongodb.title": "Mongo DB",
    "tech.mongodb.description": "Used professionally and in personal projects for document-based modeling, aggregation, and flexible schema design.",
    "tech.docker.title": "Docker",
    "tech.docker.description": "Used professionally and in personal projects to containerize applications, standardize development environments, and orchestrate services with Docker Compose.",
    "tech.git.title": "Git",
    "tech.git.description": "Used daily in professional team and personal environments involving feature branches, pull requests, code reviews, and conflict resolution across GitHub and GitLab.",
    "tech.etl.title": "ETL",
    "tech.etl.description": "Professional experience designing and maintaining ETL pipelines for integrating, transforming, and synchronizing data between systems.",
    "tech.technicalsupport.title": "Technical Support",
    "tech.technicalsupport.description": "Hands-on professional experience troubleshooting production issues, analyzing logs, and supporting clients in live environments at Eufinity Solutions.",
};
