
"use client";

import {
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const QUICK_QUESTIONS = [
  "What is STAMPERS?",
  "How do I register?",
  "Tell me about AXION",
  "How can I contact support?",
];

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hey! Welcome to STAMPERS. I'm your AI assistant. Ask me about competitions, hackathons, registration, or anything about STAMPERS.",
};

export default function StampersAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    WELCOME_MESSAGE,
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isLoading, isOpen]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  async function sendMessage(
    event?: FormEvent<HTMLFormElement>,
    question?: string
  ) {
    event?.preventDefault();

    const text = (question ?? input).trim();

    if (!text || isLoading || text.length > 1500) return;

    const userMessage: Message = {
      role: "user",
      content: text,
    };

    const conversation = [...messages, userMessage].slice(-12);

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: conversation,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          typeof data.error === "string"
            ? data.error
            : "The assistant is temporarily unavailable. Please try again."
        );
      }

      if (
        typeof data.answer !== "string" ||
        !data.answer.trim()
      ) {
        throw new Error(
          "I couldn't generate a response. Please try again."
        );
      }

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.answer,
        },
      ]);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  function resetChat() {
    setMessages([{ ...WELCOME_MESSAGE }]);
    setInput("");
    setError("");
  }

  function retryLastMessage() {
    const lastUserMessage = [...messages]
      .reverse()
      .find((message) => message.role === "user");

    if (!lastUserMessage || isLoading) return;

    setError("");
    void sendMessage(undefined, lastUserMessage.content);
  }

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          className="stampers-ai-launcher"
          onClick={() => setIsOpen(true)}
          aria-label="Open STAMPERS AI assistant"
          aria-haspopup="dialog"
          aria-expanded={false}
        >
          <span className="stampers-ai-launcher-icon" aria-hidden="true">
            ✦
          </span>

          <span className="stampers-ai-launcher-copy">
            <span className="stampers-ai-launcher-title">
              STAMPERS AI
            </span>
            <span className="stampers-ai-launcher-subtitle">
              How can I help?
            </span>
          </span>
        </button>
      )}

      {isOpen && (
        <section
          className="stampers-ai-window"
          role="dialog"
          aria-modal="false"
          aria-label="STAMPERS AI visitor assistant"
        >
          <header className="stampers-ai-header">
            <div className="stampers-ai-brand">
              <div className="stampers-ai-brand-icon" aria-hidden="true">
                ✦
              </div>

              <div>
                <div className="stampers-ai-brand-title">
                  STAMPERS AI
                </div>
                <div className="stampers-ai-status">
                  <span className="stampers-ai-status-dot" />
                  Your visitor assistant
                </div>
              </div>
            </div>

            <div className="stampers-ai-header-actions">
              <button
                type="button"
                onClick={resetChat}
                title="Start a new chat"
                aria-label="Start a new chat"
                className="stampers-ai-close"
              >
                ↻
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close chat"
                aria-label="Close chat"
                className="stampers-ai-close"
              >
                ×
              </button>
            </div>
          </header>

          <div
            className="stampers-ai-messages"
            aria-live="polite"
            aria-relevant="additions text"
          >
            <div className="stampers-ai-tagline">
              THINK. BUILD. COMPETE.
            </div>

            {messages.map((message, index) => (
              <div
                key={`${index}-${message.role}`}
                className={`stampers-ai-message ${message.role}`}
              >
                {message.content}
              </div>
            ))}

            {isLoading && (
              <div className="stampers-ai-message assistant" role="status">
                <span className="stampers-ai-thinking">
                  Thinking
                </span>
                <span aria-hidden="true"> ···</span>
              </div>
            )}

            {messages.length === 1 && !isLoading && (
              <div className="stampers-ai-quick-section">
                <p className="stampers-ai-quick-heading">
                  QUICK QUESTIONS
                </p>

                <div className="stampers-ai-quick-list">
                  {QUICK_QUESTIONS.map((question) => (
                    <button
                      type="button"
                      key={question}
                      className="stampers-ai-quick"
                      onClick={() =>
                        void sendMessage(undefined, question)
                      }
                      disabled={isLoading}
                    >
                      <span>{question}</span>
                      <span className="stampers-ai-quick-arrow">
                        →
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {error && (
              <div className="stampers-ai-error" role="alert">
                <p>{error}</p>
                <button
                  type="button"
                  onClick={retryLastMessage}
                  disabled={isLoading}
                  className="stampers-ai-retry"
                >
                  Try again
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="stampers-ai-footer">
            <form
              onSubmit={(event) => void sendMessage(event)}
              className="stampers-ai-form"
            >
              <input
                ref={inputRef}
                className="stampers-ai-input"
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask anything..."
                maxLength={1500}
                autoComplete="off"
                aria-label="Message the STAMPERS AI assistant"
                disabled={isLoading}
              />

              <button
                type="submit"
                className="stampers-ai-send"
                disabled={isLoading || !input.trim()}
                aria-label="Send message"
              >
                ↑
              </button>
            </form>

            <div className="stampers-ai-footer-bottom">
              <span>Powered by OpenAI</span>
              <a
                href="https://stampers.in"
                target="_blank"
                rel="noreferrer"
              >
                stampers.in ↗
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
