
"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { jsPDF } from "jspdf";
import { supabase } from "@/lib/supabase";

type FormValues = {
  teamName: string;
  leaderName: string;
  email: string;
  phone: string;
  college: string;
  unstopId: string;
  projectTitle: string;
  problemStatement: string;
  solution: string;
};

const INITIAL_FORM: FormValues = {
  teamName: "",
  leaderName: "",
  email: "",
  phone: "",
  college: "",
  unstopId: "",
  projectTitle: "",
  problemStatement: "",
  solution: "",
};

const LOGO_URL =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/51990-removebg-preview.png";

const SIGNATURE_URL =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/Abstract%20Navy%20Blue%20Signature%20on%20White.png";

const NAVY: [number, number, number] = [14, 32, 58];
const GOLD: [number, number, number] = [191, 155, 79];
const MARGIN = 14;
const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

function safeFileName(value: string) {
  return value.replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 60);
}

function fileAsDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () =>
      typeof reader.result === "string"
        ? resolve(reader.result)
        : reject(new Error("Unable to read image."));
    reader.onerror = () => reject(new Error("Unable to read image."));
    reader.readAsDataURL(file);
  });
}

function remoteImage(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;

        const context = canvas.getContext("2d");
        if (!context) throw new Error("Canvas unavailable");

        context.drawImage(img, 0, 0);
        resolve(canvas.toDataURL("image/png"));
      } catch {
        reject(new Error("Unable to process image."));
      }
    };

    img.onerror = () => reject(new Error("Unable to load image."));
    img.src = url;
  });
}

function heading(pdf: jsPDF, title: string, y: number) {
  pdf.setFillColor(...NAVY);
  pdf.roundedRect(MARGIN, y, CONTENT_WIDTH, 8, 1.5, 1.5, "F");
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(8.5);
  pdf.setTextColor(255, 255, 255);
  pdf.text(title.toUpperCase(), MARGIN + 4, y + 5.3);

  pdf.setDrawColor(...GOLD);
  pdf.setLineWidth(0.45);
  pdf.line(MARGIN, y + 9, PAGE_WIDTH - MARGIN, y + 9);
}

function field(
  pdf: jsPDF,
  label: string,
  value: string,
  x: number,
  y: number,
  width: number
) {
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(6.8);
  pdf.setTextColor(94, 107, 125);
  pdf.text(label.toUpperCase(), x, y);

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(8.3);
  pdf.setTextColor(28, 39, 55);

  const lines = pdf.splitTextToSize(value || "Not provided", width);
  pdf.text(lines.slice(0, 2), x, y + 4.5);
}

function fittedLines(
  pdf: jsPDF,
  text: string,
  width: number,
  maxLines: number,
  startingFont = 8
) {
  let fontSize = startingFont;
  let lines: string[] = [];

  while (fontSize >= 6) {
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(fontSize);
    lines = pdf.splitTextToSize(text || "Not provided", width);

    if (lines.length <= maxLines) break;
    fontSize -= 0.5;
  }

  if (lines.length > maxLines) {
    lines = lines.slice(0, maxLines);
    const last = lines.length - 1;
    lines[last] = `${String(lines[last]).slice(0, -3)}...`;
  }

  return { lines, fontSize };
}

function textSection(
  pdf: jsPDF,
  title: string,
  value: string,
  y: number,
  boxHeight: number
) {
  heading(pdf, title, y);

  const boxY = y + 12;
  pdf.setFillColor(248, 250, 253);
  pdf.setDrawColor(224, 230, 238);
  pdf.roundedRect(
    MARGIN,
    boxY,
    CONTENT_WIDTH,
    boxHeight,
    1.5,
    1.5,
    "FD"
  );

  const result = fittedLines(
    pdf,
    value,
    CONTENT_WIDTH - 8,
    Math.max(1, Math.floor((boxHeight - 8) / 3.6)),
    8
  );

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(result.fontSize);
  pdf.setTextColor(39, 50, 67);
  pdf.text(result.lines, MARGIN + 4, boxY + 6);

  return boxY + boxHeight;
}

