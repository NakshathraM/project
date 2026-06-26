// components/Testimonials.tsx

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sophia Williams",
        review:
            "Habit Coach completely changed my morning routine. I haven't missed a workout in over 4 months!",
    },
    {
        name: "James Anderson",
        review:
            "The streak tracking is incredibly motivating. The UI is gorgeous and easy to use.",
    },
    {
        name: "Emily Johnson",
        review:
            "The personalized coaching feels like having a mentor in my pocket.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-32">

            <div className="max-w-6xl mx-auto px-8">

                <h2 className="text-5xl font-extrabold text-center">
                    Loved by Thousands
                </h2>

                <p className="text-center text-gray-500 mt-4">
                    Real people. Real results.
                </p>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    loop
                    autoplay={{
                        delay: 3500,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    className="mt-20"
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="glass rounded-3xl p-12 text-center max-w-3xl mx-auto">

                                <div className="flex justify-center gap-1 mb-6">

                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={22}
                                            fill="#FF69B4"
                                            color="#FF69B4"
                                        />
                                    ))}

                                </div>

                                <p className="text-xl text-gray-700 italic">
                                    "{item.review}"
                                </p>

                                <h3 className="mt-8 text-2xl font-bold">
                                    {item.name}
                                </h3>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

        </section>
    );
}