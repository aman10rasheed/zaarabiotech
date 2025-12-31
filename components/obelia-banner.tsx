'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wind, Leaf, Droplets, Activity } from 'lucide-react';
import { obelia } from '@/lib/data';

const featureIcons = [Wind, Leaf, Droplets, Activity];

export const ObeliaBanner = () => {
  return (
    <section className="relative overflow-hidden bg-ocean">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#22c55e]/20"
        />
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear" as const,
          }}
          className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] border border-white/5 rounded-full"
        />
        
        {/* Floating bubbles to represent algae */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-[#22c55e]/30"
            style={{
              left: `${10 + i * 12}%`,
              bottom: `${20 + (i % 4) * 15}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1],
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {obelia.name}:{' '}
              <span className="text-[#4ade80]">{obelia.tagline}</span>
            </h2>

            <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
              {obelia.description}
            </p>

            <Button
              asChild
              size="lg"
              className="bg-white text-[#0c4a6e] hover:bg-white/90 rounded-xl px-8 group"
            >
              <Link href="/about/sustainability">
                Explore Obelia
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {obelia.features.map((feature, index) => {
              const Icon = featureIcons[index % featureIcons.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#22c55e]/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#4ade80]" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-12"
        >
          {obelia.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#4ade80]">
                {stat.value}
              </div>
              <div className="text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ObeliaBanner;

