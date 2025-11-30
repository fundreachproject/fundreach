import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, TrendingUp, BookOpen, ShieldCheck, Globe } from 'lucide-react';

import avatar1 from '../assets/avatar_1.png';
import avatar2 from '../assets/avatar_2.png';
import avatar3 from '../assets/avatar_3.png';

import ImpactForest from '../components/Features/ImpactForest';

const Home = () => {
    return (
        <div className="space-y-0">
            {/* Hero Section */}
            <section className="bg-white pt-20 pb-24 border-b border-slate-100">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-medium text-sm">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                            </span>
                            Over Rs. 12,000 raised this month
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900">
                            Make a Real <br />
                            <span className="text-indigo-600">Impact Today</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                            Join our community of changemakers. We provide a transparent, secure, and direct way to support education and community development.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link to="/donate" className="btn btn-primary text-lg px-8 py-4 shadow-xl shadow-indigo-200">
                                Start Donating
                            </Link>
                            <Link to="/transparency" className="btn btn-outline text-lg px-8 py-4">
                                View Reports
                            </Link>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-500 pt-4">
                            <div className="flex -space-x-4">
                                {[avatar1, avatar2, avatar3, avatar1].map((img, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                                        <img src={img} alt={`Donor ${i + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <p>Join 450+ active donors</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative hidden md:block h-[500px]"
                    >
                        <div className="absolute inset-0 bg-indigo-600 rounded-3xl rotate-6 opacity-5"></div>
                        <div className="relative h-full w-full">
                            <div className="absolute top-0 right-0 w-3/4 h-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform translate-x-4 -translate-y-4 z-10">
                                <img
                                    src="/src/assets/donation_heart.png"
                                    alt="Donation Concept"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 w-3/4 h-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform -translate-x-4 translate-y-4 z-20">
                                <img
                                    src="/src/assets/donation_growth.png"
                                    alt="Growth Concept"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-xl z-30 flex items-center gap-3 animate-bounce">
                                <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
                                    <Heart size={24} fill="currentColor" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium">Community Focus</p>
                                    <p className="text-lg font-bold text-slate-900">Direct Impact</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-slate-50">
                <div className="container space-y-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Funds Raised', value: 'Rs. 45,200', icon: <TrendingUp /> },
                            { label: 'Active Donors', value: '1,240', icon: <Users /> },
                            { label: 'Campaigns', value: '24', icon: <Globe /> },
                            { label: 'Success Rate', value: '98%', icon: <ShieldCheck /> },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center space-y-4"
                            >
                                <div className="w-12 h-12 mx-auto bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                                    {stat.icon}
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                                    <div className="text-slate-500 font-medium">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Direct Impact',
                                desc: 'Your funds go directly to the cause. We maintain minimal operational overhead.',
                                icon: <TrendingUp size={24} />,
                                color: 'bg-rose-100 text-rose-600'
                            },
                            {
                                title: 'Community Focused',
                                desc: 'We work closely with local leaders to identify the most pressing needs.',
                                icon: <Users size={24} />,
                                color: 'bg-indigo-100 text-indigo-600'
                            },
                            {
                                title: 'Education First',
                                desc: 'Our primary focus is on providing educational resources to underprivileged youth.',
                                icon: <BookOpen size={24} />,
                                color: 'bg-amber-100 text-amber-600'
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.2 }}
                                className="card p-8 space-y-6 hover:border-indigo-100"
                            >
                                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                                <Link to="/transparency" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all">
                                    Learn more <ArrowRight size={16} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Forest Section */}
            <ImpactForest />

            {/* CTA Section */}
            <section className="py-24 bg-indigo-600 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 skew-x-12 transform origin-bottom"></div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="container relative z-10 text-center space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Make a Difference?</h2>
                    <p className="text-indigo-100 max-w-2xl mx-auto text-xl">
                        Your contribution, no matter how small, helps us build a better future for everyone.
                    </p>
                    <Link to="/donate" className="inline-block bg-white text-indigo-600 font-bold py-4 px-12 rounded-lg hover:bg-indigo-50 transition-all shadow-2xl text-lg">
                        Donate Now
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
