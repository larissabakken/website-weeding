"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center mt-80 md:mt-40 z-10"
      >
        <h1 className="text-7xl font-bold mb-4 text-white font-handwriting">
          Edith & Christian
        </h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-3xl font-bold text-forest font-handwriting "
        >
          20. september 2025
        </motion.div>
      </motion.div>
      <div className="relative z-0 mt-10">
        <Image
          src="/ec-portrait.png"
          alt="Edith and Christian"
          priority
          height={600}
          width={580}
        />
      </div>
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
        style={{
          background:
            "radial-gradient(circle, rgba(228,145,51,0.2) 0%, rgba(90,111,42,0.3) 100%)",
        }}
      />
    </section>
  );
}
