import type { I18nKey } from "./keys";

export const pt: Record<I18nKey, string> = {
    "ui.lightMode": "Modo claro",
    "ui.darkMode": "Modo escuro",
    "ui.close": "Fechar",
    "ui.description": "Descrição",
    "ui.viewPublication": "Ver publicação",
    "ui.downloadResume": "Download do CV",
    "ui.viewAll": "Ver tudo",
    "ui.experience": "Experiência",
    "ui.personalProjects": "Projetos Pessoais",
    "ui.certificates": "Certificados",
    "ui.levels.basic": "Iniciante",
    "ui.levels.intermediate": "Intermédio",
    "ui.levels.advanced": "Avançado",

    "about.title": "Sobre mim",
    "about.tagline": "Full Stack Developer · Gosto de resolver problemas",
    "about.languagesLabel": "Idiomas:",
    "about.languagesValue": "Português (Nativo), Inglês (Profissional)",
    "about.whoTitle": "Quem sou eu?",
    "about.whoP1": "Olá, o meu nome é Mauro. Actualmente trabalho como Full Stack Developer, uma função que realmente adoro. Desde jovem que gosto de desafios, " +
        "puzzles e problemas de lógica, pelo que muitas vezes sinto que transformei um hobby numa profissão.",
    "about.whoP2": "Sou muito entusiasta em tudo o que faço e estou constantemente à procura de evoluir e melhorar. Este website, por exemplo, existe porque quis " +
        "aprender React — e aqui estamos.",
    "about.whoP3": "Considero-me uma pessoa acessível, bem-disposta e um amigo leal. No contexto profissional, valorizo fazer parte de uma equipa com esse mesmo " +
        "espírito — uma equipa que cresce em conjunto, se apoia mutuamente e motiva todos a serem a melhor versão de si próprios.",
    "about.hobbiesTitle": "Hobbies",
    "about.hobbies": "Quando não estou a trabalhar, normalmente estou a aprender algo novo, tal como quando decidi aprender React. Também gosto bastante de jogar," +
        " ouvir música e ver séries e filmes com a minha esposa.",
    "about.more": "Se quiser saber mais, sinta-se à vontade para entrar em contacto por email ou conectar-se no LinkedIn — terei todo o gosto em conversar.",

    "exp.roleOverview": "Descrição da função",
    "exp.tech": "Tecnologias",

    "jobs.eufinity.title": "Programador Full Stack",
    "jobs.eufinity.companyName": "Eufinity Solutions",
    "jobs.eufinity.dates": "Abril 2024 - Presente",
    "jobs.eufinity.description":
        "Atualmente trabalho como Programador Full Stack na Eufinity Solutions, uma empresa focada em desenvolver soluções completas de retalho e ERP " +
        "(Enterprise Resource Planning) para operações de média e grande escala.",
    "jobs.eufinity.b1": "Desenvolvimento full-stack de sistemas ERP, responsável por funcionalidades de back-end e front-end",
    "jobs.eufinity.b2": "Implementação de SAF-T (PT) em conformidade com a legislação fiscal portuguesa",
    "jobs.eufinity.b3": "Integração do software com terminais de pagamento automáticos em vários países",
    "jobs.eufinity.b4": "Suporte técnico, resolução de incidentes e de pedidos de funcionalidades",

    "educations.title": "Educação",
    "educations.degreeTitle": "Licenciatura em Engenharia Biomédica",
    "educations.dates": "Out 2020 – Jul 2023",
    "educations.highlights": "Destaques",
    "educations.description": "Licenciatura com foco na interseção entre engenharia, saúde e tecnologia, combinando bases sólidas em matemática, física e programação.",
    "educations.projectLabel": "Projecto de Licenciatura (Nota de 19 em 20 valores) - ",
    "educations.projectValue": "Desenvolvimento de duas redes neuronais baseadas em segmentação semântica para deteção automática de pontos de referência " + 
        "(landmarks) em imagens de raios X, utilizando um conjunto de dados com 200 imagens de encefalogramas: as arquiteturas UNet e FPN. O estudo teve " + 
        "também como objetivo uma aplicação direta em contexto clínico, permitindo a avaliação dos modelos e das suas previsões, através do desenvolvimento " + 
        "de uma análise automática de métricas baseada nos encefalogramas do conjunto de dados, focada no tipo de oclusão mandibular dos pacientes, possibilitando " + 
        "assim uma resposta rápida e precisa na identificação e classificação do diagnóstico.",
    "educations.hightlightDescription": "Publicação do meu projecto de Licenciatura na Springer",

    "projects.title": "Projectos Pessoais",

    "projects.readMore": "Ler mais...",
    "projects.hideDetails": "Esconder detalhes...",

    "projects.nestjs.title": "Template de API em NestJS",
    "projects.nestjs.subtitle": "API base com autenticação, Swagger, TypeORM e Docker",
    "projects.nestjs.description": "Template de API em NestJS pronto para produção, que inclui autenticação integrada, OpenAPI (Swagger), configuração de TypeORM, limitação de pedidos (rate limiting) e outras funcionalidades comuns." +
        " Foi concebido para ajudar a iniciar novos projetos de forma rápida, permitindo focar na lógica de negócio em vez de código repetitivo (boilerplate). Desenvolvido em colaboração com dois colegas," +
        " este projeto representa a combinação das nossas ideias, conhecimentos existentes e novas competências adquiridas ao longo do processo de desenvolvimento. Foi um excelente trabalho de equipa" +
        " continua a ser um projeto em evolução, que vamos refinando e melhorando regularmente.",
    "projects.nestjs.extra1": "Template de API em NestJS pronto para produção, focado em reduzir boilerplate para que novos serviços partam de uma base sólida em vez de começarem do zero.",
    "projects.nestjs.extra2": "Implementa autenticação baseada em JWT com suporte para access e refresh tokens, gestão de múltiplas sessões por dispositivo e rotas públicas/protegidas através de decorators personalizados.",
    "projects.nestjs.extra3": "Utiliza uma arquitetura modular baseada em funcionalidades (Auth, User, Health, etc.), com uma camada comum partilhada para classes base, decorators, utilitários e configuração.",
    "projects.nestjs.extra4": "Fornece abstrações de BaseEntity e BaseService para normalizar CRUD, soft deletes, paginação, filtragem, ordenação e lifecycle hooks em todos os módulos de domínio.",
    "projects.nestjs.extra5": "Integra TypeORM com PostgreSQL, incluindo configuração de migrations e scripts auxiliares para gerar, executar e reverter alterações ao esquema da base de dados.",
    "projects.nestjs.extra6": "Disponibiliza documentação OpenAPI (Swagger) pronta a usar, gerada através de decorators do NestJS em controllers e DTOs, acessível no endpoint /api.",
    "projects.nestjs.extra7": "Centraliza a configuração através de variáveis de ambiente validadas com Joi no arranque da aplicação, garantindo que valores obrigatórios (BD, JWT, CORS, rate limiting) estão presentes.",
    "projects.nestjs.extra8": "Inclui rate limiting, CORS, global validation pipe e outros middlewares transversais pré-configurados para reforço de segurança em ambiente de produção.",
    "projects.nestjs.extra9": "Inclui uma configuração de testes com Jest, usando jest-mock-extended e uma utility createMockRepository personalizada para mocks de repositórios TypeORM previsíveis e type-safe.",
    "projects.nestjs.extra10": "Suporta desenvolvimento local e VS Code Dev Containers com Docker, permitindo levantar rapidamente toda a stack (API + base de dados) num ambiente reproduzível.",
    "projects.nestjs.extra11": "Documenta o processo de adição de novos módulos de funcionalidade usando o Nest CLI, estendendo BaseService e ligando entidades, DTOs, controllers e testes segundo as mesmas convenções.",
    "projects.nestjs.extra12": "Disponibiliza scripts npm para tarefas comuns como linting, formatação, execução de testes, build da aplicação e gestão de migrations, mantendo fluxos de trabalho consistentes.",

    "projects.portfolio.title": "Portfólio de Developer",
    "projects.portfolio.subtitle": "CV single-page em React (Vite) + TypeScript",
    "projects.portfolio.description": "Portfólio de developer numa única página, desenvolvido com React, TypeScript e Vite. Utiliza um layout em grelha modular com painéis reutilizáveis e diálogos em overlay para" +
        " visualizações detalhadas, tudo com um design personalizado e responsivo. Este portfólio tornou-se um dos projetos mais interessantes em que trabalhei, pois permitiu-me" +
        " aprender React — que era o principal objetivo ao iniciar o desenvolvimento — e concretizar o objetivo pessoal de ter o meu próprio domínio com o meu CV.",
    "projects.portfolio.extra1": "Desenvolvido como uma aplicação React single-page usando TypeScript e Vite, com uma arquitetura de componentes totalmente modular.",
    "projects.portfolio.extra2": "O layout principal utiliza um sistema de grelha reutilizável, onde cada painel é um componente isolado com o seu próprio CSS.",
    "projects.portfolio.extra3": "Todos os overlays são geridos através de uma máquina de estados centralizada, usando uma discriminated union para os painéis ativos.",
    "projects.portfolio.extra4": "Os painéis de detalhe seguem um design comum em layered cards, com estrutura consistente para cabeçalhos, descrições e secções técnicas.",
    "projects.portfolio.extra5": "A secção de Projetos é orientada a dados, renderizada através de uma grelha CSS responsiva (3×3 em desktop, 2 ou 1 coluna em ecrãs mais pequenos).",
    "projects.portfolio.extra6": "Animações de hover e efeitos de elevação são criados manualmente com transições CSS para manter controlo total sobre o estilo.",
    "projects.portfolio.extra7": "Efeitos de blur e escala no fundo criam profundidade quando um modal está aberto.",
    "projects.portfolio.extra8": "Layout responsivo que se adapta naturalmente através de CSS Grid e Flexbox.",
    "projects.portfolio.extra9": "A arquitetura suporta futuras adições como mudança de tema e alternância de idioma no header.",

    "projects.employee.title": "Gestor de Base de Dados de Funcionários",
    "projects.employee.subtitle": "Aplicação CRUD em Java Spring Boot para gestão de funcionários",
    "projects.employee.description": "Criação de uma aplicação web para gerir registos de funcionários, como exercício prático para aprender fluxos CRUD, criação de APIs, integração com bases de dados" +
        " e desenvolvimento básico de interfaces. O projeto reforçou a minha compreensão do fluxo de dados entre frontend, backend e a camada de base de dados.",

    "projects.ticket.title": "Aplicação Web de Bilhética de Eventos",
    "projects.ticket.subtitle": "Plataforma em Python para gestão de venda de bilhetes",
    "projects.ticket.description": "Desenvolvimento de uma plataforma full stack para reservas de eventos, com o objetivo de explorar desenvolvimento backend com frameworks Python e trabalho com bases de dados NoSQL." +
        " Este projeto ajudou-me a compreender fluxos de utilizador, modelação de dados e a construção de APIs e vistas que interagem com dados reais.",

    "projects.currency.title": "Conversor de Moedas",
    "projects.currency.subtitle": "Aplicação WPF para conversão de taxas em tempo real",
    "projects.currency.description": "Desenvolvimento de uma aplicação WPF que realiza conversão de moedas em tempo real, como forma de aprender consumo de APIs, data binding e desenvolvimento de interfaces desktop." +
        " O projeto introduziu conceitos como tratamento de pedidos HTTP externos, atualização dinâmica da UI e persistência de dados com MS SQL Server.",

    "projects.tictactoe.title": "Jogo do Galo",
    "projects.tictactoe.subtitle": "Jogo do Galo em WPF",
    "projects.tictactoe.description": "Criação de um jogo do Galo em WPF para praticar o desenvolvimento de aplicações desktop e a implementação de lógica de jogo simples. Ajudou-me a compreender" +
        " gestão de estado, atualizações da interface e criação de componentes interativos e intuitivos.",

    "projects.pong.title": "Pong",
    "projects.pong.subtitle": "Jogo Pong 2D em modo multijogador local",
    "projects.pong.description": "Criação de um jogo Pong 2D em Unity como introdução aos fundamentos de desenvolvimento de jogos. O projeto ensinou-me noções básicas de simulação de física," +
        " tratamento de input, deteção de colisões e construção de ciclos simples de gameplay.",

    "projects.zigzag.title": "Zig Zag",
    "projects.zigzag.subtitle": "Jogo 3D desenvolvido em Unity",
    "projects.zigzag.description": "Desenvolvimento de um jogo 3D do tipo Zig Zag runner para aprender a trabalhar com o ambiente 3D do Unity, geração de objetos, contagem de pontuação e controlo de câmara." +
        " Este projeto reforçou a minha compreensão de mecânicas de jogo e interações em tempo real.",

    "projects.fruit.title": "Fruit Ninja",
    "projects.fruit.subtitle": "Jogo em Unity de cortar frutas evitando bombas",
    "projects.fruit.description": "Criação de um jogo ao estilo Fruit Ninja para praticar gameplay baseado em gestos, geração aleatória de objetos e gestão de estado do jogo. Serviu como" +
        " experiência de aprendizagem na criação de interações dinâmicas, animações e aumento progressivo da dificuldade.",


    "certificates.title": "Certificados",

    "achievements.title": "Conquistas",
    "achievements.springer.title": "Detecção de Pontos de Referência em Radiografias com Deep Learning",
    "achievements.springer.subtitle": "Publicado na Springer",
    "achievements.springer.linkLabel": "Ver publicação",

    "tech.title": "Stack Tecnológica",
    "tech.languages": "Linguagens",
    "tech.databases": "Bases de Dados",
    "tech.otherSkills": "Outras Competências",

    "tech.typescript.title": "TypeScript",
    "tech.typescript.description": "Utilizado extensivamente no desenvolvimento full-stack na Eufinity Solutions e em projetos pessoais, com foco em aplicações backend e frontend com forte tipagem.",
    "tech.cplus.title": "C++",
    "tech.cplus.description": "Aplicado num ambiente full-stack na Eufinity Solutions, incluindo módulos críticos em termos de performance e integração com sistemas existentes.",
    "tech.javascript.title": "JavaScript",
    "tech.javascript.description": "Utilizado profissionalmente na Eufinity Solutions para serviços backend, APIs e lógica de aplicação.",
    "tech.java.title": "Java",
    "tech.java.description": "Aplicado tanto em contexto profissional como em projetos pessoais para desenvolvimento full-stack; também utilizado em formações e certificações.",
    "tech.python.title": "Python",
    "tech.python.description": "Utilizado em contexto académico, certificações e projetos pessoais para scripting, processamento de dados e tarefas de automação.",
    "tech.csharp.title": "C#",
    "tech.csharp.description": "Utilizado em projetos pessoais e exercícios de certificação, principalmente para desenvolvimento de aplicações orientadas a objetos.",
    "tech.node.title": "Node.js",
    "tech.node.description": "Utilizado profissionalmente na Eufinity Solutions em conjunto com JavaScript para desenvolvimento de serviços backend, APIs e integrações de sistemas.",
    "tech.nest.title": "NestJS",
    "tech.nest.description": "Utilizado em projetos pessoais como framework backend principal, aplicando arquitetura modular, injeção de dependências e boas práticas em TypeScript.",
    "tech.angular.title": "Angular",
    "tech.angular.description": "Utilizado profissionalmente no desenvolvimento de frontends ERP, criando interfaces robustas baseadas em componentes e trabalhando com formulários reativos e fluxos de estado complexos.",
    "tech.react.title": "React",
    "tech.react.description": "Utilizado neste portfólio e em interfaces SPA, com foco em componentes reutilizáveis, hooks e composição de UI limpa e organizada.",
    "tech.html.title": "HTML",
    "tech.html.description": "Utilizado profissionalmente e em projetos pessoais para estruturar interfaces modernas e responsivas.",
    "tech.css.title": "CSS",
    "tech.css.description": "Utilizado profissionalmente e em projetos pessoais para estilizar layouts responsivos, componentes reutilizáveis e interfaces web modernas.",
    "tech.typeorm.title": "TypeORM",
    "tech.typeorm.description": "ORM principal em projetos pessoais com NestJS, implementando entidades, relações, migrações e um design de base de dados consistente.",
    "tech.sequelize.title": "Sequelize.js",
    "tech.sequelize.description": "Utilizado profissionalmente em módulos ERP em Node.js para modelação relacional, construção de queries e acesso estruturado a dados.",
    "tech.postgresql.title": "PostgreSQL",
    "tech.postgresql.description": "Utilizado em APIs backend e projetos pessoais, com experiência em desenho de esquemas, indexação, relações e queries de SQL avançadas.",
    "tech.mssql.title": "MS SQL Server",
    "tech.mssql.description": "Utilizado profissionalmente para armazenamento de dados ERP, fluxos de reporting e lógica de SQL complexa; também utilizado em projetos pessoais, certificações e contexto académico.",
    "tech.mongodb.title": "Mongo DB",
    "tech.mongodb.description": "Utilizado profissionalmente e em projetos pessoais para modelação baseada em documentos, agregações e esquemas flexíveis.",
    "tech.docker.title": "Docker",
    "tech.docker.description": "Utilizado profissionalmente e em projetos pessoais para containerizar aplicações, normalizar ambientes de desenvolvimento e orquestrar serviços com Docker Compose.",
    "tech.git.title": "Git",
    "tech.git.description": "Utilizado diariamente em ambientes profissionais e pessoais, envolvendo branches de funcionalidades, pull requests, code reviews e resolução de conflitos em GitHub e GitLab.",
    "tech.etl.title": "ETL",
    "tech.etl.description": "Experiência profissional na concepção e manutenção de pipelines ETL para integração, transformação e sincronização de dados entre sistemas.",
    "tech.technicalsupport.title": "Suporte Técnico",
    "tech.technicalsupport.description": "Experiência profissional prática na resolução de problemas em produção, análise de logs e suporte a clientes em ambientes live na Eufinity Solutions."
};
