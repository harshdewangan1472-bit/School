import { motion } from 'framer-motion';
import DynamicIcon from './DynamicIcon';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: string;
}

export default function PageHeader({ title, subtitle, icon }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-orange-500 via-teal-500 to-orange-500 py-20 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {icon && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="mb-4 flex justify-center text-white"
            >
              <DynamicIcon name={icon} size={80} strokeWidth={1.5} />
            </motion.div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0L60 8.33C120 16.67 240 33.33 360 41.67C480 50 600 50 720 45C840 40 960 30 1080 26.67C1200 23.33 1320 26.67 1380 28.33L1440 30V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V0Z"
            fill="rgb(243 244 246)"
          />
        </svg>
      </div>
    </div>
  );
}