async function generateReceipt(
  form: FormValues,
  applicationNumber: string,
  photoFile: File
) {
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    compress: true,
  });

  // All content is deliberately placed on this one page.
  pdf.setFillColor(255, 255, 255);
  pdf.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, "F");

  // Header
  pdf.setFillColor(...NAVY);
  pdf.rect(0, 0, PAGE_WIDTH, 34, "F");
  pdf.setFillColor(...GOLD);
  pdf.rect(0, 33, PAGE_WIDTH, 1.2, "F");

  try {
    const logo = await remoteImage(LOGO_URL);
    pdf.setFillColor(255, 255, 255);
    pdf.roundedRect(14, 5, 46, 23, 2, 2, "F");
    pdf.addImage(logo, "PNG", 16, 7, 42, 19);
  } catch {
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);
    pdf.setTextColor(255, 255, 255);
    pdf.text("STAMPERS", 14, 18);
  }

  pdf.setTextColor(255, 255, 255);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(14);
  pdf.text("AXION", 196, 12, { align: "right" });

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(8);
  pdf.text("ROUND 1 SUBMISSION RECEIPT", 196, 19, {
    align: "right",
  });

  pdf.setFontSize(7);
  pdf.setTextColor(220, 228, 239);
  pdf.text("OFFICIAL SUBMISSION RECORD", 196, 25, {
    align: "right",
  });

  // Application number
  pdf.setFillColor(247, 249, 252);
  pdf.roundedRect(MARGIN, 38, CONTENT_WIDTH, 12, 1.5, 1.5, "F");

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(7);
  pdf.setTextColor(94, 107, 125);
  pdf.text("APPLICATION NUMBER", MARGIN + 4, 43);

  pdf.setFontSize(9.5);
  pdf.setTextColor(...NAVY);
  pdf.text(applicationNumber, MARGIN + 4, 47);

  // Personal information
  heading(pdf, "01 · Personal Information", 54);

  const personalY = 68;
  const photoX = 157;
  const photoY = personalY;
  const photoW = 39;
  const photoH = 43;

  try {
    const photo = await fileAsDataURL(photoFile);
    const properties = pdf.getImageProperties(photo);
    const ratio = Math.min(
      (photoW - 3) / properties.width,
      (photoH - 3) / properties.height
    );

    const drawW = properties.width * ratio;
    const drawH = properties.height * ratio;

    pdf.setFillColor(246, 248, 251);
    pdf.setDrawColor(215, 223, 233);
    pdf.roundedRect(photoX, photoY, photoW, photoH, 2, 2, "FD");

    const format =
      photoFile.type === "image/png"
        ? "PNG"
        : photoFile.type === "image/webp"
          ? "WEBP"
          : "JPEG";

    pdf.addImage(
      photo,
      format,
      photoX + (photoW - drawW) / 2,
      photoY + (photoH - drawH) / 2,
      drawW,
      drawH
    );
  } catch {
    pdf.setDrawColor(215, 223, 233);
    pdf.roundedRect(photoX, photoY, photoW, photoH, 2, 2, "S");
  }

  const infoX = MARGIN + 2;
  const infoW = photoX - infoX - 7;

  const personalFields: [string, string][] = [
    ["Team Name", form.teamName],
    ["Team Leader", form.leaderName],
    ["Email Address", form.email],
    ["Phone Number", form.phone],
    ["College / University", form.college],
    ["Unstop ID", form.unstopId],
  ];

  personalFields.forEach(([label, value], index) => {
    const column = index % 2;
    const row = Math.floor(index / 2);
    const x = column === 0 ? infoX : 94;
    const width = column === 0 ? 72 : 57;

    field(pdf, label, value, x, personalY + 4 + row * 14, width);
  });

  // Project title
  heading(pdf, "02 · Project Details", 116);

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(7);
  pdf.setTextColor(94, 107, 125);
  pdf.text("PROJECT TITLE", MARGIN + 2, 132);

  const title = fittedLines(
    pdf,
    form.projectTitle,
    CONTENT_WIDTH - 4,
    2,
    9
  );

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(title.fontSize);
  pdf.setTextColor(28, 39, 55);
  pdf.text(title.lines, MARGIN + 2, 138);

  // Fixed-size text blocks keep the entire receipt on page one.
  textSection(
    pdf,
    "03 · Problem Statement",
    form.problemStatement,
    146,
    35
  );

  textSection(
    pdf,
    "04 · Proposed Solution",
    form.solution,
    195,
    35
  );

  // Signature is ALWAYS on page one, bottom-right.
  // No addPage() calls are used anywhere in this receipt.
  const signatureX = 148;
  const signatureY = 238;
  const signatureW = 43;
  const signatureH = 15;

  try {
    const signature = await remoteImage(SIGNATURE_URL);
    pdf.addImage(
      signature,
      "PNG",
      signatureX,
      signatureY,
      signatureW,
      signatureH
    );
  } catch {
    // Leave the signature area blank if the image cannot load.
  }

  pdf.setDrawColor(175, 185, 198);
  pdf.setLineWidth(0.3);
  pdf.line(signatureX, 254, signatureX + signatureW, 254);

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(8.5);
  pdf.setTextColor(...NAVY);
  pdf.text("Arnab Manna", signatureX + signatureW / 2, 259, {
    align: "center",
  });

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(7.5);
  pdf.setTextColor(80, 90, 105);
  pdf.text("Founder, STAMPERS", signatureX + signatureW / 2, 264, {
    align: "center",
  });

  // Footer
  pdf.setDrawColor(...GOLD);
  pdf.setLineWidth(0.45);
  pdf.line(MARGIN, 284, PAGE_WIDTH - MARGIN, 284);

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(6.5);
  pdf.setTextColor(125, 133, 145);
  pdf.text("Official AXION Round 1 receipt", MARGIN, 290);
  pdf.text(`Application: ${applicationNumber}`, PAGE_WIDTH - MARGIN, 290, {
    align: "right",
  });

  // Defensive check: never save a multi-page receipt.
  while (pdf.getNumberOfPages() > 1) {
    pdf.deletePage(pdf.getNumberOfPages());
  }

  pdf.save(`AXION_${safeFileName(applicationNumber)}.pdf`);
}

