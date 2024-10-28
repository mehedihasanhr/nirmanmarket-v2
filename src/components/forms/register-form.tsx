"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { startCase } from "lodash";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

const formSchema = z.object({
  name: z.string().min(1, "Name is require."),
  mobile_number: z
    .string({ required_error: "Mobile number is require" })
    .min(11, "Invalid mobile number"),
  email: z
    .string({ required_error: "Email address is required." })
    .email("Invalid email address."),
  password: z.string({ required_error: "Password is required" }),
  is_accept_terms_condition: z
    .boolean()
    .refine((d) => d, "You must accept out terms and condditions"),
});

type FormData = z.infer<typeof formSchema>;

export function RegisterForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mobile_number: "",
      password: "",
      email: "",
      is_accept_terms_condition: false,
    },
  });

  const onSubmit = (values: FormData) => console.log({ values });

  return (
    <div className="p-8 rounded-xl bg-background flex flex-col gap-y-6">
      <h1 className="text-2xl md:text-[32px] md:leading-[50px] font-semibold">
        Welcome to nirmanmarket, <br /> Register to continue.
      </h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-y-6"
        >
          {Object.keys(formSchema.shape).map(
            (key) =>
              key !== "is_accept_terms_condition" && (
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
                          type={
                            ["email", "password"].includes(key) ? key : "text"
                          }
                          className="h-12 md:h-14 text-base"
                          value={field.value as string}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ),
          )}

          <ul className=" list-disc list-inside flex flex-wrap text-sm text-foreground/60 gap-x-8">
            <li>Use 8 or more characters</li>
            <li>Use upper and lower case letters (e.g. Aa)</li>
            <li>Use a number (e.g. 1234)</li>
            <li>Use a symbol (e.g. !@#$)</li>
          </ul>

          <FormField
            control={form.control}
            name="is_accept_terms_condition"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Label htmlFor="termsAndCondition" className="flex gap-1.5">
                    <Checkbox
                      className="mt-1"
                      id="termsAndCondition"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <p className="text-base">
                      By creating an account, I agree to our Terms of use and
                      Privacy Policy
                    </p>
                  </Label>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="rounded-full md:h-14 text-lg md:text-2xl font-bold leading-7">
            Create an account
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
            Have an account?
            <Link
              href="/signin"
              className="px-1.5 underline hover:text-primary"
            >
              Sign in
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
}
