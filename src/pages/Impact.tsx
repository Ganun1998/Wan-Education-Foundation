import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import ImpactCounter from "@/components/ImpactCounter";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Impact = () => {

   useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-12 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-3">Measurable Change</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
            Our Impact
          </h1>
          <p className="text-primary-foreground/80 text-lg">
            We measure what matters. Every number represents a life, a community, and a step toward lasting change.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <ImpactCounter value={2500} suffix="+" label="Students Supported" />
          <ImpactCounter value={85} suffix="%" label="School Retention Rate" />
          <ImpactCounter value={45} suffix="%" label="Girls Enrolled" />
          <ImpactCounter value={15} label="Partner Schools" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <ImpactCounter value={120} suffix="+" label="Mentors Engaged" />
          <ImpactCounter value={500} suffix="+" label="Scholarships Awarded" />
          <ImpactCounter value={30} suffix="+" label="Communities Reached" />
          <ImpactCounter value={92} suffix="%" label="Program Completion" />
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-card">
        <div className="text-center mb-12">
          <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-3">Voices from the Field</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Stories of Change</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              quote: "Before the scholarship, I had given up on school. Now I am in my final year and I want to become a teacher so other children don't have to give up like I almost did.",
              name: "Akuol, 17",
              role: "Secondary School Student",
            },
            {
              quote: "When my daughter started receiving support, everything changed for our family. She brings home what she learns and teaches her younger brothers. Education lifts everyone.",
              name: "Mary, Parent",
              role: "Community Member",
            },
          ].map((story) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg p-8 border"
            >
              <Quote size={24} className="text-secondary mb-4" />
              <p className="text-muted-foreground leading-relaxed italic mb-6">"{story.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{story.name}</p>
                <p className="text-sm text-muted-foreground">{story.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-center">How We Measure Impact</h2>
          <div className="space-y-4">
            {[
              "Student enrollment, attendance, and completion tracking",
              "Gender-disaggregated data across all programs",
              "Pre- and post-program assessments for skills and academic performance",
              "Community feedback surveys and participatory evaluations",
              "Annual impact reports shared with donors and partners",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary text-xs font-bold">{i + 1}</span>
                </div>
                <p className="text-muted-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default Impact;
