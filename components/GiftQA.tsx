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
          Du trenger ikke å gi oss noe gave (i denne økonomien💸). Det er supert
          om du vil bidra til kakebordet eller andre forberedelser - se mer om
          det lengre ned.
          <br />
          <br />
          Meeeeeeen om du likevel har lyst til gi en gave ønsker vi oss i grunn
          to ting. 😇 Bidrag til bryllupsreise til Disneyland Paris 🌈🐭🏰 og en
          grom kjøkkenmaskin av merket Ankarsrum 🥐.
          <br />
          <br />
          Om du velger å sende over et øremerket beløp fra listen under vil vi
          gjøre vårt ytterste for å levere bildebevis fra reisen vår.
          <br />
          Ånei, håper ikke alle gir én iskrem hver slik at vi er nødt til å
          spise 70 iskremer og sende bilde av hver eneste en...😋 - Edith
          <br />
          <br />
          Vi kommer til å ha et “ubemannet” gavebord og vil åpne eventuelle
          fysiske og digitale gaver dagen etter feiringen.
          <br />
          <br />
          Vippskoden tar deg til Christian og det er riktig, men det går til en
          felleskonto som Edith disponerer, som vi ikke sjekker før bryllupet.
          Vi lover. 🤭
        </div>
        <CatalogGift />
      </motion.div>
    </section>
  );
}
