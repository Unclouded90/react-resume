import { K, type I18nKey } from "../i18n/keys";

export type AchievementData = {
    id: number;
    titleKey: I18nKey;
    subtitleKey: I18nKey;
    linkLabelKey: I18nKey;
    linkUrl: string;
}

export const achievements: AchievementData[] = [
    {
        id: 1,
        titleKey: K.achievements.springer.title,
        subtitleKey: K.achievements.springer.subtitle,
        linkLabelKey: K.achievements.springer.linkLabel,
        linkUrl:
            "https://www.springerprofessional.de/en/detection-of-landmarks-in-x-ray-images-through-deep-learning/27270288",
    },
];
