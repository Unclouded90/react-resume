import "./ProjectPanel.css";
import type { I18nKey } from "../i18n/keys";
import { K } from "../i18n/keys";

export type Achievement = {
    id: number;
    title: string;
    subtitle?: string;
    linkUrl?: string;
    linkLabel?: string;
};

type AchievementPanelProps = {
    achievements: Achievement[];
    t: (k: I18nKey) => string;
    title?: string;
};

export function AchievementPanel({ achievements, t, title }: AchievementPanelProps) {
    return (
        <div className="achievements-panel">
            <h2 className="projects-heading">{title ?? t(K.achievements.title)}</h2>

            <div className="achievements-card">
                {achievements.map((achievement) => (
                    <div key={achievement.id} className="achievements-item-block">
                        <h3 className="achievements-title">{achievement.title}</h3>

                        {achievement.subtitle && (
                            <p className="achievements-subtitle">{achievement.subtitle}</p>
                        )}

                        {achievement.linkUrl && (
                            <a
                                href={achievement.linkUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="achievements-link"
                            >
                                {achievement.linkLabel ?? achievement.linkUrl}
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
