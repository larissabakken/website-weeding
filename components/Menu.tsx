"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Menu() {
  return (
    <section id="menu" className="bg-berry py-20 scroll-mt-4">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col justify-evenly items-center text-center gap-12"
      >
        <div className="text-[#FBFAFB] font-handwriting text-7xl">Meny</div>
        <Image
          src="/ed_ch_menu.jpg"
          alt="Menu"
          priority
          height={800}
          width={600}
          className="max-w-full h-auto"
        />
      </motion.div>
    </section>
  );
}