export default function Round1SubmissionForm() {
  const [form, setForm] = useState<FormValues>(INITIAL_FORM);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [leaderPhoto, setLeaderPhoto] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [applicationNumber, setApplicationNumber] = useState("");

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-100";

  const labelClass = "block text-sm font-semibold text-slate-800";

  function updateField(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handlePdfChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    setPdfFile(null);

    if (!file) return;

    if (file.type !== "application/pdf" || file.size > 10 * 1024 * 1024) {
      setMessage(
        file.type !== "application/pdf"
          ? "Upload a PDF file only."
          : "Project PDF must be 10 MB or smaller."
      );
      event.target.value = "";
      return;
    }

    setMessage("");
    setPdfFile(file);
  }

  function handlePhotoChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    setLeaderPhoto(null);

    if (!file) return;

    const types = ["image/jpeg", "image/png", "image/webp"];

    if (!types.includes(file.type) || file.size > 5 * 1024 * 1024) {
      setMessage(
        !types.includes(file.type)
          ? "Upload a JPG, PNG or WebP photo."
          : "Leader photo must be 5 MB or smaller."
      );
      event.target.value = "";
      return;
    }

    setMessage("");
    setLeaderPhoto(file);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Save this reference before awaiting anything.
    // React may clear event.currentTarget after the handler returns.
    const formElement = event.currentTarget;

    setMessage("");
    setSuccess(false);
    setApplicationNumber("");

    if (!pdfFile || !leaderPhoto) {
      setMessage("Please select both the project PDF and leader photo.");
      return;
    }

    setLoading(true);

    let pdfPath = "";
    let photoPath = "";
    let pdfUploaded = false;
    let photoUploaded = false;
    let databaseSaved = false;

    try {
      const uniqueId =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

      const teamSlug = safeFileName(form.teamName || "team");

      pdfPath = `round-1/${uniqueId}-${teamSlug}.pdf`;
      photoPath = `leader-photos/${uniqueId}-${teamSlug}-${safeFileName(
        leaderPhoto.name
      )}`;

      const pdfUpload = await supabase.storage
        .from("submissions")
        .upload(pdfPath, pdfFile, {
          contentType: "application/pdf",
          upsert: false,
        });

      if (pdfUpload.error) throw pdfUpload.error;
      pdfUploaded = true;

      const photoUpload = await supabase.storage
        .from("submissions")
        .upload(photoPath, leaderPhoto, {
          contentType: leaderPhoto.type,
          upsert: false,
        });

      if (photoUpload.error) throw photoUpload.error;
      photoUploaded = true;

      const { data, error } = await supabase.rpc("submit_axion_round1", {
        p_team_name: form.teamName.trim(),
        p_leader_name: form.leaderName.trim(),
        p_email: form.email.trim().toLowerCase(),
        p_phone: form.phone.trim(),
        p_college: form.college.trim(),
        p_unstop_id: form.unstopId.trim(),
        p_project_title: form.projectTitle.trim(),
        p_problem_statement: form.problemStatement.trim(),
        p_solution: form.solution.trim(),
        p_file_path: pdfPath,
        p_leader_photo_path: photoPath,
      });

      if (error) throw error;
      databaseSaved = true;

      const result = Array.isArray(data) ? data[0] : data;
      const number =
        result?.application_number ??
        result?.application_no ??
        result?.id;

      if (number === undefined || number === null) {
        setSuccess(true);
        setMessage(
          "Submission saved, but the RPC returned no application number. Contact the administrator before submitting again."
        );
        return;
      }

      const appNo = String(number);
      setApplicationNumber(appNo);
      setSuccess(true);
      setMessage("Submission saved. Preparing your receipt...");

      try {
        await generateReceipt(form, appNo, leaderPhoto);
        setMessage("Success! Your one-page receipt has been downloaded.");
      } catch (receiptError) {
        console.error("Receipt generation error:", receiptError);
        setMessage(
          "Your submission was saved, but the PDF could not be generated. Contact the administrator with your application number."
        );
      }

      setForm(INITIAL_FORM);
      setPdfFile(null);
      setLeaderPhoto(null);
      formElement.reset();
    } catch (error) {
      console.error("AXION submission error:", error);

      // Do not remove files after the database has saved the application.
      if (!databaseSaved) {
        const paths: string[] = [];
        if (pdfUploaded) paths.push(pdfPath);
        if (photoUploaded) paths.push(photoPath);

        if (paths.length > 0) {
          const { error: cleanupError } = await supabase.storage
            .from("submissions")
            .remove(paths);

          if (cleanupError) {
            console.error("Storage cleanup error:", cleanupError);
          }
        }
      }

      setMessage(
        error instanceof Error
          ? error.message
          : "Submission failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
        <header className="border-b-4 border-amber-400 bg-[#0e203a] px-6 py-8 text-white sm:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300">
            STAMPERS presents
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-wide">
            AXION
          </h1>
          <p className="mt-2 text-sm text-slate-300">
            National Hackathon · Round 1 Submission
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
            Complete the details below and upload your project proposal and
            team leader photo.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-9 p-5 sm:p-10">
          <section>
            <div className="mb-6 border-b border-slate-200 pb-3">
              <h2 className="text-lg font-bold text-[#0e203a]">
                01. Personal Information
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Team leader and team identification details.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              <label className={labelClass}>
                Team Name *
                <input
                  className={inputClass}
                  name="teamName"
                  value={form.teamName}
                  onChange={updateField}
                  required
                  maxLength={100}
                  placeholder="Enter team name"
                />
              </label>

              <label className={labelClass}>
                Team Leader Name *
                <input
                  className={inputClass}
                  name="leaderName"
                  value={form.leaderName}
                  onChange={updateField}
                  required
                  maxLength={100}
                  placeholder="Full name"
                />
              </label>

              <label className={labelClass}>
                Email Address *
                <input
                  className={inputClass}
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={updateField}
                  required
                  placeholder="name@example.com"
                />
              </label>

              <label className={labelClass}>
                Phone Number *
                <input
                  className={inputClass}
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={updateField}
                  required
                  maxLength={20}
                  placeholder="Contact number"
                />
              </label>

              <label className={labelClass}>
                College / University *
                <input
                  className={inputClass}
                  name="college"
                  value={form.college}
                  onChange={updateField}
                  required
                  maxLength={200}
                  placeholder="Institution name"
                />
              </label>

              <label className={labelClass}>
                Unstop ID *
                <input
                  className={inputClass}
                  name="unstopId"
                  value={form.unstopId}
                  onChange={updateField}
                  required
                  maxLength={100}
                  placeholder="Your Unstop ID"
                />
              </label>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <label className={labelClass}>
                Team Leader Photo *
                <span className="mt-2 block text-xs font-normal text-slate-500">
                  JPG, PNG or WebP · Maximum 5 MB
                </span>
                <input
                  className={inputClass}
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handlePhotoChange}
                  required
                />
                {leaderPhoto && (
                  <span className="mt-2 block break-all text-xs text-emerald-700">
                    Selected: {leaderPhoto.name}
                  </span>
                )}
              </label>

              <label className={labelClass}>
                Project PDF *
                <span className="mt-2 block text-xs font-normal text-slate-500">
                  PDF only · Maximum 10 MB
                </span>
                <input
                  className={inputClass}
                  type="file"
                  accept="application/pdf,.pdf"
                  onChange={handlePdfChange}
                  required
                />
                {pdfFile && (
                  <span className="mt-2 block break-all text-xs text-emerald-700">
                    Selected: {pdfFile.name}
                  </span>
                )}
              </label>
            </div>
          </section>

          <section>
            <div className="mb-6 border-b border-slate-200 pb-3">
              <h2 className="text-lg font-bold text-[#0e203a]">
                02. Project Details
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Describe the problem and explain your proposed solution.
              </p>
            </div>

            <div className="space-y-6">
              <label className={labelClass}>
                Project Title *
                <input
                  className={inputClass}
                  name="projectTitle"
                  value={form.projectTitle}
                  onChange={updateField}
                  required
                  maxLength={200}
                  placeholder="Enter project title"
                />
              </label>

              <label className={labelClass}>
                Problem Statement *
                <textarea
                  className={`${inputClass} min-h-36 resize-y leading-6`}
                  name="problemStatement"
                  value={form.problemStatement}
                  onChange={updateField}
                  required
                  minLength={20}
                  maxLength={10000}
                  placeholder="What problem are you trying to solve?"
                />
                <span className="mt-2 block text-right text-xs font-normal text-slate-400">
                  {form.problemStatement.length}/10000
                </span>
              </label>

              <label className={labelClass}>
                Proposed Solution *
                <textarea
                  className={`${inputClass} min-h-36 resize-y leading-6`}
                  name="solution"
                  value={form.solution}
                  onChange={updateField}
                  required
                  minLength={20}
                  maxLength={10000}
                  placeholder="Explain how your project solves the problem..."
                />
                <span className="mt-2 block text-right text-xs font-normal text-slate-400">
                  {form.solution.length}/10000
                </span>
              </label>
            </div>
          </section>

          {message && (
            <div
              role="status"
              className={`rounded-xl border px-4 py-3 text-sm leading-6 ${
                success
                  ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              {message}
              {applicationNumber && (
                <p className="mt-1 font-bold">
                  Application Number: {applicationNumber}
                </p>
              )}
            </div>
          )}

          <div className="border-t border-slate-200 pt-6">
            <p className="mb-4 text-xs leading-5 text-slate-500">
              By submitting, you confirm that the information provided is
              accurate and that you are authorized to submit this project on
              behalf of your team.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[#0e203a] px-6 py-4 text-sm font-bold tracking-wide text-white transition hover:bg-[#1a3a63] focus:outline-none focus:ring-4 focus:ring-amber-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "SUBMITTING..." : "SUBMIT ROUND 1 PROJECT"}
            </button>
          </div>
        </form>

        <footer className="border-t border-slate-200 bg-slate-50 px-6 py-4 text-center text-xs text-slate-500">
          AXION by STAMPERS · Official Round 1 Submission
        </footer>
      </div>
    </main>
  );
}
