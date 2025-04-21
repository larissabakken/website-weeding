"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { router } from "next/client";

export function RSVP() {
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
          Skriv inn telefonnummeret ditt for å få tilgang til invitasjonen din
          og gi oss din RSVP. Invitasjonen er knyttet til deg og din familie, og
          du kan oppgi hvor mange som kommer sammen med deg. Klikk på lenken
          nedenfor for å bli sendt videre til skjemaet. Det er veldig viktig for
          oss at du svarer så snart som mulig, slik at vi kan forberede oss best
          mulig for alle gjestene.
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
