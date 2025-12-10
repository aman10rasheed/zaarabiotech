'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  GraduationCap, BookOpen, Briefcase, ArrowRight, Check, 
  Award, Users, Calendar, MapPin, Beaker, Clock
} from 'lucide-react';
import { productSchool } from '@/lib/data';

const programIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  BookOpen,
  Briefcase,
};

export default function SchoolPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfeff]">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#22c55e]/20"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-[#166534] text-sm font-medium mb-6">
                <GraduationCap className="w-4 h-4" />
                {productSchool.tagline}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-6">
                {productSchool.title.split(' ').slice(0, 2).join(' ')}{' '}
                <span className="gradient-text">{productSchool.title.split(' ').slice(2).join(' ')}</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {productSchool.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                {productSchool.features.slice(0, 2).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-6 h-6 rounded-full bg-[#166534] flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{feature.title}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#166534] hover:bg-[#14532d] text-white rounded-full">
                  Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-[#166534] text-[#166534] rounded-full">
                  Download Brochure
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000"
                  alt="Zaara Product School"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl"
              >
                <div className="text-3xl font-bold text-[#166534]">First</div>
                <div className="text-gray-600">In India</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <SectionWrapper background="white">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-[#dcfce7] text-[#166534] text-sm font-medium mb-4"
          >
            Our Programs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4"
          >
            Tailored Learning Paths
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Choose the program that fits your career stage and aspirations.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {productSchool.programs.map((program, index) => {
            const IconComponent = programIcons[program.icon];
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
                  <CardHeader className="bg-gradient-to-br from-[#166534] to-[#22c55e] text-white p-6">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center mb-4">
                      {IconComponent && <IconComponent className="w-7 h-7" />}
                    </div>
                    <CardTitle className="text-2xl">{program.name}</CardTitle>
                    <p className="text-white/80 text-sm">{program.target}</p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    <Button className="w-full bg-[#166534] hover:bg-[#14532d] text-white rounded-full group-hover:translate-y-0 transition-transform">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Curriculum */}
      <SectionWrapper background="mint">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-6">
              Comprehensive <span className="gradient-text">Curriculum</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Our curriculum covers the complete product development lifecycle, 
              from ideation to market launch.
            </p>
            
            <div className="space-y-4">
              {productSchool.curriculum.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-[#166534] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="font-medium text-[#1a1a1a]">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">
              Skills You Will Master
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {productSchool.outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-[#22c55e] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm">{outcome}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Features */}
      <SectionWrapper background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">
            Why Choose Zaara Product School?
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Award, title: '100% Money-Back', description: 'Risk-free learning guarantee' },
            { icon: Users, title: 'Expert Mentors', description: 'Learn from industry professionals' },
            { icon: Beaker, title: 'Hands-On Labs', description: '1-month comprehensive R&D training' },
            { icon: MapPin, title: 'Field Visits', description: 'Marine & forest excursions' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-[#f0fdf4] transition-colors"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-[#166534] flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-[#1a1a1a] mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Enrollment CTA */}
      <section className="bg-gradient-to-r from-[#166534] to-[#0c4a6e] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Scholarships up to 100% available. Apply now and transform your career.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full"
                />
                <Button className="bg-white text-[#166534] hover:bg-white/90 rounded-full px-6">
                  Apply <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <p className="text-white/60 text-sm mt-3">
                We&apos;ll send you the application form and scholarship details.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

