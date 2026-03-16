import { motion } from 'framer-motion';
import DynamicIcon from './DynamicIcon';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="mb-4 flex justify-center text-orange-500">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <DynamicIcon name={icon} size={48} strokeWidth={2.5} />
        </motion.div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-center leading-relaxed">{description}</p>
    </motion.div>
  );
}
