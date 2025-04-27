"use client";
import CreateGroupForm from "@/components/CreateGroupForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useFetch } from "@/hooks/use-fetch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GuestFormModal } from "@/components/GuestFormModal";
import { Button } from "@/components/ui/button";
import { Trash2, Pencil, Copy } from "lucide-react";
import { useState } from "react";
import DeleteGroupModal from "@/components/DeleteGroupModal";
import GuestCard from "@/components/GuestCard";
import { GroupEditModal } from "@/components/GroupEditModal";
import AdminNav from "@/components/AdminNav";
import { useToast } from "@/hooks/use-toast";

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

interface Group {
  id: string;
  name: string;
  createdAt: string;
  guests: Guest[];
}

export default function Admin() {
  const {
    data: groups,
    error,
    isLoading,
    mutate,
  } = useFetch<Group[]>("/groups");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);
  const toast = useToast();

  if (error) {
    toast("Error loading groups", {
      type: "error",
    });
  }

  return (
    <div className="container mx-auto px-4 py-8 gap-4 flex flex-col">
      <AdminNav />
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <CreateGroupForm />
      <Card className="bg-white shadow-md rounded-lg p-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>List of Groups</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="grid gap-2">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          )}

          {groups?.length === 0 ? (
            <div className="text-center text-gray-500">
              No groups found, add a group to start
            </div>
          ) : (
            <Accordion type="single" collapsible className="w-full">
              {groups?.map((group) => (
                <AccordionItem key={group.id} value={group.id}>
                  <AccordionTrigger className="text-lg font-medium">
                    <div className="flex items-center gap-2">
                      {group.name}
                      <GroupEditModal
                        group={group}
                        onSuccess={() => mutate()}
                        trigger={
                          <Button variant="ghost" className="h-6 w-6">
                            <Pencil className="h-4 w-4" />
                          </Button>
                        }
                      />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div className="flex justify-end gap-2 mb-4">
                        <Button
                          variant="outline"
                          onClick={() => {
                            const code = group.id.slice(-5);
                            navigator.clipboard.writeText(code);
                            toast("Code copied!", {
                              type: "success",
                            });
                          }}
                        >
                          <Copy className="size-4 mr-2" />
                          Copy group access code: {group.id.slice(-5)}
                        </Button>
                        <GuestFormModal
                          groupId={group.id}
                          onSuccess={() => mutate()}
                        />
                        <Button
                          variant="destructive"
                          onClick={() => {
                            setSelectedGroupId(group.id);
                            setDeleteModalOpen(true);
                          }}
                        >
                          <Trash2 className="size-10" />
                        </Button>
                      </div>
                      {group.guests.length === 0 ? (
                        <p className="text-gray-500">No guests in this group</p>
                      ) : (
                        group.guests.map((guest) => (
                          <GuestCard
                            key={guest.id}
                            guest={guest}
                            onSuccess={() => mutate()}
                          />
                        ))
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </CardContent>
      </Card>

      {selectedGroupId && (
        <DeleteGroupModal
          groupId={selectedGroupId}
          isOpen={deleteModalOpen}
          onClose={() => {
            setDeleteModalOpen(false);
            setSelectedGroupId(null);
          }}
          onSuccess={() => mutate()}
        />
      )}
    </div>
  );
}
