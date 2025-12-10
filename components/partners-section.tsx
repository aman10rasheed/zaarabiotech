'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from './section-wrapper';
import { Award, Building2, Globe, Handshake } from 'lucide-react';
import { companyInfo } from '@/lib/data';

const partnerIcons = [Building2, Globe, Award, Handshake];

export const PartnersSection = () => {
  return (
    <SectionWrapper background="white">
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 rounded-full bg-[#f0fdf4] text-[#166534] text-sm font-medium mb-4"
        >
          Trusted Partnerships
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4"
        >
          Our Collaborators & Investors
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Backed by government institutions and international investors who believe 
          in our vision for sustainable biotechnology.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {companyInfo.partners.map((partner, index) => {
          const Icon = partnerIcons[index % partnerIcons.length];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#166534]/10 to-[#0c4a6e]/10 flex items-center justify-center">
                <Icon className="w-7 h-7 text-[#166534]" />
              </div>
              <h3 className="font-bold text-[#1a1a1a] mb-1">{partner.name}</h3>
              <p className="text-sm text-gray-600">{partner.fullName}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Investment Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 bg-gradient-to-r from-[#166534] to-[#0c4a6e] rounded-2xl p-8 md:p-12 text-white text-center"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-5xl md:text-6xl font-bold mb-4">
            {companyInfo.investment.amount}
          </div>
          <p className="text-xl md:text-2xl text-white/90 mb-2">
            Strategic Investment from {companyInfo.investment.investor}
          </p>
          <p className="text-white/70">
            {companyInfo.investment.location} • {companyInfo.investment.year}
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default PartnersSection;

