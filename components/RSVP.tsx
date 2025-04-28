"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useRouter } from "next/navigation";

export function RSVP() {
  const router = useRouter();

  return (
    <section id="rsvp" className="bg-berry py-20 scroll-mt-10">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col justify-evenly items-center text-center gap-12 "
      >
        <div className="text-white font-handwriting text-6xl font-bold">
          RSVP
        </div>
        <div className="container mx-auto text-white font-medium px-16">
          Kommer du?
          <br />
          Klikk på knappen under og skriv inn koden fra tekstmeldingen du fikk
          for å svare på vegne av husstanden din.
          <br />
          Du kan logge inn igjen senere med samme kode for å sjekke eller endre
          svaret ditt.
          <br />
          <br />
          Svarfrist 31.05.25. 📩
        </div>
        <Button
          className="bg-forest hover:bg-forest/80 text-white rounded-lg gap-3"
          onClick={() => router.push("/guest-response/")}
        >
          <Send />
          <p>Trykk her for å svare i skjemaet</p>
        </Button>
      </motion.div>
    </section>
  );
}
