
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';
import HeroSection from '@/components/HeroSection';
import { Heart, Check, ArrowRight } from 'lucide-react';

const services = [
    'Complete funeral arrangement and coordination',
    'Traditional and contemporary funeral services',
    'Burial and cremation services',
    'Premium coffin and casket selection',
    'Funeral home and chapel services',
    'Transportation and hearse services',
    'Floral arrangements and tributes',
    'Memorial programs and order of service',
    'Professional embalming services',
    'Venue decoration and setup',
    'Audio-visual equipment and services',
    'Grief support and counseling referrals',
];

const packages = [
    {
        name: 'Essential',
        price: 'Contact for pricing',
        features: [
            'Basic funeral coordination',
            'Standard coffin selection',
            'Transportation services',
            'Memorial program design',
            'Venue setup assistance',
        ],
    },
    {
        name: 'Premium',
        price: 'Contact for pricing',
        features: [
            'Comprehensive funeral planning',
            'Premium coffin and casket options',
            'Full transportation coordination',
            'Professional floral arrangements',
            'Custom memorial materials',
            'Audio-visual services',
            'Venue decoration',
        ],
        featured: true,
    },
    {
        name: 'Luxury',
        price: 'Contact for pricing',
        features: [
            'White-glove funeral service',
            'Designer coffin collection',
            'Complete logistics management',
            'Bespoke floral designs',
            'Personalized memorial tributes',
            'Full multimedia production',
            'Complete venue transformation',
            'Dedicated event coordinator',
        ],
    },
];

export default function FuneralPlanningPage() {
    return (
        <PageTransition>
            <HeroSection
                title="Funeral Planning"
                subtitle="Compassionate Service"
                description="Honoring your loved ones with dignity, respect, and care"
                backgroundImage="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&q=80"
            />

            {/* Overview Section */}
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
                                <Heart className="w-8 h-8 text-primary-600" />
                                <h2 className="text-4xl md:text-5xl font-bold text-secondary-900">
                                    With Care & Dignity
                                </h2>
                            </div>
                            <p className="text-lg text-secondary-700 mb-6">
                                Losing a loved one is one of life's most difficult experiences. At PearlGate, we understand the emotional weight of planning a funeral, and we're here to lift that burden from your shoulders.
                            </p>
                            <p className="text-lg text-secondary-700 mb-6">
                                Our experienced team provides compassionate guidance through every step of the funeral planning process. We respect your cultural traditions, honor your wishes, and handle every detail with the utmost care and professionalism.
                            </p>
                            <p className="text-lg text-secondary-700">
                                From intimate family gatherings to larger memorial services, we ensure that your loved one's final farewell is a beautiful and meaningful celebration of their life.
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
                                src="/image1.png"
                                alt="Funeral Planning"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services List */}
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
                            Comprehensive Services
                        </h2>
                        <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                            Everything you need for a dignified and meaningful funeral service
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

            {/* Packages Section */}
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
                            Service Packages
                        </h2>
                        <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                            Choose a package that best suits your needs, or let us create a custom solution
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={pkg.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`rounded-2xl p-8 ${pkg.featured
                                    ? 'bg-primary-600 text-white shadow-2xl scale-105'
                                    : 'bg-white shadow-lg'
                                    }`}
                            >
                                <h3
                                    className={`text-2xl font-bold mb-2 ${pkg.featured ? 'text-white' : 'text-secondary-900'
                                        }`}
                                >
                                    {pkg.name}
                                </h3>
                                <p
                                    className={`text-3xl font-bold mb-6 ${pkg.featured ? 'text-primary-100' : 'text-primary-600'
                                        }`}
                                >
                                    {pkg.price}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className={`flex items-start space-x-2 ${pkg.featured ? 'text-primary-50' : 'text-secondary-600'
                                                }`}
                                        >
                                            <Check
                                                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.featured ? 'text-primary-200' : 'text-primary-600'
                                                    }`}
                                            />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/process"
                                    className={`block w-full py-3 rounded-lg font-semibold text-center transition-all ${pkg.featured
                                        ? 'bg-white text-primary-600 hover:bg-primary-50'
                                        : 'bg-primary-600 text-white hover:bg-primary-700'
                                        }`}
                                >
                                    Get Started
                                </Link>
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
                            Let Us Help You Honor Their Memory
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            Our compassionate team is here 24/7 to support you during this difficult time. Contact us for a consultation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold transition-all transform hover:scale-105"
                            >
                                <span>Contact Us</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <a
                                href="tel:+2348117769393"
                                className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg font-semibold transition-all border border-white/30"
                            >
                                <span>Call Now</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PageTransition>
    );
}