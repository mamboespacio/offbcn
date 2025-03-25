import { Tickets } from "@/components/Tickets";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Loader } from "@/components/Loader";
import LineUp from "@/components/LineUp";
import { About } from "@/components/About";
import Sponsors from "@/components/Sections/Sponsors";

export default function Home() {
  
  return (
    <>
      <Loader/>
      <Hero/>
      <About/>
      <LineUp/>
      <Tickets/>
      <Sponsors/>
      <Footer/>
    </>
  );
}
