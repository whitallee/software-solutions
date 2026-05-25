export type ProjectStatus = "active" | "completed" | "idea" | "archived" | "stalled";

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  tags: string[];
  contributors: string[];
  startedAt?: string;
  completedAt?: string;
  details?: string;
}

export interface MeetingLink {
  label: string;
  url: string;
}

export interface Meeting {
  slug: string;
  number: number;
  date: string;
  attendeeCount: number;
  attendees: string[];
  summary: string;
  topics: string[];
  decisions: string[];
  links: MeetingLink[];
  projectsMentioned: string[];
  notes?: string;
}

export type ResourceCategory =
  | "tool"
  | "article"
  | "library"
  | "reference"
  | "tutorial"
  | "other";

export interface Resource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: ResourceCategory;
  tags: string[];
  addedAt: string;
}
