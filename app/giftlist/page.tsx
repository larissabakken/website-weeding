"use client";

import { useState } from "react";
import Image from "next/image";

import { useFetch } from "@/hooks/use-fetch";
import { Trash2, Pencil } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import GiftEditFormModal from "@/components/GiftEditFormModal";
import AddGiftForm from "@/components/AddGiftForm";
import DeleteGiftModal from "@/components/DeleteGiftModal";

interface Gift {
  id: string;
  name: string;
  description: string | null;
  active: boolean;
  linkImage: string;
  price: number | null;
  quantity: number | null;
}

export default function WishList() {
  const { data: gifts, error, isLoading, mutate } = useFetch<Gift[]>("/gifts");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedGroupId, setSelectedGiftId] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-8 gap-4 flex flex-col">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <AddGiftForm />
      <Card className="bg-white shadow-md rounded-lg p-6">
        <CardHeader>
          <CardTitle>List of Gifts</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="grid gap-2">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          )}

          {gifts?.length === 0 ? (
            <div className="text-center text-gray-500">
              No gifts found, add a gift to start
            </div>
          ) : (
            <Accordion type="single" collapsible className="w-full">
              {gifts?.map((gift) => (
                <AccordionItem key={gift.id} value={gift.id}>
                  <AccordionTrigger className="text-lg font-medium">
                    <div className="flex items-center gap-2">{gift.name}</div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-1">
                            <h4 className="font-medium">Description:</h4>
                            <p className="text-sm text-gray-600">
                              {gift.description}
                            </p>
                          </div>
                          <p className="text-sm text-gray-600">
                            Quantity: {gift.quantity}
                          </p>
                          <p className="text-sm text-gray-600">
                            Price: {gift.price}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-1 rounded text-sm ${
                              gift.active
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {gift.active ? "Active" : "Inactive"}
                          </span>
                          <GiftEditFormModal
                            gift={gift}
                            onSuccess={() => mutate()}
                            trigger={
                              <Button variant="outline" size="icon">
                                <Pencil className="size-10" />
                              </Button>
                            }
                          />
                          <Button
                            variant="destructive"
                            onClick={() => {
                              setSelectedGiftId(gift.id);
                              setDeleteModalOpen(true);
                            }}
                          >
                            <Trash2 className="size-10" />
                          </Button>
                        </div>
                      </div>
                      <Image
                        width={200}
                        height={200}
                        src={gift.linkImage}
                        alt={gift.name}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </CardContent>
      </Card>

      {selectedGroupId && (
        <DeleteGiftModal
          groupId={selectedGroupId}
          isOpen={deleteModalOpen}
          onClose={() => {
            setDeleteModalOpen(false);
            setSelectedGiftId(null);
          }}
          onSuccess={() => mutate()}
        />
      )}
    </div>
  );
}
