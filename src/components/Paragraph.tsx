import { useScroll, useTransform, useInView, motion, inView } from 'framer-motion';
import React, { useRef, useEffect } from 'react';
import { fadeUp } from "@/components/animations";

interface ParagraphProps {
  paragraph: string;
}

export default function Paragraph({ paragraph }: ParagraphProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.7", "end 0.7"]
  })

  const words = paragraph.split(" ");
  
  return (
    <p
      ref={container}
      className="font-sans flex text-center flex-wrap text-justify gap-2 lg:gap-3  text-xl lg:text-4xl antialiased"
    >
      {
        words.map((word, i) => {
          const start = i / words.length
          const end = start + (1 / words.length)
          return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
        })
      }
    </p>
  )
}

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Word = ({children, progress, range}: WordProps) => {
  const fontWeight = useTransform(progress, range, [100, 300])
  const opacity2 = useTransform(progress, range, [0.5, 0])
  return (
    <span className="relative">
      {/* <motion.span
        className="font-[100] absolute"
        style={{opacity: opacity2}}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.span> */}
      <motion.span
        style={{fontWeight: fontWeight}}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.span>
    </span>
  )
}