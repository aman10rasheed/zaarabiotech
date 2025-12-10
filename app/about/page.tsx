'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MapPin, Award, Building2, Target, Eye } from 'lucide-react';
import { companyInfo, milestones } from '@/lib/data';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#22c55e]/20"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white shadow-sm text-[#166534] text-sm font-medium mb-6">
              Corporate Heritage
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-6">
              From Student Project to{' '}
              <span className="gradient-text">Global Biotech Leader</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {companyInfo.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <SectionWrapper background="white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-[#166534] text-sm font-medium mb-4">
              <Calendar className="w-4 h-4" />
              Founded 2016
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-6">
              The Beginning at Sahrdaya College
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Zaara Biotech began as a visionary student initiative at Sahrdaya College of 
              Engineering and Technology in Thrissur, Kerala. Founded by Najeeb Bin Haneef 
              under the Innovation and Entrepreneurship Development Centre (IEDC) scheme, 
              the company was born from a simple yet powerful question: How can biotechnology 
              address the world&apos;s most pressing challenges?
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our focus on micro-algae technology emerged from recognizing these microscopic 
              organisms as nature&apos;s most efficient producers of protein, oxygen, and 
              renewable energy compounds.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="w-4 h-4 text-[#166534]" />
              {companyInfo.headquarters}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000"
                alt="Zaara Biotech Origins"
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl"
            >
              <div className="text-3xl font-bold text-[#166534]">2016</div>
              <div className="text-gray-600">Year Founded</div>
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper background="mint">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-14 h-14 rounded-xl bg-[#166534] flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {companyInfo.mission}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-14 h-14 rounded-xl bg-[#0c4a6e] flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To become the global leader in algae-based biotechnology, creating sustainable 
              solutions that nourish people and regenerate the planet for future generations.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper background="white">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-[#dcfce7] text-[#166534] text-sm font-medium mb-4"
          >
            Our Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#1a1a1a]"
          >
            Key Milestones
          </motion.h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#166534] via-[#22c55e] to-[#0c4a6e] hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 inline-block">
                    <div className="text-2xl font-bold text-[#166534] mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="w-4 h-4 rounded-full bg-[#166534] border-4 border-white shadow-lg z-10 hidden md:block" />
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Investment Section */}
      <section className="bg-gradient-to-r from-[#166534] to-[#0c4a6e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Award className="w-16 h-16 text-[#4ade80] mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {companyInfo.investment.amount}
            </h2>
            <p className="text-xl text-white/90 mb-2">
              Strategic Investment from {companyInfo.investment.investor}
            </p>
            <p className="text-white/70 mb-8">
              {companyInfo.investment.location} • {companyInfo.investment.year}
            </p>
            <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
              This pivotal investment validated our proprietary &quot;Algae-Seaweed Technology&quot; 
              and enabled our expansion into the Middle East and United States markets, 
              establishing Zaara Biotech as a truly global biotechnology enterprise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <SectionWrapper background="mint">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-6">
            Continue Exploring
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-[#166534] hover:bg-[#14532d] text-white rounded-xl">
              <Link href="/about/leadership">
                Meet Our Team <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-[#166534] text-[#166534] rounded-xl">
              <Link href="/about/sustainability">
                Sustainability & Obelia
              </Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}

