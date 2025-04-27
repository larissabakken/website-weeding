"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useFetch } from "@/hooks/use-fetch";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
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

interface Group {
  id: string;
  name: string;
  guests: Guest[];
}

interface GuestFormProps {
  guest: Guest;
  onUpdate: (values: z.infer<typeof formSchema>) => void;
}

function GuestForm({ guest, onUpdate }: GuestFormProps) {
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

  useEffect(() => {
    const subscription = form.watch((value) => {
      onUpdate(value as z.infer<typeof formSchema>);
    });
    return () => subscription.unsubscribe();
  }, [form, onUpdate]);

  return (
    <div className="border rounded-lg p-6 space-y-4 bg-white shadow-sm">
      <Form {...form}>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Navn</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ola Nordmann"
                      {...field}
                      readOnly
                      className="bg-muted"
                    />
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
                  <FormLabel>Mobilnummer</FormLabel>
                  <FormControl>
                    <Input placeholder="Mobilnummer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="rsvp"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Bekreft</FormLabel>
                  <div className="text-sm text-muted-foreground">
                    Marker om gjesten skal komme i bryllupet
                  </div>
                </div>
                <FormControl>
                  <div className="flex flex-col items-center gap-2">
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <span className="text-sm text-muted-foreground">
                      {field.value ? "Ja" : "Nei"}
                    </span>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="foodRestriction"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Matrestriksjoner</FormLabel>
                <FormControl>
                  <Input placeholder="Har du matrestriksjoner?" {...field} />
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
                <FormLabel>Observasjoner</FormLabel>
                <FormControl>
                  <Input placeholder="Noe du vil ta opp?" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="text-xs text-muted-foreground text-center mt-2">
            Om navnet ditt er feil, vennligst ta kontakt med oss for å endre det
          </p>
        </form>
      </Form>
    </div>
  );
}

export default function GuestResponseForm() {
  const router = useRouter();
  const { req } = useFetch();
  const toast = useToast();
  const [group, setGroup] = useState<Group | null>(null);
  const [loading, setLoading] = useState(false);
  const [guestForms, setGuestForms] = useState<
    Record<string, z.infer<typeof formSchema>>
  >({});
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  useEffect(() => {
    const groupCookie = getCookie("group");
    if (!groupCookie) {
      router.push("/guest-response");
      return;
    }
    setGroup(JSON.parse(groupCookie as string));
  }, [router]);

  const handleGuestUpdate = (
    guestId: string,
    values: z.infer<typeof formSchema>,
  ) => {
    setGuestForms((prev) => ({
      ...prev,
      [guestId]: values,
    }));
    setHasUnsavedChanges(true);
  };

  async function handleSave() {
    setLoading(true);
    try {
      const updates = Object.entries(guestForms).map(([guestId, values]) =>
        req(`/guests/${guestId}`, "PATCH", values),
      );

      await Promise.all(updates);

      const updatedGroup = {
        ...group!,
        guests: group!.guests.map((guest) => ({
          ...guest,
          ...guestForms[guest.id],
        })),
      };

      setGroup(updatedGroup);
      setHasUnsavedChanges(false);
      toast("Svaret har blitt lagret", {
        type: "success",
      });
      router.push("/");
    } catch (error) {
      console.error("Error saving responses:", error);
      toast("Error under lagring av svar", {
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  }

  const handleExit = () => {
    if (hasUnsavedChanges) {
      setShowExitDialog(true);
    } else {
      router.push("/");
    }
  };

  if (!group) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between items-start md:items-center sticky top-0 bg-white py-2">
        <h1 className="text-2xl font-bold w-full">{group.name}</h1>
        <div className="flex justify-end gap-2 w-full">
          <Button
            onClick={handleSave}
            variant="secondary"
            disabled={loading}
            className="w-full md:w-auto"
          >
            {loading ? <LoadingSpinner /> : "Save"}
          </Button>
          <Button
            onClick={handleExit}
            variant="outline"
            disabled={loading}
            className="w-full md:w-auto"
          >
            {loading ? <LoadingSpinner /> : "Cancel"}
          </Button>
        </div>
      </div>
      <div className="space-y-6 py-8">
        {group.guests.map((guest) => (
          <GuestForm
            key={guest.id}
            guest={guest}
            onUpdate={(values) => handleGuestUpdate(guest.id, values)}
          />
        ))}
      </div>

      <AlertDialog open={showExitDialog} onOpenChange={setShowExitDialog}>
        <AlertDialogContent className="max-w-[90vw]">
          <AlertDialogHeader>
            <AlertDialogTitle>Ulagrede endringer</AlertDialogTitle>
            <AlertDialogDescription>
              Du har ulagrede endringer. Er du sikker på at du vil forlate uten
              å lagre?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Stay</AlertDialogCancel>
            <AlertDialogAction onClick={() => router.push("/")}>
              Forlat uten å lagre
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
