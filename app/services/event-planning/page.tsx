
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';
import HeroSection from '@/components/HeroSection';
import { Users, Check, ArrowRight } from 'lucide-react';

const services = [
    'Wedding ceremonies and receptions',
    'Corporate events and conferences',
    'Birthday and anniversary celebrations',
    'Religious ceremonies and gatherings',
    'Community events and fundraisers',
    'Venue selection and booking',
    'Theme development and design',
    'Vendor coordination and management',
    'Entertainment booking and coordination',
    'Complete décor and styling',
    'Audio-visual equipment and setup',
    'Timeline creation and event flow',
];

export default function EventPlanningPage() {
    return (
        <PageTransition>
            <HeroSection
                title="Event Planning"
                subtitle="Celebrate Life's Moments"
                description="Creating unforgettable experiences for every occasion"
                backgroundImage="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80"
            />

            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center space-x-2 mb-4">
                                <Users className="w-8 h-8 text-primary-600" />
                                <h2 className="text-4xl md:text-5xl font-bold text-secondary-900">
                                    Exceptional Events
                                </h2>
                            </div>
                            <p className="text-lg text-secondary-700 mb-6">
                                Every celebration deserves to be extraordinary. Whether you're planning an intimate gathering or a grand celebration, our expert event planners bring creativity, precision, and professionalism to every detail.
                            </p>
                            <p className="text-lg text-secondary-700 mb-6">
                                From concept to execution, we handle all aspects of event planning, allowing you to enjoy your special day without stress. Our team works closely with you to understand your vision and bring it to life in ways that exceed your expectations.
                            </p>
                            <p className="text-lg text-secondary-700">
                                With our extensive network of trusted vendors and venues, we ensure every element of your event is perfectly coordinated and flawlessly executed.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"
                                alt="Event Planning"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

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
                            Complete Event Solutions
                        </h2>
                        <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                            From intimate gatherings to large-scale celebrations
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm"
                            >
                                <Check className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                                <span className="text-secondary-700">{service}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-primary-600 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Plan Your Event?
                        </h2>
                        <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
                            Let's create something unforgettable together. Contact us today to start planning your perfect event.
                        </p>
                        <Link
                            href="/process"
                            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary-700 hover:bg-primary-50 rounded-lg font-semibold transition-all transform hover:scale-105"
                        >
                            <span>Get Started</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </PageTransition>
    );
}