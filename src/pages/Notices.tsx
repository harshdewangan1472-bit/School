import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import NoticeCard from '../components/NoticeCard';
import { siteData } from '../data/siteData';

export default function Notices() {
  return (
    <div>
      <PageHeader
        title="Notice Board"
        subtitle="Stay updated with our latest announcements and events"
        icon="📋"
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Latest Announcements</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Important updates and information for parents and students
            </p>
          </motion.div>

          <div className="space-y-6">
            {siteData.notices.map((notice, index) => (
              <NoticeCard
                key={notice.id}
                title={notice.title}
                date={notice.date}
                content={notice.content}
                important={notice.important}
                index={index}
              />
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Stay Connected</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter or follow us on social media to never miss an update
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Subscribe to Newsletter
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-500 border-2 border-orange-500 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Download School App
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
