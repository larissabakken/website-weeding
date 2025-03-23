import Banner from "@/components/Banner";
import Information from "@/components/Information";
import QandA from "@/components/QandA";
import MenuNav from "@/components/MenuNav";
import { RSVP } from "@/components/RSVP";
import { GiftQA } from "@/components/GiftQA";
import PhotosBanner from "@/components/PhotosBanner";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <MenuNav />
      <Banner />
      <Information />
      <RSVP />
      <PhotosBanner />
      <Timeline />
      <GiftQA />
      <QandA />
      <Footer />
    </main>
  );
}
