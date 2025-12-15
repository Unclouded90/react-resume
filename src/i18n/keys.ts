export const K = {
    ui: {
        lightMode: "ui.lightMode",
        darkMode: "ui.darkMode",
        close: "ui.close",
        viewPublication: "ui.viewPublication",
        personalProjects: "ui.personalProjects",
        certificates: "ui.certificates",
    },

    exp: {
        roleOverview: "exp.roleOverview",
        tech: "exp.tech",
    },

    jobs: {
        eufinity: {
            title: "jobs.eufinity.title",
            companyName: "jobs.eufinity.companyName",
            dates: "jobs.eufinity.dates",
            description: "jobs.eufinity.description",
            b1: "jobs.eufinity.b1",
            b2: "jobs.eufinity.b2",
            b3: "jobs.eufinity.b3",
            b4: "jobs.eufinity.b4",
        },
    },

    achievements: {
        springer: {
            title: "achievements.springer.title",
            subtitle: "achievements.springer.subtitle",
            linkLabel: "achievements.springer.linkLabel",
        },
    },
} as const;

type Leaf<T> = T extends string
    ? T
    : { [K in keyof T]: Leaf<T[K]> }[keyof T];

export type I18nKey = Leaf<typeof K>;
