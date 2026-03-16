import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { siteData } from '../data/siteData';
import FeatureCard from '../components/FeatureCard';
import ClassCard from '../components/ClassCard';
import TeacherCard from '../components/TeacherCard';
import GalleryCard from '../components/GalleryCard';
import NoticeCard from '../components/NoticeCard';
import TestimonialCard from '../components/TestimonialCard';
import ContactForm from '../components/ContactForm';
import DynamicIcon from '../components/DynamicIcon';


export default function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-orange-100 via-pink-100 to-teal-100 min-h-screen flex items-center overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 text-orange-400"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <DynamicIcon name="Star" size={48} />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-teal-400"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        >
          <DynamicIcon name="Rocket" size={40} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-20 text-orange-400"
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
        >
          <DynamicIcon name="BookOpen" size={40} />
        </motion.div>
        <motion.div
          className="absolute bottom-40 right-10 text-teal-400"
          animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
        >
          <DynamicIcon name="Cloud" size={48} />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {siteData.hero.heading}
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {siteData.hero.subheading}
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link to="/admission">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-orange-600 transition-colors flex items-center space-x-2"
                  >
                    <span>{siteData.hero.primaryButton}</span>
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-50 transition-colors border-2 border-orange-500"
                  >
                    {siteData.hero.secondaryButton}
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-400 to-teal-400 rounded-[3rem] h-[500px] shadow-2xl flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-white"
                >
                  <DynamicIcon name="Palette" size={120} strokeWidth={1} />
                </motion.div>
              </div>
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-3xl p-6 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <p className="text-3xl font-bold text-orange-500">500+</p>
                <p className="text-sm text-gray-600">Happy Students</p>
              </motion.div>
              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-3xl p-6 shadow-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <p className="text-3xl font-bold text-teal-500">15+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 0L60 8.33C120 16.67 240 33.33 360 41.67C480 50 600 50 720 45C840 40 960 30 1080 26.67C1200 23.33 1320 26.67 1380 28.33L1440 30V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V0Z"
              fill="white"
            />
          </svg>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide the best environment for your child's growth and development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteData.features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-teal-400 to-orange-400 rounded-[3rem] h-[400px] shadow-2xl flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-white"
                >
                  <DynamicIcon name="School" size={120} strokeWidth={1} />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                {siteData.about.heading}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {siteData.about.description}
              </p>
              <ul className="space-y-3 mb-8">
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
                    <span className="text-gray-700">{point}</span>
                  </motion.li>
                ))}
              </ul>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition-colors"
                >
                  Learn More About Us
                </motion.button>
              </Link>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Classes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Age-appropriate curriculum designed for every stage of development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteData.classes.map((classItem, index) => (
              <ClassCard
                key={classItem.id}
                name={classItem.name}
                ageGroup={classItem.ageGroup}
                description={classItem.description}
                icon={classItem.icon}
                color={classItem.color}
                index={index}
              />
            ))}
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Meet Our Teachers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced and caring educators dedicated to your child's success
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/teachers">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                View All Teachers
              </motion.button>
            </Link>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Photo Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Glimpses of our vibrant school life and memorable moments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.gallery.slice(0, 6).map((item, index) => (
              <GalleryCard
                key={item.id}
                title={item.title}
                category={item.category}
                bgColor={item.bgColor}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/gallery">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-teal-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                View Full Gallery
              </motion.button>
            </Link>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Notice Board
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest announcements and events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {siteData.notices.slice(0, 4).map((notice, index) => (
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/notices">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                View All Notices
              </motion.button>
            </Link>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What Parents Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our happy parents about their experience with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteData.testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                relation={testimonial.relation}
                content={testimonial.content}
                rating={testimonial.rating}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-100 to-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                      <p className="text-gray-600">{siteData.school.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-teal-500" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                      <p className="text-gray-600">{siteData.school.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600">{siteData.school.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Visit Us</h3>
                <div className="bg-gradient-to-br from-teal-300 to-orange-300 rounded-2xl h-64 flex items-center justify-center text-white">
                  <DynamicIcon name="Map" size={80} strokeWidth={1} />
                </div>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Google Maps placeholder - Schedule a visit today!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
