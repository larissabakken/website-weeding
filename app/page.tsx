import Banner from "@/components/Banner";
import Information from "@/components/Information";
import Timeline from "@/components/Timeline";
import QandA from "@/components/QandA";
import MenuNav from "@/components/MenuNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-customGreenBg text-brown">
      <MenuNav />
      <Banner />
      <Information />
      <Timeline />
      <QandA />
    </main>
  );
}
