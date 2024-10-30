import { languageTag } from "@/paraglide/runtime";
import type { Question } from "@/types/quiz";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function validateKey() {
  const key = process.env.NEXT_PUBLIC_GEMINI_KEY;

  const genAI = new GoogleGenerativeAI(key!);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    generationConfig: {
      maxOutputTokens: 100,
    },
  });

  try {
    const result = await chat.sendMessage(
      "If you are reading this message, respond with exactly 'All good' without any punctuation or additional text"
    );
    const response = await result.response;
    const text = await response.text();
    return text === "All good";
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function generateQuiz(
  msg: string,
  language = "en"
): Promise<Question[]> {
  const key = process.env.NEXT_PUBLIC_GEMINI_KEY;
  const genAI = new GoogleGenerativeAI(key!);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

  const chat = model.startChat({
    generationConfig: {
      maxOutputTokens: 100000,
    },
  });

  const defaultMessage =
    language === "en"
      ? "Topics related to elementary and high school education"
      : "Temas relacionados ao ensino fundamental e médio";

  const message = msg || defaultMessage;

  try {
    const result =
      await chat.sendMessage(`Create 10 multiple choice questions about ${message} with 5 alternatives each. Each question must have only one correct answer. When selecting questions, always choose ones that you are certain are correct - for example, if related to academia, look for questions that appeared in college or school exams; if not academic, use reliable sources to generate the questions. Return the result in JSON format but be aware that your response will go through the JSON.parse function, so send according to the necessary requirements to avoid errors. Do not return in a codeblock, I will not visualize it, send only [{},] the array and objects that make up the JSON. Make sure that alternatives: will always be an array and never a string, and that the alternatives are not inside additional arrays, which would make the structure invalid. The JSON expects alternatives to be a direct array, not an array of arrays. Answer will never be an empty string. Pay attention to never missing quotes necessary to keep the application stable. If asked about Star Wars, don't always give the questions from the example below, always try to be creative. Be careful with SyntaxError as I will use your return to transform into json.parse(). The language of the questions and answers should be in ${languageTag()}. You will return as in this example:[ 
			{
					"statement": "What is the name of Luke Skywalker's home planet?",
					"options": ["Tatooine", "Alderaan", "Naboo", "Coruscant", "Endor"],
					"answer": "Tatooine"
			},
			{
					"statement": "Who is the leader of the rebellion against the Empire?",
					"options": ["Darth Vader", "Obi-Wan Kenobi", "Mon Mothma", "Han Solo", "Yoda"],
					"answer": "Mon Mothma"
			},
			{
					"statement": "What is Han Solo's characteristic weapon?",
					"options": ["Lightsaber", "Blaster", "Pistol", "Bow and arrow", "Sword"],
					"answer": "Blaster"
			},
			{
					"statement": "What is the name of Han Solo's spaceship?",
					"options": ["Millennium Falcon", "X-Wing", "TIE Fighter", "Death Star", "Y-Wing"],
					"answer": "Millennium Falcon"
			},
			{
					"statement": "Who is the Jedi Master that trains Luke Skywalker?",
					"options": ["Yoda", "Obi-Wan Kenobi", "Qui-Gon Jinn", "Mace Windu", "Palpatine"],
					"answer": "Obi-Wan Kenobi"
			},
			{
					"statement": "What is the name of the planet where the rebel base is located?",
					"options": ["Endor", "Hoth", "Yavin IV", "Dagobah", "Tatooine"],
					"answer": "Yavin IV"
			},
			{
					"statement": "What is the name of the famous bounty hunter who pursues Han Solo?",
					"options": ["Boba Fett", "Jabba the Hutt", "Lando Calrissian", "Greedo", "Wicket"],
					"answer": "Boba Fett"
			},
			{
					"statement": "What is the Empire's main weapon?",
					"options": ["Death Star", "TIE Fighter", "Super Star Destroyer", "AT-AT", "TIE Bomber"],
					"answer": "Death Star"
			},
			{
					"statement": "What is the name of the planet where Luke Skywalker finds Yoda?",
					"options": ["Dagobah", "Hoth", "Tatooine", "Endor", "Naboo"],
					"answer": "Dagobah"
			},
			{
					"statement": "What is the name of the planet where the pod race takes place?",
					"options": ["Tatooine", "Naboo", "Coruscant", "Alderaan", "Endor"],
					"answer": "Tatooine"
			}
	]`);
    const response = await result.response;
    const text = await response.text();
    return JSON.parse(text.trim());
  } catch (error) {
    console.error("Error parsing JSON:", error);
    throw new Error("Failed to generate quiz");
  }
}
