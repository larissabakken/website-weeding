import Banner from "@/components/Banner";
import Information from "@/components/Information";
import Timeline from "@/components/Timeline";
import QandA from "@/components/QandA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#5a6f2a] text-[#4c2214]">
      <Banner />
      <Information />
      <Timeline />
      <QandA />
    </main>
  );
}
