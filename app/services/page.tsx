'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Utensils, Sparkles, Sprout, Cpu, FlaskConical, Rocket, Check } from 'lucide-react';
import { services } from '@/lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Utensils,
  Sparkles,
  Sprout,
  Cpu,
  FlaskConical,
  Rocket,
};

const processSteps = [
  { step: 1, title: 'Consultation', description: 'Understanding your requirements and goals' },
  { step: 2, title: 'Research', description: 'In-depth analysis and feasibility studies' },
  { step: 3, title: 'Development', description: 'Prototyping and formulation' },
  { step: 4, title: 'Testing', description: 'Quality assurance and regulatory compliance' },
  { step: 5, title: 'Scale-Up', description: 'Production optimization and launch' },
];

export default function ServicesPage() {
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
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#0c4a6e]/20"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#ecfeff] text-[#0c4a6e] text-sm font-medium mb-6">
              R&D Excellence
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-6">
              Innovation &{' '}
              <span className="gradient-text-blue">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From concept to commercialization, we provide end-to-end biotechnology 
              solutions backed by ICAR-CIFT certification and cutting-edge research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper background="white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/services/${service.id}`}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden hover:-translate-y-2">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-14 h-14 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center">
                          {IconComponent && <IconComponent className="w-7 h-7 text-[#166534]" />}
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#166534] transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 rounded-full bg-[#f0fdf4] text-[#166534]"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-[#166534] font-medium">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper background="mint">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-white text-[#166534] text-sm font-medium mb-4"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4"
          >
            Concept to Commercialization
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Our systematic approach ensures quality at every stage of product development.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {processSteps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg text-center min-w-[180px]">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#166534] text-white font-bold flex items-center justify-center mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold text-[#1a1a1a] mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <ArrowRight className="w-6 h-6 text-[#166534] mx-2 hidden lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper background="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-6">
              Why Partner with <span className="gradient-text">Zaara Biotech?</span>
            </h2>
            <div className="space-y-4">
              {[
                'ICAR-CIFT Certified Research Facilities',
                '$10M+ Backed by International Investors',
                'Proprietary Algae-Seaweed Technology',
                'End-to-End Product Development',
                'Global Distribution Network',
                'Experienced Multidisciplinary Team',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#166534] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
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
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1000"
                alt="Zaara Biotech Lab"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#166534] to-[#0c4a6e] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Innovate?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Let&apos;s discuss how our R&D capabilities can bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[#166534] hover:bg-white/90 rounded-xl">
                <Link href="/contact">
                  Schedule Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 rounded-xl">
                <Link href="/school">
                  Explore Product School
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

