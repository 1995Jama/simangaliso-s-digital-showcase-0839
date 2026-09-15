import { Handshake, Heart, Lightbulb, TrendingUp } from "lucide-react";
import { Reveal, Section, SectionHeading } from "./Section";

const PRINCIPLES = [
  { icon: Heart, title: "Empathy", text: "Understanding people and their individual experiences." },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Exploring technology and new approaches to solving problems.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    text: "Working effectively with people, teams, communities, and organisations.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    text: "Constantly learning and developing professionally and technically.",
  },
];

const PARAGRAPHS = [
  "I am a passionate social work professional committed to empowering young people and creating safe, supportive environments where individuals can grow and reach their full potential.",
  "My professional journey has included roles as a Psychosocial Counsellor, Peer Educator, and Child and Youth Care Worker. Through these experiences, I have developed strong skills in counselling, psychosocial support, crisis intervention, group facilitation, advocacy, youth development, programme implementation, communication, and community engagement.",
  "I also hold a Postgraduate Diploma in Human Resource Management, which has strengthened my understanding of people management, organisational environments, communication, and professional development.",
  "My growing interest in technology has led me to participate in programmes including the FNB App Academy and Capaciti AI Accelerator. Through these programmes, I have gained practical exposure to artificial intelligence, Python, coding, application development, GitHub, Microsoft 365, ChatGPT, Lovable, and other digital tools.",
  "I am particularly interested in opportunities where technology can be used to solve real-world problems, improve access to services, empower communities, and create positive social impact.",
];

export function About() {
  return (
    <Section id="about" tone="surface">
      <SectionHeading eyebrow="About" title="About Me" />
      <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
          {PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>

        <div>
          <Reveal>
            <h3 className="text-xl font-semibold">My Approach</h3>
          </Reveal>
          <ul className="mt-5 space-y-4">
            {PRINCIPLES.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 80}>
                  <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-shadow duration-300 hover:shadow-lift">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
                      <p.icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-semibold">{p.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
