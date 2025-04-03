import { Tickets } from "@/components/Sections/Tickets";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Sections/Hero";
import { Loader } from "@/components/Loader";
import { LineUp } from "@/components/Sections/LineUp";
import About from "@/components/Sections/About";
import Sponsors from "@/components/Sections/Sponsors";

export default function Home() {
  
  return (
    <>
      <Loader/>
      <Hero/>
      <About/>
      <Tickets/>
      <Sponsors/>
      <Footer/>
    </>
  );
}
