"use client"

import { useRef, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { useTranslations } from "next-intl";
import Lenis from 'lenis';
import Image from 'next/image'
import ImageGallery from "@/components/ImageGallery";

export default function About() {
  const t = useTranslations('About');
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })
  
  return (
    <section id="about" className="relative z-10">
      <motion.div
        className="bg-primary flex flex-col items-center justify-center py-[15%]"
      // style={{ y: x }}
      >
        <p className="text-xl lg:text-4xl max-w-[75vw] text-black text-center">
          {t('offbcn-1')}
        </p>
      </motion.div>
      <div className="bg-black">
        <ImageGallery/>
      </div>
      <motion.div
        className="bg-primary flex flex-col items-center justify-center py-[15%]"
      // style={{ y: x4 }}
      >
        <p className="text-center text-black text-xl lg:text-3xl max-w-[75vw] mx-auto whitespace-pre-line">
          {t('offbcn-2')}
        </p>
      </motion.div>
    </section>
  )
}

interface SlideProps {
  direction: string;
  progress: MotionValue<number>;
  left: any;
  src: any;
  type: string;
}

function Slide({ direction, progress, left, src, type }: SlideProps) {
  const dir = direction == 'left' ? -1 : 1;
  const translateX = useTransform(progress, [0, 1], [300 * dir, -300 * dir])
  console.log(src);
  return (
    <motion.div style={{ x: translateX, left: left }} className="relative flex whitespace-nowrap">
      <Image
        src="/about01.jpg"
        width={300}
        height={0}
        alt=""
      />
      <div className="w-[300px]">
        OFFBCN is a music festival born in 2014 that celebrates dance culture in a fun and transformative journey that fosters inclusion, builds community, and elevates the concept of partying to extraordinary new heights in an impressive show production. Beyond.
      </div>
    </motion.div>
  )
}