"use client";

import {
  type FormEvent,
  useMemo,
  useState,
} from "react";
import {
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  Send,
} from "lucide-react";
import {
  useLocale,
  useTranslations,
} from "next-intl";

import { Button } from "@/components/ui/button";

type SmartContactFormProps = {
  initialInterest?: string;
};

const interestValues = [
  "audit",
  "starter",
  "growth",
  "support",
  "workflow",
  "bookkeeping",
  "customer-support",
  "custom-ai",
  "integration",
  "consulting",
  "tali",
  "personalab",
  "partnership",
  "general",
] as const;

type InterestValue =
  (typeof interestValues)[number];

type FormStatus =
  | "idle"
  | "submitting"
  | "success"
  | "error";

type ContactApiResponse = {
  success?: boolean;
  message?: string;
};

function isValidInterest(
  value: string | undefined,
): value is InterestValue {
  return interestValues.includes(
    value as InterestValue,
  );
}

export default function SmartContactForm({
  initialInterest,
}: SmartContactFormProps) {
  const t = useTranslations("ContactPage.form");
  const locale = useLocale();

  const defaultInterest =
    useMemo<InterestValue>(() => {
      if (isValidInterest(initialInterest)) {
        return initialInterest;
      }

      return "general";
    }, [initialInterest]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [interest, setInterest] =
    useState<InterestValue>(defaultInterest);
  const [message, setMessage] = useState("");
  const [status, setStatus] =
    useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] =
    useState("");

  const isSubmitting =
    status === "submitting";

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setErrorMessage("");
    setStatus("idle");

    const cleanedName = name.trim();
    const cleanedEmail =
      email.trim().toLowerCase();
    const cleanedCompany = company.trim();
    const cleanedCountry = country.trim();
    const cleanedMessage = message.trim();

    if (
      !cleanedName ||
      !cleanedEmail ||
      !cleanedMessage
    ) {
      setErrorMessage(t("errors.required"));
      setStatus("error");
      return;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(cleanedEmail)) {
      setErrorMessage(t("errors.email"));
      setStatus("error");
      return;
    }

    if (cleanedMessage.length < 10) {
      setErrorMessage(
        t("errors.messageTooShort"),
      );
      setStatus("error");
      return;
    }

    try {
      setStatus("submitting");

      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: cleanedName,
            email: cleanedEmail,
            companyName:
              cleanedCompany || null,
            country:
              cleanedCountry || null,
            interest,
            businessChallenge:
              cleanedMessage,
            locale,
          }),
        },
      );

      const result =
        (await response.json()) as ContactApiResponse;

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "The contact request could not be submitted.",
        );
      }

      setName("");
      setEmail("");
      setCompany("");
      setCountry("");
      setInterest(defaultInterest);
      setMessage("");
      setStatus("success");
    } catch (error) {
      console.error(
        "Contact form submission failed:",
        error,
      );

      setErrorMessage(t("errors.submit"));
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-bold text-slate-900"
          >
            {t("fields.name")} *
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            placeholder={t("placeholders.name")}
            autoComplete="name"
            disabled={isSubmitting}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-bold text-slate-900"
          >
            {t("fields.email")} *
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            placeholder={t("placeholders.email")}
            autoComplete="email"
            disabled={isSubmitting}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-bold text-slate-900"
          >
            {t("fields.company")}
          </label>

          <input
            id="company"
            name="company"
            type="text"
            value={company}
            onChange={(event) =>
              setCompany(event.target.value)
            }
            placeholder={t(
              "placeholders.company",
            )}
            autoComplete="organization"
            disabled={isSubmitting}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
          />
        </div>

        <div>
          <label
            htmlFor="country"
            className="mb-2 block text-sm font-bold text-slate-900"
          >
            {t("fields.country")}
          </label>

          <input
            id="country"
            name="country"
            type="text"
            value={country}
            onChange={(event) =>
              setCountry(event.target.value)
            }
            placeholder={t(
              "placeholders.country",
            )}
            autoComplete="country-name"
            disabled={isSubmitting}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
          />
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="interest"
          className="mb-2 block text-sm font-bold text-slate-900"
        >
          {t("fields.interest")} *
        </label>

        <select
          id="interest"
          name="interest"
          value={interest}
          onChange={(event) =>
            setInterest(
              event.target.value as InterestValue,
            )
          }
          disabled={isSubmitting}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
        >
          {interestValues.map((value) => (
            <option
              key={value}
              value={value}
            >
              {t(`interests.${value}`)}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-bold text-slate-900"
        >
          {t("fields.message")} *
        </label>

        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(event) =>
            setMessage(event.target.value)
          }
          placeholder={t("placeholders.message")}
          rows={7}
          maxLength={5000}
          disabled={isSubmitting}
          className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
        />
      </div>

      {status === "error" ? (
        <div
          role="alert"
          className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
        >
          {errorMessage}
        </div>
      ) : null}

      {status === "success" ? (
        <div
          role="status"
          className="mt-5 flex gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />

          <p>{t("success")}</p>
        </div>
      ) : null}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-7 w-full !bg-blue-600 !text-white hover:!bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
            {t("submittingButton")}
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            {t("submitButton")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      <p className="mt-4 text-center text-xs leading-5 text-slate-500">
        {t("privacy")}
      </p>
    </form>
  );
}