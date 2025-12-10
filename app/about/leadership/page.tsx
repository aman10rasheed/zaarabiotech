'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Linkedin, Mail, Quote } from 'lucide-react';
import { companyInfo } from '@/lib/data';

const leadership = [
  {
    name: 'Najeeb Bin Haneef',
    role: 'Founder & CEO',
    initials: 'NH',
    bio: 'Visionary entrepreneur who founded Zaara Biotech as a student at Sahrdaya College. Under his leadership, the company has grown from a campus startup to a $10M+ global biotech enterprise.',
    linkedin: '#',
    email: 'ceo@zaarabiotech.com',
    featured: true,
  },
  {
    name: 'Dr. Research Head',
    role: 'Chief Scientific Officer',
    initials: 'RH',
    bio: 'Leading our R&D initiatives with expertise in algae biotechnology and food science. Oversees collaborations with ICAR-CIFT.',
    linkedin: '#',
    email: 'research@zaarabiotech.com',
  },
  {
    name: 'Operations Director',
    role: 'Chief Operations Officer',
    initials: 'OD',
    bio: 'Managing global operations across India, UAE, and USA. Ensures seamless production and quality across all divisions.',
    linkedin: '#',
    email: 'operations@zaarabiotech.com',
  },
  {
    name: 'Business Strategy Lead',
    role: 'Chief Business Officer',
    initials: 'BS',
    bio: 'Driving business development and strategic partnerships. Led negotiations for the $10M TCN International investment.',
    linkedin: '#',
    email: 'business@zaarabiotech.com',
  },
];

const advisors = [
  { name: 'ICAR Representative', role: 'Agricultural Science Advisor' },
  { name: 'CIFT Expert', role: 'Fisheries Technology Advisor' },
  { name: 'TCN International', role: 'Investment Partner' },
];

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfeff]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white shadow-sm text-[#166534] text-sm font-medium mb-6">
              Our Team
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-6">
              Visionary{' '}
              <span className="gradient-text">Leadership</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Meet the team driving innovation in sustainable biotechnology from 
              our labs in Kerala to global markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Leader - CEO */}
      <SectionWrapper background="white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#166534] to-[#0c4a6e] rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="w-32 h-32 mx-auto md:mx-0 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-4xl font-bold mb-4">
                {companyInfo.founder.initials}
              </div>
              <div className="flex justify-center md:justify-start gap-3 mt-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:ceo@zaarabiotech.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-2">{companyInfo.founder.name}</h2>
              <p className="text-[#4ade80] font-medium mb-6">{companyInfo.founder.title}</p>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-white/20" />
                <p className="text-white/90 text-lg leading-relaxed pl-6">
                  &quot;Innovation should not just advance science, but create real-world impact. 
                  We started Zaara Biotech with a dream to harness nature&apos;s most efficient 
                  organisms—micro-algae—to solve humanity&apos;s greatest challenges.&quot;
                </p>
              </div>
              
              <p className="text-white/70 leading-relaxed">
                Najeeb founded Zaara Biotech in 2016 as a student project at Sahrdaya College of 
                Engineering and Technology. Under his leadership, the company secured $10M in 
                investment from TCN International and expanded operations globally.
              </p>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Leadership Team */}
      <SectionWrapper background="mint">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4">
            Executive Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our diverse leadership brings together expertise in biotechnology, business, 
            and operations to drive Zaara Biotech&apos;s global mission.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {leadership.slice(1).map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#166534] to-[#22c55e] flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {leader.initials}
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-[#1a1a1a] text-lg">{leader.name}</h3>
                    <p className="text-[#166534] text-sm font-medium">{leader.role}</p>
                  </div>
                  <p className="text-gray-600 text-sm text-center mb-4">{leader.bio}</p>
                  <div className="flex justify-center gap-3">
                    <a href={leader.linkedin} className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#166534] hover:text-white transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={`mailto:${leader.email}`} className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#166534] hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Advisory Board */}
      <SectionWrapper background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Advisory Board</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Guided by experts from premier institutions and strategic partners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {advisors.map((advisor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-[#f0fdf4] transition-colors"
            >
              <h3 className="font-semibold text-[#1a1a1a]">{advisor.name}</h3>
              <p className="text-sm text-gray-600">{advisor.role}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper background="sage">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Join Our Mission</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            We&apos;re always looking for passionate individuals to join our team and 
            help shape the future of sustainable biotechnology.
          </p>
          <Button asChild size="lg" className="bg-[#166534] hover:bg-[#14532d] text-white rounded-full">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}

