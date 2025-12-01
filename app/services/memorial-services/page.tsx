'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';
import HeroSection from '@/components/HeroSection';
import { Award, Check, ArrowRight } from 'lucide-react';

const services = [
    'Celebration of life ceremonies',
    'Memorial receptions and gatherings',
    'Tribute video production',
    'Photo displays and memory boards',
    'Memorial keepsakes and programs',
    'Condolence book services',
    'Memorial website creation',
    'Butterfly or dove releases',
    'Memorial tree planting ceremonies',
    'Custom memorial tributes',
    'Guest book and registry',
    'Professional photography services',
];

export default function MemorialServicesPage() {
    return (
        <PageTransition>
            <HeroSection
                title="Memorial Services"
                subtitle="Celebrating Life"
                description="Creating meaningful tributes that honor cherished memories"
                backgroundImage="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
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
                                <Award className="w-8 h-8 text-primary-600" />
                                <h2 className="text-4xl md:text-5xl font-bold text-secondary-900">
                                    Honoring Memories
                                </h2>
                            </div>
                            <p className="text-lg text-secondary-700 mb-6">
                                Memorial services provide a special opportunity to celebrate the life of a loved one and share memories with family and friends. We create beautiful, personalized tributes that truly reflect the unique life being honored.
                            </p>
                            <p className="text-lg text-secondary-700 mb-6">
                                Whether you prefer a traditional memorial service or a contemporary celebration of life, we work with you to design an event that brings comfort, closure, and joy through shared remembrance.
                            </p>
                            <p className="text-lg text-secondary-700">
                                Our compassionate team handles every detail, from venue selection to multimedia presentations, ensuring that your memorial service is a fitting tribute to your loved one's legacy.
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
                                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                                alt="Memorial Services"
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
                            Memorial Service Options
                        </h2>
                        <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                            Personalized tributes that celebrate a life well-lived
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

            <section className="py-20 bg-secondary-900 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Create a Meaningful Tribute
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            Let us help you honor your loved one with a beautiful memorial service that brings comfort and celebrates their unique life.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold transition-all transform hover:scale-105"
                        >
                            <span>Contact Us</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </PageTransition>
    );
}