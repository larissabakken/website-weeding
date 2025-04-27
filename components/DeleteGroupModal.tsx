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

export default function DeleteGroupModal({
  groupId,
  isOpen,
  onClose,
  onSuccess,
}: DeleteGroupModalProps) {
  const { req } = useFetch("/groups");
  const toast = useToast();

  const handleDelete = async () => {
    try {
      await req(`/groups/${groupId}`, "DELETE");
      toast("Group deleted successfully", {
        type: "success",
      });
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Error deleting group:", error);
      toast("Error deleting group", {
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
            When you delete this group, all guests in the list will be deleted
            as well. This action cannot be undone.
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
