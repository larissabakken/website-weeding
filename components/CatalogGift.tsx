"use client";

import { useFetch } from "@/hooks/use-fetch";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { GiftFormModal } from "@/components/GiftFormModal";
import { useToast } from "@/hooks/use-toast";

interface Gift {
  id: string;
  name: string;
  description: string;
  active: boolean;
  linkImage: string;
  price: number;
  url: string | null;
  quantity: number;
  quantityBought: number;
  createdAt: string;
}

export function CatalogGift() {
  const toast = useToast();
  const { data, isLoading, error } = useFetch<Gift[]>("/gifts");
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Skeleton className="w-full h-full" />
      </div>
    );
  }

  if (error) {
    toast("Error loading gifts", {
      type: "error",
    });
  }

  const handleGift = (gift: Gift) => {
    setSelectedGift(gift);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((gift) => (
          <Card key={gift.id} className="overflow-hidden flex flex-col h-full">
            <div className="relative h-56 w-full">
              <Image
                src={gift.linkImage}
                alt={gift.name}
                fill
                className="object-cover object-center"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between text-sm text-muted-foreground w-full">
                <span>Available: {gift.quantity - gift.quantityBought}</span>
                <span>Total: {gift.quantity}</span>
              </div>

              <h3 className="font-semibold">{gift.name}</h3>
              {gift.description && (
                <p className="text-sm text-muted-foreground">
                  {gift.description}
                </p>
              )}
            </CardHeader>
            <CardFooter className="flex flex-col gap-2 mt-auto">
              <p className="font-medium">{gift.price}kr</p>
              <Button
                className="w-full bg-berry hover:bg-berry/80 text-white"
                onClick={() => handleGift(gift)}
                disabled={gift.quantity - gift.quantityBought === 0}
              >
                Gi gave
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <GiftFormModal
        gift={selectedGift}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
