import { useEffect } from "react";
import {Heart, Users, BookOpen, Lightbulb, Shield, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import student7 from "@/assets/student7.jpg";

const values = [
  { icon: <Heart size={24} />, title: "Student-First", desc: "Every decision starts with the student's needs and potential." },
  { icon: <Users size={24} />, title: "Equity", desc: "We prioritize those most excluded from education — girls, displaced children, and rural communities." },
  { icon: <Sparkles size={24} />, title: "Community-Led Solutions", desc: "Real change comes from within. Communities lead, and we support." },
  { icon: <BookOpen size={24} />, title: "Learning with Purpose", desc: "Education must connect to opportunity, skills, and real-world outcomes." },
  { icon: <Lightbulb size={24} />, title: "Resilience & Innovation", desc: "We adapt creatively to complex challenges in fragile contexts." },
  { icon: <Shield size={24} />, title: "Accountability & Transparency", desc: "We are accountable to students, communities, donors, and partners." },
];

const VisionMission = () => {

   useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

       <section className="relative pt-24 pb-12 bg-primary min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={student7}
            alt="Students celebrating at a school event"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-3">
            Core Values
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
            Core Values and principles
          </h1>
        </div>
      </section>

      <SectionWrapper className="bg-card">
        <div className="text-center mb-12">
          <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-3">What Guides Us</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Our Core Values</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-lg p-6 border text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                {v.icon}
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default VisionMission;
