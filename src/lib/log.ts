import fs from "fs";
import { config } from "../config";

/**
 * log user messages and chatbot responses into log file
 * @param userId - User ID
 * @param message - user's input
 * @param isTest - flag to check whether this is a test run or not
 */
export const log = (userId: string, message: string, isTest = false) => {
  const timestamp = new Date().toISOString();

  const logFile = isTest ? config.TEST_LOG_FILE : config.LOG_FILE;

  const logEntry = `${timestamp} - ${userId} ${message}\n`;
  fs.appendFileSync(logFile, logEntry);
};
