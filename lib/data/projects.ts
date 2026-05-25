import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "media-manager-tag-type",
    name: "Media Manager — Tag Type Bulk Setter",
    description:
      "Chrome extension that auto-sets every tag type dropdown on a Media Manager shelf tag page to a chosen type (e.g. '6up') in one click, instead of updating each one manually.",
    status: "idea",
    tags: ["chrome-extension", "browser", "automation", "shelf-tags"],
    contributors: ["Whit"],
    details:
      "When building shelf tags for demos and sales, the same tag type needs to be set on every dropdown on the page — currently done one at a time. The extension would inject a small UI button that finds all tag type selects and sets them to the target value instantly. A sample HTML form from Media Manager is available to reference during development.",
  },
  {
    id: "deli-cheese-inventory",
    name: "Deli Cheese Inventory Assistant",
    description:
      "A mobile-friendly tool to help the deli cheese shop lead log and track the full cheese inventory. She photographs a cheese label, the app extracts all relevant info via AI vision, and she reviews it before saving — no manual typing required.",
    status: "idea",
    tags: ["ai", "ocr", "mobile", "inventory", "deli"],
    contributors: ["Whit"],
    details:
      "Current process is manual and repetitive — she logs everything by hand, then re-enters it on the office computer. The goal is to cut that down to a quick photo + review step on her phone, with a clean export she can paste or import when she gets to the desk. Similar AI vision pattern to Cooking Connections.",
  },
  {
    id: "store-assistant-product-location",
    name: "Store Assistant — Product Location Lookup",
    description:
      "Node.js API that takes a product name and GPS address from an Apple Shortcut, uses the GPS to auto-select the nearest HEB store, then webscrapes HEB.com to return the product's name, price, stock status, and in-store aisle location.",
    status: "stalled",
    tags: ["node.js", "puppeteer", "webscraping", "api", "apple-shortcuts", "siri"],
    contributors: ["Lawrence", "Whit"],
    startedAt: "2026-02-05",
    details:
      "Since the shortcut runs while you're physically in the store, the GPS address resolves directly to your location. CAPTCHAs are handled automatically via 2captcha. Triggered hands-free via Siri on the floor.",
  },
  {
    id: "store-assistant-seafood-sku",
    name: "Store Assistant — Seafood SKU Lookup",
    description:
      "Planned feature that will absorb the standalone Seafood SKU Lookup project — a fish name or alias (e.g. 'ahi') sent via Siri returns the correct department SKU.",
    status: "idea",
    tags: ["node.js", "api", "apple-shortcuts", "siri"],
    contributors: ["Whit", "Lawrence"],
    details:
      "The standalone version already works and will be ported into the Store Assistant API as a second endpoint. Part of a longer-term plan where each store workflow tool lives as a feature under the Store Assistant umbrella.",
  },
  {
    id: "seafood-sku-lookup",
    name: "Seafood SKU Lookup",
    description:
      "Standalone Node.js API that accepts a fish name or alias and returns the correct department SKU. Triggered via Siri/Apple Shortcuts on the floor.",
    status: "completed",
    tags: ["node.js", "api", "apple-shortcuts", "siri"],
    contributors: ["Lawrence", "Whit"],
    startedAt: "2025-12-18",
    details:
      "Fully functional but being retired in favor of the Store Assistant platform. Fish names and aliases live in a flat data.json file. Will be ported to Store Assistant as the Seafood SKU Lookup feature.",
  },
  {
    id: "cooking-connections-recipe-history",
    name: "Cooking Connections — Recipe History",
    description:
      "Store-scoped recipe archive for the Cooking Connections sampling kitchen. Customers scan a QR code to browse past recipes; chefs log in to upload recipe cards, which are processed by AI vision to extract structured data automatically.",
    status: "completed",
    tags: ["next.js", "supabase", "openai", "ocr", "postgresql", "vercel"],
    contributors: ["Whit"],
    startedAt: "2026-02-19",
    details:
      "Chefs photograph a physical recipe card — GPT-4o Vision extracts title, ingredients, instructions, and tags, pre-filling the form before the chef reviews and saves. Admins can feature recipes that surface at the top of the customer view. Open TODOs: duplicate recipe detection, self-service password reset, tag filtering on the customer page.",
  },
  {
    id: "volunteer-board",
    name: "Partner Volunteer & Events Board",
    description:
      "A simple web page where an admin could post volunteer opportunities and store events — replacing the physical bulletin board by the stairs. Partners could RSVP without an account.",
    status: "archived",
    tags: ["next.js", "web"],
    contributors: ["Whit", "Los", "Sean"],
    details:
      "Chosen as the group's first project in Meeting #2. Never got off the ground because the intended admin (Verna) wasn't interested in maintaining it. Shelved indefinitely.",
  },
];
