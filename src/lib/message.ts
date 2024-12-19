import { config } from "../config";
import * as profanity from "./profanity";

/**
 * Generate chatbot response
 * @param message - user's input
 */
export const generateResponse = (message: string) => {
  // const result = profanity.detectDisallowedContent(message);
  const result = profanity.detectDisallowedContent(message);

  const response = result
    ? config.MESSAGE.RESPONSE_DISALLOWED_CONTENT
    : `${config.MESSAGE.RESPONSE_ALLOWED_CONTENT}${message}`;

  return response;
};
