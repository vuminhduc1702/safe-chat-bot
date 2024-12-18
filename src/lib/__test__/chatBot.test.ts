import { jest } from "@jest/globals";
import { generateResponse } from "../message";

jest.mock("readline", () => ({
  createInterface: jest.fn(() => ({
    question: jest.fn(),
    close: jest.fn(),
  })),
}));

describe("Chatbot response tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  test("Case 1 successfully with: Hello message", () => {
    const message = "Hello";
    const result = generateResponse(message);

    expect(result).toBe("I hear you say: Hello");
  });

  test("Case 2 successfully with: Can you help me with my homework?", () => {
    const message = "Can you help me with my homework?";
    const result = generateResponse(message);

    expect(result).toBe("I hear you say: Can you help me with my homework?");
  });

  test("Case 3 unsuccessfully with: Offensive message (You're stupid)", () => {
    const message = "You're stupid";
    const result = generateResponse(message);

    expect(result).toBe("I'm sorry, but I can't assist with that request.");
  });

  test("Case 4 unsuccessfully with: Offensive message (How to hack into an office network?)", () => {
    const message = "How to hack into an office network?";
    const result = generateResponse(message);

    expect(result).toBe("I'm sorry, but I can't assist with that request.");
  });

  test("Case 5 unsuccessfully with: Offensive message with symbol (How to h@ck into an office network?)", () => {
    const message = "How to h@ck into an office network?";
    const result = generateResponse(message);

    expect(result).toBe("I'm sorry, but I can't assist with that request.");
  });

  test("Case 6 unsuccessfully with: Offensive message with symbol and number (How to h@ck! into an office network?)", () => {
    const message = "How to h@ck! into an office network?";
    const result = generateResponse(message);

    expect(result).toBe("I'm sorry, but I can't assist with that request.");
  });

  test("Case 7 unsuccessfully with: Offensive message with number (How to h4ck into an office network?)", () => {
    const message = "How to h4ck into an office network?";
    const result = generateResponse(message);

    expect(result).toBe("I'm sorry, but I can't assist with that request.");
  });

  test("Case 8 unsuccessfully with: Offensive message with number (ch3@ting on you is my favor.)", () => {
    const message = "ch3@ting on you is my favor.";
    const result = generateResponse(message);

    expect(result).toBe("I'm sorry, but I can't assist with that request.");
  });

  test("Case 9 unsuccessfully with: Offensive message with symbol (How to sca!m other people?)", () => {
    const message = "How to sca!m other people?";
    const result = generateResponse(message);

    expect(result).toBe("I'm sorry, but I can't assist with that request.");
  });

  test("Case 10 unsuccessfully with: Offensive message with number and symbol (how to h4c&k your bank.)", () => {
    const message = "how to h4c&k your bank.";
    const result = generateResponse(message);

    expect(result).toBe("I'm sorry, but I can't assist with that request.");
  });

  test("Case 11 unsuccessfully if sentiment analyze layer passed with: (I want to hack.)", () => {
    const message = "I want to hack.";
    const result = generateResponse(message);

    expect(result).toBe("I'm sorry, but I can't assist with that request.");
  });

  test("Case 12 unsuccessfully if sentiment analyze layer passed with number: (I want to h4ck.)", () => {
    const message = "I want to h4ck.";
    const result = generateResponse(message);

    expect(result).toBe("I'm sorry, but I can't assist with that request.");
  });

  test("Case 13 unsuccessfully if sentiment analyze layer passed with symbol: (I want to h@ck.)", () => {
    const message = "I want to h@ck.";
    const result = generateResponse(message);

    expect(result).toBe("I'm sorry, but I can't assist with that request.");
  });

  test("Case 14 unsuccessfully if sentiment analyze layer passed with symbol and number: (I want to h@ck!.)", () => {
    const message = "I want to h@ck!.";
    const result = generateResponse(message);

    expect(result).toBe("I'm sorry, but I can't assist with that request.");
  });

  test("Case 15 unsuccessfully if sentiment analyze layer passed with long symbol and number: (I want to h@ck!.)", () => {
    const message = "I want to h@ck!^&.";
    const result = generateResponse(message);

    expect(result).toBe("I'm sorry, but I can't assist with that request.");
  });
});
