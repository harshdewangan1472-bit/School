import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

interface TeacherCardProps {
  name: string;
  designation: string;
  qualification: string;
  image: string;
  specialization: string;
  index: number;
}

export default function TeacherCard({ name, designation, qualification, image, specialization, index }: TeacherCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="bg-gradient-to-br from-teal-400 to-teal-500 h-48 flex items-center justify-center">
        <span className="text-8xl">{image}</span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-orange-500 font-semibold mb-2">{designation}</p>
        <p className="text-sm text-gray-600 mb-3">{qualification}</p>
        <div className="bg-teal-50 rounded-lg px-3 py-2 mb-4">
          <p className="text-xs text-teal-700 font-medium">
            Specialization: {specialization}
          </p>
        </div>
        <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2">
          <Mail size={16} />
          <span className="text-sm">Contact</span>
        </button>
      </div>
    </motion.div>
  );
}
