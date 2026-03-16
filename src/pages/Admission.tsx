import { motion } from 'framer-motion';
import { CheckCircle, FileText, Calendar, Users, Award } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import { siteData } from '../data/siteData';

export default function Admission() {
  return (
    <div>
      <PageHeader
        title="Admission Information"
        subtitle="Join our family and give your child the best start"
        icon="📝"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Admission Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to enroll your child
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-300 via-teal-300 to-orange-300 -translate-y-1/2 hidden lg:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
              {siteData.admissionInfo.process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 bg-gradient-to-br from-orange-400 to-teal-400 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg"
                    >
                      {step.step}
                    </motion.div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center space-x-3 mb-6">
                  <FileText className="text-orange-500" size={32} />
                  <h3 className="text-2xl font-bold text-gray-800">Required Documents</h3>
                </div>
                <ul className="space-y-4">
                  {siteData.admissionInfo.documents.map((doc, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="text-teal-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{doc}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center space-x-3 mb-6">
                  <Calendar className="text-teal-500" size={32} />
                  <h3 className="text-2xl font-bold text-gray-800">Important Dates</h3>
                </div>
                <div className="space-y-6">
                  {[
                    { event: 'Admission Opens', date: 'January 15, 2024' },
                    { event: 'Last Date to Apply', date: 'March 31, 2024' },
                    { event: 'Interaction Sessions', date: 'April 1-15, 2024' },
                    { event: 'Admission Confirmation', date: 'April 20, 2024' },
                    { event: 'Academic Year Begins', date: 'June 1, 2024' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-teal-50 rounded-xl"
                    >
                      <span className="font-semibold text-gray-800">{item.event}</span>
                      <span className="text-sm text-gray-600">{item.date}</span>
                    </motion.div>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Fee Structure</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparent and affordable pricing for quality education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteData.admissionInfo.feeStructure.map((fee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-orange-100 to-teal-100 rounded-3xl p-8 shadow-xl text-center"
              >
                <div className="text-5xl mb-4">
                  {index === 0 ? '🌱' : index === 1 ? '📚' : index === 2 ? '✏️' : '🎓'}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{fee.class}</h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">Admission Fee</p>
                    <p className="text-2xl font-bold text-orange-500">{fee.admissionFee}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">Annual Fee</p>
                    <p className="text-2xl font-bold text-teal-500">{fee.annualFee}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-orange-100 to-teal-100 rounded-3xl p-8 inline-block">
              <p className="text-gray-700">
                <strong>Note:</strong> Fee includes tuition, books, and learning materials.
                Transport and meals are optional with additional charges.
              </p>
            </div>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users size={48} />,
                title: 'Low Student-Teacher Ratio',
                description: 'Individual attention with maximum 15 students per class',
                color: 'from-pink-400 to-rose-400',
              },
              {
                icon: <Award size={48} />,
                title: 'Experienced Faculty',
                description: 'Highly qualified teachers with years of experience',
                color: 'from-teal-400 to-cyan-400',
              },
              {
                icon: <CheckCircle size={48} />,
                title: 'Proven Track Record',
                description: '15 years of excellence in early childhood education',
                color: 'from-orange-400 to-amber-400',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 text-white shadow-xl`}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/90">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Apply Now</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you soon
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
