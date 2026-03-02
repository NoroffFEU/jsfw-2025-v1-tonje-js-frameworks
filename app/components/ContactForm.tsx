"use client";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {contactSchema, type ContactFormData} from "../schemas/contact";
import  toast from "react-hot-toast";

/**
 * Contact form that checks if the user has filled in all fields correctly. 
 * Shows error messages if something is wrong, and a success message when the form is submitted.
 * @returns The contact form component
 */

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      subject: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    toast.success("Your message has been sent!");
    reset();
  };

  if (isSubmitSuccessful) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold">Thank You!</h2>
        <p className="mt-2 text-text-secondary">
          Your message is on its way! We will respond as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-md space-y-4">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium">
          Full Name
        </label>
        <input
          id="fullName"
          {...register("fullName")}
          className="mt-1 w-full rounded-md border border-border bg-card px-4 py-2 outline-none focus:border-accent"
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium">
          Subject
        </label>
        <input
          id="subject"
          {...register("subject")}
          className="mt-1 w-full rounded-md border border-border bg-card px-4 py-2 outline-none focus:border-accent"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="mt-1 w-full rounded-md border border-border bg-card px-4 py-2 outline-none focus:border-accent"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className="mt-1 w-full rounded-md border border-border bg-card px-4 py-2 outline-none focus:border-accent"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-accent py-3 font-medium uppercase text-white hover:opacity-90"
      >
        Submit
      </button>
    </form>
  );
}