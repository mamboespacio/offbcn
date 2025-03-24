import Marquee from "@/components/Marquee";
import {sponsors} from "@/data/sponsors";

export default function Sponsors() {
  return (
    <section className="bg-lightGrey overflow-hidden py-8">
      <Marquee
        direction="right"
        left="-75%"
        type="image"
        src={sponsors}
      />
    </section>
  );
}