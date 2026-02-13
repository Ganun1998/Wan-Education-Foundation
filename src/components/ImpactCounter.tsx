import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ImpactCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

const ImpactCounter = ({ value, suffix = "", label }: ImpactCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <p className="text-4xl md:text-5xl font-serif font-bold text-secondary">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="mt-2 text-sm text-muted-foreground font-medium">{label}</p>
    </motion.div>
  );
};

export default ImpactCounter;
