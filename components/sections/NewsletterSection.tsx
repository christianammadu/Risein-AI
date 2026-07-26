"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SubscriptionStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";

type ApiResponse = {
  success?: boolean;
  message?: string;
};

export default function NewsletterSection() {
  const t = useTranslations("HomePage.newsletter");

  const [email, setEmail] = useState("");
  const [status, setStatus] =
    useState<SubscriptionStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail) {
      setStatus("error");
      setMessage(t("messages.required"));
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: cleanEmail,
        }),
      });

      const result = (await response.json()) as ApiResponse;

      if (!response.ok) {
        console.error(
          "Newsletter subscription failed:",
          result.message
        );

        setStatus("error");
        setMessage(t("messages.error"));
        return;
      }

      setStatus("success");
      setMessage(t("messages.success"));
      setEmail("");
    } catch (error) {
      console.error(
        "Newsletter request failed:",
        error instanceof Error ? error.message : error
      );

      setStatus("error");
      setMessage(t("messages.connection"));
    }
  }

  return (
    <section id="newsletter" className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          {t("eyebrow")}
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight">
          {t("title")}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          {t("description")}
        </p>

        {status === "success" ? (
          <div className="mx-auto mt-10 flex max-w-xl items-center justify-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-emerald-800">
            <CheckCircle2 className="h-5 w-5 shrink-0" />

            <p>{message}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <Input
              type="email"
              value={email}
              placeholder={t("placeholder")}
              aria-label={t("emailLabel")}
              autoComplete="email"
              required
              disabled={status === "loading"}
              onChange={(event) => {
                setEmail(event.target.value);

                if (status === "error") {
                  setStatus("idle");
                  setMessage("");
                }
              }}
            />

            <Button
              type="submit"
              className="shrink-0"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("subscribing")}
                </>
              ) : (
                t("button")
              )}
            </Button>
          </form>
        )}

        {status === "error" && (
          <p
            role="alert"
            className="mt-3 text-sm font-medium text-red-600"
          >
            {message}
          </p>
        )}

        <p className="mt-5 text-sm text-slate-500">
          {t("footer")}
        </p>
      </div>
    </section>
  );
}