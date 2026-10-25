
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const FAQ: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["what is stampers", "about stampers", "who are stampers"],
    answer:
      "STAMPERS is a student-focused platform for hackathons, competitions, challenges, and learning opportunities. Visit https://www.stampers.in to explore our platform.",
  },
  {
    keywords: ["axion", "hackathon"],
    answer:
      "AXION is a hackathon organised by STAMPERS. For the latest announcements, results, and round details, please check https://www.stampers.in. Availability and deadlines may change, so follow the official announcements.",
  },
  {
    keywords: ["register", "registration", "sign up", "participate", "join"],
    answer:
      "To explore STAMPERS opportunities, visit https://www.stampers.in and open the relevant competition or event page. Follow its official instructions for registration.",
  },
  {
    keywords: ["result", "results", "selected", "selection", "shortlist"],
    answer:
      "Please visit https://www.stampers.in and open the relevant event's results page or official announcement to check selection status.",
  },
  {
    keywords: ["fee", "fees", "payment", "pay", "refund", "price"],
    answer:
      "Registration fees depend on the event and round. Please check the official event page for the current amount and payment instructions. Never send payment details or OTPs in this chat.",
  },
  {
    keywords: ["certificate", "goodies", "prize", "prizes", "winner", "winners"],
    answer:
      "Prizes, certificates, and goodies depend on the specific event. Please refer to its official rules and announcements on https://www.stampers.in.",
  },
  {
    keywords: ["contact", "support", "help", "email", "query"],
    answer:
      "For assistance, email support@stampers.in. For business and partnership enquiries, email stampersbusiness@gmail.com.",
  },
  {
    keywords: ["sponsor", "sponsorship", "partner", "partnership", "collaboration"],
    answer:
      "For sponsorships, partnerships, and collaborations with STAMPERS, contact stampersbusiness@gmail.com.",
  },
  {
    keywords: ["website", "link", "official site"],
    answer: "Visit the official STAMPERS website: https://www.stampers.in",
  },
];

function makeAnswer(message: string): string {
  const text = message.toLowerCase().replace(/[^\w\s]/g, " ");

  let bestMatch: { answer: string; score: number } | null = null;

  for (const item of FAQ) {
    let score = 0;

    for (const keyword of item.keywords) {
      if (text.includes(keyword)) {
        score += keyword.includes(" ") ? 2 : 1;
      }
    }

    if (!bestMatch || score > bestMatch.score) {
      bestMatch = { answer: item.answer, score };
    }
  }

  if (bestMatch && bestMatch.score > 0) {
    return bestMatch.answer;
  }

  return (
    "Thanks for contacting STAMPERS! I can help with general questions " +
    "about our platform, events, registration, results, and support. " +
    "For the latest information, visit https://www.stampers.in or email " +
    "support@stampers.in. You can also ask me a more specific question."
  );
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (
      !body ||
      typeof body !== "object" ||
      !("messages" in body) ||
      !Array.isArray(body.messages)
    ) {
      return NextResponse.json(
        { error: "Invalid request. Please send a chat message." },
        { status: 400 }
      );
    }

    const messages = body.messages as unknown[];

    if (messages.length === 0 || messages.length > 12) {
      return NextResponse.json(
        { error: "Please send a valid message." },
        { status: 400 }
      );
    }

    const last = messages[messages.length - 1];

    if (
      !last ||
      typeof last !== "object" ||
      !("role" in last) ||
      !("content" in last) ||
      last.role !== "user" ||
      typeof last.content !== "string" ||
      last.content.trim().length === 0 ||
      last.content.length > 1500
    ) {
      return NextResponse.json(
        { error: "Invalid message." },
        { status: 400 }
      );
    }

    const answer = makeAnswer(last.content.trim());

    return NextResponse.json({ answer });
  } catch {
    return NextResponse.json(
      { error: "Unable to process your message. Please try again." },
      { status: 400 }
    );
  }
}
