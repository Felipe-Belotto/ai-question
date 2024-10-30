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
export const howItWorks = () => `How it works`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const creatorInfo = () => `Developer Information`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const welcome = () => `Welcome to`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const welcomeMessage = () => `Generate personalized exams with artificial intelligence to enhance learning.`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const inputPromptMessage = () => `What topic would you like to improve your skills on?`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const inputPromptPlaceholder = () => `Enter the topic to generate your exam`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const submitWaitingMessage = () => `Creating your journey`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const somethingWrong = () => `Something went wrong - Try again`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const startQuiz = () => `Start test`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const step1Title = () => `Choose Your Topic`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const step1Description = () => `Start by selecting the topic you are interested in exploring.`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const step2Title = () => `Enter your Prompt`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const step2Description = () => `Enter a specific prompt or question about your chosen topic.`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const step3Title = () => `Receive your Exam`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const step3Description = () => `The platform generates a 10-question exam customized to your topic.`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const creatorImageAlt = () => `Creator's photo`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const creatorDescription = () => `Front-end developer from Campinas, Brazil, with a passion for interface design and building interactive websites. This project aims to demonstrate how AI tools can enhance education, expanding access to knowledge and promoting lifelong learning.`


/**
 * @param {{ topic: NonNullable<unknown> }} params
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const quizTitle = (params) => `Quiz: ${params.topic}`


export { defaultTopic } from "./pt-BR.js"

/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const result = () => `Result`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const passed = () => `Approved`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const failed = () => `Failed`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const score = () => `Score`


/**
 * @param {{ number: NonNullable<unknown> }} params
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const question = (params) => `Question ${params.number}`


/**
 * @param {{ answer: NonNullable<unknown> }} params
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const correctAnswer = (params) => `Correct answer: ${params.answer}`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const submitAnswers = () => `Submit Responses`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const startOver = () => `Start over`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const questionNavigation = () => `Question navigation`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const previous = () => `Previous`


/**
 * 
 * @returns {string}
 */
/* @__NO_SIDE_EFFECTS__ */
export const next = () => `Next`
