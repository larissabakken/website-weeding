"use client";

import { Button } from "./ui/button";
import { Gift } from "lucide-react";

export function GiftQA() {
  return (
    <section className="bg-rust min-h-[50vh] flex flex-col justify-evenly items-center text-center py-20 gap-12">
      <div className="text-peach font-handwriting text-7xl">
        Hva Gjør Vi Med Gaver
      </div>
      <div className="container mx-auto text-white font-bold px-16">
        Vi har ikke en gaveønskeliste, men hvis du ønsker å gi oss noe, blir vi
        superglade for bidrag til bryllupsreisen vår! ✈️💕
        <br />
        <br />
        Din gave vil bli brukt med omhu – kanskje til en is i Disneyland, en
        donut i solen, en matchende turistgenser fra gavebutikken, eller en
        romantisk middag vi ikke trenger å lage selv. Takk for at du vil være
        med og skape minner sammen med oss! 🍦🍩🧥🍝
        <br />
        <br />
        Fysiske gaver og kort kan henvendes til gavebordet. Dog merk at
        gavebordet ikke vil være bemannet, så gaver og kort vil ikke åpnes på
        selve bryllupsdagen.
      </div>

      <div className="flex text-white gap-3">
        <Gift />
        <p>Vipps: XXX-XX-XXX</p>
      </div>
    </section>
  );
}
