'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionWrapper } from './section-wrapper';
import { ArrowRight, Check, ShoppingBag } from 'lucide-react';
import { bliteProducts } from '@/lib/data';

const features = [
  'ICAR-CIFT Certified Formula',
  'Rich in Spirulina Protein',
  'Zero Trans Fat & Cholesterol',
  'Natural & Sustainable',
];

export const BliteShowcase = () => {
  return (
    <SectionWrapper id="blite" background="mint">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fef3c7] text-[#92400e] text-sm font-medium mb-6">
            <ShoppingBag className="w-4 h-4" />
            Consumer Products
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
            B-Lite:
            <span className="gradient-text"> Functional Nutrition</span>
          </h2>
          
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            A collaboration with ICAR-CIFT. Every bite delivers natural proteins, 
            calcium, and iron. Our spirulina-based cookies are the perfect meal 
            replacement for health-conscious individuals.
          </p>

          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-[#166534] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#166534] hover:bg-[#14532d] text-white rounded-full px-8 group"
            >
              <Link href="/store">
                Shop B-Lite
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-[#92400e] text-[#92400e] hover:bg-[#92400e] hover:text-white rounded-full px-8"
            >
              <Link href="/store#subscriptions">
                Subscribe & Save
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {bliteProducts.slice(0, 4).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1">
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-bold text-[#166534]">
                    ₹{product.price}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm text-[#1a1a1a] line-clamp-2 group-hover:text-[#166534] transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex gap-1 mt-2">
                    {product.benefits.slice(0, 2).map((benefit, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-[#f0fdf4] text-[#166534]"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Testimonials Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 p-6 bg-white rounded-2xl shadow-lg"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { quote: "Perfect cookie for my late night work.", author: "Busy Professional" },
            { quote: "Now I pack these cookies easily for my 50km rides.", author: "Endurance Athlete" },
            { quote: "I could feel the freshness in every bite.", author: "Health Enthusiast" },
          ].map((testimonial, index) => (
            <div key={index} className="text-center">
              <p className="text-gray-600 italic text-sm mb-2">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="text-[#166534] font-medium text-sm">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default BliteShowcase;

