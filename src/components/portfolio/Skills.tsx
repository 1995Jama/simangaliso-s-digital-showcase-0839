import {
  BarChart3,
  Brain,
  ClipboardList,
  Code2,
  FileCode,
  GitBranch,
  LayoutGrid,
  MessageSquare,
  NotebookPen,
  Sparkles,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { Reveal, Section, SectionHeading } from "./Section";
import { cn } from "@/lib/utils";
import {
  PROFESSIONAL_SKILLS,
  SOCIAL_SKILLS,
  TECH_SKILLS,
  type SkillLevel,
} from "@/lib/portfolio-data";

const ICONS: Record<string, LucideIcon> = {
  Brain,
  Code2,
  Terminal,
  GitBranch,
  FileCode,
  MessageSquare,
  Sparkles,
  LayoutGrid,
  ClipboardList,
  BarChart3,
  NotebookPen,
};

const LEVEL_STEPS: Record<SkillLevel, number> = {
  Learning: 1,
  Developing: 2,
  "Working Knowledge": 3,
};

function SkillList({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal>
      <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card">
        <h3 className="text-lg font-semibold">{title}</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {items.map((s) => (
            <li
              key={s}
              className="rounded-full border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Skills & Capabilities"
        subtitle="A combination of people-centred professional practice and growing technical and digital capability."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <SkillList title="Social & Community Skills" items={SOCIAL_SKILLS} />
        <SkillList title="Professional Skills" items={PROFESSIONAL_SKILLS} />
      </div>

      <Reveal className="mt-6">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 sm:flex sm:justify-between">
            <h3 className="min-w-0 text-lg font-semibold">Technology & Digital Skills</h3>
            <p className="text-xs text-muted-foreground">Honest self-assessed levels</p>
          </div>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_SKILLS.map((skill) => {
              const Icon = ICONS[skill.icon] ?? Sparkles;
              const steps = LEVEL_STEPS[skill.level];
              return (
                <li
                  key={skill.name}
                  className="rounded-xl border border-border bg-background p-4 transition-shadow duration-300 hover:shadow-card"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/12 text-accent">
                      <Icon className="size-4.5" />
                    </span>
                    <span className="min-w-0 truncate text-sm font-medium">{skill.name}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex gap-1.5" aria-hidden="true">
                      {[1, 2, 3].map((n) => (
                        <span
                          key={n}
                          className={cn(
                            "h-1.5 w-7 rounded-full",
                            n <= steps ? "bg-accent" : "bg-border",
                          )}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{skill.level}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
