"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

export function RSVP() {
  const handleRSVP = () => {
    console.log("RSVP to form later");
    //window.location.href = "det kommer skjemalink her";
  };
  return (
    <section className="bg-[#EAC0AC] py-20 ">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col justify-evenly items-center text-center gap-12"
      >
        <div className="text-[#d57973] font-handwriting text-6xl font-bold">
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
          size="lg"
          className="mx-auto bg-[#d57973] hover:bg-[#E99873] text-white rounded-lg px-16 gap-3"
          onClick={handleRSVP}
        >
          <Send />
          <p>Trykk her for å svare i skjemaet</p>
        </Button>
      </motion.div>
    </section>
  );
}
