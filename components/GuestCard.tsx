"use client";

import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
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
import { useFetch } from "@/hooks/use-fetch";
import { toast } from "sonner";
import { GuestEditFormModal } from "./GuestEditFormModal";

interface Guest {
  id: string;
  name: string;
  phone: string;
  rsvp: boolean;
  foodRestriction: string | null;
  observations: string | null;
  createdAt: string;
  groupId: string;
}

interface GuestCardProps {
  guest: Guest;
  onSuccess: () => void;
}

export default function GuestCard({ guest, onSuccess }: GuestCardProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { req } = useFetch("/guests");

  const handleDelete = async () => {
    try {
      await req(`/guests/${guest.id}`, "DELETE");
      toast.success("Guest deleted successfully");
      onSuccess();
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("Error deleting guest:", error);
      toast.error("Error deleting guest");
    }
  };

  return (
    <div className="border rounded-lg p-4 space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <h4 className="font-medium">{guest.name}</h4>
          <p className="text-sm text-gray-600">Phone: {guest.phone}</p>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`px-2 py-1 rounded text-sm ${
              guest.rsvp
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {guest.rsvp ? "Confirmed" : "Pending"}
          </span>
          <GuestEditFormModal
            guest={guest}
            onSuccess={onSuccess}
            trigger={
              <Button variant="outline" size="icon">
                <Pencil className="h-4 w-4" />
              </Button>
            }
          />
          <Button
            className="border-destructive hover:bg-destructive/10"
            variant="outline"
            size="icon"
            onClick={() => setIsDeleteModalOpen(true)}
          >
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      </div>
      {guest.foodRestriction && (
        <p className="text-sm text-gray-600">
          Food Restriction: {guest.foodRestriction}
        </p>
      )}
      {guest.observations && (
        <p className="text-sm text-gray-600">
          Observations: {guest.observations}
        </p>
      )}

      <AlertDialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              guest from the list.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
