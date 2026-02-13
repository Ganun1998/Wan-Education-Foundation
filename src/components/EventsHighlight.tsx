import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Star, Award, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import christmasFestival from "@/assets/christmas-festival.jpg";
import awardsCeremony from "@/assets/awards-ceremony.jpg";
import child3 from "@/assets/child3.png";


const events = [
  {
    icon: <Star size={20} />,
    title: "Christmas Festival & Celebration",
    description: "An annual community celebration recognizing student resilience and strengthening belonging.",
    timing: "December",
    image: christmasFestival,
  },
  {
    icon: <Award size={20} />,
    title: "End of Year Awards Ceremony",
    description: "Recognizing academic effort, leadership, and commitment to education across schools.",
    timing: "Jan (SS) / Jul (ETH)",
    image: awardsCeremony,
  },
  {
    icon: <Heart size={20} />,
    title: "Girls' Engagement Program",
    description: "Keeping girls in school through mentorship, dialogue, and life-skills activities.",
    timing: "Feb (ETH) / Jun (SS)",
    image: child3,
  },
];

const EventsHighlight = () => (
  <div>
    <div className="text-center mb-12">
      <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-3">Events & Programs</p>
      <h2 className="text-3xl md:text-4xl font-serif font-bold">Annual Programs That Transform Lives</h2>
      <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
        Year-round programs supporting learning, leadership, and student well-being across South Sudan and Ethiopia.
      </p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => (
        <motion.div
          key={event.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-background rounded-lg border overflow-hidden group hover:shadow-lg transition-shadow"
        >
          <div className="relative h-65 overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm text-xs font-medium text-primary px-3 py-1 rounded-full flex items-center gap-1">
              <Calendar size={12} />
              {event.timing}
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-2 text-primary mb-2">
              {event.icon}
              <h3 className="font-serif font-semibold text-base">{event.title}</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
    <div className="text-center mt-10">
      <Link to="/events">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          View All Events & Programs
          <ArrowRight size={16} className="ml-2" />
        </Button>
      </Link>
    </div>
  </div>
);

export default EventsHighlight;
