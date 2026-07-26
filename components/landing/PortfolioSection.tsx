import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "TaLi AI",
    description:
      "An AI bookkeeping assistant that helps small businesses record sales, expenses, inventory and generate financial reports through WhatsApp.",
  },
  {
    title: "PersonalLab AI",
    description:
      "Validate business ideas using AI customer simulations before spending money on marketing or product development.",
  },
  {
    title: "Workflow Automations",
    description:
      "Custom Make.com and AI-powered automations for CRM, invoices, emails, lead management and customer support.",
  },
];

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-24 bg-slate-50"
    >
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold">
            Featured Projects
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Real AI products and automation systems designed to help businesses
            save time, reduce manual work and grow faster.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (

            <Card key={project.title}>

              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {project.description}
              </p>

              <Link href="/portfolio">
                <Button>
                  View Details
                </Button>
              </Link>

            </Card>

          ))}

        </div>

      </div>
    </section>
  );
}