"use client";

import { motion } from "framer-motion";

const events = [
  { time: "11:45", description: "Ankomst" },
  { time: "12:00", description: "Vielse" },
  { time: "12:45", description: "Mingling med boller og saft" },
  { time: "15:30", description: "Middag i hovedsalen" },
  { time: "19:00", description: "Dessert, kaffe og kake" },
  { time: "21:00 PM", description: "Dans og fest" },
];

export default function Timeline() {
  return (
    <section className="py-20 bg-forest text-peach">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-handwriting text-center mb-12"
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
              className={`flex items-center mb-8 px-8 ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="w-1/2">
                <div
                  className={`rounded-lg ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2">{event.time}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
              <div className="w-4 h-4 bg-peach rounded-full z-10"></div>
              <div className="w-1/2"></div>
            </motion.div>
          ))}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-peach -ml-0.5"></div>
        </div>
      </div>
    </section>
  );
}
