import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import student7 from "@/assets/student7.jpg";
import student3 from "@/assets/student3.jpg";
import { motion } from "framer-motion";
import mission from "@/assets/mission.png"
import vision from "@/assets/vision.png"
import twin from "@/assets/twin.jpg";

const About = () => {

   useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className="min-h-screen bg-background border-8 border-primary">
      <Navbar />

      {/* Hero */}
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
            Take Action
          </p>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
            Get Involved
          </h1>

          <p className="text-primary-foreground/80 text-lg">
            There are many ways to support education in South Sudan and
            Ethiopia. Every action — big or small — makes a difference.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">
              Why Wan Education Foundation Exists
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              South Sudan faces one of the world's most severe education crises.
              Decades of conflict, displacement, and poverty have left millions
              of children out of school. For those who do enroll, dropout rates
              remain alarmingly high due to economic hardship, insecurity, and
              the absence of trained teachers and learning materials.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wan Education Foundation was created by volunteers South Sudanese
              citizens who believe that education is the most powerful tool for
              lasting change. We bridge the gap between communities, schools,
              and resources — ensuring every child has the opportunity to learn,
              grow, and thrive.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our approach is community-led and diaspora-supported, combining
              local knowledge with global partnerships to deliver practical,
              accountable programs that produce real results.
            </p>
          </div>
          <img
            src={twin}
            alt="Classroom in South Sudan"
            className="rounded-lg shadow-xl w-full"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-card">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={student3}
            alt="Community engagement"
            className="rounded-lg shadow-xl w-full order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-serif font-bold mb-6">Our Approach</h2>
            <ul className="space-y-4">
              {[
                {
                  title: "Community-Led",
                  desc: "We work with, not for, communities — ensuring local ownership and sustainability.",
                },
                {
                  title: "Diaspora-Connected",
                  desc: "We harness the skills, networks, and resources of the South Sudanese diaspora worldwide.",
                },
                {
                  title: "Evidence-Based",
                  desc: "Every program is informed by data and continuously evaluated for impact.",
                },
                {
                  title: "Partner-Driven",
                  desc: "We collaborate with schools, NGOs, UN agencies, and development partners for scale and depth.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
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

      <Footer />
    </div>
  );
};

export default About;
