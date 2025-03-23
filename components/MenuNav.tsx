"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerFooter,
  DrawerTitle,
  DrawerHeader,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "./ui/drawer";

export default function MenuNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 left-0 w-full items-center bg-[#758d67] bg-opacity-50 z-max">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-x-20 justify-center text-white font-bold">
          <Link href="/">Hjem</Link>
          <Link href="/bryllup">Bryllup</Link>
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
          <Link href="/gjester">Gjester</Link>
          <Link href="/kontakt">Kontakt</Link>
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
                Navigation{" "}
              </DrawerTitle>
              <DrawerClose>
                <Button variant="outline" className="rounded-full w-10 h-10">
                  <X size={20} />
                </Button>
              </DrawerClose>
            </DrawerHeader>
            <DrawerFooter className="w-full gap-y-4 px-4">
              <Link href="/">Hjem</Link>
              <Link href="/bryllup">Bryllup</Link>
              <Link href="/gjester">Gjester</Link>
              <Link href="/kontakt">Kontakt</Link>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
