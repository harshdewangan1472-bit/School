import { motion } from 'framer-motion';
import { Calendar, AlertCircle } from 'lucide-react';

interface NoticeCardProps {
  title: string;
  date: string;
  content: string;
  important: boolean;
  index: number;
}

export default function NoticeCard({ title, date, content, important, index }: NoticeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
        important ? 'border-orange-500' : 'border-teal-500'
      }`}
    >
      {important && (
        <div className="flex items-center space-x-2 mb-3">
          <AlertCircle size={18} className="text-orange-500" />
          <span className="text-xs font-bold text-orange-500 uppercase">Important</span>
        </div>
      )}

      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>

      <div className="flex items-center space-x-2 text-gray-500 mb-3">
        <Calendar size={16} />
        <span className="text-sm">{date}</span>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">{content}</p>
    </motion.div>
  );
}
