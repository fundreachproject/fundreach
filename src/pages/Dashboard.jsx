import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Settings, History, Award, TrendingUp, Calendar, Globe, Lock } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import SettingsModal from '../components/Dashboard/SettingsModal';

const Dashboard = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [publicProfile, setPublicProfile] = useState(false);

    // Mock User Data
    const user = {
        name: 'Amit Neupane',
        email: 'neupaneamit65@gmail.com',
        totalDonated: 12050,
        impactScore: 85,
        joinedDate: 'March 2024'
    };

    const donationHistory = [
        { id: 1, date: '2025-05-15', amount: 50, cause: 'Annual Book Drive', status: 'Completed' },
        { id: 2, date: '2025-04-02', amount: 100, cause: 'Health Camp', status: 'Completed' },
        { id: 3, date: '2025-03-10', amount: 25, cause: 'General Fund', status: 'Completed' },
        { id: 4, date: '2025-02-28', amount: 50, cause: 'Community Garden', status: 'Completed' },
    ];

    const impactData = [
        { month: 'Jan', impact: 10 },
        { month: 'Feb', impact: 25 },
        { month: 'Mar', impact: 40 },
        { month: 'Apr', impact: 55 },
        { month: 'May', impact: 85 },
    ];

    return (
        <div className="container pt-12 pb-20">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-12 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-3xl font-bold">
                    {user.name.charAt(0)}
                </div>
                <div className="flex-grow text-center md:text-left space-y-1">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <h1 className="text-3xl font-bold text-slate-900">{user.name}</h1>
                        <button
                            onClick={() => setPublicProfile(!publicProfile)}
                            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all border ${publicProfile
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                                }`}
                        >
                            {publicProfile ? <Globe size={12} /> : <Lock size={12} />}
                            {publicProfile ? 'Public' : 'Private'}
                        </button>
                    </div>
                    <p className="text-slate-500">{user.email} • Member since {user.joinedDate}</p>
                </div>
                <button
                    onClick={() => setIsSettingsOpen(true)}
                    className="btn btn-outline flex items-center gap-2"
                >
                    <Settings size={18} /> Settings
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2"
                >
                    <div className="flex items-center gap-3 text-indigo-600 mb-2">
                        <div className="p-2 bg-indigo-50 rounded-lg"><TrendingUp size={24} /></div>
                        <span className="font-medium">Total Donated</span>
                    </div>
                    <div className="text-3xl font-bold text-slate-900">Rs. {user.totalDonated}</div>
                </motion.div>

                <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2"
                >
                    <div className="flex items-center gap-3 text-rose-600 mb-2">
                        <div className="p-2 bg-rose-50 rounded-lg"><Award size={24} /></div>
                        <span className="font-medium">Impact Score</span>
                    </div>
                    <div className="text-3xl font-bold text-slate-900">{user.impactScore}</div>
                    <p className="text-sm text-slate-500">Top 5% of donors!</p>
                </motion.div>

                <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2"
                >
                    <div className="flex items-center gap-3 text-amber-600 mb-2">
                        <div className="p-2 bg-amber-50 rounded-lg"><History size={24} /></div>
                        <span className="font-medium">Last Donation</span>
                    </div>
                    <div className="text-3xl font-bold text-slate-900">Rs. 50</div>
                    <p className="text-sm text-slate-500">on May 15, 2025</p>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Impact Chart */}
                <div className="md:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900">
                        <TrendingUp size={20} className="text-indigo-500" /> Your Impact Over Time
                    </h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={impactData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} />
                                <Tooltip />
                                <Line type="monotone" dataKey="impact" stroke="#4f46e5" strokeWidth={3} dot={{ fill: '#4f46e5', strokeWidth: 2 }} activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent History */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900">
                        <Calendar size={20} className="text-slate-500" /> Recent Activity
                    </h3>
                    <div className="space-y-6">
                        {donationHistory.map((item) => (
                            <div key={item.id} className="flex items-center justify-between border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                                <div>
                                    <div className="font-bold text-slate-800">{item.cause}</div>
                                    <div className="text-sm text-slate-500">{item.date}</div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-indigo-600">+Rs. {item.amount}</div>
                                    <div className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full inline-block mt-1">{item.status}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full btn btn-outline mt-6 text-sm">View Full History</button>
                </div>
            </div>

            <SettingsModal
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
                user={user}
                publicProfile={publicProfile}
                setPublicProfile={setPublicProfile}
            />
        </div>
    );
};

export default Dashboard;
