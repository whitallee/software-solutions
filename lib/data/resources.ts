import type { Resource } from "./types";

export const resources: Resource[] = [
  {
    id: "welcome-to-gas-town",
    name: "Welcome to Gas Town",
    description:
      "Steve Yegge's essay on the rise of agentic AI programming — a bit of an insane dive into it. Discussed at Meeting #12.",
    url: "https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04",
    category: "article",
    tags: ["ai", "agentic", "software-engineering"],
    addedAt: "2026-05-25",
  },
  {
    id: "mdn-web-docs",
    name: "MDN Web Docs",
    description:
      "The authoritative reference for HTML, CSS, and JavaScript. Best place to look up semantic tags, DOM methods, and browser APIs.",
    url: "https://developer.mozilla.org",
    category: "reference",
    tags: ["html", "css", "javascript", "dom", "reference"],
    addedAt: "2026-05-25",
  },
  {
    id: "puppeteer",
    name: "Puppeteer",
    description:
      "Node.js library for controlling a headless Chrome browser — used in the Store Assistant to scrape HEB.com for product locations.",
    url: "https://pptr.dev",
    category: "library",
    tags: ["node.js", "web-scraping", "automation", "browser"],
    addedAt: "2026-05-25",
  },
  {
    id: "git-simple-guide",
    name: "Git — the Simple Guide",
    description:
      "A short, no-nonsense visual walkthrough of Git: init, add, commit, push, branches, and merging. Good starting point after the Meeting #7 intro.",
    url: "https://rogerdudler.github.io/git-guide/",
    category: "tutorial",
    tags: ["git", "version-control", "beginner"],
    addedAt: "2026-05-25",
  },
  {
    id: "expressjs",
    name: "Express.js",
    description:
      "Minimal Node.js web framework — the backend powering Seafood SKU Lookup and the Store Assistant API.",
    url: "https://expressjs.com",
    category: "library",
    tags: ["node.js", "api", "backend", "javascript"],
    addedAt: "2026-05-25",
  },
  {
    id: "claude-code",
    name: "Claude Code",
    description:
      "Anthropic's agentic CLI that runs Claude directly in your terminal. Can read files, write code, run commands, and work through multi-step tasks on its own. Discussed heavily at Meetings #10 and #12.",
    url: "https://claude.ai/code",
    category: "tool",
    tags: ["ai", "agentic", "cli", "coding"],
    addedAt: "2026-05-25",
  },
  {
    id: "opencode",
    name: "OpenCode",
    description:
      "Open-source terminal-based AI coding assistant built by the SST team. Supports multiple AI providers including Claude. An alternative to Claude Code for those who want a fully open solution.",
    url: "https://opencode.ai",
    category: "tool",
    tags: ["ai", "agentic", "cli", "coding", "open-source"],
    addedAt: "2026-05-25",
  },
  {
    id: "ollama",
    name: "Ollama",
    description:
      "Run large language models locally on your own machine. No internet required, no data sent to third parties. Demoed at Meeting #4 with llama3.",
    url: "https://ollama.com",
    category: "tool",
    tags: ["ai", "llm", "self-hosting", "privacy"],
    addedAt: "2026-05-25",
  },
  {
    id: "open-webui",
    name: "Open WebUI",
    description:
      "Browser-based chat interface for Ollama and other local LLMs. Runs at localhost — looks and feels like ChatGPT but fully private.",
    url: "https://openwebui.com",
    category: "tool",
    tags: ["ai", "llm", "self-hosting", "ui"],
    addedAt: "2026-05-25",
  },
  {
    id: "cursor",
    name: "Cursor",
    description:
      "VS Code-based code editor with deep AI integration. Discussed at Meeting #2 a stronger alternative for AI-assisted development.",
    url: "https://www.cursor.com",
    category: "tool",
    tags: ["ai", "editor", "vscode", "coding"],
    addedAt: "2026-05-25",
  },
  {
    id: "nextjs-docs",
    name: "Next.js Docs",
    description:
      "Official Next.js documentation. Covers the App Router, file-based routing, layouts, and server components — the stack this site is built on.",
    url: "https://nextjs.org/docs",
    category: "reference",
    tags: ["next.js", "react", "javascript", "frontend"],
    addedAt: "2026-05-25",
  },
];
