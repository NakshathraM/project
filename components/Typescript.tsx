// Update app/page.tsx

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SpinningGallery from "@/components/SpinningGallery";
import Features from "@/components/Features";

export default function Home() {

    return (

        <>

            <div className="gradient-bg"></div>

            <Navbar />

            <Hero />

            <SpinningGallery />

            <Features />

        </>

    );

}