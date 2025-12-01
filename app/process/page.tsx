
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import HeroSection from '@/components/HeroSection';
import { ClipboardCheck, Send } from 'lucide-react';

const steps = [
    {
        number: '01',
        title: 'Initial Consultation',
        description: 'We discuss your needs, preferences, and vision for your event.',
    },
    {
        number: '02',
        title: 'Custom Planning',
        description: 'We create a personalized plan tailored to your specific requirements.',
    },
    {
        number: '03',
        title: 'Coordination',
        description: 'We coordinate all vendors, venues, and logistics for seamless execution.',
    },
    {
        number: '04',
        title: 'Perfect Execution',
        description: 'We ensure every detail is flawless on your special day.',
    },
];

export default function ProcessPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        eventDate: '',
        guestCount: '',
        budget: '',
        location: '',
        details: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    serviceType: '',
                    eventDate: '',
                    guestCount: '',
                    budget: '',
                    location: '',
                    details: '',
                });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <PageTransition>
            <HeroSection
                title="Planning Process"
                subtitle="How We Work"
                description="From concept to completion, we handle every detail"
                backgroundImage="/image6.png"
            />

            {/* Process Steps */}
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
                            Our Planning Process
                        </h2>
                        <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                            A proven approach to creating unforgettable events
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="text-6xl font-bold text-primary-200 mb-4">{step.number}</div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-3">{step.title}</h3>
                                <p className="text-secondary-600">{step.description}</p>
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-primary-300" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Form */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-2xl shadow-xl p-8"
                        >
                            <div className="flex items-center justify-center mb-6">
                                <ClipboardCheck className="w-12 h-12 text-primary-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-secondary-900 mb-2 text-center">
                                Request a Quote
                            </h2>
                            <p className="text-secondary-600 text-center mb-8">
                                Fill out the form below and we'll get back to you within 24 hours
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="serviceType" className="block text-sm font-medium text-secondary-700 mb-2">
                                            Service Type *
                                        </label>
                                        <select
                                            id="serviceType"
                                            name="serviceType"
                                            required
                                            value={formData.serviceType}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="Funeral Planning">Funeral Planning</option>
                                            <option value="Event Planning">Event Planning</option>
                                            <option value="Memorial Services">Memorial Services</option>
                                            <option value="Catering Services">Catering Services</option>
                                            <option value="Multiple Services">Multiple Services</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="eventDate" className="block text-sm font-medium text-secondary-700 mb-2">
                                            Event Date
                                        </label>
                                        <input
                                            type="date"
                                            id="eventDate"
                                            name="eventDate"
                                            value={formData.eventDate}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="guestCount" className="block text-sm font-medium text-secondary-700 mb-2">
                                            Expected Guest Count
                                        </label>
                                        <input
                                            type="number"
                                            id="guestCount"
                                            name="guestCount"
                                            value={formData.guestCount}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                                            placeholder="Approximate number"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="budget" className="block text-sm font-medium text-secondary-700 mb-2">
                                            Budget Range
                                        </label>
                                        <select
                                            id="budget"
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                                        >
                                            <option value="">Select a range</option>
                                            <option value="Under ₦500,000">Under ₦500,000</option>
                                            <option value="₦500,000 - ₦1,000,000">₦500,000 - ₦1,000,000</option>
                                            <option value="₦1,000,000 - ₦2,000,000">₦1,000,000 - ₦2,000,000</option>
                                            <option value="₦2,000,000 - ₦5,000,000">₦2,000,000 - ₦5,000,000</option>
                                            <option value="Over ₦5,000,000">Over ₦5,000,000</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="location" className="block text-sm font-medium text-secondary-700 mb-2">
                                            Event Location
                                        </label>
                                        <input
                                            type="text"
                                            id="location"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                                            placeholder="City or venue"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="details" className="block text-sm font-medium text-secondary-700 mb-2">
                                        Additional Details
                                    </label>
                                    <textarea
                                        id="details"
                                        name="details"
                                        rows={6}
                                        value={formData.details}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                                        placeholder="Tell us more about your event, special requirements, or any questions you have..."
                                    />
                                </div>

                                {status === 'success' && (
                                    <div className="bg-green-50 text-green-800 px-4 py-3 rounded-lg">
                                        Thank you! We've received your quote request and will contact you within 24 hours.
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div className="bg-red-50 text-red-800 px-4 py-3 rounded-lg">
                                        Sorry, there was an error submitting your request. Please try again or call us directly.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                                >
                                    <span>{status === 'loading' ? 'Submitting...' : 'Submit Request'}</span>
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}