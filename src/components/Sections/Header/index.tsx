"use client"

import Image from "next/image"
import { motion, useScroll, useMotionValueEvent, useTransform } from "motion/react"
import { useRef } from "react";
import logo from '../../public/logo-black.svg';

export const Header = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-20vh", "8vh"])
  return (
    <footer className="bg-black text-primary relative min-h-[100vh]" ref={container}>
      <motion.div
      // style={{ y }}
      >
        <div className="flex flex-col justify-center items-center min-h-[100vh]">
          <div className="p-4">
            <div>
              <p className="font-sans text-[10vw]">About Us</p>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}