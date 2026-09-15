import { ArrowRight, BrainCircuit, GraduationCap, HeartHandshake, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Section";

const HIGHLIGHTS = [
  {
    icon: HeartHandshake,
    title: "Social Impact",
    text: "Supporting children, youth, families, and communities.",
  },
  {
    icon: BrainCircuit,
    title: "Digital Innovation",
    text: "Developing skills in AI, coding, and emerging technologies.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    text: "Actively building professional and technical capabilities.",
  },
];

function NetworkVisual() {
  return (
    <svg
      viewBox="0 0 420 420"
      role="img"
      aria-label="Abstract diagram connecting people, social impact and technology"
      className="h-auto w-full max-w-md"
    >
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="210" cy="210" r="200" fill="url(#glow)" />
      <g stroke="var(--accent)" strokeOpacity="0.45" strokeWidth="1.2">
        <circle cx="210" cy="210" r="70" fill="none" />
        <circle cx="210" cy="210" r="120" fill="none" strokeOpacity="0.28" />
        <circle cx="210" cy="210" r="170" fill="none" strokeOpacity="0.16" />
        <line x1="210" y1="210" x2="210" y2="40" />
        <line x1="210" y1="210" x2="357" y2="295" />
        <line x1="210" y1="210" x2="63" y2="295" />
        <line x1="210" y1="40" x2="357" y2="295" strokeOpacity="0.2" />
        <line x1="357" y1="295" x2="63" y2="295" strokeOpacity="0.2" />
        <line x1="63" y1="295" x2="210" y2="40" strokeOpacity="0.2" />
      </g>
      <g fill="var(--accent)">
        <circle cx="210" cy="40" r="9" />
        <circle cx="357" cy="295" r="9" />
        <circle cx="63" cy="295" r="9" />
        <circle cx="120" cy="120" r="4" fillOpacity="0.7" />
        <circle cx="310" cy="130" r="4" fillOpacity="0.7" />
        <circle cx="210" cy="360" r="4" fillOpacity="0.7" />
      </g>
      <circle cx="210" cy="210" r="52" fill="var(--navy)" />
      <text
        x="210"
        y="205"
        textAnchor="middle"
        fill="var(--navy-foreground)"
        fontSize="15"
        fontWeight="700"
        fontFamily="var(--font-display)"
      >
        SOCIAL
      </text>
      <text
        x="210"
        y="224"
        textAnchor="middle"
        fill="var(--accent)"
        fontSize="15"
        fontWeight="700"
        fontFamily="var(--font-display)"
      >
        IMPACT
      </text>
      <g
        fill="var(--navy-foreground)"
        fillOpacity="0.85"
        fontSize="13"
        fontFamily="var(--font-sans)"
        textAnchor="middle"
      >
        <text x="210" y="22">People</text>
        <text x="352" y="325">Technology</text>
        <text x="66" y="325">AI &amp; Digital</text>
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-32 pb-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pt-40 lg:pb-28">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-accent">
            <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
            Open to Opportunities
          </span>
          <p className="mt-7 font-display text-sm font-semibold tracking-[0.28em] text-navy-foreground/70 uppercase">
            Simangaliso Mthembu
          </p>
          <h1 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            Social Work Professional{" "}
            <span className="text-accent">|</span> Youth Development Advocate{" "}
            <span className="text-accent">|</span> AI &amp; Digital Skills Enthusiast
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
            Passionate about empowering people, supporting young people, and exploring how technology
            and artificial intelligence can create meaningful social impact.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="#projects">
                View My Projects <ArrowRight className="ml-1 size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-navy-foreground/30 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
            >
              <a href="#contact">
                <Mail className="mr-1 size-4" /> Contact Me
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="flex justify-center lg:justify-end">
          <NetworkVisual />
        </Reveal>
      </div>

      <div className="relative border-t border-navy-foreground/10 bg-background text-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
          <Reveal className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              <Sparkles className="size-3.5" /> Introduction
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Empowering People. Developing Skills. Exploring Technology.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I am a motivated and compassionate social work professional with a Bachelor of Social
                Work and a Postgraduate Diploma in Human Resource Management. My experience includes
                psychosocial counselling, child and youth care, peer education, advocacy, community
                engagement, and research.
              </p>
              <p>
                Alongside my professional experience, I am developing practical skills in artificial
                intelligence, Python, coding, digital workplace tools, and application development. I am
                interested in opportunities where people, technology, and social impact come together.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow duration-300 hover:shadow-lift">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent/12 text-accent">
                    <h.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
