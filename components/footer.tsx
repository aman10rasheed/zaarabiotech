'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Leaf, Mail, MapPin, Phone, ArrowRight, 
  Instagram, Linkedin, Twitter, Youtube,
  Globe
} from 'lucide-react';
import { companyInfo } from '@/lib/data';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'B-Lite Store', href: '/store' },
  { label: 'Product School', href: '/school' },
  { label: 'Contact', href: '/contact' },
];

const services = [
  { label: 'Food & Beverage R&D', href: '/services/food-beverage' },
  { label: 'Bio-Cosmetics', href: '/services/bio-cosmetics' },
  { label: 'Bio-IT & Automation', href: '/services/bio-it' },
  { label: 'Bioreactor Engineering', href: '/services/bioreactors' },
  { label: 'Agro Solutions', href: '/agro' },
];

const resources = [
  { label: 'Insights & Blog', href: '/insights' },
  { label: 'Press Releases', href: '/insights?tab=press' },
  { label: 'Investor Relations', href: '/about' },
  { label: 'Careers', href: '/contact' },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export const Footer = () => {
  return (
    <footer className="bg-[#14532d] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                <Leaf className="w-6 h-6 text-[#22c55e]" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">
                  Zaara Biotech
                </span>
                <p className="text-sm text-white/60">Engineering Nature&apos;s Intelligence</p>
              </div>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed max-w-md">
              {companyInfo.description}
            </p>
            
            {/* Global Offices */}
            <div className="space-y-3 mb-6">
              <h4 className="font-semibold text-white flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#22c55e]" />
                Global Presence
              </h4>
              {companyInfo.offices.map((office, index) => (
                <div key={index} className="flex items-start gap-2 text-white/70 text-sm">
                  <MapPin className="w-4 h-4 text-[#22c55e] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white/90">{office.location}</span>
                    <span className="block text-white/50">{office.type}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#22c55e] hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#22c55e] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-white/70 hover:text-[#22c55e] transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-white mb-6">Newsletter</h3>
            <p className="text-white/70 mb-4 text-sm">
              Subscribe for updates on our latest innovations, research, and products.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#22c55e] focus:ring-[#22c55e] rounded-lg"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-lg group"
              >
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
            
            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Phone className="w-4 h-4 text-[#22c55e]" />
                <span>+91 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Mail className="w-4 h-4 text-[#22c55e]" />
                <span>info@zaarabiotech.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partners Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-center text-white/50 text-sm mb-4">Trusted Partners & Collaborations</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {companyInfo.partners.map((partner, index) => (
              <div key={index} className="text-white/40 hover:text-white/70 transition-colors text-sm font-medium">
                {partner.name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Zaara Biotech. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-white/50 hover:text-[#22c55e] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/50 hover:text-[#22c55e] transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-white/50 hover:text-[#22c55e] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
