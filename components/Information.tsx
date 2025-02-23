"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Leaf, Shirt } from "lucide-react";
import Detail from "./Detail";

export default function Information() {
  return (
    <section className="py-20 bg-[#e49133] text-[#003d1e]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-handwriting text-center mb-12"
        >
          Bryllups detaljer
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Detail
            icon={<MapPin className="w-12 h-12 mx-auto mb-4" />}
            detail="Hvor"
            info={"Bøndenes Hus"}
            description={"Oppsandveien 3, 1400 Ski"}
          />
          <Detail
            icon={<Clock className="w-12 h-12 mx-auto mb-4" />}
            detail={"Når"}
            info={"20 september 2025"}
            description={"12:00"}
          />
          <Detail
            icon={<Leaf className="w-12 h-12 mx-auto mb-4" />}
            detail={"Note"}
            info={"Dette er en vegan-vennlig feiring"}
          />
        </div>
      </div>
    </section>
  );
}
