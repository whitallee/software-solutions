import type { Meeting } from "./types";

export const meetings: Meeting[] = [
  {
    slug: "2026-05-07",
    number: 3,
    date: "2026-05-07",
    attendeeCount: 4,
    attendees: ["Whit", "Marcus", "Dana", "Jordan"],
    summary:
      "Demoed inventory scanner progress, discussed barcode scanning approaches, and introduced the waste tracker idea.",
    topics: [
      "Inventory Scanner CLI — demo of current progress and open blockers",
      "USB vs Bluetooth barcode scanner trade-offs",
      "Waste & shrink tracking — paper process pain points",
      "Open discussion: tools everyone uses outside of work",
    ],
    decisions: [
      "Stick with USB barcode scanner approach for reliability",
      "Whit will prototype waste tracker intake form using Google Forms + Sheets",
      "Next meeting: third week of May — topic TBD",
    ],
    links: [
      {
        label: "python-barcode on PyPI",
        url: "https://pypi.org/project/python-barcode/",
      },
      {
        label: "Google Forms to Sheets guide",
        url: "https://support.google.com/docs/answer/2917686",
      },
    ],
    projectsMentioned: ["inventory-scanner", "waste-tracker"],
  },
  {
    slug: "2026-04-16",
    number: 2,
    date: "2026-04-16",
    attendeeCount: 3,
    attendees: ["Whit", "Marcus", "Jordan"],
    summary:
      "Kicked off the inventory scanner project, reviewed the completed schedule parser, and covered Python tooling basics.",
    topics: [
      "Shift schedule parser — walkthrough of completed tool",
      "Inventory scanner — project kickoff and scoping",
      "Python virtual environments and package management",
      "Why CLI tools are a good fit for our workflows",
    ],
    decisions: [
      "Inventory scanner becomes the main active project",
      "Marcus will set up Python on his machine before the next meeting",
      "Use pdfplumber for all future PDF work",
    ],
    links: [
      {
        label: "pdfplumber on PyPI",
        url: "https://pypi.org/project/pdfplumber/",
      },
      {
        label: "Python venv docs",
        url: "https://docs.python.org/3/library/venv.html",
      },
    ],
    projectsMentioned: ["inventory-scanner", "shift-schedule-parser"],
  },
  {
    slug: "2026-03-19",
    number: 1,
    date: "2026-03-19",
    attendeeCount: 2,
    attendees: ["Whit", "Marcus"],
    summary:
      "First meeting — intro to the initiative, demo of the schedule parser, and a brainstorm of what problems are worth solving.",
    topics: [
      "What is the Software Solutions Initiative?",
      "Demo: shift schedule parser",
      "Brainstorm: what workflows at the store are painful?",
      "Intro to Python for non-programmers",
    ],
    decisions: [
      "Meet on the first and third week of each month",
      "Focus on practical tools that save real time",
      "Marcus will work through Python's official tutorial before the next meeting",
    ],
    links: [
      {
        label: "Python beginners guide",
        url: "https://www.python.org/about/gettingstarted/",
      },
    ],
    projectsMentioned: ["shift-schedule-parser"],
  },
];
