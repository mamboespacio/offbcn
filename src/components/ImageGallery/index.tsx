"use client"

import { useRef, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { useTranslations } from "next-intl";
import styles from './style.module.scss';
import Lenis from 'lenis';
import Image from 'next/image'
import Picture1 from '../../../public/about/about1.jpg';
import Picture2 from '../../../public/about/about4.jpg';
import Picture3 from '../../../public/about/about3.jpg';
import Picture4 from '../../../public/about/about2.jpg';
import Picture5 from '../../../public/about/about5.jpg';
import Picture6 from '../../../public/about/about6.jpg';

export default function ImageGallery() {
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

  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 5]);

  const pictures = [
    { src: Picture1 },
    { src: Picture2 },
    { src: Picture3 },
    { src: Picture4 },
    { src: Picture5 },
    { src: Picture6 },
  ]


  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {
          pictures.map(({ src }, index) => {
            return <motion.div key={index} style={{ scale }} className={styles.el}>
              <div className={styles.imageContainer}>
                <Image
                  src={src}
                  fill
                  alt="image"
                  placeholder='blur'
                />
              </div>
            </motion.div>
          })
        }
      </div>
    </div>
  )
}