"use client";

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
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { match } from "ts-pattern";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z
    .string({ required_error: "Email address is required." })
    .email("Invalid email address."),
  message: z.string().min(1, "Message is required."),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
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

  const renderFormField = (args: (typeof fields)[0]) => {
    return (
      <FormField
        control={form.control}
        name={args.name as "name" | "email" | "message"}
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
    <section className="py-10">
      <div className="container">
        <h1 className="mb-6 leading-[48px] font-medium">
          For any support just send your query
        </h1>

        <div className="grid md:grid-cols-[1fr,minmax(20rem,24rem)] gap-10 md:gap-32">
          <div className="flex items-center flex-wrap justify-between gap-4">
            <div className="flex flex-col items-center gap-4 mx-auto">
              <Image
                src="/support-query/support.png"
                alt=""
                width={100}
                height={100}
                loading="lazy"
                quality={80}
              />

              <h4 className="font-normal text-center text-base leading-7">
                Tell us what you need
              </h4>
            </div>

            {/* Feedback */}
            <div className="flex flex-col items-center gap-4 mx-auto">
              <Image
                src="/support-query/feedback.svg"
                alt=""
                width={100}
                height={100}
                loading="lazy"
                quality={80}
              />

              <h4 className="font-normal text-center text-base leading-7">
                Feedback
              </h4>
            </div>

            {/* service */}
            <div className="flex flex-col items-center gap-4 mx-auto">
              <Image
                src="/support-query/services.svg"
                alt=""
                width={100}
                height={100}
                loading="lazy"
                quality={80}
              />

              <h4 className="font-normal text-center text-base leading-7">
                24/7 Customer Service
              </h4>
            </div>
          </div>

          {/* Contact form */}

          <Form {...form}>
            <form className="flex flex-col gap-y-6">
              {fields.map((field) => renderFormField(field))}

              <Button className="w-fit"> Send </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
