import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContactSubmission } from "@shared/schema";

export default function Home() {
  const handleContactSubmit = async (data: InsertContactSubmission) => {
    return apiRequest("POST", "/api/contact", data);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact onSubmit={handleContactSubmit} />
      <Footer />
    </div>
  );
}
