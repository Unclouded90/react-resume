import type { ProjectDetailsPanelProps } from "../components/ProjectDetailsPanel";

export type Project = ProjectDetailsPanelProps & {
    id: number;
    featured?: boolean;
};

export const projects: Project[] = [
    {
        id: 1,
        title: "NestJS API Template",
        subtitle: "API starter with auth, Swagger, TypeORM & Docker",
        description: "A production-ready NestJS API template that includes built-in authentication, OpenAPI (Swagger), TypeORM setup, rate limiting, and other common features." +
            " It was designed to help people start new projects quickly by focusing on actual business logic instead of boilerplate. Developed collaboratively with two teammates," +
            " this project represents a blend of our shared ideas, existing knowledge, and new skills acquired throughout the development process. It was an exciting team effort" +
            " and remains an ongoing project that we continue to refine and improve regularly.",
        extraDetails: [
            "Production-ready NestJS API template focused on reducing boilerplate so new services can start from a solid base instead of from scratch.",
            "Implements JWT-based authentication with support for access and refresh tokens, multi-session device tracking and protected/public routes via custom decorators.",
            "Uses a modular architecture with feature-based modules (Auth, User, Health, etc.) and a shared common layer for base classes, decorators, utilities and configuration.",
            "Provides BaseEntity and BaseService abstractions to standardize CRUD, soft deletes, pagination, filtering, sorting and lifecycle hooks across all domain modules.",
            "Integrates TypeORM with PostgreSQL, including a migrations setup and helper scripts to generate, run and revert schema migrations.",
            "Exposes OpenAPI (Swagger) documentation out of the box, driven by NestJS decorators on controllers and DTOs, available at the /api endpoint.",
            "Centralizes configuration via environment variables validated with Joi at startup, ensuring required values (DB, JWT, CORS, rate limiting) are present before the app boots.",
            "Includes rate limiting, CORS, global validation pipe and other cross-cutting middleware pre-configured for production-style hardening.",
            "Ships with a Jest-based testing setup, using jest-mock-extended and a custom createMockRepository utility to make TypeORM repository mocks type-safe and predictable.",
            "Supports both local development and VS Code Dev Containers with Docker, so the entire stack (API + database) can be brought up quickly in a reproducible environment.",
            "Documents how to add new feature modules using the Nest CLI, extending BaseService and wiring entities, DTOs, controllers and tests to follow the same conventions.",
            "Provides npm scripts for common tasks such as linting, formatting, running tests, building the app and managing migrations, keeping day-to-day workflows standardized."
        ],
        tech: ["TypeScript", "NestJS", "PostgreSQL", "TypeORM", "Docker"],
        featured: true,
    },
    {
        id: 2,
        title: "Developer Portfolio",
        subtitle: "React(Vite) + Typescript single-page CV",
        description: "Single-page developer portfolio built with React, TypeScript and Vite. It uses a modular grid layout with reusable panels, plus overlay dialogs for " +
            "detailed views, all styled with a custom and responsive design. This portfolio became one of the most interesting projects I have worked on, since I managed to " +
            "learn React, which was the primary goal when I decided to develop the website, as well as to complete an objective of mine of having my own domain with my CV.",
        extraDetails: [
            "Built as a single-page React application using TypeScript and Vite, with a fully modular component architecture.",
            "Main layout uses a reusable grid system where each panel is an isolated component with its own CSS.",
            "All overlays are managed through a centralized state machine using a discriminated union for active panels.",
            "Detail panels follow a shared layered-card design with consistent structure for headers, descriptions and tech sections.",
            "The Projects section is data-driven, rendered through a responsive CSS grid (3×3 desktop, 2 or 1 column on smaller screens).",
            "Hover animations and lift effects are handcrafted with CSS transitions to maintain full stylistic control.",
            "Background blur and scale effects create depth when a modal is open.",
            "Responsive layout adapts naturally via CSS Grid and Flexbox.",
            "Architecture supports future additions such as theme switching and language toggling in the header."
        ],
        tech: ["TypeScript", "React", "HTML", "CSS", "Git"],
        githubUrl: "https://github.com/Unclouded90/react-resume",
        featured: true,
    },
    {
        id: 3,
        title: "Employee DB Manager",
        subtitle: "Java Spring boot CRUD app for managing employees",
        description: "Created a web application to manage employee records as a hands-on exercise to learn CRUD workflows, API creation, database integration, " +
            "and basic UI development. The project strengthened my understanding of how data flows between the frontend, backend, and database layer.",
        tech: ["Java", "MS SQL Server"],
        featured: true,
    },
    {
        id: 4,
        title: 'Event Ticketing Web App',
        subtitle: 'Python platform for managing event ticket sales',
        description: "Developed a full-stack event booking platform to explore backend development with Python frameworks and working with NoSQL databases." +
            "This project helped me understand user flows, data modeling, and how to build APIs and views that interact with real application data.",
        tech: ["Python", "MongoDB"],
    },
    {
        id: 5,
        title: "Currency Converter",
        subtitle: "WPF App for live rates conversion",
        description: "Built a WPF application that performs real-time currency conversion as a way to learn API consumption, data binding, and desktop UI development." +
            " The project introduced concepts such as handling external HTTP requests, updating UI elements dynamically, and storing data with MS SQL Server.",
        tech: ["C#", "MS SQL Server"],
    },
    {
        id: 6,
        title: "Tic-Tac-Toe Game",
        subtitle: "WPF game of Tic Tac Toe",
        description: "Created a Tic-Tac-Toe game in WPF to practice building desktop UI applications and implementing simple game logic. It helped me understand" +
            " state management, UI updates, and creating user-friendly interactive components.",
        tech: ["C#"],
    },
    {
        id: 7,
        title: "Pong",
        subtitle: "2D local-multiplayer Pong game",
        description: "Created a 2D Pong game in Unity as an introduction to game development fundamentals. The project taught me the basics of physics simulation," +
            " input handling, collision detection, and building simple interactive gameplay loops.",
        tech: ["C#"],
    },
    {
        id: 8,
        title: "Zig Zag Game",
        subtitle: "3D game using Unity3D",
        description: "Developed a 3D Zig Zag runner game to learn how to work with Unity’s 3D environment, object spawning, score tracking, and camera control." +
            " This project strengthened my understanding of game mechanics and real-time scene interactions.",
        tech: ["C#"],
    },
    {
        id: 9,
        title: "Fruit Ninja Game",
        subtitle: "Unity game for slicing fruit while dodging the bombs",
        description: "Built a Fruit Ninja-style game to practice gesture-based gameplay, random object generation, and game state management. It served as a" +
            " learning experience in creating dynamic interactions, animations, and challenge escalation.",
        tech: ["C#"],
    },
];
