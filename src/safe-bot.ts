import readline from "readline";
import { generateResponse } from "./lib/message";
import { config } from "./config";
import { log } from "./lib/log";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promt = (query: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
};

export const startChatBot = async () => {
  console.log("Welcome to the ChatBot! Type 'exit' or 'quit' to exit");
  const userId = await promt("UserId: ");

  if (userId.toLowerCase() === "quit" || userId.toLowerCase() === "exit") {
    console.log(config.MESSAGE.EXIT);
    rl.close();
  }

  while (true) {
    const message = await promt("Message: ");

    if (message.toLowerCase() === "quit" || message.toLowerCase() === "exit") {
      console.log(config.MESSAGE.EXIT);
      break;
    }

    log(`UserId: ${userId}`, message);

    const response = generateResponse(message);

    console.log(response);

    log("CHATBOT", response);
  }
  rl.close();
};
