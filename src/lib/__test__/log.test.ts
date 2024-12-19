import fs from "fs";
import { describe, it, expect, afterEach } from "@jest/globals";
import { config } from "../../config";
import { log } from "../log";

describe("log", () => {
  afterEach(() => {
    // Xóa file log sau mỗi test để tránh tích lũy nội dung
    if (fs.existsSync(config.TEST_LOG_FILE)) {
      fs.unlinkSync(config.TEST_LOG_FILE);
    }
  });

  it("should write log to the test log file with correct content", () => {
    const userId = "123";
    const message = "This is a test message";

    log(userId, message, true);

    // Đọc nội dung file log
    const logContent = fs.readFileSync(config.TEST_LOG_FILE, "utf8");

    // Kiểm tra nội dung file log có đúng định dạng
    expect(logContent).toContain(userId);
    expect(logContent).toContain(message);
  });
});
