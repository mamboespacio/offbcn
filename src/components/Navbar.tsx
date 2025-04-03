"use client"

import { useState } from "react";
import { useScroll, motion, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Bars2Icon } from '@heroicons/react/24/solid';
import { useTranslations } from "next-intl"
import { Link, usePathname } from "@/i18n/routing"
import Logo from "@/components/Logo";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Artists", href: "/artists" },
  { title: "About", href: "/" },
];

export const Navbar = () => {
  const t = useTranslations('Menu');
  const pathname = usePathname();
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

  return (
    <>
    <nav className="w-full fixed font-sans z-20">
      <div className="p-4">
        <div className="relative z-10 flex justify-between items-center">
          <Logo/>
          <div className="flex items-center gap-2 lg:order-2 ">
            <Link
              href="https://ra.co/promoters/113395"
              target="_blank"
              className="uppercase inline-flex items-center justify-center px-5 py-2 text-[12px] lg:text-[22px] text-center text-primary bg-black rounded-full hover:bg-primary hover:text-black"
              >
              {t('tickets')}
            </Link>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="justify-center px-2 py-1 lg:px-5 lg:py-3 text-xs text-center rounded-full bg-primary text-black hover:bg-black hover:text-primary"
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
                className="flex flex-col h-full justify-center items-center gap-4 "
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden" key={index}>
                      <MobileNavLink
                        title={link.title}
                        href={link.href}
                      />
                    </div>
                  );
                })}
                <div className="flex gap-4">
                  <Link href={pathname} locale="en">English</Link>
                  <Link href={pathname} locale="es">Español</Link>
                  <Link href={pathname} locale="ca">Catalá</Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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