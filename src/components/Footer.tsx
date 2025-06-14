import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', action: () => onNavigate('home') },
      { label: 'Our Mission', action: () => onNavigate('home') },
      { label: 'Services', action: () => onNavigate('services') },
      { label: 'Contact', action: () => onNavigate('contact') }
    ],
    products: [
      { label: 'Smart Irrigation', action: () => onNavigate('services') },
      { label: 'Crop Monitoring', action: () => onNavigate('services') },
      { label: 'Weather Stations', action: () => onNavigate('services') },
      { label: 'Automation Systems', action: () => onNavigate('services') }
    ],
    support: [
      { label: 'Documentation', action: () => {} },
      { label: 'Installation Guide', action: () => {} },
      { label: 'Technical Support', action: () => onNavigate('contact') },
      { label: 'Warranty', action: () => {} }
    ],
    legal: [
      { label: 'Terms of Use', action: () => onNavigate('terms') },
      { label: 'Privacy Policy', action: () => {} },
      { label: 'Cookie Policy', action: () => {} },
      { label: 'GDPR Compliance', action: () => {} }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/agrow', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/agrow', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/agrow', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/agrow', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-green-600 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Agrow</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Revolutionizing agriculture through innovative technology solutions. 
              Empowering farmers worldwide with smart, sustainable, and efficient farming tools.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">info@agrow.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">123 Agriculture Tech Blvd, Farm City, FC 12345</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                © {currentYear} Agrow. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Registered trademark of Agrow Technologies Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;