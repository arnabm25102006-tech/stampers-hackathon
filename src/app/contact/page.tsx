import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact STAMPERS",
  description: "Contact the STAMPERS team for event, participation and partnership enquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-slate-800">
      <article className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">Get in touch</p>
        <h1 className="mb-6 text-4xl font-bold text-slate-950">Contact STAMPERS</h1>
        <p className="mb-8 leading-8">For questions about competitions, registrations, submissions or results, contact the appropriate STAMPERS support channel.</p>
        <section className="mb-8 rounded-xl border border-slate-200 p-6">
          <h2 className="mb-2 text-xl font-bold">General support</h2>
          <a className="text-blue-600 underline" href="mailto:support@stampers.in">support@stampers.in</a>
        </section>
        <section className="mb-8 rounded-xl border border-slate-200 p-6">
          <h2 className="mb-2 text-xl font-bold">Business and partnerships</h2>
          <a className="text-blue-600 underline" href="mailto:stampersbusiness@gmail.com">stampersbusiness@gmail.com</a>
        </section>
        <p className="leading-8">When contacting us about an event, include its name and your registration details where relevant. Do not send passwords, payment PINs or one-time passwords by email.</p>
      </article>
    </main>
  );
}
