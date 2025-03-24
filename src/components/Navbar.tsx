"use client"

import { useState } from "react";
import Link from "next/link";
import { useScroll, motion, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Bars2Icon } from '@heroicons/react/24/solid'


const navLinks = [
  { title: "Home", href: "/" },
  { title: "Program", href: "/" },
  { title: "About", href: "/" },
];

export const Navbar = () => {
  const [hidden, setHidden] = useState(true);
  const { scrollY } = useScroll();
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  useMotionValueEvent(scrollY, "change", latest => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && previous > 500) { setHidden(false) }
    else { setHidden(true) }
  });

  return (
    <>
    <nav className="w-full fixed font-sans z-20">
      <div className="px-8 py-4">
        <div className="relative z-10 flex flex-wrap justify-between items-center">
          <div className="overflow-hidden h-[22px]">
            <motion.div
              className="flex flex-col"
              variants={{
                hidden: { y: 0 },
                visible: { y: "-22px" }
              }}
              animate={hidden ? "hidden" : "visible"}
              transition={{ duration: 0.35, ease: "easeIn" }}
            >
              <p className="antialiased font-semibold leading-none pr-4 text-primary text-[10px] lg:text-[20px]">
                {"-> Beyond Dance Culture"}
              </p>
              <p className="hidden md:flex antialiased font-semibold leading-none pr-4 text-primary text-2xl">
                OffBCNFestival
              </p>
            </motion.div>
          </div>
          {/* <motion.a
            href="/"
            className="font-sans text-[3vw] flex items-center"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeIn" }}
          >
            OffBCNFestival
          </motion.a> */}
          <div className="flex items-center lg:order-2">
            <a href="/calculator" className="uppercase mr-4 inline-flex items-center justify-center px-5 py-2 lg:text-lg text-normal text-center text-primary bg-black rounded-full hover:bg-primary hover:text-black">
              Get Tickets
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="justify-center px-5 py-3 text-xs text-center rounded-full bg-primary text-black hover:bg-black hover:text-primary"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <Bars2Icon className="w-5 h-5" />
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-primary text-black p-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <p
                  className="cursor-pointer text-md text-black"
                  onClick={toggleMenu}
                >
                  
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden">
                      <MobileNavLink
                        key={index}
                        title={link.title}
                        href={link.href}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    <nav className="w-full absolute bottom-[22vh] font-sans z-10">
      <div className="flex justify-between p-8">
      <p>11th Edition</p>
      <p>13/14 de Julio Parc del Forum</p>
      </div>
    </nav> 
  </>
  )
};


const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

interface MobileNavLinkProps {
  title: string;
  href: string;
}
const MobileNavLink: React.FC<MobileNavLinkProps> = ({ title, href }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-black"
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};