import { useTranslations } from "next-intl";

export default function FaqSection() {
  const t = useTranslations("HomePage.faq");

  const faqItems = [
    {
      question: t("items.what.question"),
      answer: t("items.what.answer"),
    },
    {
      question: t("items.audit.question"),
      answer: t("items.audit.answer"),
    },
    {
      question: t("items.technical.question"),
      answer: t("items.technical.answer"),
    },
    {
      question: t("items.automate.question"),
      answer: t("items.automate.answer"),
    },
    {
      question: t("items.cost.question"),
      answer: t("items.cost.answer"),
    },
    {
      question: t("items.support.question"),
      answer: t("items.support.answer"),
    },
    {
      question: t("items.location.question"),
      answer: t("items.location.answer"),
    },
  ];

  return (
    <section id="faq" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            {t("eyebrow")}
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            {t("title")}
          </h2>
        </div>

        <div className="mt-14 space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-slate-200 bg-white p-6"
            >
              <summary className="cursor-pointer list-none font-semibold">
                <span className="flex items-center justify-between gap-6">
                  {item.question}

                  <span className="text-xl text-blue-600 transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}