import { Briefcase } from "lucide-react";
import { Reveal, Section, SectionHeading } from "./Section";
import { EXPERIENCE } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Professional Experience"
        subtitle="Roles focused on counselling, youth development, and care work with children, young people, and communities."
      />

      <ol className="relative mt-12 space-y-8 border-l border-border pl-6 sm:pl-10">
        {EXPERIENCE.map((job, i) => (
          <li key={job.role} className="relative">
            <span
              className="absolute -left-[calc(1.5rem+7px)] top-6 inline-flex size-3.5 items-center justify-center rounded-full border-2 border-accent bg-background sm:-left-[calc(2.5rem+7px)]"
              aria-hidden="true"
            />
            <Reveal delay={i * 90}>
              <article className="rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow duration-300 hover:shadow-lift">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:justify-between">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
                      <Briefcase className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold">{job.role}</h3>
                      <p className="text-sm font-medium text-accent">{job.org}</p>
                    </div>
                  </div>
                  <p className="shrink-0 text-xs font-medium text-muted-foreground sm:text-right">
                    {job.period}
                  </p>
                </div>
                <ul className="mt-5 space-y-2">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
