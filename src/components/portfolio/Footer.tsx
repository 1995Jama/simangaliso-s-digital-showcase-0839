import { Github, Linkedin, Mail } from "lucide-react";
import { CONTACT } from "@/lib/portfolio-data";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy px-5 py-14 text-navy-foreground sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="font-display text-lg font-bold tracking-[0.16em] uppercase">
              Simangaliso Mthembu
            </p>
            <p className="mt-2 text-sm text-navy-foreground/70">
              Social Work • Human Resources • AI • Digital Innovation
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <nav aria-label="Footer navigation">
              <p className="text-xs font-semibold tracking-wide text-navy-foreground/60 uppercase">
                Explore
              </p>
              <ul className="mt-3 space-y-2">
                {LINKS.map((l) => (
                  <li key={l.id}>
                    <a
                      href={`#${l.id}`}
                      className="text-sm text-navy-foreground/80 transition-colors hover:text-accent"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-xs font-semibold tracking-wide text-navy-foreground/60 uppercase">
                Connect
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="text-navy-foreground/55" title="Link to be added">
                  <span className="inline-flex items-center gap-2">
                    <Github className="size-4" /> GitHub — coming soon
                  </span>
                </li>
                <li className="text-navy-foreground/55" title="Link to be added">
                  <span className="inline-flex items-center gap-2">
                    <Linkedin className="size-4" /> LinkedIn — coming soon
                  </span>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="inline-flex items-center gap-2 text-navy-foreground/80 transition-colors hover:text-accent"
                  >
                    <Mail className="size-4" /> Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-navy-foreground/12 pt-6 text-xs text-navy-foreground/60">
          © 2026 Simangaliso Mthembu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
