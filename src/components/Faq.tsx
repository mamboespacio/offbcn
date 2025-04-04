"use client"

import { useTranslations } from 'use-intl'
import RichText from '@/components/RichText'
import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'

export default function Faq() {
  const sections = [
    { index: 1, percentage: 1 },
    { index: 2, percentage: 1 },
    { index: 3, percentage: 1 },
    { index: 4, percentage: 1 },
    { index: 5, percentage: 1 },
    { index: 6, percentage: 1 },
    { index: 7, percentage: 'some' },
  ]
  return (
    <div className="py-[25vh]">
      {sections.map(({ index, percentage }) => {
        return (
          <div className="max-w-[75vw] mx-auto flex flex-col items-start justify-center mb-8">
            <FaqCard index={index} percentage={percentage} key={index}/>
          </div>
        )
      })}
    </div>
  )
}
function FaqCard({ index, percentage }: { index: number; percentage: any  }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: percentage })
  const t = useTranslations('AboutPage')
  const cardVariants: Variants = {
    offscreen: {
      color: '#8D8D8D',
    },
    onscreen: {
      color: '#ffffff',
      transition: {
        duration: 0.3,
      },
    },
  }
  return (
    <motion.div
      ref={ref}
      className="my-4 md:grid md:grid-cols-6"
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 1 }}
      key={index}
    >
      <div className="col-span-2">
        <p className="mb-4 text-sm lg:mb-0 lg:text-2xl">{t(`faq.section-${index}-title`)}</p>
      </div>
      <div className="col-span-4 font-light text-lg lg:text-xl gap-8">
        <div className="max-w-75 whitespace-pre-line mb-4 text-sm lg:mb-0 lg:text-2xl">
          <RichText>
            {(tags) => t.rich(`faq.section-${index}-description`, tags)}
          </RichText>
        </div>
      </div>
    </motion.div>
  )
}