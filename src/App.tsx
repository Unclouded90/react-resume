import { useState } from 'react';
import { AboutMePanel } from './components/AboutMePanel';
import { HeaderPanel } from './components/HeaderPanel'
import { TechStackPanel } from './components/TechStackPanel'
import { ExperiencePanel } from './components/ExperiencePanel'
import { ExperienceDetailsPanel, type ExperienceDetailsPanelProps } from './components/ExperienceDetailsPanel';
import { EducationPanel } from './components/EducationPanel';
import './App.css'

type ActivePanel = "about" | "experience" | "tech" | "education" | null;

const jobs = [
    {
        title: "Full Stack Developer",
        company: "Eufinity Solutions",
        dates: "Since April 2024",
        description: "Currently working as a Full Stack Developer on Eufinity Solutions," +
            " a company focused on developing end-to-end retail and ERP (Enterprise Resource Planning) software solutions" +
            " targeting medium to large-scale retail operations.",
        bullets: ["Full-stack development of ERP systems, responsible for both back-end and front-end features",
            "Implementing SAF-T (PT) solutions in full compliance with Portuguese fiscal legislation",
            "Integrating our software with automatic payment terminals across multiple countries",
            "Providing technical support, addressing and resolving client incidents and feature requests"
        ],
        tech: ["JavaScript", "TypeScript", "C++", "Java", "Node.js", "Angular", "Sequelize.js",
            "PostgreSQL", "SQL Server", "Git", "ETL", "Technical Support"]
    },
];

function App() {
    const [activePanel, setActivePanel] = useState<ActivePanel>(null);
    const [selectedJob, setSelectedJob] = useState<ExperienceDetailsPanelProps | null>(null);

    const openPanel = (panel: ActivePanel) => setActivePanel(panel);
    const closePanel = () => {
        setActivePanel(null);
        setSelectedJob(null);
    }

    return (
        <>
            <div className={`layout-root ${activePanel ? "layout-root--blurred" : ""}`}>
                <div className="layout-grid">
                    <section className="panel panel-header"
                    >
                        <HeaderPanel onExpand={() => openPanel("about")} />
                    </section>

                    <section className="panel panel-experience">
                        <ExperiencePanel onExpand={() => {
                            setSelectedJob(jobs[0]);
                            openPanel("experience")
                        }} />
                    </section>

                    <section className="panel panel-techstack">
                        <TechStackPanel />
                    </section>

                    <section className="panel panel-education">
                        <EducationPanel onExpand={() => openPanel("education")} />
                    </section>
                </div>
            </div>

            {activePanel && (
                <div className="panel-overlay" onClick={closePanel}>
                    <div
                        className={
                            "panel-overlay-content" +
                            (activePanel === "experience" ? " panel-overlay-content--experience" : "")
                        }
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="panel-overlay-close" onClick={closePanel}>
                            ✕
                        </button>

                        {activePanel === "about" && <AboutMePanel />}
                        {activePanel === 'experience' && selectedJob && (
                            <ExperienceDetailsPanel {...selectedJob} />
                        )}
                        {activePanel === "education" && <EducationPanel />}
                    </div>
                </div>
            )}
        </>
    )
}

export default App
