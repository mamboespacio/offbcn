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
    <footer className="bg-primary text-black relative h-full" ref={container}>
      <div className="flex flex-col justify-between h-full">
        <div className="mt-[8vh] px-4">         
          <div className="flex pt-4 md:pt-0 justify-between">
            <div className="font-sans flex antialiased text-primary-100 gap-4">
              <a target="_blank" href="https://www.instagram.com/off.festival.ofc/" className="hover:underline">Instagram</a>
              <a target="_blank" href="https://www.facebook.com/off.festival.ofc" className="hover:underline">Facebook</a>
              <a target="_blank" href="https://www.tiktok.com/@off.festival.ofc" className="hover:underline">TikTok</a>
              <a target="_blank" href="https://www.youtube.com/@off.festival.oficial" className="hover:underline">YouTube</a>
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
          <div className="flex justify-between mt-4 text-xs lg:text-lg">
            <p className="antialiased text-black">
              © 2025 OffBCNFestival. All rights reserved.
            </p>
            <p className="antialiased text-black">
              by antena.world
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}