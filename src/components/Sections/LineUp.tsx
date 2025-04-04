'use client'
import { motion, useScroll, useMotionValueEvent, useTransform } from "motion/react"
import { useRef, useState } from "react";
import { artists } from "@/data/artists";
import Artist from "@/components/Artist";
import Modal from "@/components/Modal";
import Marquee from "@/components/Marquee";
import Image, { StaticImageData } from "next/image";
import prodigy from '../../../public/logos/prodigy.png';
import jamie from '../../../public/logos/jamie-jones.png';
import seth from '../../../public/seth-troxler.svg';
import { useTranslations } from "next-intl";

export function LineUp() {
  const t = useTranslations('lineUp');
  const [modal, setModal] = useState({ active: false, index: 0 })
  const lineupRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: lineupRef });
  const y = useTransform(scrollYProgress, [0, 0.5, 1], ["0px", "200px", "0px"])
  if (!artists) return <p>loading</p>;
  return (
    <>
      <section className="bg-primary text-black text-center" ref={lineupRef}>
        {/* <div className="bg-grey text-primary overflow-hidden">
          <Marquee
            direction="left"
            left="-75%"
            type="phrase"
            src={t('title')}
          />
        </div> */}
        <div className="relative z-10 flex flex-col items-center py-[10vh] lg:py-[20vh] max-w-[90vw] mx-auto uppercase">
          <p className="py-4 text-xl">Live Acts</p>
          <MainArtist src={prodigy} name="Prodigy"/>
          <div className="flex flex-wrap space-x-4 items-center justify-center text-[1.5rem] lg:text-[3rem]">
            {artists.acts.map((artist, index) => {
              return <Artist index={index} name={artist.name} key={index} />
            })}
          </div>
          <div className="flex flex-wrap space-x-4 mt-2 lg:mt-4 items-center justify-center font-sans text-[1rem] lg:text-[1.5rem]">
            {artists.localacts.map((artist, index) => {
              return <Artist index={index} name={artist.name} key={index} />
            })}
          </div>
          <p className="py-4 text-xl">Dj Sets</p>
          <div className="flex justify-center">
            <MainArtist src={jamie} name="Jamie Jones"/>
            {/* <MainArtist src={seth} name="Seth Troxler"/> */}
          </div>
          <div className="flex flex-wrap space-x-4 items-center justify-center font-medium text-[1.5rem] lg:text-[3rem]">
            {artists.djs.map((artist, index) => {
              return <Artist index={index} name={artist.name} key={index} />
            })}
          </div>
          <div className="flex flex-wrap space-x-4 mt-2 lg:mt-4 items-center justify-center font-sans text-[1rem] lg:text-[1.5rem]">
            {artists.localdjs.map((artist, index) => {
              return <Artist index={index} name={artist.name} key={index} />
            })}
          </div>
        </div>
        <Modal modal={modal} artists={[...artists.djs, ...artists.localdjs, ...artists.acts, ...artists.localacts]} />
      </section>
    </>
  );
}

export function MainArtist({ src, name }: { src: StaticImageData; name: string }) {
  return (
    <div className="w-[40vw] py-2 hover:opacity-80">
      <Image
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
        src={src}
        quality={100}
        alt={name}
      />
    </div>
  )
}