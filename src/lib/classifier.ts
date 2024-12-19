import natural from "natural";
import { config } from "../config";

const classifier = new natural.BayesClassifier();

const DATA_TRAINING = [
  ["You're brilliant!", "0"],
  ["I admire your work", "0"],
  ["Hello", "0"],
  ["Good morning", "0"],
  ["Could you help me with my homework", "0"],
  ["How to apply to NASA", "0"],
];

config.DISALLOWED_WORDS.forEach((word) => {
  DATA_TRAINING.push([word, "1"]);
  DATA_TRAINING.push([`I ${word} you`, "1"]);
  DATA_TRAINING.push([`I want to ${word} you`, "1"]);
  DATA_TRAINING.push([`How to ${word} NASA`, "1"]);

  // Examples with neutral or positive intent
  DATA_TRAINING.push([`Avoid ${word} in your work`, "0"]);
  DATA_TRAINING.push([`You should avoid ${word}`, "0"]);
  DATA_TRAINING.push([`I want to play with you`, "0"]);
  DATA_TRAINING.push([`How to learn english`, "0"]);

  // Example with a ofuscated word
  DATA_TRAINING.push([`${word.split("").join(" ")}`, "1"]); // Spacing
  DATA_TRAINING.push([`I ${word.replace(/a/g, "@")} you`, "1"]); // Replace 'a' with '@'
  DATA_TRAINING.push([`How to ${word.replace(/a/g, "@")} you`, "1"]); // Replace 'a' with '@'
  DATA_TRAINING.push([`${word.split("").join(".")}`, "1"]); // Insert '.' between characters
});

DATA_TRAINING.forEach(([string, result]) => {
  classifier.addDocument(string, result);
});

classifier.train();

export function detectDisallowedContent(message: string) {
  return classifier.classify(message) === "1";
}

export default classifier;
