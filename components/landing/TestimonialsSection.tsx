import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Future Client",
    role: "Business Owner",
    quote:
      "Risein AI transformed our repetitive tasks into automated workflows, saving our team valuable time every week.",
  },
  {
    name: "Startup Founder",
    role: "Technology Startup",
    quote:
      "The workflow audit uncovered automation opportunities we hadn't even considered.",
  },
  {
    name: "SME Manager",
    role: "Operations",
    quote:
      "Professional, practical and focused on delivering measurable business outcomes.",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24"
    >
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold">
            What Clients Will Say
          </h2>

          <p className="mt-4 text-gray-600">
            These are placeholder testimonials until your first client projects
            are completed.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <Card key={item.name}>

              <p className="italic text-gray-600">
                "{item.quote}"
              </p>

              <div className="mt-6">

                <h4 className="font-semibold">
                  {item.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {item.role}
                </p>

              </div>

            </Card>

          ))}

        </div>

      </div>
    </section>
  );
}