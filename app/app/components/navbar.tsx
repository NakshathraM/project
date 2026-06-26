"use client";

export default function Navbar() {

    return (

        <nav className="glass fixed top-0 left-0 w-full z-50">

            <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

                <h1 className="text-2xl font-extrabold text-pink-500">
                    HabitCoach
                </h1>

                <button className="hero-btn pink-btn">

                    Get Early Access

                </button>

            </div>

        </nav>

    );

}