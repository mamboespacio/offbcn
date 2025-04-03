import Marquee from "@/components/Marquee";
import {sponsors} from "@/data/sponsors";

export default function Sponsors() {
  if (!sponsors) return <p>loading</p>;
  return (
    <section className="bg-lightGrey overflow-hidden py-8">
      <Marquee
        direction="left"
        left="-75%"
        type="image"
        src={sponsors}
      />
    </section>
  );
}