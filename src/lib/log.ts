import fs from "fs";
import { config } from "../config";

export const log = (userId: string, message: string) => {
  const timestamp = new Date().toISOString();

  const logEntry = `${timestamp} - ${userId}: ${message}\n`;
  fs.appendFileSync(config.LOG_FILE, logEntry);
};
