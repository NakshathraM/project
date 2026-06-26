// components/Newsletter.tsx

"use client";

import { useState } from "react";

export default function Newsletter() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const subscribe = async () => {

        const res = await fetch("http://localhost:5000/api/newsletter", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email
            })

        });

        const data = await res.json();

        setMessage(data.message);

    };

    return (

        <section className="py-32">

            <div className="max-w-4xl mx-auto glass rounded-[40px] p-16 text-center">

                <h2 className="text-5xl font-extrabold">

                    Join Early Access

                </h2>

                <p className="mt-5 text-gray-600">

                    Get updates before everyone else.

                </p>

                <div className="flex flex-col md:flex-row gap-4 mt-10">

                    <input

                        type="email"

                        placeholder="Enter your email"

                        value={email}

                        onChange={(e) => setEmail(e.target.value)}

                        className="flex-1 rounded-full border p-5 outline-none"

                    />

                    <button

                        onClick={subscribe}

                        className="hero-btn pink-btn"

                    >

                        Subscribe

                    </button>

                </div>

                <p className="mt-5 text-pink-500">

                    {message}

                </p>

            </div>

        </section>

    );

}