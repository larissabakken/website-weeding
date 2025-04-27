"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, CircleParking, BusFront } from "lucide-react";
import Detail from "./Detail";

export default function Information() {
  return (
    <section className="py-10 bg-berry">
      <div className="container mx-auto px-4 pt-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold font-handwriting text-center mb-12 text-white"
        >
          Bryllupsdetaljer
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-8 text-white font-semibold">
          <Detail
            icon={<Clock className="w-12 h-12 mx-auto mb-4" />}
            info={"20 september 2025"}
            description={"kl 12:00"}
          />
          <Detail
            icon={<MapPin className="w-12 h-12 mx-auto mb-4" />}
            info={"Bøndenes Hus"}
            description={"Oppsandveien 3, 1400 Ski"}
          />
          <Detail
            icon={<CircleParking className="w-12 h-12 mx-auto mb-4" />}
            info={"Parkering på grusplassen ved lokalet"}
          />
          <Detail
            icon={<BusFront className="w-12 h-12 mx-auto mb-4" />}
            info="Lett tilgjengelig med kollektivtransport"
          />
        </div>
      </div>
    </section>
  );
}
