"use client"

import Paragraph from "./Paragraph";
import {useTranslations} from 'next-intl';

export const About = () => {
  const t = useTranslations('About');
  const paragraph = t('about');

  return (
    <>
      <section className="bg-black">
        <div className="flex w-screen h-[24vh]"></div>
        <div className="max-w-4xl mx-auto p-8">
          <Paragraph paragraph={paragraph}/>
        </div>
        <div className="flex w-screen h-[32vh]"></div>
      </section>
    </>
  )
}