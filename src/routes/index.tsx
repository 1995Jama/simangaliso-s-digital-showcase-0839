import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { EducationCerts } from "@/components/portfolio/EducationCerts";
import { CareerFocus } from "@/components/portfolio/CareerFocus";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const TITLE = "Simangaliso Mthembu | Social Work, AI & Digital Professional";
const DESCRIPTION =
  "Professional portfolio of Simangaliso Mthembu, a social work professional and emerging AI and digital technology practitioner with experience in youth development, counselling, research, HR, and community engagement.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Simangaliso Mthembu, Social Work, Youth Development, Psychosocial Counselling, Human Resource Management, Artificial Intelligence, AI, Python, Digital Skills, Technology, Social Impact, South Africa",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <EducationCerts />
        <CareerFocus />
        <Contact />
      </main>
      <Footer />
      <Toaster />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Simangaliso Mthembu",
            jobTitle: "Social Work Professional",
            email: "mailto:smangamthembu1611@yahoo.com",
            telephone: "+27620834437",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Pretoria",
              addressCountry: "ZA",
            },
            alumniOf: { "@type": "CollegeOrUniversity", name: "University of KwaZulu-Natal" },
            knowsAbout: [
              "Social Work",
              "Youth Development",
              "Psychosocial Counselling",
              "Human Resource Management",
              "Artificial Intelligence",
              "Python",
            ],
          }),
        }}
      />
    </div>
  );
}
