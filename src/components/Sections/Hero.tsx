"use client"

import { motion, useScroll, useMotionValueEvent, useTransform } from "motion/react"
import Image from "next/image";
import logo from "../../../public/logo-yellow.svg"
import { ResponsivePlayer } from "../ResponsivePlayer";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useTranslations } from "next-intl";
import Marquee from "../Marquee";
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
  const scale = useTransform(scrollYProgress, [0, 0.10], ["1", "2"])
  return (
    <header className="w-screen h-screen overflow-hidden">
      <div className="fixed -z-1 aspect-w-9 aspect-h-16 lg:aspect-w-16 lg:aspect-h-9 lg:h-screen">
        <motion.div style={{ scale }}>
          {isMobile ? (
            <ResponsivePlayer url="/home-mobile.mp4"/>
          ) : (
            <ResponsivePlayer url="/home.mp4"/>
          )}
        </motion.div>
      </div>
      <div className="absolute bottom-0 z-1 flex flex-col w-screen items-end">
        <div className="block w-full z-50">
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
        </div>
        <div className="bg-grey text-primary">
          <Marquee
            direction="left"
            left="-47%"
            type="phrase"
            src={t('title')}
          />
        </div>
      </div>
    </header>
  )
}