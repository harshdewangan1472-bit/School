import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { siteData } from '../data/siteData';
import DynamicIcon from '../components/DynamicIcon';

export default function About() {
  return (
    <div>
      <PageHeader
        title="About Us"
        subtitle="Learn more about our mission, vision, and values"
        icon="School"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                {siteData.about.heading}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {siteData.about.description}
              </p>
              <ul className="space-y-3">
                {siteData.about.points.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="text-orange-500">
                      <DynamicIcon name="CheckCircle2" size={24} />
                    </div>
                    <span className="text-gray-700 text-lg">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-400 to-teal-400 rounded-[3rem] h-[500px] shadow-2xl flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-white"
                >
                  <DynamicIcon name="GraduationCap" size={120} strokeWidth={1} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Principal's Message</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl text-center sticky top-24">
                <div className="bg-gradient-to-br from-teal-400 to-orange-400 w-48 h-48 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg text-white">
                  <DynamicIcon name="UserCircle2" size={80} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {siteData.principalMessage.name}
                </h3>
                <p className="text-orange-500 font-semibold">
                  {siteData.principalMessage.designation}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl p-10 shadow-xl">
                <div className="text-6xl text-teal-200 mb-6">❝</div>
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  {siteData.principalMessage.message.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'Heart', title: 'Care & Compassion', description: 'Every child is treated with love and respect' },
              { icon: 'Target', title: 'Excellence', description: 'Striving for the highest standards in education' },
              { icon: 'Users', title: 'Collaboration', description: 'Working together with parents and community' },
              { icon: 'Sprout', title: 'Growth Mindset', description: 'Encouraging continuous learning and development' },
              { icon: 'Palette', title: 'Creativity', description: 'Fostering imagination and innovative thinking' },
              { icon: 'Star', title: 'Integrity', description: 'Building character and strong moral values' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-orange-100 to-teal-100 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <div className="mb-4 flex justify-center text-orange-500">
                  <DynamicIcon name={value.icon} size={48} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Facilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              State-of-the-art infrastructure for optimal learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'School', title: 'Smart Classrooms', color: 'from-pink-400 to-rose-400' },
              { icon: 'Book', title: 'Library', color: 'from-blue-400 to-cyan-400' },
              { icon: 'Gamepad2', title: 'Play Area', color: 'from-green-400 to-emerald-400' },
              { icon: 'FlaskConical', title: 'Science Lab', color: 'from-purple-400 to-pink-400' },
              { icon: 'Palette', title: 'Art Studio', color: 'from-yellow-400 to-orange-400' },
              { icon: 'Music', title: 'Music Room', color: 'from-teal-400 to-cyan-400' },
              { icon: 'Trophy', title: 'Sports Ground', color: 'from-orange-400 to-red-400' },
              { icon: 'Stethoscope', title: 'Medical Room', color: 'from-green-400 to-teal-400' },
            ].map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 5 }}
                className={`bg-gradient-to-br ${facility.color} rounded-3xl p-8 text-white text-center shadow-xl flex flex-col items-center`}
              >
                <div className="mb-4">
                  <DynamicIcon name={facility.icon} size={48} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold">{facility.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
