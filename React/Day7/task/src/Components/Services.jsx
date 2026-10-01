const services = [
  {
    title: "Web Design",
    text: "Layouts that look good on phones, tablets and desktops.",
  },
  {
    title: "Web Development",
    text: "React-based websites and web apps built to your needs.",
  },
  {
    title: "Maintenance",
    text: "Updates, bug fixes and regular backups for your site.",
  },
  {
    title: "SEO Basics",
    text: "Page titles, descriptions and structure that help people find you.",
  },
];

function Services() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-2 text-4xl font-bold text-slate-900">Our Services</h1>
      <p className="mb-8 text-lg text-slate-600">
        Here is what we can help you with.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-lg border border-slate-200 bg-white p-6"
          >
            <h3 className="mb-2 text-lg font-semibold text-indigo-600">
              {service.title}
            </h3>
            <p className="text-slate-600">{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;