"use client"

import { motion, useScroll, useMotionValueEvent, useTransform } from "motion/react"
import Paragraph from "./Paragraph";
import { useRef } from "react";

export const About = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
      target: container,
      // offset: ["start 0.65", "start 0.25"]
    })
  useMotionValueEvent(scrollYProgress, "change", value => {
    console.log('soy el about', value);
  });
  const fontWeight = useTransform(scrollYProgress, [0, 1], [100, 400,]);
  const paragraph = "OFFBCN is a music festival born in 2014 that celebrates dance culture in a fun and transformative journey that fosters inclusion, builds community, and elevates the concept of partying to extraordinary new heights in an impressive show production. Beyond"

  return (
    <>
      <section ref={container} className="bg-black">
        <div className="flex w-screen h-[24vh]"></div>
        <div className="max-w-4xl mx-auto p-8">
          <Paragraph paragraph={paragraph}/>
        </div>
        {/* <div className="max-w-4xl mx-auto">
          <motion.p
            className="font-sans text-white text-4xl text-center"
            style={{
              fontWeight: fontWeight,
            }}
            transition={{ duration: 0.15 }}
          >
            OFFBCN is a music festival born in 2014 that celebrates dance culture in a fun and transformative journey that fosters inclusion, builds community, and elevates the concept of partying to extraordinary new heights in an impressive show production. Beyond
          </motion.p>
        </div> */}
        <div className="flex w-screen h-[32vh]"></div>
      </section>
    </>
  )
}