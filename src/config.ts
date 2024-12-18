const MESSAGE = {
  RESPONSE_DISALLOWED_CONTENT:
    "I'm sorry, but I can't assist with that request.",
  RESPONSE_ALLOWED_CONTENT: "I hear you say: ",
  EXIT: "Exiting...",
};

const DISALLOWED_WORDS = [
  "hack",
  "hacking",
  "scam",
  "scamming",
  "cheat",
  "cheating",
  "plagiarism",
  "stupid",
];

// const ENABLE_CLASSIFIER = true;

const LOG_FILE = "./src/logger/chat_log.txt";

export const config = {
  MESSAGE,
  DISALLOWED_WORDS,
  //   ENABLE_CLASSIFIER,
  LOG_FILE,
};
