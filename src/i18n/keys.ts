export const K = {
    ui: {
        lightMode: "ui.lightMode",
        darkMode: "ui.darkMode",
        close: "ui.close",
        viewPublication: "ui.viewPublication",
        personalProjects: "ui.personalProjects",
        certificates: "ui.certificates",
        levels: {
            basic: "ui.levels.basic",
            intermediate: "ui.levels.intermediate",
            advanced: "ui.levels.advanced",
          },
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

    tech: {
        typescript: {
            title: "tech.typescript.title",
            description: "tech.typescript.description",
        },
        cplus: {
            title: "tech.cplus.title",
            description: "tech.cplus.description",
        },
        javascript: {
            title: "tech.javascript.title",
            description: "tech.javascript.description",
        },
        java: {
            title: "tech.java.title",
            description: "tech.java.description",
        },
        python: {
            title: "tech.python.title",
            description: "tech.python.description",
        },
        csharp: {
            title: "tech.csharp.title",
            description: "tech.csharp.description",
        },
        node: {
            title: "tech.node.title",
            description: "tech.node.description",
        },
        nest: {
            title: "tech.nest.title",
            description: "tech.nest.description",
        },
        angular: {
            title: "tech.angular.title",
            description: "tech.angular.description",
        },
        react: {
            title: "tech.react.title",
            description: "tech.react.description",
        },
        html: {
            title: "tech.html.title",
            description: "tech.html.description",
        },
        css: {
            title: "tech.css.title",
            description: "tech.css.description",
        },
        typeorm: {
            title: "tech.typeorm.title",
            description: "tech.typeorm.description",
        },
        sequelize: {
            title: "tech.sequelize.title",
            description: "tech.sequelize.description",
        },
        postgresql: {
            title: "tech.postgresql.title",
            description: "tech.postgresql.description",
        },
        mssql: {
            title: "tech.mssql.title",
            description: "tech.mssql.description",
        },
        mongodb: {
            title: "tech.mongodb.title",
            description: "tech.mongodb.description",
        },
        docker: {
            title: "tech.docker.title",
            description: "tech.docker.description",
        },
        git: {
            title: "tech.git.title",
            description: "tech.git.description",
        },
        etl: {
            title: "tech.etl.title",
            description: "tech.etl.description",
        },
        technicalsupport: {
            title: "tech.technicalsupport.title",
            description: "tech.technicalsupport.description",
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
