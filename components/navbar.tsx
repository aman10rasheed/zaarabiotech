'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown, Leaf, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const navItems = [
  { href: '/', label: 'Home' },
  {
    label: 'About',
    children: [
      { href: '/about', label: 'Corporate Heritage', description: 'Our journey since 2016' },
      { href: '/about/leadership', label: 'Leadership', description: 'Meet our visionary team' },
      { href: '/about/sustainability', label: 'Sustainability & Obelia', description: 'Carbon capture innovation' },
    ],
  },
  {
    label: 'Innovation',
    children: [
      { href: '/services', label: 'All Services', description: 'Our complete R&D portfolio' },
      { href: '/services/food-beverage', label: 'Food & Beverage R&D', description: 'FMCG product engineering' },
      { href: '/services/bio-cosmetics', label: 'Bio-Cosmetics', description: 'Natural beauty formulations' },
      { href: '/services/bio-it', label: 'Bio-IT & Automation', description: 'AI & IoT in life sciences' },
      { href: '/services/space-food', label: 'Space Nutrition', description: 'Frontier research' },
    ],
  },
  { href: '/agro', label: 'Agro Division' },
  { href: 'https://blitestore.com', label: 'B-Lite Store', external: true },
  { href: '/school', label: 'Product School' },
];

interface DropdownProps {
  label: string;
  children: Array<{ href: string; label: string; description?: string }>;
  isOpen: boolean;
  onToggle: () => void;
}

const NavDropdown = ({ label, children, isOpen, onToggle }: DropdownProps) => {
  const pathname = usePathname();

  return (
    <div className="relative" onMouseEnter={onToggle} onMouseLeave={onToggle}>
      <button
        className="flex items-center gap-1 text-gray-700 hover:text-[#166534] font-medium transition-colors py-2"
        onClick={onToggle}
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 pt-2 z-50"
          >
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[280px]">
              {children.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 hover:bg-[#f0fdf4] transition-colors ${
                    pathname === item.href ? 'bg-[#f0fdf4] border-l-2 border-[#166534]' : ''
                  }`}
                >
                  <div className="font-medium text-gray-900">{item.label}</div>
                  {item.description && (
                    <div className="text-sm text-gray-500">{item.description}</div>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-100"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/cropped-logo.webp"
              alt="Zaara Biotech Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#166534] group-hover:text-[#14532d] transition-colors leading-tight">
                Zaara Biotech
              </span>
              <span className="text-[10px] text-gray-500 hidden sm:block leading-tight">
                Engineering Nature&apos;s Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) =>
              'children' in item && item.children ? (
                <NavDropdown
                  key={item.label}
                  label={item.label}
                  children={item.children}
                  isOpen={openDropdown === item.label}
                  onToggle={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                />
              ) : 'external' in item && item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#166534] font-medium transition-colors relative py-2"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-gray-700 hover:text-[#166534] font-medium transition-colors relative py-2 ${
                    pathname === item.href ? 'text-[#166534]' : ''
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#22c55e] rounded-full"
                    />
                  )}
                </Link>
              )
            )}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-[#166534] hover:bg-[#14532d] text-white rounded-full px-6"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-[#166534]" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] bg-white overflow-y-auto">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-2 pb-4 border-b border-gray-100">
                  <Image
                    src="/cropped-logo.webp"
                    alt="Zaara Biotech Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <span className="text-xl font-bold text-[#166534]">Zaara Biotech</span>
                    <p className="text-xs text-gray-500">Engineering Nature&apos;s Intelligence</p>
                  </div>
                </div>
                
                <nav className="flex flex-col gap-1">
                  {navItems.map((item) =>
                    'children' in item && item.children ? (
                      <div key={item.label} className="mb-2">
                        <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider px-3 py-2">
                          {item.label}
                        </div>
                        {item.children.map((child) => (
                          <SheetClose key={child.href} asChild>
                            <Link
                              href={child.href}
                              className={`block px-3 py-2 rounded-lg hover:bg-[#f0fdf4] transition-colors ${
                                pathname === child.href ? 'bg-[#f0fdf4] text-[#166534]' : 'text-gray-700'
                              }`}
                            >
                              {child.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    ) : 'external' in item && item.external ? (
                      <SheetClose key={item.href} asChild>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-3 py-3 rounded-lg hover:bg-[#f0fdf4] transition-colors font-medium text-gray-700"
                        >
                          {item.label}
                        </a>
                      </SheetClose>
                    ) : (
                      <SheetClose key={item.href} asChild>
                        <Link
                          href={item.href}
                          className={`block px-3 py-3 rounded-lg hover:bg-[#f0fdf4] transition-colors font-medium ${
                            pathname === item.href ? 'bg-[#f0fdf4] text-[#166534]' : 'text-gray-700'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    )
                  )}
                </nav>

                <div className="pt-4 border-t border-gray-100">
                  <SheetClose asChild>
                    <Button
                      asChild
                      className="w-full bg-[#166534] hover:bg-[#14532d] text-white rounded-full"
                    >
                      <Link href="/contact">Get in Touch</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
