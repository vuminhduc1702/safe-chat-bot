import natural from "natural";
import { config } from "../config";

/**
 * Normalize message by replacing special characters
 * @param message - user's input. Ex: 'sc@m'
 * @returns - Ex: scam
 */
export const convertSpecialCharacter = (message: string) => {
  const str = message
    .toLowerCase()
    .replace(/[@4]/g, "a")
    .replace(/1/g, "i")
    .replace(/3/g, "e")
    .replace(/0/g, "o")
    .replace(/[^a-z\s]/g, "");

  return str;
};

/**
 * Using sentiment to detect negative words, using natural model
 * @param message - normalized input
 * @returns - True if the message is negative, false otherwise
 */

// scamming => scam
export const getSentiment = (message: string) => {
  const tokenizer = new natural.WordTokenizer();

  const sentiment = new natural.SentimentAnalyzer(
    "English",
    natural.PorterStemmer,
    "afinn"
  );
  const tokenizeMessage = tokenizer.tokenize(message.toLowerCase());

  const sentimentValue = sentiment.getSentiment(tokenizeMessage);

  return sentimentValue < 0;
};

/**
 * Detect predefined negative words
 * @param message - user's input
 * @return - True if the message contains disallowed words, false otherwise
 */
export const checkOffensiveWord = (message: string) => {
  const tokenizer = new natural.WordTokenizer();
  const tokens = tokenizer.tokenize(message.toLowerCase());
  return config.DISALLOWED_WORDS.some((word) => tokens.includes(word));
};

/* 
  main function to detect disallowed content
*/
export const detectDisallowedContent = (message: string) => {
  const str = convertSpecialCharacter(message);

  return getSentiment(str) || checkOffensiveWord(str);
};

export const profanity = {
  detectDisallowedContent,
  convertSpecialCharacter,
};
