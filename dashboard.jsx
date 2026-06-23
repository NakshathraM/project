import { motion } from "framer-motion";
import FloatingShape from "../components/FloatingShape";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100 overflow-hidden">

            <FloatingShape />

            <div className="relative z-10 p-8">

                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold text-pink-700 mb-8"
                >
                    🌸 Habit Coach
                </motion.h1>

                <div className="grid md:grid-cols-4 gap-6">

                    <Card title="🔥 Streak" value="12 Days" />
                    <Card title="🎯 Completed" value="5 Today" />
                    <Card title="📈 Progress" value="85%" />
                    <Card title="💪 Motivation" value="95" />

                </div>

                <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="mt-10 backdrop-blur-xl bg-white/40 p-8 rounded-3xl shadow-xl"
                >
                    <h2 className="text-2xl font-semibold text-pink-700">
                        Today's Mission
                    </h2>

                    <ul className="mt-4 space-y-3">
                        <li>✅ Drink 3L Water</li>
                        <li>🏃 Workout 20 Minutes</li>
                        <li>📚 Read 10 Pages</li>
                        <li>🧘 Meditation 5 Minutes</li>
                    </ul>
                </motion.div>

            </div>
        </div>
    );
}

function Card({ title, value }) {
    return (
        <motion.div
            whileHover={{
                scale: 1.05,
                rotateY: 10
            }}
            className="backdrop-blur-xl bg-white/50 rounded-3xl p-6 shadow-xl"
        >
            <h3 className="text-pink-600 font-medium">
                {title}
            </h3>

            <p className="text-3xl font-bold mt-2 text-pink-800">
                {value}
            </p>
        </motion.div>
    );
}