import {
  Briefcase,
  CircleCheckBig,
  Cpu,
  HandHeart,
  Handshake,
  Heart,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal, Section, SectionHeading } from "./Section";
import { VALUES } from "@/lib/portfolio-data";

const PILLARS = [
  {
    icon: Users,
    title: "People",
    text: "Social work, counselling, youth development, communication, empathy, and advocacy.",
  },
  {
    icon: Briefcase,
    title: "Business",
    text: "Human resource management, teamwork, organisational understanding, and professional communication.",
  },
  {
    icon: Cpu,
    title: "Technology",
    text: "AI, coding, Python, digital tools, application development, and emerging technologies.",
  },
];

const VALUE_ICONS: Record<string, LucideIcon> = {
  Heart,
  ShieldCheck,
  HandHeart,
  CircleCheckBig,
  TrendingUp,
  Users,
  Lightbulb,
  Handshake,
};

function VennDiagram() {
  return (
    <svg
      viewBox="0 0 360 320"
      role="img"
      aria-label="Diagram showing People, Business and Technology overlapping at Social Impact"
      className="h-auto w-full max-w-sm"
    >
      <g fillOpacity="0.16" stroke="var(--accent)" strokeOpacity="0.55">
        <circle cx="180" cy="115" r="95" fill="var(--accent)" />
        <circle cx="115" cy="215" r="95" fill="var(--accent)" />
        <circle cx="245" cy="215" r="95" fill="var(--accent)" />
      </g>
      <g
        fill="var(--navy-foreground)"
        fontSize="15"
        fontWeight="700"
        fontFamily="var(--font-display)"
        textAnchor="middle"
      >
        <text x="180" y="55">People</text>
        <text x="72" y="268">Business</text>
        <text x="288" y="268">Technology</text>
      </g>
      <text
        x="180"
        y="181"
        textAnchor="middle"
        fill="var(--accent)"
        fontSize="14"
        fontWeight="700"
        fontFamily="var(--font-display)"
      >
        SOCIAL IMPACT
      </text>
    </svg>
  );
}

export function CareerFocus() {
  return (
    <>
      <Section id="focus" tone="navy">
        <SectionHeading
          eyebrow="Career Focus"
          title="What I Bring"
          subtitle="My work sits where people, business, and technology meet — and that intersection is where I believe real social impact happens."
          invert
        />
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex justify-center">
            <VennDiagram />
          </Reveal>
          <div className="grid gap-5">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="flex gap-4 rounded-2xl border border-navy-foreground/12 bg-navy-foreground/5 p-6">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <p.icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-foreground/75">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="values" tone="surface">
        <SectionHeading eyebrow="Values" title="Professional Values" align="center" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => {
            const Icon = VALUE_ICONS[v.icon] ?? Heart;
            return (
              <Reveal key={v.name} delay={(i % 4) * 70}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-shadow duration-300 hover:shadow-lift">
                  <span className="mx-auto inline-flex size-11 items-center justify-center rounded-xl bg-accent/12 text-accent">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-semibold">{v.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}
