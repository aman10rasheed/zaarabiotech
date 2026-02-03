'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const clients = [
    "10-1-150x150.png",
    "2-1-150x150.png",
    "3-2-150x150.png",
    "4-2-150x150.png",
    "5-2-150x150.png",
    "6-2-150x150.png",
    "7-1-150x150.png",
    "8-1-150x150.png",
    "9-1-150x150.png"
];

export const ObeliaClients = () => {
    return (
        <section className="py-14 bg-[#f8fafc] overflow-hidden">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0c4a6e]">Our Trusted Partners</h2>
            </div>

            <div className="relative flex overflow-hidden">
                <div className="flex gap-12 md:gap-24 animate-carousel whitespace-nowrap py-4">
                    {/* First loop */}
                    {clients.map((logo, index) => (
                        <div key={`l1-${index}`} className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 mix-blend-multiply">
                            <Image
                                src={`/clients/${logo}`}
                                alt="Client Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                    {/* Second loop for smooth infinite scroll */}
                    {clients.map((logo, index) => (
                        <div key={`l2-${index}`} className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 mix-blend-multiply">
                            <Image
                                src={`/clients/${logo}`}
                                alt="Client Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                    {/* Third loop for extra smoothness on wide screens */}
                    {clients.map((logo, index) => (
                        <div key={`l3-${index}`} className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 mix-blend-multiply">
                            <Image
                                src={`/clients/${logo}`}
                                alt="Client Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Gradient fades for edges */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f8fafc] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f8fafc] to-transparent z-10" />
            </div>

            <style jsx>{`
        .animate-carousel {
          animation: scroll 40s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
        </section>
    );
};
