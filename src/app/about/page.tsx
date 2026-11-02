import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About STAMPERS",
  description: "Learn about STAMPERS, a platform connecting students with competitions, hackathons and opportunities.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-slate-800">
      <article className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">About us</p>
        <h1 className="mb-6 text-4xl font-bold text-slate-950">About STAMPERS</h1>
        <p className="mb-5 leading-8">STAMPERS is a student-focused platform designed to help learners discover competitions, hackathons, creative challenges and opportunities to demonstrate their skills.</p>
        <h2 className="mb-3 mt-10 text-2xl font-bold">What we do</h2>
        <p className="mb-5 leading-8">We publish information about opportunities and organize student-focused events. Depending on the event, participants may be able to register individually or in teams, submit their work and follow published results.</p>
        <h2 className="mb-3 mt-10 text-2xl font-bold">Our approach</h2>
        <p className="mb-5 leading-8">We aim to communicate event requirements, eligibility, deadlines, participation procedures and results clearly. Event-specific rules and announcements take precedence over general platform information.</p>
        <h2 className="mb-3 mt-10 text-2xl font-bold">Explore STAMPERS</h2>
        <p className="leading-8"><Link className="text-blue-600 underline" href="/explore">Explore opportunities</Link> or <Link className="text-blue-600 underline" href="/contact">contact our team</Link>.</p>
      </article>
    </main>
  );
}
