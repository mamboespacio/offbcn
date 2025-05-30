"use client"

import Image from "next/image"
import { useScroll, useTransform } from "motion/react"
import { useRef } from "react";
import logo from '../../public/logos/logo-yellow.png';

export const Footer = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-20vh", "8vh"])
  return (
    <footer className="bg-black text-black relative" ref={container}>
      <div className="flex flex-col justify-between">
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
              placeholder="blur"
            />
          </div>
          {/* <div className="flex justify-between mt-4 text-xs lg:text-lg">
            <p className="antialiased text-black">
              © 2025 OffBCNFestival. All rights reserved.
            </p>
            <p className="antialiased text-black">
              by antena.world
            </p>
          </div> */}
        </div>
      </div>
    </footer>
  )
}