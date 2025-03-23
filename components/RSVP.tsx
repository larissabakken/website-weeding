"use client";

import { Button } from "./ui/button";
import { Send } from "lucide-react";

export function RSVP() {
  const handleRSVP = () => {
    console.log("RSVP to form later");
    //window.location.href = "det kommer skjemalink her";
  };
  return (
    <section className="bg-[#850751] min-h-[50vh] flex flex-col justify-evenly items-center text-center py-20 gap-12">
      <div className="text-peach font-handwriting text-6xl">RSVP</div>
      <div className="container mx-auto text-white font-bold px-16">
        Skriv inn telefonnummeret ditt for å få tilgang til invitasjonen din og
        gi oss din RSVP. Invitasjonen er knyttet til deg og din familie, og du
        kan oppgi hvor mange som kommer sammen med deg. Klikk på lenken nedenfor
        for å bli sendt videre til skjemaet. Det er veldig viktig for oss at du
        svarer så snart som mulig, slik at vi kan forberede oss best mulig for
        alle gjestene.
      </div>
      <Button
        size="lg"
        className="mx-auto bg-peach hover:bg-peach text-white  hover:text-[#850751] rounded-[6px] px-16 py-4 gap-3"
        onClick={handleRSVP}
      >
        <Send />
        <p>Trykk her for å svare i skjemaet</p>
      </Button>
    </section>
  );
}
