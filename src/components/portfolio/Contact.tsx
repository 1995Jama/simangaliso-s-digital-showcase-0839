import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal, Section, SectionHeading } from "./Section";
import { CONTACT } from "@/lib/portfolio-data";

type Fields = "name" | "email" | "subject" | "message";
type Errors = Partial<Record<Fields, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function Contact() {
  const [values, setValues] = useState<Record<Fields, string>>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const set = (field: Fields, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (values.name.trim().length < 2) e.name = "Please enter your name.";
    if (!EMAIL_RE.test(values.email.trim())) e.email = "Please enter a valid email address.";
    if (values.subject.trim().length < 3) e.subject = "Please add a subject.";
    if (values.message.trim().length < 10) e.message = "Please write at least 10 characters.";
    return e;
  };

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    const subject = encodeURIComponent(values.subject);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app to send the message.");
  };

  const fieldClass = (field: Fields) => (errors[field] ? "border-destructive" : "");

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Connect"
        subtitle="I am open to opportunities that allow me to contribute my social work, youth development, HR, research, AI, and digital skills. Feel free to get in touch."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="space-y-4">
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-shadow duration-300 hover:shadow-lift"
          >
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
              <Mail className="size-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Email
              </span>
              <span className="block truncate text-sm font-medium">{CONTACT.email}</span>
            </span>
          </a>

          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-shadow duration-300 hover:shadow-lift"
          >
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
              <Phone className="size-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Phone
              </span>
              <span className="block text-sm font-medium">{CONTACT.phone}</span>
            </span>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
              <MapPin className="size-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Location
              </span>
              <span className="block text-sm font-medium">{CONTACT.location}</span>
            </span>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Profiles
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Button variant="outline" size="sm" disabled title="Link to be added">
                <Github className="mr-1 size-4" /> GitHub — link coming soon
              </Button>
              <Button variant="outline" size="sm" disabled title="Link to be added">
                <Linkedin className="mr-1 size-4" /> LinkedIn — link coming soon
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={values.name}
                  onChange={(e) => set("name", e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={fieldClass("name")}
                  placeholder="Your full name"
                />
                {errors.name ? (
                  <p id="name-error" className="text-xs text-destructive">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => set("email", e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={fieldClass("email")}
                  placeholder="you@example.com"
                />
                {errors.email ? (
                  <p id="email-error" className="text-xs text-destructive">
                    {errors.email}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mt-5 grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                value={values.subject}
                onChange={(e) => set("subject", e.target.value)}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                className={fieldClass("subject")}
                placeholder="What is this about?"
              />
              {errors.subject ? (
                <p id="subject-error" className="text-xs text-destructive">
                  {errors.subject}
                </p>
              ) : null}
            </div>

            <div className="mt-5 grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={6}
                value={values.message}
                onChange={(e) => set("message", e.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={fieldClass("message")}
                placeholder="Share a few details about the opportunity or enquiry."
              />
              {errors.message ? (
                <p id="message-error" className="text-xs text-destructive">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
              Send Message <Send className="ml-1 size-4" />
            </Button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
