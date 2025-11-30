import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, BookOpen, HeartPulse, Home, CloudRain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ImpactForest = () => {
    const [donationAmount, setDonationAmount] = useState(1000);
    const navigate = useNavigate();

    const getStage = (amount) => {
        if (amount < 500) return {
            icon: <Utensils size={64} className="text-orange-500" />,
            label: "Nutritious Meal",
            desc: "Your contribution provides warm, healthy meals to those in need.",
            color: "bg-orange-50",
            textColor: "text-orange-600"
        };
        if (amount < 2000) return {
            icon: <BookOpen size={80} className="text-blue-500" />,
            label: "Education Essentials",
            desc: "You're funding books and supplies for a child's future.",
            color: "bg-blue-50",
            textColor: "text-blue-600"
        };
        if (amount < 5000) return {
            icon: <HeartPulse size={96} className="text-rose-500" />,
            label: "Healthcare Support",
            desc: "Your impact ensures vital medical checkups and medicine.",
            color: "bg-rose-50",
            textColor: "text-rose-600"
        };
        return {
            icon: <Home size={96} className="text-indigo-500" />,
            label: "Safe Shelter",
            desc: "You are helping provide safe, secure housing for families.",
            color: "bg-indigo-50",
            textColor: "text-indigo-600"
        };
    };

    const stage = getStage(donationAmount);

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Your Impact Journey</h2>
                        <p className="text-slate-600 text-lg">See how your contribution directly changes lives.</p>
                    </div>

                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl relative overflow-hidden">
                        {/* Background Elements */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                            <motion.div
                                animate={{ x: [0, 100, 0] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute top-10 left-10 text-slate-200"
                            >
                                <CloudRain size={48} />
                            </motion.div>
                            <motion.div
                                animate={{ x: [0, -150, 0] }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute top-20 right-20 text-slate-200"
                            >
                                <CloudRain size={64} />
                            </motion.div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                            {/* Visualization */}
                            <div className="flex flex-col items-center justify-center space-y-6">
                                <motion.div
                                    key={stage.label}
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    className={`w-48 h-48 rounded-full ${stage.color} flex items-center justify-center shadow-inner border-4 border-white`}
                                >
                                    {stage.icon}
                                </motion.div>
                                <div className="text-center">
                                    <motion.h3
                                        key={stage.label + "text"}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className={`text-2xl font-bold ${stage.textColor}`}
                                    >
                                        {stage.label}
                                    </motion.h3>
                                    <motion.p
                                        key={stage.desc}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                        className="text-slate-600 font-medium mt-2"
                                    >
                                        {stage.desc}
                                    </motion.p>
                                </div>
                            </div>

                            {/* Controls */}
                            <div className="space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Donation Amount</label>
                                    <div className="text-4xl font-bold text-indigo-600">
                                        Rs. {donationAmount.toLocaleString()}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <input
                                        type="range"
                                        min="100"
                                        max="10000"
                                        step="100"
                                        value={donationAmount}
                                        onChange={(e) => setDonationAmount(Number(e.target.value))}
                                        className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                                    />
                                    <div className="flex justify-between text-xs text-slate-400 font-medium">
                                        <span>Rs. 100</span>
                                        <span>Rs. 5,000</span>
                                        <span>Rs. 10,000+</span>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button
                                        onClick={() => navigate('/donate')}
                                        className="w-full btn btn-primary py-4 text-lg shadow-lg shadow-indigo-200 hover:shadow-xl transition-all"
                                    >
                                        Make This Impact
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactForest;
