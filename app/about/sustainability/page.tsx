'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Wind, Leaf, Droplets, Activity, Recycle, Sun, TreePine, Building2 } from 'lucide-react';
import { obelia } from '@/lib/data';

const circularEconomy = [
  {
    step: 1,
    title: 'Algae Cultivation',
    description: 'CO2 absorbed through photosynthesis in controlled photobioreactors',
    icon: Sun,
  },
  {
    step: 2,
    title: 'Biomass Harvest',
    description: 'Algae biomass rich in proteins, lipids, and nutrients',
    icon: Leaf,
  },
  {
    step: 3,
    title: 'Product Development',
    description: 'Transformed into B-Lite cookies, cosmetics, and bio-fertilizers',
    icon: Recycle,
  },
  {
    step: 4,
    title: 'Consumer Impact',
    description: 'Healthy products that reduce environmental footprint',
    icon: TreePine,
  },
];

const impactStats = [
  { value: '40%', label: 'CO2 Reduction', description: 'In pilot installations' },
  { value: '100%', label: 'Natural', description: 'No chemical additives' },
  { value: 'Zero', label: 'Waste', description: 'Circular economy model' },
  { value: '24/7', label: 'Purification', description: 'Continuous operation' },
];

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-ocean">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-[#22c55e]/20"
          />
          {/* Floating algae bubbles */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-[#22c55e]/40"
              style={{ left: `${10 + i * 9}%`, top: `${30 + (i % 4) * 15}%` }}
              animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white text-sm font-medium mb-6">
              {obelia.subtitle}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {obelia.name}:{' '}
              <span className="text-[#4ade80]">{obelia.tagline}</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {obelia.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Obelia */}
      <SectionWrapper background="white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-6">
              Living Architecture for a <span className="gradient-text-blue">Sustainable Future</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Obelia is our revolutionary urban algae project that transforms built environments 
              into living, breathing ecosystems. By integrating photobioreactor technology into 
              architectural design, we create spaces that actively purify air and capture carbon.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Unlike conventional air purification systems that consume energy, Obelia produces 
              it—generating oxygen through photosynthesis while sequestering carbon dioxide from 
              the atmosphere.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {obelia.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#ecfeff] flex items-center justify-center flex-shrink-0">
                    {index === 0 && <Wind className="w-5 h-5 text-[#0c4a6e]" />}
                    {index === 1 && <Leaf className="w-5 h-5 text-[#0c4a6e]" />}
                    {index === 2 && <Building2 className="w-5 h-5 text-[#0c4a6e]" />}
                    {index === 3 && <Activity className="w-5 h-5 text-[#0c4a6e]" />}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a1a]">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
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
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1000"
                alt="Obelia Urban Algae Installation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/60 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl"
            >
              <div className="text-3xl font-bold text-[#0c4a6e]">40%</div>
              <div className="text-gray-600">CO2 Reduction</div>
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Impact Stats */}
      <section className="bg-gradient-to-r from-[#166534] to-[#0c4a6e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#4ade80]">{stat.value}</div>
                <div className="text-white font-medium mt-1">{stat.label}</div>
                <div className="text-white/60 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Circular Economy */}
      <SectionWrapper background="mint">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-white text-[#166534] text-sm font-medium mb-4"
          >
            Zero-Waste Philosophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4"
          >
            Our Circular Economy Model
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Every process feeds into the next, creating a sustainable loop where 
            waste becomes a resource.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {circularEconomy.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="h-full border-0 shadow-lg text-center relative overflow-visible">
                <CardContent className="p-6">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#166534] text-white text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[#f0fdf4] flex items-center justify-center mb-4 mt-4">
                    <step.icon className="w-8 h-8 text-[#166534]" />
                  </div>
                  <h3 className="font-bold text-[#1a1a1a] mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
              {index < 3 && (
                <div className="hidden md:flex items-center justify-center absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-[#166534]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Applications */}
      <SectionWrapper background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4">
            Applications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Obelia technology can be integrated into various environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Commercial Buildings',
              description: 'Office complexes and retail spaces with living walls',
              image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600',
            },
            {
              title: 'Urban Infrastructure',
              description: 'Public spaces, metro stations, and civic buildings',
              image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=600',
            },
            {
              title: 'Industrial Facilities',
              description: 'Manufacturing plants with high carbon offset needs',
              image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=600',
            },
          ].map((application, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={application.image}
                  alt={application.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{application.title}</h3>
                </div>
              </div>
              <p className="text-gray-600">{application.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-ocean py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Interested in Obelia for Your Space?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Contact us to learn how we can transform your built environment 
              into a living, breathing ecosystem.
            </p>
            <Button asChild size="lg" className="bg-white text-[#0c4a6e] hover:bg-white/90 rounded-full">
              <Link href="/contact">
                Request Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

