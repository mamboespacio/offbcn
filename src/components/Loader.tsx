"use client"

import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../../public/logo-black.svg';
import { useLoadStore } from "@/hooks/useLoadStore";


export const Loader = () => {
  const { loading, setIsLoading } = useLoadStore();
  return (
    <AnimatePresence initial={false}>
      {loading ? (
        <motion.div
          initial={{ y: '-100vh' }}
          animate={{ y: 0 }}
          exit={{ y: '-100vh' }}
          className="text-black fixed flex h-screen w-screen bg-primary z-50 items-center justify-center"
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <p>Loading  →</p>
        </motion.div>
      ) : (
        null
      )}
    </AnimatePresence>
  )
}