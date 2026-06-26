// components/Footer.tsx

import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {

    return (

        <footer className="py-16 border-t">

            <div className="max-w-7xl mx-auto px-8">

                <div className="grid md:grid-cols-3 gap-10">

                    <div>

                        <h2 className="text-3xl font-extrabold text-pink-500">

                            HabitCoach

                        </h2>

                        <p className="mt-4 text-gray-500">

                            Build Better Habits.
                            Transform Your Life.

                        </p>

                    </div>

                    <div>

                        <h3 className="font-bold">

                            Quick Links

                        </h3>

                        <ul className="space-y-3 mt-5 text-gray-600">

                            <li>Privacy Policy</li>

                            <li>Terms of Service</li>

                            <li>Support</li>

                            <li>Contact</li>

                        </ul>

                    </div>

                    <div>

                        <h3 className="font-bold">

                            Follow Us

                        </h3>

                        <div className="flex gap-4 mt-5">

                            <Instagram />

                            <Facebook />

                            <Twitter />

                            <Linkedin />

                        </div>

                    </div>

                </div>

                <div className="mt-12 text-center text-gray-400">

                    © 2026 Habit Coach. All rights reserved.

                </div>

            </div>

        </footer>

    );

}