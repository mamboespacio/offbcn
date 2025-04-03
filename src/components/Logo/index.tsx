import { useScroll, motion, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Logo(){
  const [logoVariant, setLogoVariant] = useState<string | null>(null);
  const { scrollY } = useScroll();
  
  useMotionValueEvent(scrollY, "change", latest => {
    console.log(latest);
    // const previous = scrollY.getPrevious() || 0;
    if (latest >= 0 && latest < 750 ) { setLogoVariant("phraseY") }
    else if (latest > 750 && latest < 1500){ setLogoVariant("logoB") }
    else if (latest > 1500 && latest < 3500){ setLogoVariant("logoY") }
    else if (latest > 3500 && latest < 4500){ setLogoVariant("logoB") }
    else if (latest > 4500 && latest < 5200){ setLogoVariant("logoY") }
    else if (latest > 5200){ setLogoVariant("phraseB") }
  });
  return (
    <div className="overflow-hidden h-[12px] lg:h-[22px]">
      <motion.div
        className="flex flex-col"
        variants={{
          phraseY: { y: 0, color: '#e7e500' },
          phraseB: { y: 0, color: '#1e1e1e' },
          logoY: { y: "-22px", color: '#e7e500' },
          logoB: { y: "-22px", color: '#1e1e1e' }
        }}
        animate={logoVariant || undefined}
        transition={{ duration: 0.35, ease: "easeIn" }}
      >
        <div className="flex items-center h-[12px] lg:h-[22px]">
          <p className="antialiased font-semibold leading-none text-[12px] lg:text-[22px]">
            {"-> Beyond Dance Culture"}
          </p>
        </div>
        <div className="flex items-center h-[12px] lg:h-[22px]">
          <p className="hidden md:flex antialiased font-semibold leading-none pr-4 text-[12px] lg:text-[22px] -tracking-[1px]">
            OffBCN Festival
          </p>
        </div>
      </motion.div>
    </div>
  )
}