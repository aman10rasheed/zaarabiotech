'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Utensils, Sparkles, Sprout, Cpu, FlaskConical, Rocket } from 'lucide-react';
import { SectionWrapper } from './section-wrapper';
import { services } from '@/lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Utensils,
  Sparkles,
  Sprout,
  Cpu,
  FlaskConical,
  Rocket,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const ServicesPreview = () => {
  return (
    <SectionWrapper id="services-preview" background="white">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 rounded-full bg-[#ecfeff] text-[#0c4a6e] text-sm font-medium mb-4"
        >
          R&D Excellence
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4"
        >
          Innovation & <span className="gradient-text-blue">Services</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto"
        >
          From concept to commercialization, we provide end-to-end biotechnology 
          solutions for the world&apos;s most ambitious companies.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.slice(0, 6).map((service, index) => {
          const IconComponent = iconMap[service.icon];
          return (
            <motion.div key={service.id} variants={cardVariants}>
              <Link href={`/services/${service.id}`}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden bg-white hover:-translate-y-1">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center">
                        {IconComponent && <IconComponent className="w-6 h-6 text-[#166534]" />}
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-bold text-[#1a1a1a] group-hover:text-[#166534] transition-colors">
                      {service.shortTitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-[#166534] text-sm font-medium">
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-2 border-[#166534] text-[#166534] hover:bg-[#166534] hover:text-white rounded-full px-8"
        >
          <Link href="/services">
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </motion.div>
    </SectionWrapper>
  );
};

export default ServicesPreview;

