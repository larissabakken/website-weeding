"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 text-center mt-80 md:mt-40"
      >
        <h1 className="text-7xl font-bold mb-4 text-white font-handwriting">
          Edith & Christian
        </h1>
        <p className="text-2xl mb-4 text-white">skal gifte seg!</p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl font-semibold text-white"
        >
          20. september 2025
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src="/front-page.jpg"
          alt="Edith and Christian"
          priority
          height={1024}
          width={700}
          className="absolute opacity-90"
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
