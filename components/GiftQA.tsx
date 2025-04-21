"use client";

import { motion } from "framer-motion";
import { CatalogGift } from "./CatalogGift";

export function GiftQA() {
  return (
    <section id="gaver" className="bg-berry py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center flex flex-col gap-12"
      >
        <div className="text-[#FBFAFB] font-handwriting text-7xl">
          Hva Gjør Vi Med Gaver
        </div>

        <div className="container mx-auto text-white font-bold px-16">
          Vi har ikke en gaveønskeliste, men hvis du ønsker å gi oss noe, blir
          vi superglade for bidrag til bryllupsreisen vår! ✈️💕
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
        <CatalogGift />
      </motion.div>
    </section>
  );
}
