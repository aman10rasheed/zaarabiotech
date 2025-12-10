'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight, Calendar, Clock, Tag, Search, Newspaper, FileText, Award } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'research', label: 'Research' },
  { id: 'news', label: 'News' },
  { id: 'press', label: 'Press Releases' },
];

const articles = [
  {
    id: 1,
    title: 'Zaara Biotech Secures $10M Investment from TCN International',
    excerpt: 'Strategic investment validates Algae-Seaweed Technology and enables global expansion to UAE and USA markets.',
    category: 'press',
    date: '2021-03-15',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600',
    featured: true,
  },
  {
    id: 2,
    title: 'The Science Behind Spirulina: Why Micro-Algae is the Future of Nutrition',
    excerpt: 'Exploring the nutritional benefits of spirulina and how it can address global food security challenges.',
    category: 'research',
    date: '2024-01-20',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600',
  },
  {
    id: 3,
    title: 'ICAR-CIFT Partnership: A Milestone for Indian Biotech',
    excerpt: 'Our collaboration with ICAR-CIFT brings government-backed credibility to functional food innovation.',
    category: 'news',
    date: '2024-02-10',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=600',
  },
  {
    id: 4,
    title: 'Introducing Obelia: Urban Algae for Carbon Capture',
    excerpt: 'How our new Obelia project is transforming built environments into living air purifiers.',
    category: 'news',
    date: '2023-11-05',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=600',
  },
  {
    id: 5,
    title: 'B-Lite Cookies: Redefining Healthy Snacking',
    excerpt: 'The development journey of our flagship spirulina-based cookies and their nutritional benefits.',
    category: 'research',
    date: '2024-03-01',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=600',
  },
  {
    id: 6,
    title: 'Zaara Product School Launches: India\'s First of Its Kind',
    excerpt: 'Announcing the launch of India\'s first product development education platform for food and cosmetics.',
    category: 'press',
    date: '2024-04-15',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600',
  },
];

export default function InsightsPage() {
  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white shadow-sm text-[#166534] text-sm font-medium mb-6">
              <Newspaper className="w-4 h-4 inline mr-2" />
              Insights & News
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-6">
              Stay Updated with{' '}
              <span className="gradient-text">Zaara Biotech</span>
            </h1>
            <p className="text-xl text-gray-600">
              Latest news, research updates, press releases, and insights from 
              the forefront of biotechnology innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <SectionWrapper background="white" className="!py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-[#166534] hover:text-white transition-all"
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10 rounded-full"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Article */}
      {featuredArticle && (
        <SectionWrapper background="mint">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href={`/insights/${featuredArticle.id}`}>
              <Card className="border-0 shadow-xl overflow-hidden group cursor-pointer">
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-[16/10] md:aspect-auto">
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#166534] text-white text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredArticle.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredArticle.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4 group-hover:text-[#166534] transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
                    <div className="flex items-center text-[#166534] font-medium">
                      Read Full Story
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </motion.div>
        </SectionWrapper>
      )}

      {/* Articles Grid */}
      <SectionWrapper background="white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/insights/${article.id}`}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer hover:-translate-y-1">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[#166534] text-xs font-medium capitalize">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(article.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 group-hover:text-[#166534] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-[#166534] text-sm font-medium">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-2 border-[#166534] text-[#166534] rounded-xl">
            Load More Articles
          </Button>
        </div>
      </SectionWrapper>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-[#166534] to-[#0c4a6e] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Get the latest insights, research updates, and news delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full"
                />
                <Button className="bg-white text-[#166534] hover:bg-white/90 rounded-xl px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

