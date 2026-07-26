import {
  Bot,
  Calculator,
  Headphones,
  Lightbulb,
  Network,
  Workflow,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { FeatureCard } from "@/components/marketing/feature-card";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { SectionContainer } from "@/components/marketing/section-container";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

const services = [
  {
    key: "workflow",
    icon: Workflow,
  },
  {
    key: "bookkeeping",
    icon: Calculator,
  },
  {
    key: "support",
    icon: Headphones,
  },
  {
    key: "assistants",
    icon: Bot,
  },
  {
    key: "consulting",
    icon: Lightbulb,
  },
  {
    key: "community",
    icon: Network,
  },
] as const;

export default async function ServicesSection() {
  const t = await getTranslations(
    "HomePage.services"
  );

  return (
    <SectionContainer background="slate">
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <FeatureGrid
        columns={3}
        className="mt-14"
      >
        {services.map((service) => (
          <FeatureCard
            key={service.key}
            icon={service.icon}
            title={t(
              `items.${service.key}.title`
            )}
            description={t(
              `items.${service.key}.description`
            )}
          />
        ))}
      </FeatureGrid>

      <div className="mt-12 flex justify-center">
        <Link href="/services">
          <Button>
            {t("button")}
          </Button>
        </Link>
      </div>
    </SectionContainer>
  );
}