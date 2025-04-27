"use client";

import { motion } from "framer-motion";
import {
  Shirt,
  Plus,
  Speech,
  HandHelping,
  Mic2,
  CakeSlice,
  CircleParking,
  BusFront,
} from "lucide-react";
import Detail from "./Detail";

const QandA = () => {
  return (
    <section
      id="questions"
      className="flex justify-center items-center bg-forest text-[#daeadb] py-20 scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl font-handwriting text-center mb-12"
        >
          Spørsmål og svar
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Detail
            icon={<CircleParking className="w-12 h-12 mx-auto mb-4" />}
            detail={"Er parkering?"}
            info="Det er parkering på grusplassen ved lokalet."
          />
          <Detail
            icon={<Plus className="w-12 h-12 mx-auto mb-4" />}
            detail={"Kan jeg ha med en pluss én?"}
            info={
              "Kun de som står i invitasjonen er invitert. Vi ønsker en dag fylt med de vi er glad i, og det er viktig for oss at vi kjenner alle gjestene."
            }
          />
          <Detail
            icon={<BusFront className="w-12 h-12 mx-auto mb-4" />}
            detail="Kan jeg komme dit med kollektivtransport?"
            info="Du kan ta en buss (350 Lillestrøm) fra Ski stasjon, gå av på stoppet som heter Middelalderkirken. Derfra er det en kort gåtur på 4 minutter til lokalet."
          />
          <Detail
            icon={<Mic2 className="w-12 h-12 mx-auto mb-4" />}
            detail={"Jeg ønsker å ha et musikkinnslag"}
            info={
              "Ta kontakt med vår toastmaster, Aron Kongsten på Messenger. Så vil han gi deg informasjon om hvordan å gå frem med dette. "
            }
            description={
              "Tilgjengelig på lokalet er det: Mikrofon, Høytaler, Prosjektor."
            }
          />
          <Detail
            icon={<Shirt className="w-12 h-12 mx-auto mb-4" />}
            detail={"Hva er kleskoden?"}
            info="Vi ønsker en jordnær feiring uten for mye stiv pynt. Kle deg i det du er komfortabel i - enten det er en ball-, sommer-, eller cocktailkjole, tweed, vest, hel eller halv dress. Men det går en grense ved jeans og t-skjorte, takk."
            description="Hvis været tillater det vil vielse og mingling foregå utendørs på gressplenen."
          />

          <Detail
            icon={<Speech className="w-12 h-12 mx-auto mb-4" />}
            detail={"Jeg ønsker å holde en tale, hva gjør jeg?"}
            info={
              "Vi ønsker veldig gjerne taler, så det er kjempehyggelig at du vil holde en! Ta kontakt med vår toastmaster, Aron Kongsten på Messenger. "
            }
            description={
              "Han vil gi deg informasjon om eventuell tidsbegrensning, omtrent når i løpet av kvelden du blir oppnevnt og lignende. Fint om du gir han navnet ditt, og hvilken relasjon du har til oss. "
            }
          />
          <Detail
            icon={<CakeSlice className="w-12 h-12 mx-auto mb-4" />}
            detail={"Jeg har bakt en kake, hvor gjør jeg av denne?"}
            info={
              "Kaker, snacks, drikker og eventuelt annet kan leveres til kjøkkenet inn til høyre fra hovedinngangen."
            }
            description="Der vil det være tilgjengelig kjøleskap / frys mm. Dersom det skulle bli fullt er det også kjøleskap / frys ned trappen."
          />
          <Detail
            icon={<HandHelping className="w-12 h-12 mx-auto mb-4" />}
            detail={"Jeg vil bidra! Hva kan jeg gjøre?"}
            info={
              "Flott! Det setter vi veldig stor pris på. Ta kontakt med Edith eller Christian og spør om hva du kan bidra med / ønsker å bidra med. Det kan være alt fra (vegansk) kakebaking, alkoholfri drikke, teknisk ansvarlig, oppsetting, pynting, borddekking og opprydning."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default QandA;
