import natural from "natural";
import { config } from "../config";

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

export const getSetiment = (message: string) => {
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

export const checkOffensiveWord = (message: string) => {
  const tokenizer = new natural.WordTokenizer();
  const tokens = tokenizer.tokenize(message.toLowerCase());
  return config.DISALLOWED_WORDS.some((word) => tokens.includes(word));
};

export const detectDisallowedContent = (message: string) => {
  const str = convertSpecialCharacter(message);

  return getSetiment(str) || checkOffensiveWord(str);
};

export const profanity = {
  detectDisallowedContent,
  convertSpecialCharacter,
};
