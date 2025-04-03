"use client"

import Image from "next/image"
import { motion, useScroll, useMotionValueEvent, useTransform } from "motion/react"
import { useRef } from "react";
import logo from '../../public/logo-black.svg';

export const Footer = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-20vh", "8vh"])
  return (
    <footer className="bg-primary text-black relative min-h-[100vh]" ref={container}>
      <motion.div
        // style={{ y }}
      >
        <div className="flex flex-col justify-between min-h-[100vh]">
          <div className="mt-[8vh] px-4">         
            <div className="flex pt-4 md:pt-0 justify-between">
              <div className="font-sans flex antialiased text-primary-100 gap-4">
                <a href="https://www.instagram.com/off.festival.ofc/" className="hover:underline">Instagram</a>
                <a href="https://www.facebook.com/off.festival.ofc" className="hover:underline">Facebook</a>
                <a href="https://www.tiktok.com/@off.festival.ofc" className="hover:underline">TikTok</a>
                <a href="https://www.youtube.com/@off.festival.oficial" className="hover:underline">YouTube</a>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div>
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
            <div className="flex justify-between mt-4 text-xs md:text-lg">
              <p className="antialiased text-black">
                © 2025 OffBCNFestival. All rights reserved.
              </p>
              <p className="antialiased text-black">
                Website by antena.world
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}