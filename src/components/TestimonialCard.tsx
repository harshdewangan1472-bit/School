import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  relation: string;
  content: string;
  rating: number;
  index: number;
}

export default function TestimonialCard({ name, relation, content, rating, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
    >
      <div className="absolute top-6 right-6 text-teal-200">
        <Quote size={48} fill="currentColor" />
      </div>

      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
        "{content}"
      </p>

      <div className="border-t pt-4">
        <h4 className="font-bold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-500">{relation}</p>
      </div>
    </motion.div>
  );
}
