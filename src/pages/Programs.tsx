import { useEffect } from "react";
import { GraduationCap, Users, BookOpen, Award, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import HeroEducation from "@/assets/hero-education.jpg";


const programs = [
  {
    icon: <GraduationCap size={35} />,
    title: "Scholarships & School Support",
    problem: "Thousands of children in South Sudan cannot attend school due to inability to pay fees, buy uniforms, or access basic learning materials.",
    solution: "We provide scholarships, school supplies, and fee support to vulnerable children — removing the financial barriers that keep them out of classrooms.",
    beneficiaries: "Primary and secondary school students from low-income, displaced, and rural families.",
    outcomes: "Increased enrollment, improved attendance, and higher completion rates among supported students.",
  },
  {
    icon: <Users size={35} />,
    title: "Mentorship & Academic Support",
    problem: "Many students lack academic guidance and personal support, leading to low performance and high dropout rates.",
    solution: "We match students with trained mentors and provide tutoring, study groups, and academic counseling to strengthen learning outcomes.",
    beneficiaries: "Students at risk of dropping out, learners with academic challenges, and first-generation school attendees.",
    outcomes: "Improved grades, increased confidence, and stronger connections between students, schools, and families.",
  },
  {
    icon: <BookOpen size={35} />,
    title: "Girls' Education & Safe Learning",
    problem: "Girls in South Sudan face disproportionate barriers to education, including early marriage, gender-based violence, and lack of sanitation facilities.",
    solution: "We provide targeted support for girls including mentorship, sanitary supplies, safe learning spaces, and advocacy for girls' education rights.",
    beneficiaries: "Girls in primary and secondary school, especially in rural and conflict-affected areas.",
    outcomes: "Higher girl enrollment and retention, reduced dropout due to menstruation, and increased community support for girls' education.",
  },
  {
    icon: <Award size={35} />,
    title: "Skills & Youth Leadership",
    problem: "Many youth who missed formal education lack skills to earn a livelihood, participate in civic life, or lead their communities.",
    solution: "We offer vocational training, life skills workshops, and leadership development programs for out-of-school and older youth.",
    beneficiaries: "Youth aged 15–30, including out-of-school youth, young mothers, and former child soldiers.",
    outcomes: "Youth equipped with employable skills, increased self-reliance, and active participation in community development.",
  },
  {
    icon: <Heart size={35} />,
    title: "Community Education Support",
    problem: "Education systems are weakened when communities are not engaged in supporting schools and students.",
    solution: "We mobilize parents, teachers, and local leaders to participate in school governance, learning support, and education advocacy.",
    beneficiaries: "Parents, teachers, school leaders, and local governance bodies.",
    outcomes: "Stronger school-community partnerships, improved school management, and sustained educational progress.",
  },
];

const Programs = () => {

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
            What We Do
          </p>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
            Our Programs
          </h1>

          <p className="text-primary-foreground/80 text-lg">
            Delivering community-centered programs that address barriers to
            education and create pathways to opportunity.
          </p>
        </div>
      </section>

      {programs.map((program, i) => (
        <SectionWrapper
          key={program.title}
          className={i % 2 === 0 ? "" : "bg-card"}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                {program.icon}
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold pt-2">
                {program.title}
              </h2>
            </div>
            <div className="grid sm:grid-cols-1 gap-6 ml-0 md:ml-18 border-4 border-primary">
              <div className="rounded-lg p-5">
                <h3 className="font-semibold text-accent text-lg uppercase tracking-wide mb-2">
                  Problem Addressed
                </h3>
                <p className="text-black text-lg leading-relaxed">
                  {program.problem}
                </p>
              </div>
              <div className="rounded-lg p-5">
                <h3 className="font-semibold text-primary text-lg uppercase tracking-wide mb-2">
                  Our Solution
                </h3>
                <p className="text-black text-lg leading-relaxed">
                  {program.solution}
                </p>
              </div>
              <div className="rounded-lg p-5">
                <h3 className="font-semibold text-secondary text-lg uppercase tracking-wide mb-2">
                  Target Beneficiaries
                </h3>
                <p className="text-black text-lg leading-relaxed">
                  {program.beneficiaries}
                </p>
              </div>
              <div className="rounded-lg p-5">
                <h3 className="font-semibold text-forest text-lg uppercase tracking-wide mb-2">
                  Expected Outcomes
                </h3>
                <p className="text-black text-lg leading-relaxed">
                  {program.outcomes}
                </p>
              </div>
            </div>
          </motion.div>
        </SectionWrapper>
      ))}

      <Footer />
    </div>
  );
};

export default Programs;
