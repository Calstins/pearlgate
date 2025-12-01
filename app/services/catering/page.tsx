'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';
import HeroSection from '@/components/HeroSection';
import { Clock, Check, ArrowRight } from 'lucide-react';

const services = [
    'Traditional Nigerian cuisine',
    'International menu options',
    'Buffet-style service',
    'Plated dining service',
    'Cocktail reception catering',
    'Custom menu design',
    'Dietary accommodation (vegetarian, halal, etc.)',
    'Professional serving staff',
    'Complete equipment rental',
    'Table settings and décor',
    'Beverage service and bar setup',
    'Dessert and cake service',
];

export default function CateringPage() {
    return (
        <PageTransition>
            <HeroSection
                title="Catering Services"
                subtitle="Culinary Excellence"
                description="Exquisite dining experiences for every occasion"
                backgroundImage="https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&q=80"
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
                                <Clock className="w-8 h-8 text-primary-600" />
                                <h2 className="text-4xl md:text-5xl font-bold text-secondary-900">
                                    Delicious Memories
                                </h2>
                            </div>
                            <p className="text-lg text-secondary-700 mb-6">
                                Great food brings people together and enhances every celebration. Our professional catering services combine authentic Nigerian flavors with international cuisine to create memorable dining experiences.
                            </p>
                            <p className="text-lg text-secondary-700 mb-6">
                                We work with experienced chefs and use only the finest ingredients to prepare delicious meals that delight your guests. Whether you need elegant plated dinners or casual buffet service, we deliver excellence in every dish.
                            </p>
                            <p className="text-lg text-secondary-700">
                                Our catering team handles everything from menu planning to service, ensuring your event's culinary experience is as memorable as the occasion itself.
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
                                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                                alt="Catering Services"
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
                            Catering Services
                        </h2>
                        <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                            From intimate gatherings to large celebrations
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
                            Let's Plan Your Menu
                        </h2>
                        <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
                            Contact us to discuss your catering needs and create a custom menu for your event.
                        </p>
                        <Link
                            href="/process"
                            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary-700 hover:bg-primary-50 rounded-lg font-semibold transition-all transform hover:scale-105"
                        >
                            <span>Request Quote</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </PageTransition>
    );
}