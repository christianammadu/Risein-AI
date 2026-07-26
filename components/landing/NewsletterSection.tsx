"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(email);

    alert("Thank you for subscribing!");

    setEmail("");
  }

  return (
    <section
      id="newsletter"
      className="py-24 bg-slate-50"
    >
      <div className="container mx-auto px-6 max-w-3xl text-center">

        <h2 className="text-4xl font-bold">
          Stay Updated
        </h2>

        <p className="mt-4 text-gray-600">
          Receive AI automation tips, business insights and product updates.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col md:flex-row gap-4"
        >

          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Button type="submit">
            Subscribe
          </Button>

        </form>

      </div>
    </section>
  );
}