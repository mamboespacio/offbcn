"use client"
import { useTranslations } from "next-intl";
import Marquee from "@/components/Marquee";
import Image from "next/image";
import Link from "next/link";
import blackworks from '../../../public/blackworks_poster.jpg';
import defected from '../../../public/defected_poster.jpg';
import pyramid from '../../../public/pyramid_poster.jpg';


export const Tickets = () => {
  const t = useTranslations('Tickets');
  return (
    <section id="tickets" className="bg-black relative z-10">
      <div className="py-[15%]">
        <h1 className="text-xl lg:text-4xl max-w-[75vw] mx-auto text-white text-center font-sans">
          {t('title')}
        </h1>
        <div className="space-y-4 lg:space-y-24 max-w-[80vw] mx-auto mt-8">
          <div className="space-y-8 md:grid md:space-y-0 lg:grid-cols-3 lg:gap-6">
            <div className="text-center text-primary">
              <Image
                src={blackworks}
                width={500}
                height={0}
                alt="BlackWorks"
                placeholder='blur'
              />
              <Link
                href="https://ra.co/events/2053420"
                target='_blank'
                className="uppercase mt-8 inline-flex items-center justify-center px-5 py-2 font-sans text-xl text-normal text-center text-black bg-primary rounded-full hover:bg-primary hover:text-black"
              >
                {t('cta')}
              </Link>
            </div>
            <div className="text-center text-primary">
              <Image
                src={defected}
                width={500}
                height={0}
                alt="Defected"
                placeholder='blur'
              />
              <Link
                href="https://ra.co/events/2134883"
                target='_blank'
                className="uppercase mt-8 inline-flex items-center justify-center px-5 py-2 font-sans text-xl text-normal text-center text-black bg-primary rounded-full hover:bg-primary hover:text-black"
              >
                {t('cta')}
              </Link>
            </div>
            <div className="text-center text-primary">
              <Image
                src={pyramid}
                width={500}
                height={0}
                alt="Piramid"
                placeholder='blur'
              />
              <Link
                href="https://ra.co/events/2053111"
                target='_blank'
                className="uppercase mt-8 inline-flex items-center justify-center px-5 py-2 font-sans text-xl text-normal text-center text-black bg-primary rounded-full hover:bg-primary hover:text-black"
              >
                {t('cta')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}