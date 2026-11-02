import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read how STAMPERS handles information when visitors use its website and services.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-slate-800">
      <article className="mx-auto max-w-3xl">
        <h1 className="mb-3 text-4xl font-bold text-slate-950">Privacy Policy</h1>
        <p className="mb-8 text-sm text-slate-500">Last updated: 3 November 2026</p>
        <p className="mb-6 leading-8">This policy explains how STAMPERS may handle information when you visit our website, create an account, register for an event or contact our team. The exact information collected depends on the service you use.</p>
        <h2 className="mb-3 mt-9 text-2xl font-bold">Information you provide</h2>
        <p className="mb-5 leading-8">Depending on the feature, information may include your name, email address, account details, institution, team details, event registration information, submissions and messages sent to us.</p>
        <h2 className="mb-3 mt-9 text-2xl font-bold">Accounts and service providers</h2>
        <p className="mb-5 leading-8">STAMPERS uses Supabase for backend services, which may include account authentication and data storage. Website hosting and analytics services may also process technical information when you use the website.</p>
        <h2 className="mb-3 mt-9 text-2xl font-bold">Advertising and cookies</h2>
        <p className="mb-5 leading-8">STAMPERS includes Google AdSense advertising technology. Google and its partners may use cookies or similar technologies to provide, measure and personalize advertising, subject to applicable settings and consent requirements. You can review Google's advertising and privacy controls.</p>
        <h2 className="mb-3 mt-9 text-2xl font-bold">Payments</h2>
        <p className="mb-5 leading-8">Some events may involve fees. Payment instructions and processing arrangements are event-specific. Do not send card PINs, banking passwords or one-time passwords to STAMPERS.</p>
        <h2 className="mb-3 mt-9 text-2xl font-bold">How information is used</h2>
        <p className="mb-5 leading-8">Information may be used to operate accounts, administer events, verify registrations, communicate updates, process submissions, provide support, maintain security and meet legal obligations.</p>
        <h2 className="mb-3 mt-9 text-2xl font-bold">Data sharing and retention</h2>
        <p className="mb-5 leading-8">Information may be processed by service providers that help operate the platform, or disclosed where required by law. Retention periods depend on the purpose, operational needs and legal requirements.</p>
        <h2 className="mb-3 mt-9 text-2xl font-bold">Your choices</h2>
        <p className="mb-5 leading-8">For privacy questions or requests concerning your information, contact <a className="text-blue-600 underline" href="mailto:support@stampers.in">support@stampers.in</a>. We may need to verify your identity before responding.</p>
        <h2 className="mb-3 mt-9 text-2xl font-bold">Changes</h2>
        <p className="leading-8">We may update this policy as our services change. The revised version will be published on this page.</p>
      </article>
    </main>
  );
}
