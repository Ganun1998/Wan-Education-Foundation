import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Users, BookOpen, Heart, Shield, Award, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import ProgramCard from "@/components/ProgramCard";
import EventsHighlight from "@/components/EventsHighlight";
import student7 from "@/assets/student7.jpg";
import mission from "@/assets/mission.png";
import vision from "@/assets/vision.png";
import twin from "@/assets/twin.jpg";

const Index = () => {

    useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="min-h-screen bg-background border-8 border-primary">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={student7}
            alt="South Sudanese children walking to school"
            className="w-full h-full object-cover mb-16 attachment-fixed"
          />
          <div className="absolute inset-0 bg-foreground/70"/>
        </div>
        <div className="relative z-10 container mx-auto px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-background leading-tight mb-6"
          >
            Every Child Deserves a{" "}
            <span className="text-secondary">Future Built on Education</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-background/80 max-w-2xl mx-auto mb-8"
          >
            Supporting South Sudanese children and youth to access quality
            education, develop skills, and connect learning to opportunity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/get-involved">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8"
              >
                Support a Child's Education
              </Button>
            </Link>
            <Link to="/programs">
              <Button
                size="lg"
                variant="outline"
                className="border-background/40 text-background hover:bg-background/10 text-base px-8"
              >
                Explore Our Programs
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission snapshot */}
      <SectionWrapper className="bg-background">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-3">
                Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Community-Led Education for South Sudan's Future
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wan Education Foundation works to support children and youth in
              South Sudan to access quality education, remain in school, and
              build skills for life and livelihoods.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We prioritize vulnerable students affected by poverty,
              displacement, and limited access to schooling — partnering with
              communities, schools, diaspora networks, and development partners.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/about">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Learn About Us
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={twin}
              alt="South Sudanese student reading"
              className="shadow-xl w-full max-w-md mx-auto"
            />
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-lg p-4 shadow-lg">
              <p className="font-serif font-bold text-2xl">5</p>
              <p className="text-xs text-primary-foreground/80">
                Years of Impact
              </p>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src={mission}
                alt="Mission"
                className="w-full h-65 object-contain"
              />
            </motion.div>
          </div>

          {/* Vision Image – Right */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src={vision}
                alt="Vision"
                className="w-full h-65 object-contain"
              />
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Impact numbers 
      <SectionWrapper>
        <div className="text-center mb-12">
          <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-3">
            Our Impact
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Changing Lives Through Education
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <ImpactCounter value={2500} suffix="+" label="Students Supported" />
          <ImpactCounter value={85} suffix="%" label="Retention Rate" />
          <ImpactCounter value={45} suffix="%" label="Girls Enrolled" />
          <ImpactCounter value={15} label="Partner Schools" />
        </div>
      </SectionWrapper>
      */}

      {/* Programs preview */}
<SectionWrapper className="bg-white border-2 border-primary">
  <div className="text-center mb-12">
    <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-3">
      What We Do
    </p>
    <h2 className="text-3xl md:text-4xl font-serif font-bold">
      Our Programs
    </h2>
    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
      We deliver community-centered programs that address barriers to
      education and create pathways to opportunity.
    </p>
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
    <ProgramCard
      icon={<GraduationCap size={30} />}
      title="Scholarships & School Support"
      description="We provide financial assistance, school fees, uniforms, and essential learning materials to children who would otherwise be unable to attend school. By easing the economic burden on families, we help students not only enroll but remain in school with dignity, confidence, and the tools they need to succeed."
      delay={0.2}
    />

    <ProgramCard
      icon={<Users size={30} />}
      title="Mentorship & Academic Support"
      description="Through mentorship, tutoring, and academic guidance, we connect students with role models who inspire growth, discipline, and ambition. This program strengthens learning outcomes while also nurturing confidence, resilience, and life direction — ensuring students feel supported both inside and outside the classroom."
      delay={0.3}
    />

    <ProgramCard
      icon={<BookOpen size={30} />}
      title="Girls' Education & Safe Learning"
      description="We work to remove the unique barriers that prevent girls from accessing and completing their education. From targeted scholarships and menstrual health support to safe learning environments, this program empowers girls to stay in school, protect their dreams, and build futures where they can thrive and lead."
      delay={0.4}
    />

    <ProgramCard
      icon={<Award size={30} />}
      title="Skills & Youth Leadership"
      description="For older youth and out-of-school young people, we provide practical skills training, leadership development, and pathways to economic independence. This program equips young individuals with the confidence, abilities, and mindset needed to create opportunities for themselves and positively impact their communities."
      delay={0.5}
    />

    <ProgramCard
      icon={<Heart size={30} />}
      title="Community Education Support"
      description="Education thrives when communities are engaged. We collaborate with parents, teachers, and local leaders to strengthen school environments, encourage attendance, and promote shared responsibility. By building trust and local ownership, this program ensures sustainable, long-term educational impact."
      delay={0.6}
    />

    <ProgramCard
      icon={<Shield size={30} />}
      title="Accountability & Transparency"
      description="We believe trust is built through openness and measurable results. Every initiative is carefully monitored, evaluated, and documented to ensure resources are used effectively. Donors and partners receive clear reporting, reinforcing confidence that their support creates real, meaningful change."
      delay={0.7}
    />
  </div>
  <div className="text-center mt-10">
    <Link to="/programs">
      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
        View All Programs
      </Button>
    </Link>
  </div>
</SectionWrapper>


      {/* Events Highlight */}
      <SectionWrapper>
        <EventsHighlight />
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="bg-primary rounded-2xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
            Join Us in Building a Brighter Future
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Whether you donate, mentor, volunteer, or partner, your support
            helps us transform education in South Sudan — one student, one
            community at a time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/get-involved">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8"
              >
                Get Involved
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 px-8"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <div className="text-center mb-12">
          <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-3">Voices from the Field</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Stories of Change</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7x2 mx-auto">
          {[
            {
              quote: "Before the scholarship, I had given up on school. Now I am in my final year and I want to become a teacher so other children don't have to give up like I almost did.",
              name: "Nyamal, 17",
              role: "Secondary School Student",
            },
            {
              quote: "When my daughter started receiving support, everything changed for our family. She brings home what she learns and teaches her younger brothers. Education lifts everyone.",
              name: "Mary, Parent",
              role: "Community Member",
            },
            {
              quote: "When my Son started receiving support, everything changed for our family. He brings home what he learns and teaches his younger brothers. Education lifts everyone.",
              name: "Nyawech, Parent",
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

      {/* Trust indicators */}
      <SectionWrapper className="bg-card">
        <div className="text-center">
          <p className="text-primary text-lg mb-6">
            Trusted by communities, donors, and partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground/60">
            <div className="flex items-center gap-2">
              <Shield size={20} className="text-primary" />
              <span className="text-medium font-medium text-primary">Registered Nonprofit</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart size={20} className="text-primary" />
              <span className="text-medium font-medium text-primary">Community-Led</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={20} className="text-primary" />
              <span className="text-medium font-medium text-primary">
                Transparent Governance
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} className="text-primary" />
              <span className="text-medium font-medium text-primary">Diaspora-Supported</span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default Index;
