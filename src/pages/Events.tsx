import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award, Heart, Users, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import student7 from "@/assets/student7.jpg";
import student1 from "@/assets/student1.jpg";
import student4 from "@/assets/student4.jpg";
import girl from "@/assets/girl.jpg";

const timelineEvents = [
  { month: "December", event: "Christmas Festival", location: "South Sudan & Ethiopia", color: "bg-secondary" },
  { month: "January", event: "Awards Ceremony", location: "South Sudan", color: "bg-primary" },
  { month: "February", event: "Girls' Engagement Program", location: "Ethiopia", color: "bg-accent" },
  { month: "June", event: "Girls' Engagement Program", location: "South Sudan", color: "bg-accent" },
  { month: "July", event: "Awards Ceremony", location: "Ethiopia", color: "bg-primary" },
];

const Events = () => {

   useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className="min-h-screen bg-background border-8 border-primary">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={student7} alt="Students celebrating at a school event" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-secondary font-medium text-sm tracking-widest uppercase mb-4"
          >
            Annual Programs & Events
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl font-serif font-bold text-background leading-tight mb-6"
          >
            Building Confidence, Celebrating Progress, and{" "}
            <span className="text-secondary">Protecting Futures</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-background/80 max-w-2xl mx-auto"
          >
            Wan Education Foundation delivers year-round programs that support learning, leadership, and student well-being across South Sudan and refugee communities in Ethiopia.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Year-Round, Community-Centered Programs</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Wan Education Foundation runs structured, recurring programs aligned with the academic year and tailored to local contexts. From celebrations that strengthen belonging, to awards that motivate learners, to programs that keep girls in school — every event is designed to support the whole student.
          </p>
        </div>
      </SectionWrapper>

      {/* Program 1: Christmas Festival */}
      <SectionWrapper className="bg-card">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Star className="text-secondary" size={20} />
              <p className="text-secondary font-medium text-sm tracking-widest uppercase">Annual Event</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Christmas Festival & Student Celebration</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              An annual community celebration bringing together students, families, teachers, and mentors to mark the end of the year, strengthen belonging, and recognize student participation and resilience.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="text-black shrink-0" />
                <span className="text-muted-foreground">Refugee communities and local schools</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar size={16} className="text-primary shrink-0" />
                <span className="text-muted-foreground">Held annually in December</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-serif font-semibold text-sm uppercase tracking-wider text-foreground">Key Outcomes</h4>
              {["Strengthens student morale and community connection", "Encourages continued school attendance", "Creates a safe and joyful learning environment"].map((outcome) => (
                <div key={outcome} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={14} className="text-secondary mt-0.5 shrink-0" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={student1} alt="Students celebrating at Christmas festival" className="rounded-lg shadow-xl w-full" />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Program 2: Awards Ceremony */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <img src={student4} alt="Students receiving certificates at awards ceremony" className="rounded-lg shadow-xl w-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <Award className="text-secondary" size={20} />
              <p className="text-secondary font-medium text-sm tracking-widest uppercase">Recognition</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">End of Academic Year Awards & Recognition</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A formal ceremony recognizing academic effort, improvement, leadership, and commitment to education. Awards motivate students to remain engaged and aim higher.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="text-primary shrink-0" />
                <span className="text-muted-foreground">Tharpam Refugee Camp, Ethiopia & South Sudan</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar size={16} className="text-primary shrink-0" />
                <span className="text-muted-foreground">Ethiopia: July · South Sudan: January</span>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="font-serif font-semibold text-sm uppercase tracking-wider text-foreground mb-2">Awards Include</h4>
              <div className="flex flex-wrap gap-2">
                {["Academic Excellence", "Most Improved Student", "Leadership & Attendance"].map((award) => (
                  <span key={award} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{award}</span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-serif font-semibold text-sm uppercase tracking-wider text-foreground">Key Outcomes</h4>
              {["Increased motivation and retention", "Positive reinforcement for learners", "Strong school–community engagement"].map((outcome) => (
                <div key={outcome} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={14} className="text-secondary mt-0.5 shrink-0" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Program 3: Girls' Engagement */}
      <SectionWrapper className="bg-card">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Heart className="text-secondary" size={20} />
              <p className="text-secondary font-medium text-sm tracking-widest uppercase">Girls' Program</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Girls' Engagement & Retention Program</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A mid-academic-year program focused on keeping girls in school by addressing social, economic, and confidence barriers through dialogue, mentorship, and life-skills activities.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <Calendar size={16} className="text-primary shrink-0" />
                <span className="text-muted-foreground">Ethiopia: February · South Sudan: June</span>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="font-serif font-semibold text-sm uppercase tracking-wider text-foreground mb-2">Focus Areas</h4>
              <div className="flex flex-wrap gap-2">
                {["Girls' Confidence & Leadership", "School Retention & Attendance", "Community Awareness"].map((area) => (
                  <span key={area} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">{area}</span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-serif font-semibold text-sm uppercase tracking-wider text-foreground">Key Outcomes</h4>
              {["Improved attendance among girls", "Increased confidence and participation", "Community support for girls' education"].map((outcome) => (
                <div key={outcome} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={14} className="text-secondary mt-0.5 shrink-0" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={girl} alt="Girls in group discussion and mentorship workshop" className="rounded-lg shadow-xl w-full" />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-3">Annual Calendar</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Program Timeline</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />
            {timelineEvents.map((item, index) => (
              <motion.div
                key={`${item.month}-${item.event}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center gap-4 mb-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full ${item.color} -translate-x-1/2 ring-4 ring-background z-10`} />
                <div className="ml-10 md:ml-0 md:w-1/2 bg-card border rounded-lg p-4 shadow-sm">
                  <p className="font-serif font-bold text-foreground">{item.month}</p>
                  <p className="text-sm font-medium text-primary">{item.event}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                    <MapPin size={12} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="bg-primary rounded-2xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
            Support Student Growth Beyond the Classroom
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Your support helps us celebrate, protect, and empower students through programs that go beyond academics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/get-involved">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8">
                Support a Student
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 px-8">
                Partner With Us
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 px-8">
                Become a Mentor
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default Events;
