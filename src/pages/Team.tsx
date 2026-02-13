import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
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
            Team
          </p>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
            leadership & Board
          </h1>

          <p className="text-primary-foreground/80 text-lg">
             Team members bring deep experience in education, development, community engagement, and nonprofit governance. 
             Our board provides strategic oversight while our executive director leads operations and programs on the ground.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-card">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">
            Leadership & Board
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Our leadership team and board members bring deep experience in
            education, development, community engagement, and nonprofit
            governance.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: "Weriath Kai", role: "Board Chair" },
              { name: "Executive Director", role: "Operations & Programs" },
              { name: "Board Members", role: "Governance & Advisory" },
            ].map((person) => (
              <div
                key={person.name}
                className="bg-background rounded-lg p-6 border text-center"
              >
                <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4" />
                <h3 className="font-semibold">{person.name}</h3>
                <p className="text-muted-foreground text-sm">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default Accountability;
