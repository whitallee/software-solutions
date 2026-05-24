import type { Meeting } from "./types";

export const meetings: Meeting[] = [
  {
    slug: "2026-05-14",
    number: 4,
    date: "2026-05-14",
    attendeeCount: 3,
    attendees: ["Whit", "Yohannes", "Los"],
    summary:
      "Discussed the rapid rise of agentic programming workflows with Claude Code, explored security concerns around autonomous AI agents, and shared experiences building software with AI-assisted development.",
    topics: [
      "Claude Code and agentic programming workflows",
      "Los and his brother's SaaS project built heavily with AI assistance",
      "Security risks of browser-integrated AI agents",
      "Prompt injection and malicious automation concerns",
      "Containerization and sandboxing considerations for AI agents",
      "The current limitations of securing autonomous coding agents",
      "How AI-assisted coding is changing software development culture",
      "Discussion around the article 'Welcome to Gas Town'",
    ],
    decisions: [
      "Agreed that fully securing autonomous browser-capable AI agents remains an unsolved problem",
      "Recognized controlled environments and sandboxing as the safest current approach for experimenting with agentic systems",
      "Continued interest in exploring AI-native development workflows despite security trade-offs",
    ],
    links: [
      {
        label: "Welcome to Gas Town",
        url: "https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04",
      },
    ],
    projectsMentioned: [],
  },
];
