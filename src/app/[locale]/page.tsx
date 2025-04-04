import { Tickets } from "@/components/Sections/Tickets";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Sections/Hero";
import { Loader } from "@/components/Loader";
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
/* 
TO DO 4/4
- change menu button when its open
- show loader until video is loaded and playing
- check font sizes
- create antena.world quick website
- agregar preloader a los sponsors
- agregar favicon65
- subir website a arsys
*/