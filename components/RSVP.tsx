"use client";

import { Button } from "./ui/button";

export function RSVP() {
  const handleRSVP = () => {
    console.log("RSVP");
    //window.location.href = "https://edithogchristian.no/rsvp";
  };
  return (
    <section className="bg-[#850751] h-[50vh] flex flex-col justify-evenly items-center text-center">
      <div className="text-peach font-handwriting text-6xl">RSVP</div>
      <div className="text-white">
        Skriv inn telefonnummeret ditt for å få tilgang til invitasjonen din og
        gi oss din RSVP. Invitasjonen er knyttet til deg og din familie, og du
        kan oppgi hvor mange som kommer sammen med deg. Klikk på lenken nedenfor
        for å bli sendt videre til skjemaet. Det er veldig viktig for oss at du
        svarer så snart som mulig, slik at vi kan forberede oss best mulig for
        alle gjestene.
      </div>
      <Button className="w-6 bg-[#E49133]" onClick={handleRSVP}>
        RSVP
      </Button>
    </section>
  );
}
