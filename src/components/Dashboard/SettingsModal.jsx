import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, User, Bell, Shield, Moon } from 'lucide-react';

const SettingsModal = ({ isOpen, onClose, user, publicProfile, setPublicProfile }) => {
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        notifications: true,
        publicProfile: publicProfile,
        darkMode: false
    });

    // Sync local state with prop when modal opens or prop changes
    useEffect(() => {
        setFormData(prev => ({ ...prev, publicProfile }));
    }, [publicProfile]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // If changing public profile, update parent state immediately (or wait for save, but immediate feels more responsive for a toggle)
        if (name === 'publicProfile') {
            setPublicProfile(checked);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically call an API to update the user settings
        console.log('Settings saved:', formData);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={e => e.stopPropagation()}
                            className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden"
                        >
                            {/* Header */}
                            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                                <h2 className="text-xl font-bold text-slate-900">Settings</h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Body */}
                            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                                {/* Profile Section */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                                        <User size={16} className="text-indigo-500" /> Profile Information
                                    </h3>
                                    <div className="grid gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                readOnly
                                                className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-500 cursor-not-allowed"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="h-px bg-slate-100" />

                                {/* Preferences Section */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                                        <Shield size={16} className="text-indigo-500" /> Preferences
                                    </h3>
                                    <div className="space-y-3">
                                        <label className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all cursor-pointer group">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg group-hover:bg-indigo-200 transition-colors">
                                                    <Bell size={18} />
                                                </div>
                                                <div>
                                                    <div className="font-medium text-slate-900">Notifications</div>
                                                    <div className="text-xs text-slate-500">Receive updates about your impact</div>
                                                </div>
                                            </div>
                                            <input
                                                type="checkbox"
                                                name="notifications"
                                                checked={formData.notifications}
                                                onChange={handleChange}
                                                className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300"
                                            />
                                        </label>

                                        <label className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all cursor-pointer group">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg group-hover:bg-emerald-200 transition-colors">
                                                    <User size={18} />
                                                </div>
                                                <div>
                                                    <div className="font-medium text-slate-900">Public Profile</div>
                                                    <div className="text-xs text-slate-500">Allow others to see your impact</div>
                                                </div>
                                            </div>
                                            <input
                                                type="checkbox"
                                                name="publicProfile"
                                                checked={formData.publicProfile}
                                                onChange={handleChange}
                                                className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300"
                                            />
                                        </label>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="pt-4 flex gap-3 justify-end">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium shadow-sm shadow-indigo-200 flex items-center gap-2 transition-all transform active:scale-95"
                                    >
                                        <Save size={18} /> Save Changes
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default SettingsModal;
