function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-4 text-4xl font-bold text-slate-900">About Us</h1>

      <p className="mb-4 max-w-2xl text-lg text-slate-600">
        MySite is a small team of designers and developers who enjoy turning
        ideas into working websites. We started in 2020 with one goal: make
        the web simple for everyone.
      </p>
      <p className="mb-8 max-w-2xl text-lg text-slate-600">
        We work closely with each client, keep things transparent, and
        deliver on time.
      </p>

      <div className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-lg bg-indigo-50 p-5 text-center">
          <p className="text-3xl font-bold text-indigo-600">50+</p>
          <p className="text-sm text-slate-600">Projects completed</p>
        </div>
        <div className="rounded-lg bg-indigo-50 p-5 text-center">
          <p className="text-3xl font-bold text-indigo-600">30+</p>
          <p className="text-sm text-slate-600">Happy clients</p>
        </div>
        <div className="rounded-lg bg-indigo-50 p-5 text-center">
          <p className="text-3xl font-bold text-indigo-600">5</p>
          <p className="text-sm text-slate-600">Team members</p>
        </div>
      </div>
    </div>
  );
}

export default About;