"use client";

import { motion } from "framer-motion";
import {
  Shirt,
  Plus,
  Gift,
  Speech,
  Camera,
  Mic2,
  CakeSlice,
} from "lucide-react";
import Detail from "./Detail";

const QandA = () => {
  return (
    <section className="py-20 bg-[#e49133] text-[#003d1e]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-handwriting text-center mb-12"
        >
          Spørsmål og svar
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Detail
            icon={<Shirt className="w-12 h-12 mx-auto mb-4" />}
            detail={"Hva er kleskoden?"}
            info={
              "Pent. Vi er ikke stive folk, og ønsker en behagelig feiring. Pynt deg i det du er komfortabel i - om det er en ballkjole, cocktailkjole, smoking eller skjorte og dressbukse spiller ingen rolle. Men helst ingen jeans, takk."
            }
            description="Hvis været tillater det vil vielse og mingling foregå utendørs på
            gressplenen. “Gressvennlige” sko er å anbefale."
          />
          <Detail
            icon={<Plus className="w-12 h-12 mx-auto mb-4" />}
            detail={"Kan jeg ha med en pluss én?"}
            info={
              "Kun de som står i invitasjonen er invitert. Vi ønsker en dag fylt med de vi er glad i, og det er viktig for oss at vi kjenner alle gjestene."
            }
          />
          <Detail
            icon={<Gift className="w-12 h-12 mx-auto mb-4" />}
            detail={"Hva gjør vi med gaver?"}
            info={
              "Det at du ønsker å feire dagen med oss er en gave i seg selv. Hvis du fremdeles ønsker å gi en gave kan du sjekke ut ønskelisten vår " +
              '<a href="https://www.example.com" style="text-decoration: underline;">her</a>.'
            }
            description={
              "Fysiske gaver og kort kan henvendes til gavebordet. Dog merk at gavebordet ikke vil være bemannet, så gaver og kort vil ikke åpnes på selve bryllupsdagen."
            }
          />
          <Detail
            icon={<Speech className="w-12 h-12 mx-auto mb-4" />}
            detail={"Jeg ønsker å holde en tale, hva gjør jeg?"}
            info={
              "Vi ønsker veldig gjerne taler, så det er kjempehyggelig at du vil holde en! Ta kontakt med vår toastmaster, Aron på tlf:XXXXXXXXXX."
            }
            description={
              "Han vil gi deg informasjon om eventuell tidsbegrensning, omtrent når i løpet av kvelden du blir oppnevnt og lignende. Fint om du gir han navnet ditt, og hvilken relasjon du har til oss."
            }
          />
          <Detail
            icon={<Camera className="w-12 h-12 mx-auto mb-4" />}
            detail={"Vil det være mulighet for fremvisning av bilder?"}
            info={"???"}
          />
          <Detail
            icon={<Mic2 className="w-12 h-12 mx-auto mb-4" />}
            detail={
              "Jeg ønsker å ha et musikkinnslag / underholdningsinnslag, hva gjør jeg?"
            }
            info={
              "Ta kontakt med vår toastmaster, Aron på tlf: ZZZZZZZZZ. Så vil han gi deg informasjon om hvordan gå frem med dette"
            }
            description={
              "Tilgjengelig på lokalet er det:" +
              "<br/>- Mikrofon" +
              "<br/>- Høytaler" +
              "<br/>- Lerret"
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
        </div>
      </div>
    </section>
  );
};

export default QandA;
