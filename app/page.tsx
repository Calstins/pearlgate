'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';
import { Heart, Users, Award, Clock, ArrowRight, Phone, Mail } from 'lucide-react';

const services = [
  {
    title: 'Funeral Planning',
    description: 'Compassionate and dignified funeral services tailored to honor your loved ones with respect and care.',
    icon: Heart,
    image: '/image1.png',
    href: '/services/funeral-planning',
  },
  {
    title: 'Event Planning',
    description: 'Professional event planning services for all occasions, from intimate gatherings to grand celebrations.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
    href: '/services/event-planning',
  },
  {
    title: 'Memorial Services',
    description: 'Beautiful memorial services that celebrate life and provide comfort during difficult times.',
    icon: Award,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    href: '/services/memorial-services',
  },
  {
    title: 'Catering Services',
    description: 'Exquisite catering options to complement your event with delicious, professionally prepared meals.',
    icon: Clock,
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80',
    href: '/services/catering',
  },
];

const features = [
  {
    title: 'Compassionate Service',
    description: 'We provide caring support during your most difficult moments.',
  },
  {
    title: 'Professional Excellence',
    description: 'Years of experience delivering flawless events and services.',
  },
  {
    title: '24/7 Availability',
    description: 'Always here when you need us, day or night.',
  },
  {
    title: 'Cultural Sensitivity',
    description: 'Respecting diverse traditions and customs with grace.',
  },
];

export default function HomePage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Honoring Life's{' '}
              <span className="text-primary-400">Precious Moments</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12"
            >
              Professional funeral and event planning services with compassion, dignity, and excellence
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/process"
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>Start Planning</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold transition-all border border-white/30 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Comprehensive planning services tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <service.icon className="w-10 h-10 mb-4 text-primary-400" />
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-200 mb-4">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-secondary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose PearlGate?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                With years of experience serving families across Nigeria, we understand the importance of honoring life's most significant moments with dignity, respect, and professionalism.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Our dedicated team works tirelessly to ensure every detail is perfect, allowing you to focus on what matters most—celebrating life and cherishing memories.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <span>Learn About Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/image3.png"
                alt="PearlGate Team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Begin Planning?
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
              Let us help you create a meaningful and memorable experience. Contact us today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-primary-700 hover:bg-primary-50 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Get in Touch</span>
              </Link>
              <a
                href="tel:+2348117769393"
                className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 rounded-lg font-semibold transition-all flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>+234 811 776 9393</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}