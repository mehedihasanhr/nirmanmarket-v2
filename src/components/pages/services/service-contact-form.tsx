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

  serviceType: z.string().min(1, "Service type is required."),
  message: z.string().min(1, "Message is required."),
});

type FormData = z.infer<typeof formSchema>;

export default function ServiceContactForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      message: "",
    },
  });

  // fields
  const fields = [
    {
      name: "name",
      type: "text",
      label: "",
      placeholder: "Full name",
    },

    {
      name: "phone",
      type: "tel",
      label: "",
      placeholder: "Phone number",
    },

    {
      name: "email",
      type: "email",
      label: "",
      placeholder: "Email",
    },

    {
      name: "serviceType",
      type: "text",
      label: "",
      placeholder: "The service you want",
    },

    {
      name: "message",
      type: "textarea",
      label: "",
      placeholder: "Write your message here...",
    },
  ];

  // render form field
  const renderFormField = (args: (typeof fields)[0]) => {
    return (
      <FormField
        control={form.control}
        name={
          args.name as "name" | "phone" | "email" | "serviceType" | "message"
        }
        render={({ field }) => (
          <FormItem>
            <FormLabel> {args.label} </FormLabel>
            <FormControl>
              {match(args.type)
                .with("textarea", () => (
                  <Textarea
                    rows={5}
                    className="bg-background rounded shadow-none border-gray-200/70"
                    {...args}
                    {...field}
                  />
                ))
                .otherwise(() => (
                  <Input
                    className="h-12 rounded bg-background shadow-none border-gray-200/70"
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
      <form className="w-full flex flex-col gap-1">
        {fields.map((field, index) => (
          <React.Fragment key={index}>{renderFormField(field)}</React.Fragment>
        ))}
        <Button> Send Message </Button>
      </form>
    </Form>
  );
}
