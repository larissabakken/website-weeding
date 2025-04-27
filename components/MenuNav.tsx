"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerFooter,
  DrawerTitle,
  DrawerHeader,
  DrawerContent,
  DrawerClose,
} from "./ui/drawer";

export default function MenuNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    const goToCompontnt = document.getElementById(path);
    if (goToCompontnt) {
      goToCompontnt.scrollIntoView({ behavior: "instant" });
    }
  };

  return (
    <>
      <div className="sticky top-0 left-0 w-full items-center bg-berry z-max">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-x-4 justify-center text-white font-bold">
          <Button variant="ghost" onClick={() => handleNavigation("hjem")}>
            Hjem
          </Button>
          <Button variant="ghost" onClick={() => handleNavigation("rsvp")}>
            RSVP
          </Button>
          <Button variant="ghost" onClick={() => handleNavigation("bryllup")}>
            Plan for dagen
          </Button>
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
          <Button variant="ghost" onClick={() => handleNavigation("gaver")}>
            Gaver
          </Button>

          <Button variant="ghost" onClick={() => handleNavigation("questions")}>
            Spørsmål og svar
          </Button>

          <Button variant="ghost" onClick={() => handleNavigation("menu")}>
            Meny
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center justify-between w-full">
          <button onClick={() => setIsOpen(true)} className="text-forest">
            <Menu size={24} />
          </button>
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
        </div>

        {/* Mobile Sidebar */}
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerContent className="bg-white flex flex-col items-center justify-start text-gray-500">
            <DrawerHeader className="w-full flex flex-row justify-between px-4">
              <DrawerTitle className="text-xl font-bold pt-1">
                Navigasjon
              </DrawerTitle>
              <DrawerClose>
                <Button variant="outline" className="rounded-full w-10 h-10">
                  <X size={20} />
                </Button>
              </DrawerClose>
            </DrawerHeader>
            <DrawerFooter className="w-full gap-y-4 px-4">
              <Button variant="ghost" onClick={() => handleNavigation("hjem")}>
                Hjem
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleNavigation("bryllup")}
              >
                Plan for dagen
              </Button>
              <Button variant="ghost" onClick={() => handleNavigation("gaver")}>
                Gaver
              </Button>
              <Button variant="ghost" onClick={() => handleNavigation("rsvp")}>
                RSVP
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleNavigation("questions")}
              >
                Spørsmål og svar
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
