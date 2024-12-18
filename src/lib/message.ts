import { config } from "../config";
import * as profanity from "./profanity";
import * as classifier from "./classifier";

export const generateResponse = (message: string) => {
  const result = profanity.detectDisallowedContent(message);

  const response = result
    ? config.MESSAGE.RESPONSE_DISALLOWED_CONTENT
    : `${config.MESSAGE.RESPONSE_ALLOWED_CONTENT}${message}`;

  return response;
};
