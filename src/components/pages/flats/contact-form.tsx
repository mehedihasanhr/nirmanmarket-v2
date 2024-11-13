"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { match } from "ts-pattern";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required."),
  phone: z.string().min(1, "Phone number is required."),
  email: z
    .string({ required_error: "Email address is required." })
    .email("Invalid email address."),
  message: z.string().min(1, "Message is required."),
});

type FormData = z.infer<typeof formSchema>;

export default function FlatContactForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // fields
  const fields = [
    {
      name: "name",
      type: "text",
      label: "Name",
      placeholder: "Enter your name",
    },

    {
      name: "phone",
      type: "tel",
      label: "Phone",
      placeholder: "Enter your phone number",
    },

    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
    },

    {
      name: "message",
      type: "textarea",
      label: "Message",
      placeholder: "Write your message here...",
    },
  ];

  // render form field
  const renderFormField = (args: (typeof fields)[0]) => {
    return (
      <FormField
        control={form.control}
        name={args.name as "name" | "phone" | "email" | "message"}
        render={({ field }) => (
          <FormItem>
            <FormLabel> {args.label} </FormLabel>
            <FormControl>
              {match(args.type)
                .with("textarea", () => (
                  <Textarea
                    rows={5}
                    className="bg-background rounded"
                    {...args}
                    {...field}
                  />
                ))
                .otherwise(() => (
                  <Input
                    className="h-10 rounded bg-background"
                    {...args}
                    {...field}
                  />
                ))}
            </FormControl>
          </FormItem>
        )}
      />
    );
  };

  return (
    <Form {...form}>
      <form className="w-full flex flex-col gap-4">
        {fields.map((field, index) => (
          <React.Fragment key={index}>{renderFormField(field)}</React.Fragment>
        ))}
        <Button> Send Message </Button>
      </form>
    </Form>
  );
}
