import { notFound } from "next/navigation";
import Link from "next/link";
import { meetings } from "@/lib/data/meetings";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return meetings.map((m) => ({ slug: m.slug }));
}

export default async function MeetingPage({ params }: Props) {
  const { slug } = await params;
  const idx = meetings.findIndex((m) => m.slug === slug);

  if (idx === -1) notFound();

  const meeting = meetings[idx];
  const prevMeeting = meetings[idx + 1] ?? null;
  const nextMeeting = meetings[idx - 1] ?? null;

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <div className="text-xs text-muted font-mono mb-6">
        <Link href="/meetings" className="hover:text-red transition-colors">
          ~/meetings
        </Link>
        <span> / {slug}</span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <div className="text-red text-xs font-mono mb-2">
          Meeting #{meeting.number}
        </div>
        <h1 className="text-2xl font-bold text-text mb-4">
          <span className="text-red">&gt;</span> {meeting.date}
        </h1>
        <p className="text-muted text-sm leading-relaxed max-w-2xl mb-5">
          {meeting.summary}
        </p>
        <div className="text-xs text-muted">
          <span className="text-text">{meeting.attendeeCount}</span> attendees
          {meeting.attendees.length > 0 && (
            <span className="ml-1 text-muted/60">
              ({meeting.attendees.join(", ")})
            </span>
          )}
        </div>
      </div>

      <div className="space-y-12">
        {/* Topics */}
        <section>
          <SectionHeader label="topics covered" />
          <ol className="space-y-3">
            {meeting.topics.map((topic, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted">
                <span className="text-red font-mono shrink-0 w-6 text-right">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span>{topic}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Decisions */}
        {meeting.decisions.length > 0 && (
          <section>
            <SectionHeader label="decisions & next steps" />
            <ul className="space-y-3">
              {meeting.decisions.map((decision, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted">
                  <span className="text-red shrink-0">→</span>
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Links */}
        {meeting.links.length > 0 && (
          <section>
            <SectionHeader label="links shared" />
            <ul className="space-y-3">
              {meeting.links.map((link, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span className="text-red shrink-0">↗</span>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-red-light transition-colors underline decoration-border underline-offset-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Notes */}
        {meeting.notes && (
          <section>
            <SectionHeader label="notes" />
            <div className="text-sm text-muted leading-relaxed border-l-2 border-border pl-4">
              {meeting.notes}
            </div>
          </section>
        )}
      </div>

      {/* Prev / Next */}
      <div className="mt-16 pt-8 border-t border-border flex justify-between text-xs">
        {prevMeeting ? (
          <Link
            href={`/meetings/${prevMeeting.slug}`}
            className="text-muted hover:text-red transition-colors"
          >
            ← meeting #{prevMeeting.number}
          </Link>
        ) : (
          <div />
        )}
        {nextMeeting ? (
          <Link
            href={`/meetings/${nextMeeting.slug}`}
            className="text-muted hover:text-red transition-colors"
          >
            meeting #{nextMeeting.number} →
          </Link>
        ) : (
          <div />
        )}
      </div>
    </main>
  );
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-xs text-red font-mono">##</span>
      <span className="text-xs text-muted uppercase tracking-widest">
        {label}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
