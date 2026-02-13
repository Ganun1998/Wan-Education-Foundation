import { useEffect } from "react";
import { Heart, Users, HandHeart, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import HeroEducation from "@/assets/hero-education.jpg";

const ways = [
  {
    icon: <Heart size={28} />,
    title: "Donate",
    desc: "Your financial support directly funds scholarships, school supplies, and program delivery for students in South Sudan.",
    cta: "Make a Donation",
    details: [
      "One-time or recurring donations accepted",
      "Support a specific student or program",
      "International and local giving options",
      "Tax-deductible where applicable",
    ],
  },
  {
    icon: <Users size={28} />,
    title: "Partner With Us",
    desc: "We welcome partnerships with NGOs, INGOs, foundations, UN agencies, corporations, and governments aligned with our mission.",
    cta: "Explore Partnerships",
    details: [
      "Program co-design and implementation",
      "Technical assistance and capacity building",
      "Joint fundraising and advocacy",
      "Research and knowledge sharing",
    ],
  },
  {
    icon: <HandHeart size={28} />,
    title: "Mentor or Volunteer",
    desc: "Share your time, skills, and experience to guide South Sudanese students toward their goals.",
    cta: "Become a Mentor",
    details: [
      "Remote and in-person mentorship",
      "Academic tutoring and career guidance",
      "Skills workshops and training",
      "Flexible time commitments",
    ],
  },
  {
    icon: <Globe size={28} />,
    title: "Diaspora Engagement",
    desc: "South Sudanese communities worldwide can play a vital role in supporting education back home.",
    cta: "Join the Diaspora Network",
    details: [
      "Community fundraising events",
      "Skills-sharing and professional mentoring",
      "Advocacy and awareness campaigns",
      "Cultural events and solidarity actions",
    ],
  },
];

const GetInvolved = () => {

    useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-24 pb-12 bg-primary min-h-[70vh] flex items-center">
  <div className="absolute inset-0">
    <img
      src={HeroEducation}
      alt="Students celebrating at a school event"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-foreground/60" />
  </div>

  <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
    <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-3">
      Take Action
    </p>

    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
      Get Involved
    </h1>

    <p className="text-primary-foreground/80 text-lg">
      There are many ways to support education in South Sudan and Ethiopia. Every action — big or small — makes a difference.
    </p>
  </div>
</section>


      {ways.map((way, i) => (
        <SectionWrapper key={way.title} className={i % 2 === 0 ? "" : "bg-card"}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-5 gap-8 items-start">
              <div className="md:col-span-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
                    {way.icon}
                  </div>
                  <h2 className="text-2xl font-serif font-bold">{way.title}</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">{way.desc}</p>
                <Link to="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    {way.cta}
                  </Button>
                </Link>
              </div>
              <div className="md:col-span-2 bg-card rounded-lg p-5 border-2 border-primary">
                <h3 className="font-semibold text-lg uppercase tracking-wide text-primary mb-3">How It Works</h3>
                <ul className="space-y-2">
                  {way.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-2 text-lg text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </SectionWrapper>
      ))}

      <Footer />
    </div>
  );
};

export default GetInvolved;
