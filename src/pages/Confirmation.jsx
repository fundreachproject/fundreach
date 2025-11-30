import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Download, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const Confirmation = () => {
    const location = useLocation();
    const { amount, frequency, transactionId } = location.state || {
        amount: 50,
        frequency: 'one-time',
        transactionId: 'TXN-123456789'
    };

    return (
        <div className="container pt-20 pb-20 flex justify-center">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="glass-card p-12 max-w-lg w-full text-center space-y-6"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                    className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-500"
                >
                    <CheckCircle size={48} />
                </motion.div>

                <h1 className="text-3xl font-bold text-gray-800">Thank You!</h1>
                <p className="text-gray-600">
                    Your donation has been successfully processed. Your support makes a real difference.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 space-y-3 text-left">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Amount</span>
                        <span className="font-bold text-gray-800">${amount}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Frequency</span>
                        <span className="font-bold text-gray-800 capitalize">{frequency}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Transaction ID</span>
                        <span className="font-mono text-sm text-gray-800">{transactionId}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Date</span>
                        <span className="font-bold text-gray-800">{new Date().toLocaleDateString()}</span>
                    </div>
                </div>

                <div className="flex flex-col gap-3 pt-4">
                    <button className="btn btn-outline flex items-center justify-center gap-2">
                        <Download size={18} /> Download Receipt
                    </button>
                    <Link to="/" className="btn btn-primary flex items-center justify-center gap-2">
                        <Home size={18} /> Return Home
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Confirmation;
