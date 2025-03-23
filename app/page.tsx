import Banner from "@/components/Banner";
import Information from "@/components/Information";
import Timeline from "@/components/Timeline";
import QandA from "@/components/QandA";
import MenuNav from "@/components/MenuNav";
import { RSVP } from "@/components/RSVP";
import { GiftQA } from "@/components/GiftQA";

export default function Home() {
  return (
    <main className="min-h-screen bg-customGreenBg text-brown">
      <MenuNav />
      <Banner />
      <Information />
      <Timeline />
      <RSVP />
      <QandA />
      <GiftQA />
    </main>
  );
}
