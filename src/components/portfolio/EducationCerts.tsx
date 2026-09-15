import { Award, BookOpen, GraduationCap, School, type LucideIcon } from "lucide-react";
import { Reveal, Section, SectionHeading } from "./Section";
import { CERTIFICATIONS, EDUCATION } from "@/lib/portfolio-data";

const ICONS: Record<string, LucideIcon> = { GraduationCap, BookOpen, School };

export function EducationCerts() {
  return (
    <>
      <Section id="education" tone="surface">
        <SectionHeading eyebrow="Education" title="Education" />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {EDUCATION.map((e, i) => {
            const Icon = ICONS[e.icon] ?? GraduationCap;
            return (
              <Reveal key={e.qualification} delay={i * 90}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow duration-300 hover:shadow-lift">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent/12 text-accent">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{e.qualification}</h3>
                  {e.institution ? (
                    <p className="mt-1 text-sm text-muted-foreground">{e.institution}</p>
                  ) : null}
                  <p className="mt-4 text-sm font-semibold text-accent">Graduated: {e.year}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section id="certifications">
        <SectionHeading eyebrow="Credentials" title="Certifications" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.name} delay={i * 90}>
              <article className="relative h-full overflow-hidden rounded-2xl border-2 border-dashed border-accent/35 bg-card p-7 shadow-card">
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent">
                    <Award className="size-6" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold">{c.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Issued {c.year}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
