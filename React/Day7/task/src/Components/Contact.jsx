function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! Your message has been sent.");
    e.target.reset();
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-2 text-4xl font-bold text-slate-900">Contact Us</h1>
      <p className="mb-8 text-lg text-slate-600">
        Have a question? Send us a message.
      </p>

      <div className="grid gap-8 sm:grid-cols-2">
        {/* Contact details */}
        <div className="space-y-3 text-slate-600">
          <p>
            <span className="font-semibold text-slate-900">Email: </span>
            hello@mysite.com
          </p>
          <p>
            <span className="font-semibold text-slate-900">Phone: </span>
            +91 98765 43210
          </p>
          <p>
            <span className="font-semibold text-slate-900">Address: </span>
            Chennai, Tamil Nadu
          </p>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            required
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 focus:border-indigo-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your email"
            required
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 focus:border-indigo-500 focus:outline-none"
          />
          <textarea
            rows="4"
            placeholder="Your message"
            required
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 focus:border-indigo-500 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-5 py-2 font-medium text-white hover:bg-indigo-700"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;