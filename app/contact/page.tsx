'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MapPin, Phone, Mail, Clock, Globe, Building2, 
  Send, MessageSquare, Briefcase, GraduationCap
} from 'lucide-react';
import { companyInfo } from '@/lib/data';

const contactReasons = [
  { id: 'general', label: 'General Inquiry', icon: MessageSquare },
  { id: 'services', label: 'R&D Services', icon: Briefcase },
  { id: 'products', label: 'B-Lite Products', icon: Building2 },
  { id: 'school', label: 'Product School', icon: GraduationCap },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-[#22c55e]/20"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white shadow-sm text-[#166534] text-sm font-medium mb-6">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-6">
              Let&apos;s Start a{' '}
              <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you&apos;re interested in our R&D services, B-Lite products, or 
              Product School, we&apos;re here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <SectionWrapper background="white">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                  Send us a Message
                </h2>
                
                {/* Inquiry Type */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    I&apos;m interested in:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {contactReasons.map((reason) => (
                      <label
                        key={reason.id}
                        className="flex items-center gap-3 p-3 rounded-lg border-2 border-gray-200 cursor-pointer hover:border-[#166534] transition-colors"
                      >
                        <input
                          type="radio"
                          name="inquiry"
                          value={reason.id}
                          className="text-[#166534] focus:ring-[#166534]"
                        />
                        <reason.icon className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-700">{reason.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        className="rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        className="rounded-lg"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        placeholder="+91 XXX XXX XXXX"
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <Input
                        type="text"
                        placeholder="Company Name"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#166534] focus:ring-1 focus:ring-[#166534] outline-none resize-none"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#166534] hover:bg-[#14532d] text-white rounded-full"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Global Offices */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[#166534]" />
                  Global Offices
                </h3>
                <div className="space-y-4">
                  {companyInfo.offices.map((office, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#f0fdf4] flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-[#166534]" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#1a1a1a]">{office.location}</div>
                        <div className="text-sm text-gray-600">{office.type}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Headquarters */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#166534] to-[#0c4a6e] text-white">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">Headquarters</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-[#4ade80] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Zaara Biotech Innovation Lab</div>
                      <div className="text-white/70 text-sm">
                        Near Rare Earth Division<br />
                        Kalamassery, Ernakulam<br />
                        Kerala, India
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#4ade80]" />
                    <span className="text-white/90">+91 XXX XXX XXXX</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#4ade80]" />
                    <span className="text-white/90">info@zaarabiotech.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#4ade80]" />
                    <span className="text-white/90">Mon - Sat: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-[#1a1a1a] mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:info@zaarabiotech.com"
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-[#f0fdf4] transition-colors"
                  >
                    <Mail className="w-5 h-5 text-[#166534]" />
                    <span className="text-gray-700">Email Us Directly</span>
                  </a>
                  <a
                    href="tel:+91XXXXXXXXXX"
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-[#f0fdf4] transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[#166534]" />
                    <span className="text-gray-700">Call Us</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-[#f0fdf4] transition-colors"
                  >
                    <MessageSquare className="w-5 h-5 text-[#166534]" />
                    <span className="text-gray-700">WhatsApp</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Map Section */}
      <section className="h-[400px] bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-[#f0fdf4]">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-[#166534] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
              Zaara Biotech Innovation Lab
            </h3>
            <p className="text-gray-600">
              Kalamassery, Ernakulam, Kerala, India
            </p>
            <p className="text-sm text-gray-500 mt-4">
              [Interactive Map Placeholder]
            </p>
          </div>
        </div>
      </section>

      {/* Partners */}
      <SectionWrapper background="mint">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-600 mb-6">
            Trusted by Leading Institutions
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {companyInfo.partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-400 hover:text-[#166534] transition-colors font-semibold"
              >
                {partner.name}
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}

