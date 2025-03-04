import Banner from "@/components/Banner";
import Information from "@/components/Information";
import Timeline from "@/components/Timeline";
import QandA from "@/components/QandA";

export default function Home() {
  return (
    <main className="min-h-screen bg-sage text-brown">
      <Banner />
      <Information />
      <Timeline />
      <QandA />
    </main>
  );
}
