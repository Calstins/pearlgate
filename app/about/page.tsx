'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';
import HeroSection from '@/components/HeroSection';
import { Heart, Award, Users, Target } from 'lucide-react';

const values = [
    {
        icon: Heart,
        title: 'Compassion',
        description: 'We approach every family and event with empathy, understanding, and genuine care.',
    },
    {
        icon: Award,
        title: 'Excellence',
        description: 'We maintain the highest standards in everything we do, ensuring flawless execution.',
    },
    {
        icon: Users,
        title: 'Community',
        description: 'We serve our community with dedication, building lasting relationships based on trust.',
    },
    {
        icon: Target,
        title: 'Integrity',
        description: 'We operate with honesty and transparency, always putting our clients first.',
    },
];

export default function AboutPage() {
    return (
        <PageTransition>
            <HeroSection
                title="About PearlGate"
                subtitle="Our Story"
                description="Serving families across Nigeria with compassion and excellence"
                backgroundImage="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80"
            />

            {/* Mission Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
                        >
                            <Image
                                src="/image4.png"
                                alt="PearlGate Memorials"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                                Our Mission
                            </h2>
                            <p className="text-lg text-secondary-700 mb-4">
                                At PearlGate Memorials & Events, our mission is to provide compassionate, professional, and dignified services that honor life's most precious moments. We understand that planning a funeral or special event can be overwhelming, and we're here to guide you every step of the way.
                            </p>
                            <p className="text-lg text-secondary-700 mb-4">
                                Founded on the principles of excellence and empathy, we have built a reputation for delivering exceptional service that exceeds expectations. Our experienced team brings together expertise in event planning, cultural traditions, and logistical coordination to ensure every detail is perfect.
                            </p>
                            <p className="text-lg text-secondary-700">
                                Whether you're planning a memorial service, celebration of life, or any special event, we treat your occasion with the respect and attention it deserves.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-secondary-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                                    <value.icon className="w-8 h-8 text-primary-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-secondary-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
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
                            Why Choose PearlGate?
                        </h2>
                        <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                            Experience the difference of working with dedicated professionals
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="text-5xl font-bold text-primary-600 mb-4">10+</div>
                            <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                                Years of Experience
                            </h3>
                            <p className="text-secondary-600">
                                Serving families across Nigeria with dedication and care
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-center"
                        >
                            <div className="text-5xl font-bold text-primary-600 mb-4">500+</div>
                            <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                                Events Coordinated
                            </h3>
                            <p className="text-secondary-600">
                                From intimate gatherings to grand celebrations
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-center"
                        >
                            <div className="text-5xl font-bold text-primary-600 mb-4">24/7</div>
                            <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                                Available Support
                            </h3>
                            <p className="text-secondary-600">
                                We're here whenever you need us, day or night
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Commitment Section */}
            <section className="py-20 bg-primary-600 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Our Commitment to You
                            </h2>
                            <p className="text-lg text-primary-100 mb-4">
                                When you choose PearlGate, you're choosing a partner who genuinely cares about making your experience as smooth and meaningful as possible. We take the time to understand your needs, respect your traditions, and honor your wishes.
                            </p>
                            <p className="text-lg text-primary-100 mb-4">
                                Our team is composed of experienced professionals who bring expertise in various cultural traditions, event logistics, and compassionate care. We handle every detail with precision and sensitivity, ensuring that you can focus on what truly matters.
                            </p>
                            <p className="text-lg text-primary-100">
                                From the initial consultation to the final moments of your event, we're with you every step of the way, providing guidance, support, and peace of mind.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/image5.png"
                                alt="Our Commitment"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}