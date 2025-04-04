"use client"

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import e4d from "../../../public/logos/e4d.png"
import forum from "../../../public/logos/el-parc.png"
import blackworks from "../../../public/logos/blackworks.png"
import defected from "../../../public/logos/defected.png"
import pyramid from "../../../public/logos/pyramid.png"
import ra from "../../../public/logos/ra.png"
import live from "../../../public/logos/24live.png"
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Sponsors() {
  const sponsors = [
    {
      name: 'E4D',
      image: e4d,
      url: "https://ra.com",
    },
    {
      name: 'Parc del Forum',
      image: forum,
      url: "https://ra.com",
    },
    {
      name: 'Blackworks',
      image: blackworks,
      url: 'https://ra.com',
    },
    {
      name: 'Defected',
      image: defected,
      url: 'https://ra.com',
    },
    {
      name: 'Pyramid',
      image: pyramid,
      url: 'https://ra.com',
    },
    {
      name: 'RA',
      image: ra,
      url: 'https://ra.com',
    },
    {
      name: '24Live',
      image: live,
      url: 'https://ra.com',
    },
  ]
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })
  const repetitions = 6;
  const translateX = useTransform(scrollYProgress, [0, 1], [300, -300])
  return (
    <section id="sponsors" className="bg-lightGrey overflow-hidden py-8 relative z-10">
      <div className="w-screen overflow-hidden" ref={container}>
        <motion.div style={{ x: translateX, left: '0%' }} className="relative flex whitespace-nowrap">
          {Array.from({ length: 3 }).map((_, step) => (
            <div key={step} className="flex items-center">
              {sponsors.map((sponsor, index) => (
                <Link key={index} href={sponsor.url} target="_blank" rel="noopener noreferrer" className="flex w-[200px] items-center px-4">
                  <Image
                    src={sponsor.image}
                    width={300}
                    height={0}
                    alt={sponsor.name}
                    placeholder='blur'
                  />
                </Link>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}