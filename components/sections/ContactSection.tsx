"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";

type ApiResponse = {
  success?: boolean;
  message?: string;
};

const initialForm = {
  fullName: "",
  email: "",
  companyName: "",
  businessChallenge: "",
};

export default function ContactSection() {
  const t = useTranslations("HomePage.contact");

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] =
    useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const fullName = form.fullName.trim();
    const email = form.email.trim().toLowerCase();
    const companyName = form.companyName.trim();
    const businessChallenge =
      form.businessChallenge.trim();

    if (!fullName || !email || !businessChallenge) {
      setStatus("error");
      setMessage(t("messages.required"));
      return;
    }

    if (businessChallenge.length < 10) {
      setStatus("error");
      setMessage(t("messages.moreInformation"));
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          companyName,
          businessChallenge,
        }),
      });

      const result = (await response.json()) as ApiResponse;

      if (!response.ok) {
        setStatus("error");
        setMessage(
          result.message ?? t("messages.sendError")
        );
        return;
      }

      setStatus("success");
      setMessage(
        result.message || t("messages.success")
      );
      setForm(initialForm);
    } catch (error) {
      console.error(
        "Contact request failed:",
        error instanceof Error ? error.message : error
      );

      setStatus("error");
      setMessage(t("messages.connectionError"));
    }
  }

  return (
    <section id="contact" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              {t("eyebrow")}
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {t("description")}
            </p>

            <div className="mt-10 space-y-4 text-slate-700">
              <p>✓ {t("benefits.noObligation")}</p>
              <p>✓ {t("benefits.practical")}</p>
              <p>✓ {t("benefits.measurable")}</p>
              <p>✓ {t("benefits.international")}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            {status === "success" ? (
              <div className="flex min-h-96 flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-14 w-14 text-emerald-600" />

                <h3 className="mt-5 text-2xl font-bold text-slate-950">
                  {t("success.title")}
                </h3>

                <p className="mt-3 max-w-md text-slate-600">
                  {message}
                </p>

                <Button
                  className="mt-8"
                  onClick={() => {
                    setStatus("idle");
                    setMessage("");
                  }}
                >
                  {t("success.anotherRequest")}
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-semibold"
                  >
                    {t("form.fullName.label")}
                  </label>

                  <Input
                    id="fullName"
                    name="fullName"
                    value={form.fullName}
                    placeholder={t(
                      "form.fullName.placeholder"
                    )}
                    autoComplete="name"
                    required
                    disabled={status === "loading"}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        fullName: event.target.value,
                      }))
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    {t("form.email.label")}
                  </label>

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    placeholder={t(
                      "form.email.placeholder"
                    )}
                    autoComplete="email"
                    required
                    disabled={status === "loading"}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="mb-2 block text-sm font-semibold"
                  >
                    {t("form.companyName.label")}
                  </label>

                  <Input
                    id="companyName"
                    name="companyName"
                    value={form.companyName}
                    placeholder={t(
                      "form.companyName.placeholder"
                    )}
                    autoComplete="organization"
                    disabled={status === "loading"}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        companyName: event.target.value,
                      }))
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="businessChallenge"
                    className="mb-2 block text-sm font-semibold"
                  >
                    {t("form.businessChallenge.label")}
                  </label>

                  <Textarea
                    id="businessChallenge"
                    name="businessChallenge"
                    rows={6}
                    value={form.businessChallenge}
                    placeholder={t(
                      "form.businessChallenge.placeholder"
                    )}
                    required
                    disabled={status === "loading"}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        businessChallenge:
                          event.target.value,
                      }))
                    }
                  />
                </div>

                {status === "error" && (
                  <p
                    role="alert"
                    className="text-sm font-medium text-red-600"
                  >
                    {message}
                  </p>
                )}

                <Button
                  type="submit"
                  className="w-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t("form.sending")}
                    </>
                  ) : (
                    t("form.submit")
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}