import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { siteData } from '../data/siteData';

export default function Videos() {
  return (
    <div>
      <PageHeader
        title="Video Gallery"
        subtitle="Watch our school in action through these videos"
        icon="🎥"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Video Collection</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the energy and joy of our school through these videos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteData.videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                  <div className={`${video.thumbnail} h-80 relative flex items-center justify-center`}>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-orange-500 transition-colors"
                    >
                      <Play size={32} className="text-orange-500 group-hover:text-white ml-1" fill="currentColor" />
                    </motion.div>

                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-800">
                        {video.category}
                      </span>
                    </div>
                  </div>

                  <div className="bg-white p-6">
                    <h3 className="text-xl font-bold text-gray-800">{video.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Subscribe to Our Channel</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't miss out on our latest videos and updates. Subscribe to our YouTube channel for more content!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-teal-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center space-x-2"
            >
              <Play size={24} fill="currentColor" />
              <span>Subscribe Now</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
