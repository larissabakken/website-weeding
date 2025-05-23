"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section
      id="hjem"
      className="relative flex flex-col pt-10 h-[30rem] sm:h-[40rem] bg-forest w-full scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center z-10"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-3xl font-bold font-handwriting w-full"
        >
          <h1 className="text-7xl font-bold mb-4 text-white font-handwriting">
            Edith & Christian
          </h1>
          <h2 className="text-4xl font-bold mb-4 text-[#daeadb] font-handwriting">
            20. september 2025
          </h2>
          <div className="w-full flex justify-center pr-12">
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
