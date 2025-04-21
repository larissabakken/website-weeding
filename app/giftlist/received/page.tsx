"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFetch } from "@/hooks/use-fetch";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

interface Letter {
  id: string;
  name: string;
  text: string | null;
  giftId: string;
  createdAt: string;
  gift: {
    name: string;
    linkImage: string;
    price: number;
  };
}

export default function ReceivedLetters() {
  const { data: letters, isLoading } = useFetch<Letter[]>("/letters");

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Skeleton className="w-full h-full" />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Mottatte gaver</h1>
        <p className="text-gray-600">
          Liste over alle gaver og meldinger fra gjestene
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {letters?.map((letter) => (
          <Card key={letter.id}>
            <CardHeader>
              <div className="flex items-start gap-4">
                <Image
                  src={letter.gift.linkImage}
                  alt={letter.gift.name}
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <CardTitle className="text-lg">{letter.gift.name}</CardTitle>
                  <CardDescription>{letter.gift.price} kr</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <span className="font-semibold">Fra:</span> {letter.name}
                </div>
                {letter.text && (
                  <div>
                    <span className="font-semibold">Melding:</span>
                    <p className="mt-1 text-gray-600">{letter.text}</p>
                  </div>
                )}
                <div className="text-sm text-gray-500">
                  {new Date(letter.createdAt).toLocaleDateString("no-NO", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {letters?.length === 0 && (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500">Ingen gaver mottatt ennå</p>
          </div>
        )}
      </div>
    </div>
  );
}
