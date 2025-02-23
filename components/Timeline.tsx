"use client"

import { motion } from "framer-motion"

const events = [
  { time: "4:00 PM", description: "Arrival & Seating" },
  { time: "4:30 PM", description: "Ceremony Begins" },
  { time: "5:00 PM", description: "Cocktail Hour" },
  { time: "6:00 PM", description: "Dinner & Toasts" },
  { time: "7:30 PM", description: "First Dance" },
  { time: "8:00 PM", description: "Dance Party" },
  { time: "10:00 PM", description: "Farewell & Sendoff" },
]

export default function Timeline() {
  return (
    <section className="py-20 bg-[#003d1e] text-[#e49133]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-handwriting text-center mb-12"
        >
          Wedding Timeline
        </motion.h2>
        <div className="relative">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex items-center mb-8 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
            >
              <div className="w-1/2 px-4">
                <div className={`p-4 rounded-lg ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <h3 className="text-xl font-semibold mb-2">{event.time}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
              <div className="w-4 h-4 bg-[#e49133] rounded-full z-10"></div>
              <div className="w-1/2 px-4"></div>
            </motion.div>
          ))}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-[#e49133] -ml-0.5"></div>
        </div>
      </div>
    </section>
  )
}

