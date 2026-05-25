import Link from "next/link";
import { projects } from "@/lib/data/projects";
import { meetings } from "@/lib/data/meetings";
import { resources } from "@/lib/data/resources";
import { upcomingMeeting } from "@/lib/data/config";

export default function Home() {
  const activeCount = projects.filter((p) => p.status === "active").length;
  const completedCount = projects.filter((p) => p.status === "completed").length;
  const latestMeeting = meetings[0];

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* Hero */}
      <section>
        <div className="text-muted text-xs mb-6 font-mono">
          ~/software-solutions-initiative $
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-text leading-tight tracking-tight">
          <span className="text-red">&gt;</span> Software
          <br />
          &nbsp;&nbsp;&nbsp;Solutions
          <br />
          &nbsp;&nbsp;&nbsp;Initiative
          <span className="cursor-blink text-red ml-1">_</span>
        </h1>
        <p className="mt-8 text-muted text-sm leading-relaxed max-w-xl">
          A twice-a-month meetup where grocery store workers build tools, solve
          real workflow problems, and explore software together. No experience
          required — just curiosity.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-xs">
          <Link
            href="/projects"
            className="px-4 py-2 border border-red text-red hover:bg-red-dim transition-colors"
          >
            view projects →
          </Link>
          <Link
            href="/meetings"
            className="px-4 py-2 border border-border text-muted hover:border-text hover:text-text transition-colors"
          >
            meeting archive →
          </Link>
          <Link
            href="/resources"
            className="px-4 py-2 border border-border text-muted hover:border-text hover:text-text transition-colors"
          >
            resources →
          </Link>
          <a
            href="https://discord.gg/vG3ZC5G3MW"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-border text-muted hover:border-text hover:text-text transition-colors"
          >
            join discord ↗
          </a>
        </div>
      </section>

      {/* Stats */}
      <section>
        <SectionLabel label="quick stats" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border">
          <StatBox label="meetings held" value={meetings.length} />
          <StatBox label="active projects" value={activeCount} highlight />
          <StatBox label="completed" value={completedCount} />
          <StatBox label="resources" value={resources.length} />
        </div>
      </section>

      {/* Latest Meeting */}
      <section>
        <SectionLabel label="latest meeting" />
        <Link
          href={`/meetings/${latestMeeting.slug}`}
          className="block border border-border p-6 hover:border-red/50 hover:bg-surface/50 transition-all group"
        >
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="text-xs text-muted font-mono mb-1">
                {latestMeeting.date}
              </div>
              <h2 className="font-bold text-text group-hover:text-red-light transition-colors">
                Meeting #{latestMeeting.number}
              </h2>
            </div>
            <div className="text-xs text-muted shrink-0">
              {latestMeeting.attendeeCount} attendees
            </div>
          </div>
          <p className="text-sm text-muted leading-relaxed mb-4">
            {latestMeeting.summary}
          </p>
          <span className="text-xs text-red group-hover:text-red-light transition-colors">
            read full report →
          </span>
        </Link>
      </section>

      {/* Upcoming Meeting */}
      <section>
        <SectionLabel label="next meeting" />
        <div className="border border-red/30 p-6 bg-red-dim/20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-red rounded-full animate-pulse shrink-0" />
            <span className="text-xs text-red font-mono">upcoming</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <ScheduleRow label="date" value={upcomingMeeting.date} />
            <ScheduleRow label="time" value={upcomingMeeting.time} />
            <ScheduleRow label="location" value={upcomingMeeting.location} />
          </div>
          <div className="mt-4 text-xs text-muted">
            Meeting <span className="text-text">#{upcomingMeeting.number}</span>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section>
        <SectionLabel label="schedule & format" />
        <div className="border-l-2 border-red pl-6 space-y-5">
          <ScheduleRow
            label="frequency"
            value="First and third week of each month (usually)"
          />
          <ScheduleRow
            label="format"
            value="Informal — show up, build stuff, talk tech/software"
          />
          <ScheduleRow
            label="who"
            value="Any coworker curious about software"
          />
          <ScheduleRow label="experience needed" value="None" />
        </div>
      </section>
    </main>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="text-xs text-muted mb-4 font-mono">
      <span className="text-red/70">// </span>
      {label}
    </div>
  );
}

function StatBox({
  label,
  value,
  highlight,
}: {
  label: string;
  value: number;
  highlight?: boolean;
}) {
  return (
    <div className="bg-surface p-6">
      <div
        className={`text-3xl font-bold mb-1 ${highlight ? "text-red" : "text-text"}`}
      >
        {value}
      </div>
      <div className="text-xs text-muted">{label}</div>
    </div>
  );
}

function ScheduleRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-muted mb-0.5">{label}</div>
      <div className="text-sm text-text">{value}</div>
    </div>
  );
}
