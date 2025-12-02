import { useState } from 'react';
import { AboutMePanel } from './components/AboutMePanel';
import { HeaderPanel } from './components/HeaderPanel'
import { TechStackPanel } from './components/TechStackPanel'
import { ExperiencePanel } from './components/ExperiencePanel'
import { EducationPanel } from './components/EducationPanel';
import './App.css'

type ActivePanel = "about" | "experience" | "tech" | "education" | null;

function App() {
    const [activePanel, setActivePanel] = useState<ActivePanel>(null);

    const openPanel = (panel: ActivePanel) => setActivePanel(panel);
    const closePanel = () => setActivePanel(null);

    return (
        <>
            <div className={`layout-root ${activePanel ? "layout-root--blurred" : ""}`}>
                <div className="layout-grid">
                    <section className="panel panel-header"
                    >
                        <HeaderPanel onExpand={() => openPanel("about")} />
                    </section>

                    <section className="panel panel-experience">
                        <ExperiencePanel onExpand={() => openPanel("experience")} />
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
                        className="panel-overlay-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="panel-overlay-close" onClick={closePanel}>
                            ✕
                        </button>

                        {activePanel === "about" && <AboutMePanel />}
                        {activePanel === "experience" && <ExperiencePanel />}
                        {activePanel === "education" && <EducationPanel />}
                    </div>
                </div>
            )}
        </>
    )
}

export default App
