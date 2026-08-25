# Developer Portfolio

Personal developer portfolio and online CV built with **React**, **TypeScript**, and **Vite**.

The project was created both as a way to build my own online presence and as an opportunity to learn and gain hands-on experience with React.

## About the Project

The website is a single-page application that presents my professional background, including:

- Work experience
- Education
- Technical skills
- Projects
- Certifications
- Achievements
- Languages
- Personal interests and information

The interface is built around a modular grid layout, with reusable panels and overlays providing additional information without navigating away from the main page.

The website is also available in both **English and Portuguese (PT-PT)**.

## Tech Stack

- React
- TypeScript
- Vite
- HTML
- CSS
- i18n

## Features

- Responsive single-page layout
- Modular React component architecture
- Reusable grid panels
- Detailed overlay views
- English and Portuguese language support
- Responsive design for desktop and mobile devices
- CSS transitions and hover effects
- Data-driven project and certification sections
- Centralized management of overlay states

## Project Structure

The application follows a component-based structure, keeping the different sections of the portfolio separated and reusable.

Each main section is represented by its own component, while shared functionality and data are kept separate from the presentation layer whenever possible.

This makes the portfolio easier to maintain and allows new projects, certifications, skills, or other information to be added without changing the overall page structure.

## Running Locally

Clone the repository:

```bash
git clone https://github.com/Unclouded90/react-resume.git
cd react-resume
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will then provide the local URL where the application is running.

## Production Build

Create a production build with:

```bash
npm run build
```

The generated production files will be available in the `dist` directory.

You can preview the production build locally with:

```bash
npm run preview
```

## Deployment

The portfolio is deployed using **Cloudflare Pages**.

Changes pushed to the production branch are automatically built and deployed through the Cloudflare deployment pipeline.

## Motivation

The main goal behind this project was to learn React by building something that I would actually use.

Rather than creating another small tutorial project, I decided to build my own portfolio from scratch while learning React, component-based development, state management, responsive layouts, and other frontend concepts along the way.

It also fulfilled a personal goal of having my own domain where I could present my CV, projects, experience, and technical background in a more interactive format.

## Ongoing Development

This is an ongoing personal project and will continue to evolve as I gain experience, work on new projects, and explore new technologies.

Future improvements and experiments can therefore become part of the portfolio itself.

## Author

**Mauro Fernandes**

Full Stack Developer