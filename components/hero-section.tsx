'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Beaker, Award, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { stats, companyInfo } from '@/lib/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
          className="absolute -top-1/4 -right-1/4 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-[#22c55e]/20 via-[#0c4a6e]/10 to-transparent"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
          className="absolute -bottom-1/3 -left-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#166534]/20 to-[#0c4a6e]/10"
        />
        
        {/* Molecular/scientific dots pattern */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#166534]"
              style={{
                left: `${10 + (i * 6) % 80}%`,
                top: `${15 + (i * 8) % 70}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + (i * 0.3),
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1],
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-[#dcfce7] text-[#166534] text-sm font-medium">
                <Award className="w-4 h-4" />
                $10M Investment from TCN International
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-[1.1] mb-6"
            >
              Engineering{' '}
              <span className="gradient-text">Nature&apos;s Intelligence</span>
              <br />
              <span className="text-[#0c4a6e]">Since 2016</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed"
            >
              Pioneering biotechnology to address global energy and food crises 
              through micro-algae innovation. From our Kerala labs to global markets.
            </motion.p>

            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-8 h-8 rounded-full bg-[#f0fdf4] flex items-center justify-center">
                  <Beaker className="w-4 h-4 text-[#166534]" />
                </div>
                <span>ICAR-CIFT Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-8 h-8 rounded-full bg-[#ecfeff] flex items-center justify-center">
                  <Globe className="w-4 h-4 text-[#0c4a6e]" />
                </div>
                <span>3 Global Offices</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#166534] hover:bg-[#14532d] text-white rounded-full px-8 py-6 text-lg group"
              >
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white rounded-full px-8 py-6 text-lg"
              >
                <Link href="/about">
                  <Play className="mr-2 w-5 h-5" />
                  Our Story
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Image */}
              <div className="absolute inset-8 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=800"
                  alt="Zaara Biotech Laboratory"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#166534]/40 via-transparent to-transparent" />
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" as const }}
                className="absolute inset-0 border-2 border-dashed border-[#22c55e]/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" as const }}
                className="absolute inset-4 border-2 border-dashed border-[#0c4a6e]/20 rounded-full"
              />

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-4 top-1/4 bg-white rounded-xl p-4 shadow-xl border border-gray-100"
              >
                <div className="text-2xl font-bold text-[#166534]">100%</div>
                <div className="text-sm text-gray-600">Natural Products</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -right-4 bottom-1/4 bg-white rounded-xl p-4 shadow-xl border border-gray-100"
              >
                <div className="text-2xl font-bold text-[#0c4a6e]">$10M</div>
                <div className="text-sm text-gray-600">UAE Investment</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute left-1/4 -bottom-4 bg-gradient-to-r from-[#166534] to-[#22c55e] rounded-xl p-4 shadow-xl text-white"
              >
                <div className="text-2xl font-bold">2016</div>
                <div className="text-sm text-white/80">Founded</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-white/80 backdrop-blur rounded-2xl shadow-lg border border-gray-100"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#166534]">
                {stat.value}
              </div>
              <div className="text-gray-600 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
