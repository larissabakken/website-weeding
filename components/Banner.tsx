"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative flex flex-col items-center justify-center pb-20 h-[70vh] bg-[#758D67] w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center mt-80 md:mt-40 z-10 w-full px-4"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-3xl font-bold text-forest font-handwriting w-full"
        >
          <h1 className="text-7xl font-bold mb-4 text-white font-handwriting">
            Edith & Christian
          </h1>
          <h2 className="text-4xl font-bold mb-4 text-[#daeadb] font-handwriting">
            20. september 2025
          </h2>
          <div className="w-full flex justify-center">
            <Image
              src="/ec-portrait.png"
              alt="Edith and Christian"
              priority
              height={600}
              width={580}
              className="max-w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
