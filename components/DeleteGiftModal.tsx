"use client";

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
import { useToast } from "@/hooks/use-toast";

interface DeleteGroupModalProps {
  groupId: string;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function DeleteGiftModal({
  groupId,
  isOpen,
  onClose,
  onSuccess,
}: DeleteGroupModalProps) {
  const { req } = useFetch("/gifts");
  const toast = useToast();

  const handleDelete = async () => {
    try {
      await req(`/gifts/${groupId}`, "DELETE");
      toast("Gift deleted successfully", {
        type: "success",
      });
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Error deleting gift:", error);
      toast("Error deleting gift", {
        type: "error",
      });
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
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
  );
}
