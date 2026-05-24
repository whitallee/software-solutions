import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "inventory-scanner",
    name: "Inventory Scanner CLI",
    description:
      "A command-line tool to scan and reconcile inventory using a USB barcode scanner, outputting discrepancies to a CSV report.",
    status: "active",
    tags: ["python", "cli", "barcode", "csv"],
    contributors: ["Whit", "Marcus"],
    startedAt: "2026-04-15",
    details:
      "Addresses the manual inventory count process that currently takes 3+ hours each week. The tool reads from the barcode scanner via stdin and compares against a reference spreadsheet.",
  },
  {
    id: "shift-schedule-parser",
    name: "Shift Schedule Parser",
    description:
      "Parses the store's exported schedule PDF into a structured format usable for notifications and further automation.",
    status: "completed",
    tags: ["python", "pdf", "parsing", "automation"],
    contributors: ["Whit"],
    startedAt: "2026-02-01",
    completedAt: "2026-03-10",
    details:
      "Uses pdfplumber to extract the schedule grid and outputs JSON to a shared folder. First completed project — proved the approach is viable.",
  },
  {
    id: "waste-tracker",
    name: "Waste & Shrink Tracker",
    description:
      "Spreadsheet-driven tool to log and visualize produce waste and shrink data over time.",
    status: "idea",
    tags: ["python", "spreadsheet", "data", "charts"],
    contributors: ["Whit", "Dana"],
    details:
      "Currently tracked on paper. Goal is a simple form → Google Sheet → chart setup that department heads can use without any technical knowledge.",
  },
  {
    id: "markdown-wiki",
    name: "Internal Store Wiki",
    description:
      "A lightweight markdown-based wiki for documenting store procedures, contacts, and SOPs — browseable from the break room.",
    status: "idea",
    tags: ["markdown", "documentation", "wiki", "raspberry-pi"],
    contributors: [],
    details:
      "Would live on a Raspberry Pi on the break room network. No login required. Could be built with a simple static site generator like mdBook or Docusaurus.",
  },
];
