// app/page.tsx

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SpinningGallery from "@/components/SpinningGallery";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {

    return (

        <>

            <div className="gradient-bg"></div>

            <Navbar />

            <Hero />

            <SpinningGallery />

            <Features />

            <Stats />

            <Testimonials />

            <Newsletter />

            <Footer />

        </>

    );

}