"use client"

import Image from "next/image"
import { motion, useScroll, useMotionValueEvent, useTransform } from "motion/react"
import { useRef } from "react";
import logo from '../../public/logo-yellow.svg';

export const Footer = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-20vh", "8vh"])
  return (
    <footer className="bg-black relative min-h-[100vh]" ref={container}>
      <motion.div
        style={{ y }}
      >
        <div className="pt-8 md:pt-16 flex flex-col justify-between min-h-[100vh]">
          <div className="p-6 lg:p-8 ">         
            <div className="flex flex-col pt-4 md:pt-0">
              <div className="font-sans flex antialiased text-primary-100 gap-4">
                <a href="#" className="hover:underline">Instagram</a>
                <a href="#" className="hover:underline">Facebook</a>
                <a href="#" className="hover:underline">TikTok</a>
                <a href="#" className="hover:underline">YouTube</a>
              </div>
            </div>
            <div className="flex flex-col md:flex md:justify-between ">
              <p className="antialiased text-primary-100">
                © 2025 OffBCNFestival * Website by Antena
              </p>
            </div>
          </div>
          <div className="px-6 lg:px-8">
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
      </motion.div>
    </footer>
  )
}