import { Mail, Phone, MapPin, Link as LinkIcon, Users } from "lucide-react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="relative shadow-lg text-blue-700 backdrop-blur-3xl border-white/50 bg-transparent">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand / About */}
                <div>
                    <Logo size={1.2} />
                    <p className="mt-4 text-sm text-blue-700 leading-relaxed">
                        Simply E-Mobiles provides eco-friendly electric bikes, tricycles,
                        and cars tailored for individuals, businesses, and fleet solutions.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-blue-950">Home</Link></li>
                        <li><Link to="/#about" className="hover:text-blue-950">About Us</Link></li>
                        <li><Link to="/products/bikes" className="hover:text-blue-950">Electric Bikes</Link></li>
                        <li><Link to="/products/tricycles" className="hover:text-blue-950">Electric Tricycles</Link></li>
                        <li><Link to="/products/cars" className="hover:text-blue-950">Electric Cars</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-950">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-4">Contact</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                            <Phone size={16} className="mt-0.5" />
                            <span className="space-y-1">
                                <a href="tel:09063671109" className="hover:text-blue-950 block">0906 367 1109</a>
                                <a href="tel:07047907575" className="hover:text-blue-950 block">0704 790 7575</a>
                                <a href="tel:08063626413" className="hover:text-blue-950 block">0806 362 6413</a>
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Mail size={16} className="mt-0.5" />
                            <a
                                href="mailto:simplyemobilesng@gmail.com"
                                className="hover:text-blue-950"
                            >
                                simplyemobilesng@gmail.com
                            </a>
                        </li>
                        <li className="flex items-start gap-2">
                            <MapPin size={16} className="mt-0.5" />
                            <span>
                                DLK HOUSE, Plot 10, Block 124, <br />
                                T.F Kuboye Street, Oniru, Lagos
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Extra Links / Social */}
                <div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-4">Connect</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                            <LinkIcon size={16} />
                            <a
                                href="https://simplysolar.ng/simply-e-mobile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-950"
                            >
                                simplysolar.ng/simply-e-mobile
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Users size={16} />
                            <span>@simply_emobiles</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-blue-200/20 py-6 text-center text-sm text-blue-700">
                © {new Date().getFullYear()} Simply E-Mobiles. All rights reserved.
                <span className="ml-1">
                    By <span className="text-blue-700 font-semibold">AY||TECH!</span>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
