"use client"
import { useTranslations } from "next-intl";
import Marquee from "@/components/Marquee";
import Image from "next/image";
import Link from "next/link";
import blackworks from '../../../public/posters/blackworks_poster.jpg';
import defected from '../../../public/posters/defected_poster.jpg';
import pyramid from '../../../public/posters/pyramid_poster.jpg';
import offbcn from '../../../public/posters/offbcn_poster.jpg';


export const Tickets = () => {
  const t = useTranslations('Tickets');
  return (
    <section id="tickets" className="bg-black relative z-10">
      <div className="py-[15%]">
        <h1 className="text-xl lg:text-4xl max-w-[75vw] mx-auto text-white text-center font-sans">
          {t('title')}
        </h1>
        <div className="space-y-4 lg:space-y-24 max-w-[80vw] mx-auto mt-8">
          <div className="space-y-8 md:grid md:space-y-0 lg:grid-cols-4 lg:gap-6">
            <div className="text-center text-primary">
              <p className="font-sans text-2xl mb-4">{t('friday')}</p>
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
            <div className="text-center text-primary">
              <p className="font-sans text-2xl mb-4">{t('saturday')}</p>
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
              <p className="font-sans text-2xl mb-4">{t('saturday')}</p>
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
              <p className="font-sans text-2xl mb-4">{t('weekend')}</p>
              <Image
                src={offbcn}
                width={500}
                height={0}
                alt="OffBCN"
                placeholder='blur'
              />
              <Link
                href="https://es.ra.co/events/2082300"
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