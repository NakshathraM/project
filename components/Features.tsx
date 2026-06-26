// components/Features.tsx

import {
    Bell,
    Flame,
    Brain,
    Target,
    Award,
    Calendar
} from "lucide-react";

const features = [

    {
        icon: Bell,
        title: "Daily Reminders",
        text: "Never miss your goals with smart notifications."
    },

    {
        icon: Flame,
        title: "Streak Tracking",
        text: "Build consistency and keep your streak alive."
    },

    {
        icon: Brain,
        title: "Personal Coach",
        text: "Receive personalized suggestions every day."
    },

    {
        icon: Target,
        title: "Goal Planning",
        text: "Break large goals into daily achievable tasks."
    },

    {
        icon: Award,
        title: "Achievements",
        text: "Unlock badges as you grow stronger."
    },

    {
        icon: Calendar,
        title: "Daily Progress",
        text: "Visualize every improvement over time."
    }

];

export default function Features() {

    return (

        <section className="py-32">

            <div className="max-w-7xl mx-auto px-8">

                <h2 className="text-center text-5xl font-extrabold">

                    Everything You Need

                </h2>

                <p className="text-center mt-5 text-gray-500">

                    Powerful tools for building lasting habits.

                </p>

                <div className="grid lg:grid-cols-3 gap-10 mt-20">

                    {features.map((feature, index) => {

                        const Icon = feature.icon;

                        return (

                            <div

                                key={index}

                                className="glass rounded-3xl p-10 hover:-translate-y-3 transition"

                            >

                                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-6">

                                    <Icon
                                        size={30}
                                        className="text-pink-500"
                                    />

                                </div>

                                <h3 className="text-2xl font-bold">

                                    {feature.title}

                                </h3>

                                <p className="mt-4 text-gray-600">

                                    {feature.text}

                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}