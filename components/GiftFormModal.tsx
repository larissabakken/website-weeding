"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { useFetch } from "@/hooks/use-fetch";
import { toast, useToast } from "@/components/ui/use-toast";
import Image from "next/image";
const formSchema = z.object({
  name: z.string().min(2, "Navnet må ha minst 2 tegn"),
  text: z.string().optional(),
});

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

interface GiftFormModalProps {
  gift: Gift | null;
  isOpen: boolean;
  onClose: () => void;
}

export function GiftFormModal({ gift, isOpen, onClose }: GiftFormModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { req } = useFetch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      text: "",
    },
  });

  if (!gift) return null;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);

      await req("/letters", "POST", {
        ...values,
        giftId: gift.id,
      });

      toast({
        title: "Success",
        description: "Message sent successfully!",
      });
      onClose();
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Error sending message",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <div className="flex flex-row gap-x-2">
              <Image
                src={gift.linkImage}
                alt={gift.name}
                width={100}
                height={100}
              />
              <div className="flex flex-col">
                <p> Du gir gaven "{gift.name}"</p>
                <p>{gift.price} kr</p>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ditt navn</FormLabel>
                  <FormControl>
                    <Input placeholder="Skriv inn navnet ditt" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Legg igjen en melding til oss (valgfritt)
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Skriv meldingen din her..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            Scan QR-koden under for å vippse gavebeløpet til oss:
            <div className="flex justify-center">
              <Image
                src="/vipps.jpeg"
                alt="Vipps QR Code"
                width={300}
                height={200}
              />
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isLoading}
              >
                Avbryt
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-peach hover:bg-peach/80"
              >
                {isLoading ? "Sender..." : "Bekreft"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
