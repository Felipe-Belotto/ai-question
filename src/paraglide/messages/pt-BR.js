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
export const welcome = () => `Bem-vindo ao`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const welcomeMessage = () => `Gere exames personalizados com inteligência artificial para aprimorar o aprendizado.`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const inputPromptMessage = () => `Em qual tópico você gostaria de melhorar suas habilidades?`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const inputPromptPlaceholder = () => `Insira o tópico para gerar seu exame`


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
export const startQuiz = () => `Iniciar teste`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const step1Title = () => `Escolha seu tópico`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const step1Description = () => `Comece selecionando o tópico que você tem interesse em explorar.`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const step2Title = () => `Insira seu prompt`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const step2Description = () => `Insira um prompt ou pergunta específica sobre o tópico escolhido.`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const step3Title = () => `Receba seu exame`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const step3Description = () => `A plataforma gera um exame de 10 questões personalizado para o seu tópico.`


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
export const creatorDescription = () => `Desenvolvedor front-end de Campinas, Brasil, apaixonado por design de interface e construção de sites interativos. Este projeto tem como objetivo demonstrar como ferramentas de IA podem aprimorar a educação, expandindo o acesso ao conhecimento e promovendo o aprendizado ao longo da vida.`


/**
 * @param {{ topic: NonNullable<unknown> }} params
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const quizTitle = (params) => `Questionário: ${params.topic}`


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
export const failed = () => `Fracassado`


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
export const question = (params) => `Pergunta ${params.number}`


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
export const submitAnswers = () => `Enviar Respostas`


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
export const questionNavigation = () => `Navegação de perguntas`


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


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const defaultTopic = () => `Conhecimento geral`
