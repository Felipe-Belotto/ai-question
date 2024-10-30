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
export const creatorInfo = () => `Información del desarrollador`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const welcome = () => `Bienvenido a `


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const welcomeMessage = () => `Genera exámenes personalizados con inteligencia artificial para mejorar el aprendizaje.`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const inputPromptMessage = () => `¿En qué tema te gustaría mejorar tus habilidades?`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const inputPromptPlaceholder = () => `Ingresa al tema para generar tu examen`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const submitWaitingMessage = () => `Creando tu viaje`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const somethingWrong = () => `Algo salió mal - Inténtalo de nuevo`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const startQuiz = () => `Iniciar prueba`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const step1Title = () => `Elige tu tema`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const step1Description = () => `Comience seleccionando el tema que le interesa explorar.`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const step2Title = () => `Ingrese su mensaje`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const step2Description = () => `Ingrese un mensaje o pregunta específica sobre el tema elegido.`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const step3Title = () => `Recibe tu examen`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const step3Description = () => `La plataforma genera un examen de 10 preguntas personalizado para su tema.`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const creatorImageAlt = () => `Foto del creador`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const creatorDescription = () => `Desarrollador front-end de Campinas, Brasil, apasionado por el diseño de interfaces y la creación de sitios web interactivos. Este proyecto busca demostrar cómo las herramientas de IA pueden mejorar la educación, ampliando el acceso al conocimiento y promoviendo el aprendizaje continuo.`


/**
 * @param {{ topic: NonNullable<unknown> }} params
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const quizTitle = (params) => `Prueba: ${params.topic}`


export { defaultTopic } from "./pt-BR.js"

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
export const passed = () => `Aprobado`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const failed = () => `Fallido`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const score = () => `Puntaje`


/**
 * @param {{ number: NonNullable<unknown> }} params
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const question = (params) => `Pregunta ${params.number}`


/**
 * @param {{ answer: NonNullable<unknown> }} params
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const correctAnswer = (params) => `Respuesta correcta: ${params.answer}`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const submitAnswers = () => `Enviar respuestas`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const startOver = () => `Empezar de nuevo`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const questionNavigation = () => `Navegación de preguntas`


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
