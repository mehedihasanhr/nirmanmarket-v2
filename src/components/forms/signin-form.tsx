"use client";

import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormLabel,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { startCase } from "lodash";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "../ui/separator";

const formSchema = z.object({
  email: z
    .string({ required_error: "Email address is required." })
    .email("Invalid email address."),
  password: z.string({ required_error: "Password is required" }),
});

type FormData = z.infer<typeof formSchema>;

export function SignInForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="p-8 rounded-xl bg-background flex flex-col gap-y-6">
      <h1 className="text-2xl md:text-[32px] md:leading-[50px] font-semibold">
        Welcome to nirmanmarket, <br /> Log in to continue.
      </h1>

      <Form {...form}>
        <form className="flex flex-col gap-y-6">
          {Object.keys(formSchema.shape).map((key) => (
            <FormField
              control={form.control}
              key={key}
              name={key as keyof FormData}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/70 text-base font-medium">
                    {startCase(key)}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type={key}
                      className="h-12 md:h-14 text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button className="rounded-full md:h-14 text-lg md:text-2xl font-bold leading-7">
            Log in
          </Button>

          <div className="relative py-3">
            <Separator />
            <span className="p-2 bg-background text-foreground/70 font-medium text-lg md:text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              OR
            </span>
          </div>

          <Button
            variant="outline"
            className="rounded-full text-lg md:text-2xl md:h-14 font-bold leading-7"
          >
            Continue with google
          </Button>

          <p className=" text-secondary-foreground/60 text-center">
            Don&apos;t have an account?
            <Link
              href="/register"
              className="px-1.5 underline hover:text-primary"
            >
              Register
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
}
