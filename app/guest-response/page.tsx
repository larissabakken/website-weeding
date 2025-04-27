"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useFetch } from "@/hooks/use-fetch";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  code: z.string().min(3, {
    message: "Code is required",
  }),
});

export default function GuestResponse() {
  const { req, isLoading } = useFetch();
  const router = useRouter();
  const toast = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await req(`/guests/rsvp/${values.code}`, "GET");
      if (response) {
        setCookie("group", JSON.stringify(response), {
          maxAge: 60 * 60, // 1 hour
          path: "/",
        });
        toast("Verification successful", {
          type: "success",
        });
        router.push("/guest-response/form");
      }
    } catch (error) {
      console.error("Error verifying guest:", error);
      toast("Invalid code", {
        type: "error",
      });
    }
  }

  return (
    <div className="flex items-center justify-center p-10">
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>RSVP</CardTitle>
          <CardDescription>
            Use the code that was sent to you by SMS to access the RSVP form
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Verification Code</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter your code"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant="secondary"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? <LoadingSpinner /> : "Verify"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
