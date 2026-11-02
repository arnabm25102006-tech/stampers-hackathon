import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Information about cookies and similar technologies used on STAMPERS.",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-slate-800">
      <article className="mx-auto max-w-3xl">
        <h1 className="mb-3 text-4xl font-bold text-slate-950">Cookie Policy</h1>
        <p className="mb-8 text-sm text-slate-500">Last updated: 3 November 2026</p>
        <p className="mb-6 leading-8">This page explains how cookies and similar technologies may be used when you visit STAMPERS.</p>
        <h2 className="mb-3 mt-9 text-2xl font-bold">What are cookies?</h2>
        <p className="mb-5 leading-8">Cookies are small files stored by your browser. Similar technologies may store or access information on your device.</p>
        <h2 className="mb-3 mt-9 text-2xl font-bold">How they may be used</h2>
        <p className="mb-5 leading-8">Cookies or similar technologies may support website functionality, authentication, analytics, security and advertising. Google AdSense may use cookies for advertising delivery, measurement and personalization according to your settings and applicable consent requirements.</p>
        <h2 className="mb-3 mt-9 text-2xl font-bold">Managing cookies</h2>
        <p className="mb-5 leading-8">You can manage or delete cookies through your browser settings. Blocking some cookies may affect website functionality. Google's advertising settings may also provide choices about personalized advertising.</p>
        <h2 className="mb-3 mt-9 text-2xl font-bold">Questions</h2>
        <p className="leading-8">Contact <a className="text-blue-600 underline" href="mailto:support@stampers.in">support@stampers.in</a> if you have questions about this policy.</p>
      </article>
    </main>
  );
}
