import { useState } from "react";
import { ArrowUpRight, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal, Section, SectionHeading } from "./Section";
import { PROJECTS, type Project } from "@/lib/portfolio-data";

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li
          key={t}
          className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section id="projects" tone="surface">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured Projects"
        subtitle="Projects and learning experiences that demonstrate my growing capabilities across technology, research, youth development, and social impact."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.id} delay={i * 90}>
            <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow duration-300 hover:shadow-lift">
              <span className="w-fit rounded-full bg-accent/12 px-3 py-1 text-xs font-semibold text-accent">
                {p.badge}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
              <p className="mt-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {p.category}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

              <div className="mt-5">
                <h4 className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase">
                  <Wrench className="size-3.5 text-accent" /> Tools
                </h4>
                <div className="mt-2">
                  <Chips items={p.tools} />
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-xs font-semibold tracking-wide uppercase">Skills developed</h4>
                <p className="mt-2 text-sm text-muted-foreground">{p.skills.join(" · ")}</p>
              </div>

              <div className="mt-6 pt-2">
                <Button variant="outline" className="w-full" onClick={() => setSelected(p)}>
                  View Details <ArrowUpRight className="ml-1 size-4" />
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Dialog open={Boolean(selected)} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          {selected ? (
            <>
              <DialogHeader>
                <span className="w-fit rounded-full bg-accent/12 px-3 py-1 text-xs font-semibold text-accent">
                  {selected.badge}
                </span>
                <DialogTitle className="mt-2 text-2xl">{selected.title}</DialogTitle>
                <DialogDescription className="text-xs font-medium tracking-wide uppercase">
                  {selected.category}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 text-sm leading-relaxed">
                <div>
                  <h4 className="font-display font-semibold">Overview</h4>
                  <p className="mt-2 text-muted-foreground">{selected.description}</p>
                </div>
                <div>
                  <h4 className="font-display font-semibold">My Role</h4>
                  <p className="mt-2 text-muted-foreground">{selected.role}</p>
                </div>
                <div>
                  <h4 className="font-display font-semibold">Technologies & Tools</h4>
                  <div className="mt-2">
                    <Chips items={selected.tools} />
                  </div>
                </div>
                <div>
                  <h4 className="font-display font-semibold">Skills Developed</h4>
                  <div className="mt-2">
                    <Chips items={selected.skills} />
                  </div>
                </div>
                <div>
                  <h4 className="font-display font-semibold">Key Learning</h4>
                  <p className="mt-2 text-muted-foreground">{selected.keyLearning}</p>
                </div>
                <div>
                  <h4 className="font-display font-semibold">Social & Professional Impact</h4>
                  <p className="mt-2 text-muted-foreground">{selected.impact}</p>
                </div>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
