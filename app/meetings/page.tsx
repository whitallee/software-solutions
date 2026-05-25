import Link from "next/link";
import { meetings } from "@/lib/data/meetings";

export default function MeetingsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-muted text-xs mb-4 font-mono">~/meetings $</div>
      <h1 className="text-2xl font-bold text-text mb-2">
        <span className="text-red">&gt;</span> Meeting Archive
      </h1>
      <p className="text-muted text-sm mb-12">
        A record of everything discussed and decided — newest first.
      </p>

      <div className="space-y-px">
        {meetings.map((meeting) => (
          <Link
            key={meeting.slug}
            href={`/meetings/${meeting.slug}`}
            className="flex items-start justify-between gap-4 border border-border p-6 hover:border-red/40 hover:bg-surface/50 transition-all group"
          >
            <div className="flex items-start gap-6 min-w-0 flex-col sm:flex-row">
              <div className="text-xs text-muted font-mono shrink-0 pt-0.5 w-24">
                {meeting.date}
              </div>
              <div className="min-w-0">
                <div className="text-xs text-red mb-1">
                  Meeting #{meeting.number}
                </div>
                <p className="text-sm text-text group-hover:text-red-light transition-colors leading-snug mb-2">
                  {meeting.summary}
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-muted">
                  <span>{meeting.attendeeCount} attendees</span>
                  <span>{meeting.topics.length} topics</span>
                  <span>{meeting.decisions.length} decisions</span>
                  {meeting.links.length > 0 && (
                    <span>{meeting.links.length} links</span>
                  )}
                </div>
              </div>
            </div>
            <span className="text-muted group-hover:text-red transition-colors shrink-0 mt-0.5">
              →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
