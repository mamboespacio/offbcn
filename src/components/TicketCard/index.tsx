import styles from './style.module.css';
import Image from "next/image";

interface TicketCardProps {
  index: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
}

export default function TicketCard({ index, image, title, subtitle, description, url }: TicketCardProps) {
  return (
    <div className="text-center text-primary" key={index}>
      <Image
        src={`/${image}`}
        width={500}
        height={0}
        alt={title}
      />
      {/* <div className="font-sans p-4 flex flex-col border border-primary border-[3px] rounded-full items-center justify-center mx-auto">
        <p className="uppercase text-4xl leading-none">{title}</p>
        <p>{subtitle}</p>
      </div>
      <p className="text-lg antialiased uppercase p-4 no-wrap">{description}</p> */}
      <button className="uppercase mt-8 inline-flex items-center justify-center px-5 py-2 font-sans text-xl text-normal text-center text-black bg-primary rounded-full hover:bg-primary hover:text-black">
        Get Tickets
      </button>
    </div>
  );
}