'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';
import HeroSection from '@/components/HeroSection';
import { Heart, Users, Award, Clock, ArrowRight } from 'lucide-react';

const services = [
    {
        title: 'Funeral Planning',
        description: 'Compassionate and dignified funeral services tailored to honor your loved ones with respect and care. We handle every detail with sensitivity and professionalism.',
        icon: Heart,
        image: '/image2.png',
        href: '/services/funeral-planning',
        features: [
            'Traditional and modern funeral arrangements',
            'Burial and cremation services',
            'Coffin and casket selection',
            'Transportation coordination',
            'Floral arrangements',
            'Memorial programs and materials',
        ],
    },
    {
        title: 'Event Planning',
        description: 'Professional event planning services for all occasions, from intimate gatherings to grand celebrations. We bring your vision to life with precision and creativity.',
        icon: Users,
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
        href: '/services/event-planning',
        features: [
            'Weddings and anniversaries',
            'Corporate events',
            'Birthday celebrations',
            'Religious ceremonies',
            'Venue selection and decoration',
            'Entertainment coordination',
        ],
    },
    {
        title: 'Memorial Services',
        description: 'Beautiful memorial services that celebrate life and provide comfort during difficult times. We create meaningful tributes that honor cherished memories.',
        icon: Award,
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
        href: '/services/memorial-services',
        features: [
            'Celebration of life ceremonies',
            'Memorial receptions',
            'Tribute videos and presentations',
            'Memorial keepsakes',
            'Condolence book services',
            'Photo displays and tributes',
        ],
    },
    {
        title: 'Catering Services',
        description: 'Exquisite catering options to complement your event with delicious, professionally prepared meals. We offer diverse menu options to suit all preferences.',
        icon: Clock,
        image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80',
        href: '/services/catering',
        features: [
            'Traditional Nigerian cuisine',
            'International menu options',
            'Buffet and plated service',
            'Custom menu design',
            'Professional serving staff',
            'Full equipment rental',
        ],
    },
];

export default function ServicesPage() {
    return (
        <PageTransition>
            <HeroSection
                title="Our Services"
                subtitle="What We Offer"
                description="Comprehensive planning services tailored to your unique needs"
                backgroundImage="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80"
            />

            {/* Services Grid */}
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
                            Complete Planning Solutions
                        </h2>
                        <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                            From intimate gatherings to grand celebrations, we handle every detail with care and professionalism
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl group">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-6 left-6">
                                            <service.icon className="w-12 h-12 text-primary-400" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <h3 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-lg text-secondary-700 mb-6">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2 mb-8">
                                        {service.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start space-x-2 text-secondary-600"
                                            >
                                                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href={service.href}
                                        className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
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

            {/* CTA Section */}
            <section className="py-20 bg-secondary-900 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Need a Custom Solution?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            Every event is unique. Let us create a personalized plan that perfectly matches your needs and vision.
                        </p>
                        <Link
                            href="/process"
                            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold transition-all transform hover:scale-105"
                        >
                            <span>Start Planning</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </PageTransition>
    );
}
