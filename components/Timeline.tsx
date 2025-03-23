"use client";

import { motion } from "framer-motion";
import {
  GiDiamondRing,
  GiPartyPopper,
  GiGlassCelebration,
} from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { LuSalad } from "react-icons/lu";
import { IoRestaurantOutline } from "react-icons/io5";

const events = [
  { time: "11:45", description: "Ankomst", icon: FaPeopleGroup },
  { time: "12:00", description: "Vielse", icon: GiDiamondRing },
  {
    time: "12:45",
    description: "Mingling med boller og saft",
    icon: LiaPeopleCarrySolid,
  },
  {
    time: "15:30",
    description: "Middag i hovedsalen",
    icon: GiGlassCelebration,
  },
  {
    time: "16:30",
    description: "Forret",
    icon: LuSalad,
  },
  {
    time: "19:00",
    description: "Dessert, kaffe og kake",
    icon: IoRestaurantOutline,
  },
  { time: "21:00 PM", description: "Dans og fest", icon: GiPartyPopper },
];

export default function Timeline() {
  return (
    <section className="h-[100rem] md:h-full py-20 bg-[#758D67] text-[#DAEADB]">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-handwriting text-center pb-12 font-bold"
        >
          Bryllupsdagen
        </motion.h2>
        <div className="relative">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex items-start justify-between py-4 mb-4 ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              {index % 2 === 0 && (
                <div className="w-1/2">
                  <div className="rounded-lg px-2 flex flex-row gap-2 text-left">
                    <div className="rounded-full p-2 bg-[#DAEADB] size-12 text-center">
                      <event.icon className="text-[#758D67] size-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {event.time}
                      </h3>
                      <p>{event.description}</p>
                    </div>
                  </div>
                </div>
              )}

              {index % 2 !== 0 && (
                <div className="w-1/2">
                  <div className="rounded-lg px-4 flex flex-row justify-end gap-x-4 text-right">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {event.time}
                      </h3>
                      <p>{event.description}</p>
                    </div>
                    <div className="rounded-full p-2 bg-[#DAEADB] size-12 text-center">
                      <event.icon className="text-[#758D67] size-8" />
                    </div>
                  </div>
                </div>
              )}

              <div className="w-4 h-4 bg-[#DAEADB] rounded-full z-20"></div>
              <div className="w-1/2"></div>
            </motion.div>
          ))}
          <div className="absolute top-0 bottom-0 left-1/2 w-[2px] -ml-0.5 mt-4 bg-[#DAEADB]"></div>
        </div>
      </div>
    </section>
  );
}
