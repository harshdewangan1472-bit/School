import { motion } from 'framer-motion';

interface ClassCardProps {
  name: string;
  ageGroup: string;
  description: string;
  icon: string;
  color: string;
  index: number;
}

export default function ClassCard({ name, ageGroup, description, icon, color, index }: ClassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className={`bg-gradient-to-br ${color} rounded-3xl p-8 shadow-xl text-white relative overflow-hidden group`}
    >
      <motion.div
        className="absolute -right-8 -top-8 text-9xl opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {icon}
      </motion.div>

      <div className="relative z-10">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-white/90 font-medium mb-3">{ageGroup}</p>
        <p className="text-white/80 leading-relaxed">{description}</p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 group-hover:h-2 transition-all duration-300"></div>
    </motion.div>
  );
}
