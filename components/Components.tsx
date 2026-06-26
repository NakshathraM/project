// components/Stats.tsx

"use client";

import { motion } from "framer-motion";

const stats = [
    {
        number: "1M+",
        title: "Habits Created",
    },
    {
        number: "250K+",
        title: "Daily Users",
    },
    {
        number: "98%",
        title: "User Satisfaction",
    },
    {
        number: "4.9★",
        title: "Average Rating",
    },
];

export default function Stats() {
    return (
        <section className="py-20">

            <div className="max-w-7xl mx-auto px-8">

                <div className="grid md:grid-cols-4 gap-8">

                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{
                                y: -10,
                            }}
                            className="glass rounded-3xl p-10 text-center"
                        >
                            <h2 className="text-5xl font-extrabold text-pink-500">
                                {stat.number}
                            </h2>

                            <p className="mt-4 text-gray-600">
                                {stat.title}
                            </p>
                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    );
}