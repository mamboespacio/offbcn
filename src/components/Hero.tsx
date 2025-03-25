"use client"

import { motion, useScroll, useMotionValueEvent, useTransform } from "motion/react"
import Image from "next/image";
import logo from '../../public/logo-yellow.svg';
import { ResponsivePlayer } from "./ResponsivePlayer";
import { useIsMobile } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Marquee from "./Marquee";
import { useRef } from "react";

// import { put } from "@vercel/blob";


export const Hero = () => {
  // const { url } = await put('articles/blob.txt', 'Hello World!', { access: 'public' });
  const t = useTranslations('Header');
  const isMobile = useIsMobile();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start 0", "end 1.5"]
  });

  // useMotionValueEvent(scrollYProgress, "change", value => {
  //   console.log(value);
  // });
  const videoY = useTransform(scrollYProgress, [0, 0.2, 0.4], ["0vh", "16vh", "64vh"])
  const videoA = useTransform(scrollYProgress, [0, 0.10], ["0.5", "0"])
  const titleY = useTransform(scrollYProgress, [0, 0.15, 0.4], ["0vh", "-66vh", "-164vh"])
  return (
    <header className="h-screen bg-black overflow-hidden">
      <motion.div
        className="aspect-w-9 aspect-h-16 lg:aspect-w-16 lg:aspect-h-9 lg:h-screen"
        style={{
          y: videoY ,
          opacity: videoA,
        }}>
          {isMobile ? (
            <ResponsivePlayer url="/home-mobile.mp4"/>
          ) : (
            <ResponsivePlayer url="/home.mp4"/>
          )}
      </motion.div>
      <motion.div
        className="fixed bottom-[48px] lg:bottom-[64px] block w-full h-[12vh] lg:h-[25vh] z-50"
        style={{ y: titleY }}
      >
        <div className="p-4">
        <Image
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          src={logo}
          quality={100}
          alt="OffBCNFestival"
        />
        </div>
      </motion.div>
      <motion.div
          className="fixed bottom-0 h-[40px] lg:h-[56px] bg-grey text-primary overflow-hidden"
          style={{ y: titleY }}
        >
          <Marquee
            direction="left"
            left="-47%"
            type="phrase"
            src={t('title')}
          />
        </motion.div>
    </header>
  )
}