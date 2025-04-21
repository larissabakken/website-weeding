"use client";

import Link from "next/link";
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

export default function AdminNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 left-0 w-full items-center z-max">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-x-20 justify-center font-bold">
          <Link href="/admin">Group</Link>
          <Link href="/giftlist">Giftlist</Link>
          <Link href="/giftlist/received">Received</Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center justify-between w-full">
          <button onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Sidebar */}
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerContent className="flex flex-col items-center justify-start">
            <DrawerHeader className="w-full flex flex-row justify-between px-4">
              <DrawerTitle className="text-xl font-bold pt-1">
                Navigation
              </DrawerTitle>
              <DrawerClose>
                <Button variant="outline" className="rounded-full w-10 h-10">
                  <X size={20} />
                </Button>
              </DrawerClose>
            </DrawerHeader>
            <DrawerFooter className="w-full gap-y-4 px-4">
              <Link href="/admin">Group</Link>
              <Link href="/giftlist">Giftlist</Link>
              <Link href="/giftlist/received">Received</Link>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
