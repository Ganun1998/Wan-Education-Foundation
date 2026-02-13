import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ProgramCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ProgramCard = ({ icon, title, description, delay = 0 }: ProgramCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-card rounded-lg p-6 border hover:shadow-lg transition-shadow group"
  >
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
      {icon}
    </div>
    <h3 className="font-serif font-semibold text-lg mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export default ProgramCard;
