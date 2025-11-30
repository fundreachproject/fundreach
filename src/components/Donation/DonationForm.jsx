import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Calendar, User, CheckCircle, ChevronRight, ChevronLeft, Heart, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DonationForm = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [isProcessing, setIsProcessing] = useState(false);
    const [formData, setFormData] = useState({
        amount: '',
        frequency: 'one-time',
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: '',
        expiry: '',
        cvc: ''
    });

    const predefinedAmounts = [10, 25, 50, 100, 250];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAmountSelect = (amount) => {
        setFormData(prev => ({ ...prev, amount: amount }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);

        setTimeout(() => {
            setIsProcessing(false);
            alert('Invalid Details');
        }, 2000);
    };

    return (
        <div className="max-w-3xl mx-auto py-12">
            {/* Progress Header */}
            <div className="mb-12">
                <div className="flex justify-between items-center relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>
                    {[1, 2, 3].map((s) => (
                        <div key={s} className={`flex flex-col items-center gap-2 bg-slate-50 px-4`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all border-2 ${step >= s
                                ? 'bg-indigo-600 border-indigo-600 text-white'
                                : 'bg-white border-slate-300 text-slate-400'
                                }`}>
                                {step > s ? <CheckCircle size={20} /> : s}
                            </div>
                            <span className={`text-sm font-medium ${step >= s ? 'text-indigo-600' : 'text-slate-400'}`}>
                                {s === 1 ? 'Amount' : s === 2 ? 'Details' : 'Payment'}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                <div className="p-8 md:p-12">
                    <AnimatePresence mode='wait'>
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="text-center space-y-2">
                                    <h2 className="text-2xl font-bold text-slate-900">Choose Your Contribution</h2>
                                    <p className="text-slate-500">Your support changes lives.</p>
                                </div>

                                {/* Frequency Toggle */}
                                <div className="flex justify-center">
                                    <div className="bg-slate-100 p-1 rounded-lg flex">
                                        {['one-time', 'monthly'].map((freq) => (
                                            <button
                                                key={freq}
                                                className={`px-8 py-3 rounded-md font-medium transition-all capitalize ${formData.frequency === freq
                                                    ? 'bg-white shadow-sm text-indigo-600'
                                                    : 'text-slate-500 hover:text-slate-700'
                                                    }`}
                                                onClick={() => setFormData(prev => ({ ...prev, frequency: freq }))}
                                            >
                                                {freq}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Amount Grid */}
                                <div className="grid grid-cols-3 gap-4">
                                    {predefinedAmounts.map((amt) => (
                                        <button
                                            key={amt}
                                            onClick={() => handleAmountSelect(amt)}
                                            className={`py-4 rounded-xl border-2 font-bold text-lg transition-all ${formData.amount == amt
                                                ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                                                : 'border-slate-200 hover:border-indigo-200 text-slate-600'
                                                }`}
                                        >
                                            Rs. {amt}
                                        </button>
                                    ))}
                                    <div className="relative col-span-3 md:col-span-1">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">Rs.</span>
                                        <input
                                            type="number"
                                            placeholder="Custom"
                                            name="amount"
                                            value={formData.amount}
                                            onChange={handleInputChange}
                                            className={`w-full h-full py-4 pl-12 pr-4 rounded-xl border-2 font-bold outline-none transition-all ${!predefinedAmounts.includes(Number(formData.amount)) && formData.amount
                                                ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                                                : 'border-slate-200 focus:border-indigo-400'
                                                }`}
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={nextStep}
                                    disabled={!formData.amount}
                                    className="w-full btn btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    Continue <ChevronRight size={20} />
                                </button>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="text-center space-y-2">
                                    <h2 className="text-2xl font-bold text-slate-900">Your Details</h2>
                                    <p className="text-slate-500">Where should we send your receipt?</p>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full py-3 px-4 rounded-lg border border-slate-200 focus:border-indigo-500 outline-none transition-colors"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full py-3 px-4 rounded-lg border border-slate-200 focus:border-indigo-500 outline-none transition-colors"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full py-3 px-4 rounded-lg border border-slate-200 focus:border-indigo-500 outline-none transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <button onClick={prevStep} className="flex-1 btn btn-outline py-3 flex items-center justify-center gap-2">
                                        <ChevronLeft size={20} /> Back
                                    </button>
                                    <button
                                        onClick={nextStep}
                                        disabled={!formData.firstName || !formData.lastName || !formData.email}
                                        className="flex-1 btn btn-primary py-3 disabled:opacity-50 flex items-center justify-center gap-2"
                                    >
                                        Continue <ChevronRight size={20} />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="text-center space-y-2">
                                    <h2 className="text-2xl font-bold text-slate-900">Payment Method</h2>
                                    <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                                        <Lock size={14} /> Secure SSL Encrypted Transaction
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex justify-between items-center">
                                    <div>
                                        <div className="text-sm text-slate-500">Total Donation</div>
                                        <div className="text-2xl font-bold text-indigo-600">Rs. {formData.amount}</div>
                                    </div>
                                    <div className="capitalize bg-white px-4 py-2 rounded-lg text-sm font-medium border border-slate-200 shadow-sm">
                                        {formData.frequency}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Card Number</label>
                                        <div className="relative">
                                            <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                            <input
                                                type="text"
                                                name="cardNumber"
                                                value={formData.cardNumber}
                                                onChange={handleInputChange}
                                                placeholder="0000 0000 0000 0000"
                                                className="w-full py-3 pl-10 pr-4 rounded-lg border border-slate-200 focus:border-indigo-500 outline-none transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Expiry Date</label>
                                            <input
                                                type="text"
                                                name="expiry"
                                                value={formData.expiry}
                                                onChange={handleInputChange}
                                                placeholder="MM/YY"
                                                className="w-full py-3 px-4 rounded-lg border border-slate-200 focus:border-indigo-500 outline-none transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">CVC</label>
                                            <input
                                                type="text"
                                                name="cvc"
                                                value={formData.cvc}
                                                onChange={handleInputChange}
                                                placeholder="123"
                                                className="w-full py-3 px-4 rounded-lg border border-slate-200 focus:border-indigo-500 outline-none transition-colors"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <button onClick={prevStep} className="flex-1 btn btn-outline py-3 flex items-center justify-center gap-2">
                                        <ChevronLeft size={20} /> Back
                                    </button>
                                    <button
                                        onClick={handleSubmit}
                                        disabled={isProcessing || !formData.cardNumber || !formData.expiry || !formData.cvc}
                                        className="flex-1 btn btn-primary py-3 flex items-center justify-center gap-2 relative overflow-hidden"
                                    >
                                        {isProcessing ? 'Processing...' : 'Complete Donation'}
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default DonationForm;
