import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, BarChart3, Home, DollarSign } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/', icon: <Home size={18} /> },
        { name: 'Donate', path: '/donate', icon: <Heart size={18} /> },
        { name: 'Dashboard', path: '/dashboard', icon: <BarChart3 size={18} /> },
        { name: 'Transparency', path: '/transparency', icon: <DollarSign size={18} /> },
    ];

    return (
        <nav className="bg-white border-b border-slate-200 shadow-sm">
            <div className="container flex justify-between items-center h-20">
                <Link to="/" className="text-2xl font-bold flex items-center gap-2 text-slate-900">
                    <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                        <Heart size={20} fill="currentColor" />
                    </div>
                    FundReach
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`flex items-center gap-2 font-medium transition-colors ${location.pathname === link.path
                                ? 'text-indigo-600'
                                : 'text-slate-600 hover:text-slate-900'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/donate" className="btn btn-primary shadow-lg shadow-indigo-200">
                        Donate Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-slate-700 p-2" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
                    >
                        <div className="container py-4 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center gap-3 p-3 rounded-lg font-medium ${location.pathname === link.path
                                        ? 'bg-indigo-50 text-indigo-600'
                                        : 'text-slate-600 hover:bg-slate-50'
                                        }`}
                                >
                                    {link.icon}
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-2">
                                <Link
                                    to="/donate"
                                    onClick={() => setIsOpen(false)}
                                    className="btn btn-primary w-full justify-center"
                                >
                                    Donate Now
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
