"use client";

import { motion } from "framer-motion";

export default function Hero() {

    return (

        <section className="min-h-screen flex items-center">

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 px-8">

                <div>

                    <motion.h1

                        initial={{ opacity: 0, y: 30 }}

                        animate={{ opacity: 1, y: 0 }}

                        transition={{ duration: 1 }}

                        className="text-7xl font-extrabold leading-tight"

                    >

                        Build Better Habits.

                        <br />

                        Transform Your Life.

                    </motion.h1>

                    <p className="mt-8 text-xl text-gray-600">

                        Habit Coach helps you create routines,
                        track streaks,
                        stay motivated,
                        and become your best self.

                    </p>

                    <div className="mt-10 flex gap-5">

                        <button className="hero-btn pink-btn">

                            Download for iOS

                        </button>

                        <button className="hero-btn white-btn">

                            Download for Android

                        </button>

                    </div>

                </div>

                <div className="flex justify-center items-center">

                    <img

                        src="/phone.png"

                        className="w-[340px] drop-shadow-2xl animate-bounce"

                    />

                </div>

            </div>

        </section>

    );

}