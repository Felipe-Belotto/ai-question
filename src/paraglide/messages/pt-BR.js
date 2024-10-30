/* eslint-disable */
/** 
 * This file contains language specific message functions for tree-shaking. 
 * 
 *! WARNING: Only import messages from this file if you want to manually
 *! optimize your bundle. Else, import from the `messages.js` file. 
 * 
 * Your bundler will (in the future) automatically replace the index function 
 * with a language specific message function in the build step. 
 */


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const howItWorks = () => `Como funciona`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const creatorInfo = () => `Informações do desenvolvedor`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const welcome = () => `Bem vindo a `


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const welcomeMessage = () => `Gerar exames personalizados com inteligência artificial para aprimorar o aprendizado.`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const inputPromptMessage = () => `Sobre qual tópico você gostaria de aprimorar suas habilidades?`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const inputPromptPlaceholder = () => `Digite o tema para gerar seu exame`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const submitWaitingMessage = () => `Criando sua jornada`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const somethingWrong = () => `Algo deu errado - Tente novamente`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const startQuiz = () => `Iniciar prova`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const step1Title = () => `Escolha seu Tópico`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const step1Description = () => `Comece selecionando o tópico que você está interessado em explorar.`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const step2Title = () => `Digite seu Prompt`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const step2Description = () => `Digite um prompt ou pergunta específica sobre o tópico escolhido.`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const step3Title = () => `Receba seu Exame`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const step3Description = () => `A plataforma gera um exame de 10 questões personalizado para seu tópico.`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const creatorImageAlt = () => `Foto do criador`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const creatorDescription = () => `Desenvolvedor front-end de Campinas, Brasil, com paixão por design de interfaces e construção de websites interativos. Este projeto busca demonstrar como ferramentas com IA podem potencializar a educação, expandindo o acesso ao conhecimento e promovendo a aprendizagem contínua.`


/**
 * @param {{ topic: NonNullable<unknown> }} params
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const quizTitle = (params) => `Quiz: ${params.topic}`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const defaultTopic = () => `Ensino Fundamental e Médio`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const result = () => `Resultado`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const passed = () => `Aprovado`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const failed = () => `Reprovado`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const score = () => `Pontuação`


/**
 * @param {{ number: NonNullable<unknown> }} params
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const question = (params) => `Questão ${params.number}`


/**
 * @param {{ answer: NonNullable<unknown> }} params
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const correctAnswer = (params) => `Resposta correta: ${params.answer}`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const submitAnswers = () => `Enviar respostas`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const startOver = () => `Recomeçar`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const questionNavigation = () => `Navegação de questões`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const previous = () => `Anterior`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const next = () => `Próximo`
