import { motion } from 'framer-motion';

interface GalleryCardProps {
  title: string;
  category: string;
  bgColor: string;
  index: number;
}

export default function GalleryCard({ title, category, bgColor, index }: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className={`${bgColor} h-64 relative overflow-hidden flex items-center justify-center`}>
        <div className="text-white text-center p-6 relative z-10">
          <div className="text-6xl mb-4">📸</div>
          <span className="text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
            {category}
          </span>
        </div>

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
      </div>

      <div className="bg-white p-4">
        <h3 className="font-bold text-gray-800 text-center">{title}</h3>
      </div>
    </motion.div>
  );
}
