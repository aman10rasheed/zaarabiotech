'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Leaf, Cpu, Shield, Users, Sun, Droplets, TreePine, Check } from 'lucide-react';
import { agro } from '@/lib/data';

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Leaf,
  Cpu,
  Shield,
  Users,
};

const benefits = [
  { icon: Sun, title: 'Sustainable', description: 'Eco-friendly agricultural solutions' },
  { icon: Droplets, title: 'Efficient', description: 'Optimized water and nutrient usage' },
  { icon: TreePine, title: 'Organic', description: 'Chemical-free bio-fertilizers' },
  { icon: Leaf, title: 'Productive', description: 'Increased crop yields' },
];

export default function AgroPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1920"
            alt="Agricultural Fields"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#166534]/90 to-[#0c4a6e]/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white text-sm font-medium mb-6">
              Agricultural Division
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {agro.title}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {agro.description}
            </p>
            <Button size="lg" className="bg-white text-[#166534] hover:bg-white/90 rounded-full">
              Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <SectionWrapper background="white">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-[#dcfce7] text-[#166534] text-sm font-medium mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4"
          >
            Green Technologies for <span className="gradient-text">Agriculture</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agro.services.map((service, index) => {
            const IconComponent = serviceIcons[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#166534] to-[#22c55e] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
                    </div>
                    <CardTitle className="text-lg font-bold text-[#1a1a1a] group-hover:text-[#166534] transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Bio-Fertilizers Feature */}
      <SectionWrapper background="mint">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white text-[#166534] text-sm font-medium mb-6">
              Featured Product
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-6">
              Algae-Based <span className="gradient-text">Bio-Fertilizers</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our proprietary algae-based bio-fertilizers enhance soil health and boost 
              crop yields naturally. Developed using our patented Algae-Seaweed Technology, 
              these products provide essential nutrients while improving soil structure.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Improves soil organic matter',
                'Enhances nutrient uptake',
                'Increases water retention',
                'Promotes beneficial microorganisms',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#166534] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="bg-[#166534] hover:bg-[#14532d] text-white rounded-full">
              <Link href="/contact">
                Request Sample <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=1000"
                alt="Bio-Fertilizer Application"
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl"
            >
              <div className="text-3xl font-bold text-[#166534]">100%</div>
              <div className="text-gray-600">Organic</div>
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Smart Farming */}
      <SectionWrapper background="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1000"
                alt="Smart Farming Technology"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#ecfeff] text-[#0c4a6e] text-sm font-medium mb-6">
              Technology
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-6">
              Smart Farming <span className="gradient-text-blue">Solutions</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Leverage IoT and AI-powered technologies to optimize your farming operations. 
              Our smart farming solutions include real-time monitoring, predictive analytics, 
              and automated systems.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Soil Sensors', description: 'Real-time monitoring' },
                { title: 'Weather Analytics', description: 'Predictive forecasting' },
                { title: 'Irrigation Control', description: 'Automated watering' },
                { title: 'Crop Health', description: 'AI-powered analysis' },
              ].map((item, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-[#1a1a1a]">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Products */}
      <SectionWrapper background="sage">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Our Products</h2>
          <p className="text-gray-600">Innovative solutions for modern agriculture</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {agro.products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#f0fdf4] flex items-center justify-center mb-4">
                <Leaf className="w-8 h-8 text-[#166534]" />
              </div>
              <h3 className="font-bold text-[#1a1a1a] mb-2">{product.name}</h3>
              <span className="inline-block px-3 py-1 rounded-full bg-[#dcfce7] text-[#166534] text-sm">
                {product.category}
              </span>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Benefits */}
      <section className="bg-gradient-to-r from-[#166534] to-[#0c4a6e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-white/20 backdrop-blur flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-white text-lg mb-1">{benefit.title}</h3>
                <p className="text-white/70 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <SectionWrapper background="white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our agricultural experts to discuss how our bio-fertilizers and 
            smart farming solutions can improve your yields.
          </p>
          <Button asChild size="lg" className="bg-[#166534] hover:bg-[#14532d] text-white rounded-full">
            <Link href="/contact">
              Get Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}

