import './CenteredPanel.css';

export function EducationDetailsPanel() {
    return (
        <div className="centered-panel experience-panel">
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
                    <li><b>Undergraduate Project (Graded 19 out of 20) -</b> Development of two neural networks based on semantic segmentation to automatically detect landmarks in X-ray
                        images, using a dataset of 200 encephalogram images: the UNet architecture and the FPN architecture. The study
                        also aimed at a direct application in a medical context to diagnose the models and their predictions, with the
                        development of an automatic metric analysis, based on the encephalograms in the dataset, on the type of
                        Mandibular Occlusion of the patients, thus allowing a quick and precise response in the identification and
                        classification of a diagnosis</li>
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
                <p className="exp-text exp-tech-text">
                    Python
                </p>
            </div>
        </div>
    );
}
