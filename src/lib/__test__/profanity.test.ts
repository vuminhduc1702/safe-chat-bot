import natural from "natural";
import { describe, it, expect, beforeAll, jest } from "@jest/globals";
import {
  convertSpecialCharacter,
  getSentiment,
  checkOffensiveWord,
  detectDisallowedContent,
} from "../profanity";

describe("convertSpecialCharacter", () => {
  it("should replace special characters with corresponding letters", () => {
    const message = "h3ll0 w0rld! @mazing 1dea";
    const normalized = convertSpecialCharacter(message);
    expect(normalized).toBe("hello world amazing idea");
  });
});

describe("getSentiment", () => {
  it("should return true for negative sentiment", () => {
    const message = "This is terrible and horrible";
    const isNegative = getSentiment(message);
    expect(isNegative).toBe(true);
  });

  it("should return false for neutral or positive sentiment", () => {
    const message = "This is wonderful and amazing";
    const isNegative = getSentiment(message);
    expect(isNegative).toBe(false);
  });
});

describe("checkOffensiveWord", () => {
  it("should return true if message contains disallowed words", () => {
    const message = "This is a scam.";
    const hasOffensiveWord = checkOffensiveWord(message);
    expect(hasOffensiveWord).toBe(true);
  });

  it("should return false if message does not contain disallowed words", () => {
    const message = "This is a legitimate message.";
    const hasOffensiveWord = checkOffensiveWord(message);
    expect(hasOffensiveWord).toBe(false);
  });
});

describe("detectDisallowedContent", () => {
  it("should return true if message contains negative sentiment", () => {
    const message = "This is terrible and a scam.";
    const isDisallowed = detectDisallowedContent(message);
    expect(isDisallowed).toBe(true);
  });

  it("should return true if message contains disallowed words", () => {
    const message = "This contains fraud.";
    const isDisallowed = detectDisallowedContent(message);
    expect(isDisallowed).toBe(true);
  });

  it("should return false if message is clean", () => {
    const message = "This is a wonderful day.";
    const isDisallowed = detectDisallowedContent(message);
    expect(isDisallowed).toBe(false);
  });
});
