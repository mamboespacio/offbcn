'use client'
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import Lenis from 'lenis';
import Image from 'next/image';
import { Key, useEffect, useRef } from 'react';
import styles from './style.module.css';

interface MarqueeProps {
  direction: string;
  left: any;
  type: string;
  src: any;
}

export default function Marquee({ direction, left, type, src }: MarqueeProps){
  if (!src || !src.length) return null;
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="overflow-hidden" ref={container}>
      <Slide direction={direction} left={left} progress={scrollYProgress} type={type} src={src} />
    </div>
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
  const repetitions = 6;
  const translateX = useTransform(progress, [0, 1], [300 * dir, -300 * dir])
  console.log(src);
  return (
    <motion.div style={{ x: translateX, left: left }} className="relative flex whitespace-nowrap">
      {Array.from({ length: repetitions }).map((_, i) => (
        type === 'phrase' ? <Phrase key={i} src={src} /> : <Pic key={i} pics={src} />
      ))}
    </motion.div>
  )
}

function Phrase({ src }: { src: string }){
  return (
    <div className={'px-3 flex gap-5 items-center uppercase'}>
      <p className='text-[1.5rem] lg:text-[2.5vw]'>{src}</p>
      <p className='text-[1.5rem] lg:text-[2.5vw]'>→</p>
    </div>
  )
}

interface PicProps {
  pics: { image: string; name: string }[];
}

function Pic({ pics }: PicProps) {
  if (!Array.isArray(pics)) return null;
  return (
    <div className="flex items-center">
      {pics.map((pic: { image: string; name: string }, index: Key | null | undefined) => {
        return (
          <div key={index} className={styles.item}>
            <Image
              src={`/${pic.image}`}
              width={300}
              height={0}
              alt={pic.name}
            />
          </div>
        );
      })}
    </div>
  );
}