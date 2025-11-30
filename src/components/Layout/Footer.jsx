import React from 'react';
import { Heart, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white/50 backdrop-blur-md border-t border-white/50 mt-auto pt-12 pb-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 text-2xl font-bold text-gradient mb-4">
                            <Heart className="text-emerald-500" fill="currentColor" />
                            FundReach
                        </div>
                        <p className="text-gray-600 mb-4 max-w-md">
                            Empowering college volunteer programs through transparent, secure, and data-driven fundraising. Join us in making a difference today.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li><a href="/" className="hover:text-emerald-500 transition-colors">Home</a></li>
                            <li><a href="/donate" className="hover:text-emerald-500 transition-colors">Donate</a></li>
                            <li><a href="/dashboard" className="hover:text-emerald-500 transition-colors">Dashboard</a></li>
                            <li><a href="/transparency" className="hover:text-emerald-500 transition-colors">Transparency</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-800 mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2"><Mail size={16} /> fundreachproject@gmail.com
                            </li>
                            <li className="flex items-center gap-2"><MapPin size={16} /> Bagbazar, Kathmandu, Nepal</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© FundReach Digital. All rights reserved.</p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
