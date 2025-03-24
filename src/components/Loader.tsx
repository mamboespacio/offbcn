"use client"

import { useEffect, useState } from "react"
import Image from "next/image";
import { useAnimate, motion, AnimatePresence } from 'framer-motion';
import logo from '../../public/logo-black.svg';

export const Loader = () => {
  // const [scope, animate] = useAnimate();
  const [isLoading, setIsLoading] = useState(true);

  // const sequence: [any, { [key: string]: any }, { duration: number }][] = [
  //   ["#logo", { scale: 1 }, { duration: 0.35 }],
  //   ["#percent", { scale: 1, opacity: 0 }, { duration: 0.35 }],
  //   ["#loaderBg", { y: "-100%" }, { duration: 0.35 }],
  // ]

  const Preloader = () => {

    return (
      <>      
        <motion.div
          variants={slideUp}
          initial="initial"
          exit="exit"
          className="fixed flex h-screen w-screen bg-primary-50 z-40 items-end"
        >
          {/* <motion.div
            className="w-full h-[25vh]"
            variants={scaleDown}
            initial="initial"
            exit="exit"
          >
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
          </motion.div> */}
        </motion.div>
      </>
    )
  }

  const scaleDown = {
    initial: {
      top: 0,
      opacity: 1
    },
    exit: {
      top: "-100vh",
      opacity: 1,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
  }
  const slideUp = {
    initial: {
      top: 0
    },
    exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000)
  }, [])

  return (
    <AnimatePresence mode='wait'>
      {isLoading && <Preloader />}
    </AnimatePresence>
  )
}