import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import GalleryCard from '../components/GalleryCard';
import { siteData } from '../data/siteData';

export default function Gallery() {
  return (
    <div>
      <PageHeader
        title="Photo Gallery"
        subtitle="Capturing memorable moments and joyful experiences"
        icon="Image"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Gallery</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the vibrant life at Little Stars Academy through these snapshots
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.gallery.map((item, index) => (
              <GalleryCard
                key={item.id}
                title={item.title}
                category={item.category}
                bgColor={item.bgColor}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Want to See More?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Follow us on social media for daily updates and more photos from our school activities
            </p>
            <div className="flex justify-center space-x-4">
              {siteData.socialMedia.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 bg-gradient-to-br from-orange-400 to-teal-400 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
                >
                  {social.name[0]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
