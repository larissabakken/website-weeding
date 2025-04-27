"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useFetch } from "@/hooks/use-fetch";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(8, {
    message: "Phone must be at least 8 characters.",
  }),
  rsvp: z.boolean().optional(),
  foodRestriction: z.string().optional(),
  observations: z.string().optional(),
});

interface Guest {
  id: string;
  name: string;
  phone: string;
  rsvp: boolean;
  foodRestriction?: string | null;
  observations?: string | null;
  groupId: string;
}

interface GuestEditFormModalProps {
  guest: Guest;
  onSuccess?: () => void;
  trigger?: React.ReactNode;
}

export function GuestEditFormModal({
  guest,
  onSuccess,
  trigger,
}: GuestEditFormModalProps) {
  const toast = useToast();
  const [open, setOpen] = useState(false);
  const { req } = useFetch();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: guest.name,
      phone: guest.phone,
      rsvp: guest.rsvp,
      foodRestriction: guest.foodRestriction || "",
      observations: guest.observations || "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      await req(`/guests/${guest.id}`, "PATCH", {
        ...values,
      });
      toast("Guest updated successfully", {
        type: "success",
      });
      form.reset();
      setOpen(false);
      onSuccess?.();
    } catch (error) {
      console.error("Error updating guest:", error);
      toast("Error updating guest", {
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          form.reset({
            name: guest.name,
            phone: guest.phone,
            rsvp: guest.rsvp,
            foodRestriction: guest.foodRestriction || "",
            observations: guest.observations || "",
          });
        }
        setOpen(isOpen);
      }}
    >
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Guest</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Guest name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rsvp"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">RSVP</FormLabel>
                    <div className="text-sm text-muted-foreground">
                      Confirm guest attendance
                    </div>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="foodRestriction"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Food Restrictions</FormLabel>
                  <FormControl>
                    <Input placeholder="Any food restrictions?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="observations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Observations</FormLabel>
                  <FormControl>
                    <Input placeholder="Any observations?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Updating..." : "Update Guest"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
