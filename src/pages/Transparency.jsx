import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { TrendingUp, Users, DollarSign, Target } from 'lucide-react';

const Transparency = () => {
    // Mock Data
    const allocationData = [
        { name: 'Education', value: 45, color: '#4f46e5' }, // Indigo 600
        { name: 'Community', value: 30, color: '#f43f5e' }, // Rose 500
        { name: 'Health', value: 15, color: '#f59e0b' },    // Amber 500
        { name: 'Operations', value: 10, color: '#64748b' }, // Slate 500
    ];

    const monthlyData = [
        { name: 'Jan', amount: 4000 },
        { name: 'Feb', amount: 3000 },
        { name: 'Mar', amount: 5500 },
        { name: 'Apr', amount: 4800 },
        { name: 'May', amount: 6200 },
        { name: 'Jun', amount: 7500 },
    ];

    const campaigns = [
        { name: 'Annual Book Drive', raised: 12500, goal: 15000, color: 'bg-indigo-600' },
        { name: 'Community Garden', raised: 3200, goal: 5000, color: 'bg-rose-500' },
        { name: 'Health Camp', raised: 8000, goal: 8000, color: 'bg-amber-500' },
    ];

    return (
        <div className="container pt-12 pb-20 space-y-12">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Financial <span className="text-indigo-600">Transparency</span></h1>
                <p className="text-xl text-slate-600">
                    We believe in complete openness. Here's exactly how your donations are making an impact.
                </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: 'Total Raised', value: 'Rs. 45,200', icon: <DollarSign />, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                    { label: 'Total Donors', value: '1,240', icon: <Users />, color: 'text-rose-600', bg: 'bg-rose-50' },
                    { label: 'Projects Funded', value: '24', icon: <Target />, color: 'text-amber-600', bg: 'bg-amber-50' },
                    { label: 'Growth (YoY)', value: '+18%', icon: <TrendingUp />, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                ].map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
                    >
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.bg} ${stat.color}`}>
                            {stat.icon}
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                            <div className="text-sm text-slate-500">{stat.label}</div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Fund Allocation Chart */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
                >
                    <h3 className="text-xl font-bold mb-6 text-slate-900">Fund Allocation</h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={allocationData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {allocationData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                {/* Monthly Trends Chart */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
                >
                    <h3 className="text-xl font-bold mb-6 text-slate-900">Donation Trends (2025)</h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={monthlyData}>
                                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} prefix="Rs. " />
                                <Tooltip cursor={{ fill: 'transparent' }} />
                                <Bar dataKey="amount" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>
            </div>

            {/* Active Campaigns Progress */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-bold mb-8 text-slate-900">Active Campaigns</h3>
                <div className="space-y-8">
                    {campaigns.map((campaign, index) => {
                        const percentage = Math.min(100, Math.round((campaign.raised / campaign.goal) * 100));
                        return (
                            <div key={index} className="space-y-2">
                                <div className="flex justify-between font-medium text-slate-700">
                                    <span>{campaign.name}</span>
                                    <span className="text-slate-500">Rs. {campaign.raised.toLocaleString()} / Rs. {campaign.goal.toLocaleString()}</span>
                                </div>
                                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${percentage}%` }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className={`h-full ${campaign.color}`}
                                    ></motion.div>
                                </div>
                                <div className="text-right text-sm text-slate-500">{percentage}% Funded</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Transparency;
