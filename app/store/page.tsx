'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag, ExternalLink, Star, Check, ArrowRight, Repeat } from 'lucide-react';
import { bliteProducts, testimonials } from '@/lib/data';

const BLITE_STORE_URL = 'https://blitestore.com';

export default function StorePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-[#fef3c7] via-white to-[#f0fdf4]">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 15, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
            className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-[#22c55e]/20"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-[#92400e] text-sm font-medium mb-6">
                <ShoppingBag className="w-4 h-4" />
                B-Lite Store
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-6">
                Functional{' '}
                <span className="text-[#166534]">Nutrition</span>
                <br />
                for Every Lifestyle
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                ICAR-CIFT certified spirulina-based cookies. Each bite delivers 
                natural proteins, calcium, and iron without compromising taste.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  'Zero Trans Fat',
                  '11.4g Protein',
                  '100% Natural',
                ].map((badge, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#166534]/10 text-[#166534] text-sm font-medium"
                  >
                    <Check className="w-3 h-3" />
                    {badge}
                  </span>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="bg-[#166534] hover:bg-[#14532d] text-white rounded-full px-8 group"
              >
                <a href={BLITE_STORE_URL} target="_blank" rel="noopener noreferrer">
                  Visit B-Lite Store
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/5.png"
                  alt="B-Lite Products"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* External Store Banner */}
      <section className="bg-[#166534] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Repeat className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Subscribe & Save 15%</h3>
                <p className="text-white/80 text-sm">Never run out of your daily nutrition</p>
              </div>
            </div>
            <Button 
              asChild
              className="bg-white text-[#166534] hover:bg-white/90 rounded-full"
            >
              <a href={BLITE_STORE_URL} target="_blank" rel="noopener noreferrer">
                Shop Now <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <SectionWrapper background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">
            Our Product Range
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our range of spirulina-based functional nutrition products. 
            Click any product to shop on our official B-Lite store.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bliteProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <a href={BLITE_STORE_URL} target="_blank" rel="noopener noreferrer">
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden cursor-pointer">
                  <div className="relative aspect-square bg-[#f0fdf4]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1">
                      <span className="text-sm font-bold text-[#166534]">₹{product.price}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <div className="flex items-center gap-1 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-[#1a1a1a] mb-2 group-hover:text-[#166534] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.benefits.map((benefit, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-[#f0fdf4] text-[#166534]"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-[#166534] font-medium">
                      Shop Now
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-[#166534] hover:bg-[#14532d] text-white rounded-full px-8"
          >
            <a href={BLITE_STORE_URL} target="_blank" rel="noopener noreferrer">
              View All Products on B-Lite Store
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper background="sage">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600">Real reviews from real customers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#166534] text-white flex items-center justify-center font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-[#1a1a1a]">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.product}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ICAR-CIFT Badge */}
      <SectionWrapper background="white">
        <div className="bg-gradient-to-r from-[#166534] to-[#0c4a6e] rounded-3xl p-8 md:p-12 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Certified Quality You Can Trust
            </h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              All B-Lite products are developed in collaboration with ICAR-CIFT 
              (Central Institute of Fisheries Technology, Govt. of India), ensuring 
              the highest standards of quality and nutrition.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="px-6 py-3 bg-white/10 rounded-full backdrop-blur">
                ICAR Certified
              </div>
              <div className="px-6 py-3 bg-white/10 rounded-full backdrop-blur">
                CIFT Approved
              </div>
              <div className="px-6 py-3 bg-white/10 rounded-full backdrop-blur">
                Govt. of India
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#166534] hover:bg-white/90 rounded-full"
            >
              <a href={BLITE_STORE_URL} target="_blank" rel="noopener noreferrer">
                Shop Now on B-Lite Store
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
