// components/SpinningGallery.tsx

"use client";

import { motion } from "framer-motion";

const screens = [
    "/screens/screen1.png",
    "/screens/screen2.png",
    "/screens/screen3.png",
    "/screens/screen4.png",
    "/screens/screen5.png",
    "/screens/screen6.png",
];

export default function SpinningGallery() {
    return (
        <section className="relative py-28 overflow-hidden">

            <div className="text-center mb-20">

                <h2 className="text-5xl font-extrabold">
                    Beautiful Interface
                </h2>

                <p className="text-gray-500 mt-4 text-lg">
                    Designed to keep you motivated every single day.
                </p>

            </div>

            <div className="gallery-container">

                <div className="gallery">

                    {screens.map((image, index) => (

                        <motion.div

                            key={index}

                            className="gallery-card"

                            style={{
                                transform: `rotateY(${index * 60}deg) translateZ(420px)`
                            }}

                            whileHover={{
                                scale: 1.08
                            }}

                        >

                            <img
                                src={image}
                                alt=""
                            />

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}