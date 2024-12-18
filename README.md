## Overview

Safe-chat-bot is a Node.js-based chatbot application designed to filter out disallowed words from user input. It uses natural language processing (NLP) to detect and handle profanity and other disallowed content.

## Libraries

- **Natural**: A general natural language facility for Node.js.
- **Jest**: A testing framework for Node.js applications.
- **Typescript**.

## Project Structure

```
.
└── src/
    ├── config.ts
    ├── index.ts
    ├── safe-bot.ts
    └── lib/
        ├── __test__/
        ├── classifier.ts
        ├── log.ts
        ├── message.ts
        └── profanity.ts
    └── logger/
```

## Configuration

The chatbot can be configured using the config.ts file. The configuration options are as follows:

```typescript
const DISALLOWED_WORDS = [...]; // Add disallowed words here

const LOG_FILE = "./src/logger/chat_log.txt"; // Path to the log file
const ENABLE_CLASSIFIER = false; // Enable or disable the pre-trained classifier

const MESSAGE = {...}; // Define the bot's messages here
```

## Approach

1. **Profanity Filter**:

- The chatbot uses a simple profanity filter to detect and handle disallowed words. The filter is based on a list of disallowed words defined in the configuration file.

2. **Pre-trained Classifier**:

- The chatbot can be configured to use a pre-trained classifier to detect disallowed content. The classifier uses Bayesian method to identify offensive, abusive, or sensitive content.

- It is disabled by default but can be enabled by setting the `IS_ENABLED_CLASSIFIER` configuration option to `true`.

## How to run

### Pre-requisite

- Node.js v18 or higher
- Yarn or npm

### Installation

To install the dependencies:

```bash
npm install
```

### Development

To start the chatbot in development mode with automatic restarts on file changes:

```bash
npm run dev
```

### Production

To build and start the chatbot in production mode:

```bash
npm run build
npm start
```

## How to test

To run the unit tests:

```bash
npm run test
```
