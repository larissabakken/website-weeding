import Banner from "@/components/Banner";
import Information from "@/components/Information";
import QandA from "@/components/QandA";
import MenuNav from "@/components/MenuNav";
import { RSVP } from "@/components/RSVP";
import { GiftQA } from "@/components/GiftQA";

import PhotosBanner from "@/components/PhotosBanner";
export default function Home() {
  return (
    <main>
      <MenuNav />
      <Banner />
      <Information />
      <PhotosBanner />
      <RSVP />
      <QandA />
      <GiftQA />
    </main>
  );
}
