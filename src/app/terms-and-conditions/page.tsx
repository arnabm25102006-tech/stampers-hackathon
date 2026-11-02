import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms governing the use of the STAMPERS website and participation in its events.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-slate-800">
      <article className="mx-auto max-w-3xl">
        <h1 className="mb-3 text-4xl font-bold text-slate-950">Terms and Conditions</h1>
        <p className="mb-8 text-sm text-slate-500">Last updated: 3 November 2026</p>
        <p className="mb-6 leading-8">These terms govern your use of the STAMPERS website. By using the website, you agree to follow these terms and applicable laws.</p>
        <h2 className="mb-3 mt-9 text-2xl font-bold">Website use</h2>
        <p className="mb-5 leading-8">Use the platform lawfully. Do not attempt unauthorized access, disrupt services, submit malicious material or misuse another person's account.</p>
        <h2 className="mb-3 mt-9 text-2xl font-bold">Events and eligibility</h2>
        <p className="mb-5 leading-8">Each competition or event may have its own eligibility rules, deadlines, team-size limits, fees, submission requirements and judging criteria. Read the published rules for the relevant event before registering.</p>
        <h2 className="mb-3 mt-9 text-2xl font-bold">Submissions</h2>
        <p className="mb-5 leading-8">Participants are responsible for ensuring that their submissions are original or that they have permission to use included materials. Do not submit content that infringes another person's rights or violates applicable law.</p>
        <h2 className="mb-3 mt-9 text-2xl font-bold">Fees and results</h2>
        <p className="mb-5 leading-8">Any applicable fee, refund condition, prize and result process will be described in the relevant event announcement. Event-specific published rules apply to that event.</p>
        <h2 className="mb-3 mt-9 text-2xl font-bold">Website availability</h2>
        <p className="mb-5 leading-8">We aim to keep the platform available, but uninterrupted access cannot be guaranteed. We may update or temporarily suspend features for maintenance or security.</p>
        <h2 className="mb-3 mt-9 text-2xl font-bold">Contact</h2>
        <p className="leading-8">Questions about these terms can be sent to <a className="text-blue-600 underline" href="mailto:support@stampers.in">support@stampers.in</a>.</p>
      </article>
    </main>
  );
}
