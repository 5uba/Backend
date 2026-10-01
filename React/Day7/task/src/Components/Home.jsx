function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-4 text-5xl font-bold text-slate-900">
        Welcome to MySite
      </h1>
      <p className="mb-8 max-w-2xl text-lg text-slate-600">
        We build simple, fast and friendly websites for small businesses.
        Take a look around to see what we do and how to reach us.
      </p>

      <div className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <h3 className="mb-2 font-semibold text-slate-900">Fast</h3>
          <p className="text-sm text-slate-600">
            Pages that load quickly on any device.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <h3 className="mb-2 font-semibold text-slate-900">Simple</h3>
          <p className="text-sm text-slate-600">
            Clean layouts that are easy to read and use.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <h3 className="mb-2 font-semibold text-slate-900">Reliable</h3>
          <p className="text-sm text-slate-600">
            Support you can count on after launch.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;