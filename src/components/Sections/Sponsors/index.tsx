import Marquee from "@/components/Marquee";
import {sponsors} from "@/data/sponsors";

export default function Sponsors() {
  if (!sponsors) return <p>loading</p>;
  return (
    <section id="sponsors" className="bg-lightGrey overflow-hidden py-8 relative z-10">
      <Marquee
        direction="left"
        left="-75%"
        type="image"
        src={sponsors}
      />
    </section>
  );
}