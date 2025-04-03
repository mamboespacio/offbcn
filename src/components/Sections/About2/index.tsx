"use client"

import { useRef, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { useTranslations } from "next-intl";
import Lenis from 'lenis';
import Marquee from "@/components/Marquee";
import ImageGallery from "@/components/ImageGallery";
import Image from "next/image";

export default function About2() {
  const sections = [1,2,3,4,5,6,7];
  const t = useTranslations('AboutPage');
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
    <section>
      <motion.div
        className="bg-primary h-screen flex flex-col items-center  justify-center z-10"
      // style={{ y: x }}
      >
        <p className="text-xl lg:text-4xl max-w-[75vw] text-black text-center">
          {t('offbcn-1')}
        </p>
      </motion.div>
      <ImageGallery/>
      <motion.div
        className="bg-primary w-screen h-screen flex flex-col items-center justify-center z-10 px-4 lg:px-0 md:text-2xl lg:text-4xl gap-4"
      // style={{ y: x4 }}
      >
        <p className="text-center text-black text-xl lg:text-3xl lg:max-w-[75vw] mx-auto">
          {t('offbcn-2')}
        </p>
      </motion.div>
      <div className="py-[25vh] max-w-[75vw] mx-auto">
        <div className="bg-black flex flex-col px-4 py-8">
          <h1 className="font-sans text-2xl lg:mb-0 lg:text-6xl">
            Elements 4 Dance
          </h1>
          <div className="my-4 md:grid md:grid-cols-2 gap-8">
            <div className="col-span-1">
              <p className="text-lg lg:text-xl max-w-[75vw] text-grey">
                {t('e4d-1')}
              </p>
            </div>
            <div className="col-span-1">
              <p className="text-lg lg:text-xl max-w-[75vw] text-grey">
                {t('e4d-2')}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-black flex flex-col px-4 py-8">
          <h1 className="font-sans text-2xl lg:mb-0 lg:text-6xl">
            Parc del Fòrum
          </h1>
          <div className="my-4 md:grid md:grid-cols-2 gap-8">
            <div className="col-span-1">
              <p className="text-lg lg:text-xl max-w-[75vw] text-grey">
                {t('forum')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-grey text-white">
        <div className="bg-grey text-primary">
          <Marquee
            direction="left"
            left="-47%"
            type="phrase"
            src={t('faq.title')}
          />
        </div>
        <div className="py-[25vh]">
          {sections.map((index) => {
            return(
              <div className="max-w-[75vw] mx-auto flex flex-col items-start justify-center mb-8" key={index}>
                <div className="my-4 md:grid md:grid-cols-6">
                  <div className="col-span-2">
                    <p className="mb-4 text-sm lg:mb-0 lg:text-2xl">{t(`faq.section-${index}-title`)}</p>
                  </div>
                  <div className="col-span-4 font-light text-black text-lg lg:text-xl gap-8">
                    <div className="max-w-75">
                      <p className="whitespace-pre-line">
                        <p className="mb-4 text-sm lg:mb-0 lg:text-2xl">{t(`faq.section-${index}-description`)}</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
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