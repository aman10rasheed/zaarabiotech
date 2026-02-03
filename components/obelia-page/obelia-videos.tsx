'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const videos = [
    {
        id: "oIeOJQx8cZU",
        title: "Obelia Implementation 1"
    },
    {
        id: "Yr2xjkAXMUA",
        title: "Obelia Implementation 2"
    },
    {
        id: "iLrhqyjwC1E",
        title: "Obelia Implementation 3"
    }
];

export const ObeliaVideos = () => {
    return (
        <section className="py-14 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0c4a6e] mb-4">See Obelia in Action</h2>
                    <p className="text-gray-600">Transforming spaces across the world</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden aspect-video shadow-lg bg-gray-100"
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${video.id}?mute=1`}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
