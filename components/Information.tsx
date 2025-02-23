"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Leaf } from "lucide-react"

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
          Wedding Details
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <MapPin className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Where</h3>
            <p>
              Green Meadows Eco-Resort
              <br />
              123 Nature Lane, Forestville
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Clock className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">When</h3>
            <p>
              June 15, 2024
              <br />
              4:00 PM - 10:00 PM
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <Leaf className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Note</h3>
            <p>
              Vegan-friendly celebration
              <br />
              Eco-conscious attire encouraged
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

