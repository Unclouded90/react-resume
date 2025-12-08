import { useState } from "react";
import { SiPython } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

import "./CenteredPanel.css";
import "./TechStackPanel.css";
import { IconBadge } from "./IconBadge";
import { techInfoById, type TechId, type TechInfo } from "./TechData";

export function EducationDetailsPanel() {
    const [activeTech, setActiveTech] = useState<TechInfo | null>(null);

    const handleTechClick = (id: TechId) => {
        const info = techInfoById[id];
        if (info) setActiveTech(info);
    };

    const closeMiniCard = () => setActiveTech(null);

    return (
        <div className="centered-panel experience-panel tech-detail-root">
            <div className="exp-card exp-card--header">
                <h2 className="exp-position">
                    Bachelor&apos;s Degree in Biomedical Engineering
                </h2>
                <p className="exp-company-dates">
                    <span className="exp-company">UTAD</span>
                    <span className="exp-separator"> • </span>
                    <span className="exp-dates">Oct 2020 – Jul 2023</span>
                </p>
            </div>

            <div className="exp-card">
                <h3 className="exp-section-title">Description</h3>
                <p className="exp-text">
                    Undergraduate degree focused on the intersection of engineering,
                    health and technology, combining strong foundations in mathematics,
                    physics and programming.
                </p>

                <ul className="exp-list">
                    <li>
                        <b>Undergraduate Project (Graded 19 out of 20) -</b> Development of
                        two neural networks based on semantic segmentation to automatically
                        detect landmarks in X-ray images, using a dataset of 200
                        encephalogram images: the UNet architecture and the FPN
                        architecture. The study also aimed at a direct application in a
                        medical context to diagnose the models and their predictions, with
                        the development of an automatic metric analysis, based on the
                        encephalograms in the dataset, on the type of Mandibular Occlusion
                        of the patients, thus allowing a quick and precise response in the
                        identification and classification of a diagnosis
                    </li>
                </ul>
            </div>

            <div className="exp-card exp-card--tech">
                <h3 className="exp-section-title">Highlights</h3>
                <p className="exp-text">
                    <li>Published my Undergraduate Project on Springer</li>
                </p>
            </div>

            <div className="exp-card exp-card--tech">
                <h3 className="exp-section-title">Tech</h3>
                <div className="tech-badge-row">
                    <IconBadge
                        icon={<SiPython />}
                        label="Python"
                        onClick={() => handleTechClick("Python" as TechId)}
                    />
                    <IconBadge
                        icon={<DiMsqlServer />}
                        label="MS SQL Server"
                        onClick={() => handleTechClick("MS SQL Server" as TechId)}
                    />
                </div>
            </div>

            {activeTech && (
                <div className="tech-mini-overlay" onClick={closeMiniCard}>
                    <div
                        className="tech-mini-card"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="tech-mini-close"
                            onClick={closeMiniCard}
                        >
                            ✕
                        </button>

                        <h3 className="tech-mini-title">{activeTech.title}</h3>

                        <div className="tech-mini-level">
                            <span
                                className={
                                    "tech-level-badge tech-level-badge--" + activeTech.level
                                }
                            >
                                {activeTech.levelLabel}
                            </span>
                        </div>

                        <p className="tech-mini-text">{activeTech.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
