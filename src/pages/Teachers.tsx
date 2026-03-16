import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import TeacherCard from '../components/TeacherCard';
import { siteData } from '../data/siteData';

export default function Teachers() {
  return (
    <div>
      <PageHeader
        title="Our Teachers"
        subtitle="Meet our passionate and experienced educators"
        icon="👩‍🏫"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Teaching Staff</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of professionals committed to your child's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteData.teachers.map((teacher, index) => (
              <TeacherCard
                key={teacher.id}
                name={teacher.name}
                designation={teacher.designation}
                qualification={teacher.qualification}
                image={teacher.image}
                specialization={teacher.specialization}
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Join Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              We're always looking for passionate educators to join our family
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎓',
                title: 'Professional Development',
                description: 'Regular training and skill enhancement programs',
              },
              {
                icon: '💼',
                title: 'Competitive Benefits',
                description: 'Attractive salary and benefits package',
              },
              {
                icon: '🤝',
                title: 'Supportive Environment',
                description: 'Collaborative and nurturing work culture',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-teal-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Apply for Teaching Position
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
