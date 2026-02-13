import { useEffect } from "react";
import { Shield, Users, Eye, ClipboardCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import student7 from "@/assets/student7.jpg"

const Accountability = () => {

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
            Take Action
          </p>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
            Accountability & Transparency
          </h1>

          <p className="text-primary-foreground/80 text-lg">
              We hold ourselves to the highest standards of transparence, accountability, and ethical governance
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">
              Our Commitment to Transparency
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wan Education Foundation is a registered nonprofit organization in
              South Sudan. We are committed to operating with integrity,
              transparency, and accountability to the communities we serve, the
              donors who support us, and the partners who work alongside us.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We maintain clear governance structures, regular financial
              reporting, and rigorous program monitoring to ensure that every
              resource is used effectively and every outcome is documented.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: <Shield size={24} />,
                title: "Registered Nonprofit",
                desc: "Legally registered and compliant in South Sudan",
              },
              {
                icon: <Users size={24} />,
                title: "Board Governance",
                desc: "Independent board providing strategic oversight",
              },
              {
                icon: <Eye size={24} />,
                title: "Financial Transparency",
                desc: "Regular reporting to donors and stakeholders",
              },
              {
                icon: <ClipboardCheck size={24} />,
                title: "M&E Framework",
                desc: "Continuous monitoring and evaluation of programs",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-lg p-5 border text-center"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default Accountability;
