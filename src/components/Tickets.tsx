import TicketCard from "@/components/TicketCard";
import { tickets } from "@/data/tickets";
import Marquee from "./Marquee";

export const Tickets = () => {
  return (
    <section className="bg-grey">
      <Marquee direction="left" left={true} type="scroll" src="Day Passes - Get your ticket"/>
      <div className="p-[10vh]">
        <div className="flex justify-center">
          <h1 className="text-4xl max-w-3xl text-primary text-center font-sans">
            Join the global clubbing movement in Barcelona’s electronic music weekend
          </h1>
        </div>
        <div className="space-y-4 lg:space-y-24 max-w-[80vw] mx-auto mt-8">
          <div className="space-y-8 md:grid md:space-y-0 lg:grid-cols-3 lg:gap-4 ">
            {tickets.map((ticket, index) => {
              return (
                <TicketCard
                  index={index}
                  title={ticket.title} 
                  subtitle={ticket.subtitle} 
                  description={ticket.description} 
                  url={ticket.url} 
                  key={index}
                />
              )  
            })}
          </div>
        </div>
      </div>
    </section>
  )
}