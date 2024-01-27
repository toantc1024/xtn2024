import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Gallery from "../components/Gallery";
export default function Home() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <Hero />
      <Info />
      <Gallery />
      <Footer />
    </main>
  );
}
