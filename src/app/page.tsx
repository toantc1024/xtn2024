import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Gallery from "../components/Gallery";
import { PrimeReactProvider } from "primereact/api";

export default function Home() {
  return (
    <PrimeReactProvider>
      <main className="h-full w-full">
        <Navbar />
        <Intro />
        <Hero />
        <Info />
        <Gallery />
        <Footer />
      </main>
    </PrimeReactProvider>
  );
}
