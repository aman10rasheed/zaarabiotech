'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from './section-wrapper';
import { Quote, Award } from 'lucide-react';
import { companyInfo, milestones } from '@/lib/data';

export const CeoMessage = () => {
  return (
    <SectionWrapper id="mission" background="sage">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-[#166534] flex items-center justify-center"
          >
            <Quote className="w-8 h-8 text-white" />
          </motion.div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl ml-6 mt-6">
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-[#1a1a1a] leading-relaxed mb-8">
              &ldquo;Innovation should not just advance science, but create{' '}
              <span className="text-[#166534]">real-world impact</span>. At Zaara Biotech, 
              we&apos;re committed to transforming lives through sustainable biotechnology.&rdquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#166534] to-[#22c55e] flex items-center justify-center text-white font-bold text-xl">
                {companyInfo.founder.initials}
              </div>
              <div>
                <div className="font-bold text-[#1a1a1a] text-lg">
                  {companyInfo.founder.name}
                </div>
                <div className="text-[#166534] font-medium">
                  {companyInfo.founder.title}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline Preview */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-[#166534]" />
            <span className="text-sm font-medium text-[#166534] uppercase tracking-wider">
              Our Journey
            </span>
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-8">
            Key Milestones
          </h3>

          <div className="space-y-4">
            {milestones.slice(-4).map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex gap-4 items-start group"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white shadow-md flex items-center justify-center group-hover:bg-[#166534] transition-colors">
                  <span className="font-bold text-[#166534] group-hover:text-white transition-colors">
                    {milestone.year}
                  </span>
                </div>
                <div className="pt-1">
                  <div className="font-semibold text-[#1a1a1a]">{milestone.title}</div>
                  <div className="text-gray-600 text-sm">{milestone.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 text-center max-w-4xl mx-auto"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-[#166534] to-transparent mb-8" />
        <p className="text-lg text-gray-700 leading-relaxed">
          <span className="font-semibold text-[#166534]">Our Mission:</span>{' '}
          {companyInfo.mission}
        </p>
      </motion.div>
    </SectionWrapper>
  );
};

export default CeoMessage;
