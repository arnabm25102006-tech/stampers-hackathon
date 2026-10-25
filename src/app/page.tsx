
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Space_Grotesk, Sora, DM_Sans } from "next/font/google";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Code2,
  Camera,
  Trophy,
  Users,
  Globe2,
  Sparkles,
  Target,
  Zap,
  MoveUpRight,
  Layers3,
  Menu,
  X,
} from "lucide-react";

import Navbar from "./components/Navbar";
import About from "./components/About/About";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer";
import Sponsors from "./components/Sponsors/Sponsors";

const displayFont = Sora({
  subsets: ["latin"],
  variable: "--font-stampers-display",
  display: "swap",
});

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-stampers-heading",
  display: "swap",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-stampers-body",
  display: "swap",
});

const AXION_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/AXION_HACKATHON_logo_transparent.png";

const UNSTOP_LOGO =
  "https://nhtereiqxgjecpnitlgo.supabase.co/storage/v1/object/public/assets/Unstop-Logo-Blue-Large.jpg";

const slides = [
  {
    tag: "THE NEXT GENERATION STARTS HERE",
    kicker: "A PLATFORM FOR AMBITION",
    title: "Make your",
    highlight: "ideas matter.",
    copy: "A home for student innovation, bold ideas and meaningful opportunities. Discover what you can build when ambition meets action.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=90",
    button: "Explore opportunities",
    href: "/explore",
    number: "01",
  },
  {
    tag: "THINK BIGGER. BUILD BETTER.",
    kicker: "THE HACKATHON EXPERIENCE",
    title: "Built for the",
    highlight: "bold thinkers.",
    copy: "Bring your ideas to life, collaborate with ambitious students and make every competition count.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=90",
    button: "Discover events",
    href: "/explore",
    number: "02",
  },
  {
    tag: "YOUR JOURNEY. YOUR MOMENT.",
    kicker: "TURN POTENTIAL INTO PROGRESS",
    title: "Create your",
    highlight: "next chapter.",
    copy: "Find your next challenge, showcase your talent and build a portfolio that tells your story.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2200&q=90",
    button: "Join the community",
    href: "/account/register",
    number: "03",
  },
];

const events = [
  {
    index: "01",
    category: "TECHNOLOGY",
    title: "AXION",
    subtitle: "Ideas into impact.",
    description:
      "A national student hackathon focused on innovation, collaboration and real-world problem-solving.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=90",
    icon: Code2,
    href: "/explore",
    color: "blue",
    meta: "HACKATHON",
  },
  {
    index: "02",
    category: "CREATIVE ARTS",
    title: "Photo Challenges",
    subtitle: "See things differently.",
    description:
      "A space for creative minds to tell stories, capture perspectives and showcase their vision.",
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1200&q=90",
    icon: Camera,
    href: "/explore",
    color: "violet",
    meta: "PHOTOGRAPHY",
  },
  {
    index: "03",
    category: "STUDENT COMMUNITY",
    title: "Open Opportunities",
    subtitle: "Your next move starts now.",
    description:
      "Discover experiences that help you develop skills, meet challenges and grow beyond the classroom.",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=90",
    icon: Layers3,
    href: "/explore",
    color: "cyan",
    meta: "DISCOVER",
  },
];

const stats = [
  { value: "369+", label: "Teams registered", icon: Users },
  { value: "713+", label: "Student participants", icon: Globe2 },
  { value: "54+", label: "Universities represented", icon: Target },
  { value: "14+", label: "States reached", icon: Zap },
];

const principles = [
  {
    number: "01",
    title: "Think without limits.",
    description:
      "Discover opportunities that push you to explore ideas beyond the ordinary.",
  },
  {
    number: "02",
    title: "Build something real.",
    description:
      "Turn knowledge into projects, experiences and work you can be proud of.",
  },
  {
    number: "03",
    title: "Grow together.",
    description:
      "Connect with a community of students who want to learn, create and compete.",
  },
];

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[activeSlide];

  const changeSlide = (direction: number) => {
    setActiveSlide(
      (current) => (current + direction + slides.length) % slides.length
    );
  };

  return (
    <main
      className={`${displayFont.variable} ${headingFont.variable} ${bodyFont.variable} stampers-premium min-h-screen overflow-hidden bg-[#060916] text-white`}
    >
      <Navbar />

      {/* CINEMATIC HERO */}
      <section className="sp-hero relative isolate">
        <div className="sp-hero-images">
          {slides.map((item, index) => (
            <div
              key={item.number}
              className={`sp-hero-image ${
                activeSlide === index ? "is-active" : ""
              }`}
              style={{ backgroundImage: `url("${item.image}")` }}
            />
          ))}
        </div>

        <div className="sp-hero-shade" />
        <div className="sp-hero-grain" />
        <div className="sp-orb sp-orb-one" />
        <div className="sp-orb sp-orb-two" />

        <div className="sp-hero-grid">
          <div className="sp-hero-copy" key={slide.number}>
            <div className="sp-eyebrow">
              <span className="sp-eyebrow-line" />
              {slide.tag}
            </div>

            <p className="sp-hero-kicker">{slide.kicker}</p>

            <h1 className="sp-display sp-hero-title">
              {slide.title}
              <br />
              <span>{slide.highlight}</span>
            </h1>

            <p className="sp-hero-description">{slide.copy}</p>

            <div className="sp-hero-actions">
              <Link href={slide.href} className="sp-button-primary">
                {slide.button}
                <ArrowUpRight size={19} />
              </Link>

              <Link href="/explore" className="sp-button-ghost">
                Discover STAMPERS
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="sp-hero-footnote">
              <span className="sp-status-dot" />
              <span>MADE FOR THE NEXT GENERATION</span>
              <span className="sp-footnote-divider" />
              <span>EST. 2026</span>
            </div>
          </div>

          <div className="sp-hero-visual">
            <div className="sp-visual-topline">
              <span>THE STAMPERS UNIVERSE</span>
              <span className="sp-live-indicator">
                <span /> OPEN TO POSSIBILITIES
              </span>
            </div>

            <div className="sp-feature-card">
              <div className="sp-feature-image">
                <div className="sp-feature-image-bg" />
                <div className="sp-feature-image-shade" />

                <div className="sp-feature-top">
                  <span className="sp-feature-label">FEATURED EXPERIENCE</span>
                  <span className="sp-feature-number">S / 026</span>
                </div>

                <img
                  src={AXION_LOGO}
                  alt="AXION by STAMPERS"
                  className="sp-axion-logo"
                />

                <div className="sp-feature-bottom">
                  <span>INNOVATION</span>
                  <span>COLLABORATION</span>
                  <span>EXECUTION</span>
                </div>
              </div>

              <div className="sp-feature-info">
                <div>
                  <p className="sp-micro-label">NATIONAL HACKATHON</p>
                  <h2 className="sp-feature-title">AXION</h2>
                  <p className="sp-feature-description">
                    Think it. Build it. Bring it to life.
                  </p>
                </div>

                <Link
                  href="/explore"
                  className="sp-feature-arrow"
                  aria-label="Explore AXION"
                >
                  <ArrowUpRight size={22} />
                </Link>
              </div>

              <div className="sp-feature-partner">
                <span>POWERED BY</span>
                <img src={UNSTOP_LOGO} alt="Unstop" />
                <span className="sp-partner-separator" />
                <span>BY STAMPERS</span>
              </div>
            </div>

            <div className="sp-hero-slider-controls">
              <div className="sp-slide-count">
                <span>{slide.number}</span>
                <span className="sp-slide-count-line" />
                <span>03</span>
              </div>

              <div className="sp-slider-buttons">
                <button
                  type="button"
                  onClick={() => changeSlide(-1)}
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={19} />
                </button>
                <button
                  type="button"
                  onClick={() => changeSlide(1)}
                  aria-label="Next slide"
                >
                  <ChevronRight size={19} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="sp-hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} />
          <span className="sp-hero-bottom-rule" />
          <span>01 — 03</span>
        </div>
      </section>

      {/* IMPACT STRIP */}
      <section className="sp-stats-section">
        <div className="sp-stats-heading">
          <span className="sp-section-index">01 / OUR REACH</span>
          <p>Growing a community of doers.</p>
        </div>

        <div className="sp-stats-grid">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div className="sp-stat" key={item.label}>
                <div className="sp-stat-icon">
                  <Icon size={19} strokeWidth={1.6} />
                </div>
                <div>
                  <p className="sp-stat-value">{item.value}</p>
                  <p className="sp-stat-label">{item.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section className="sp-events-section">
        <div className="sp-section-shell">
          <div className="sp-section-header">
            <div>
              <span className="sp-section-index">02 / FIND YOUR THING</span>
              <h2 className="sp-display sp-section-title">
                More than
                <br />
                <span>just an opportunity.</span>
              </h2>
            </div>

            <div className="sp-section-header-side">
              <p>
                The next project. The next competition. The next version of
                you. It starts with finding the right opportunity.
              </p>
              <Link href="/explore" className="sp-text-link">
                Explore everything <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <div className="sp-events-grid">
            {events.map((event) => {
              const Icon = event.icon;

              return (
                <article
                  className={`sp-event-card sp-event-${event.color}`}
                  key={event.index}
                >
                  <Link
                    href={event.href}
                    className="sp-event-image"
                    aria-label={`Explore ${event.title}`}
                  >
                    <img
                      src={event.image}
                      alt=""
                      loading="lazy"
                    />
                    <div className="sp-event-image-shade" />
                    <div className="sp-event-image-top">
                      <span>{event.category}</span>
                      <span className="sp-event-index">{event.index}</span>
                    </div>
                    <div className="sp-event-image-bottom">
                      <span className="sp-event-icon">
                        <Icon size={21} />
                      </span>
                      <span className="sp-event-meta">{event.meta}</span>
                    </div>
                  </Link>

                  <div className="sp-event-content">
                    <p className="sp-event-subtitle">{event.subtitle}</p>
                    <h3 className="sp-heading sp-event-title">{event.title}</h3>
                    <p className="sp-event-description">{event.description}</p>

                    <Link href={event.href} className="sp-event-link">
                      <span>Explore opportunity</span>
                      <span className="sp-event-link-icon">
                        <ArrowUpRight size={18} />
                      </span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDITORIAL MANIFESTO */}
      <section className="sp-manifesto">
        <div className="sp-manifesto-image">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=90"
            alt="Students collaborating on ideas"
            loading="lazy"
          />
          <div className="sp-manifesto-image-overlay" />
          <div className="sp-manifesto-image-caption">
            <span>BUILT BY AMBITION</span>
            <span>POWERED BY COMMUNITY</span>
          </div>
        </div>

        <div className="sp-manifesto-copy">
          <span className="sp-section-index">03 / THE STAMPERS MINDSET</span>
          <h2 className="sp-display sp-manifesto-title">
            The future
            <br />
            belongs to
            <br />
            <span>the curious.</span>
          </h2>
          <p>
            We believe student life should be more than lectures and
            deadlines. It should be about testing ideas, creating meaningful
            work and discovering what you are capable of.
          </p>
          <Link href="/explore" className="sp-button-primary">
            Find your next challenge
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* THREE PRINCIPLES */}
      <section className="sp-principles-section">
        <div className="sp-section-shell">
          <div className="sp-principles-heading">
            <span className="sp-section-index">04 / WHAT MOVES US</span>
            <h2 className="sp-display sp-section-title">
              Make it
              <span className="sp-title-muted"> count.</span>
            </h2>
          </div>

          <div className="sp-principles-grid">
            {principles.map((item) => (
              <article className="sp-principle" key={item.number}>
                <div className="sp-principle-top">
                  <span>{item.number}</span>
                  <MoveUpRight size={21} />
                </div>
                <h3 className="sp-heading">{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED AXION BANNER */}
      <section className="sp-axion-section">
        <div className="sp-axion-banner">
          <div className="sp-axion-backdrop" />
          <div className="sp-axion-grid-lines" />

          <div className="sp-axion-banner-copy">
            <span className="sp-section-index">A STAMPERS ORIGINAL</span>
            <h2 className="sp-display">
              Think beyond
              <br />
              <span>the expected.</span>
            </h2>
            <p>
              AXION is where bold student ideas meet the energy to make them
              real. Discover event updates, results and upcoming opportunities
              through STAMPERS.
            </p>
            <Link href="/explore" className="sp-button-primary">
              Explore AXION
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="sp-axion-banner-art">
            <div className="sp-axion-ring sp-ring-one" />
            <div className="sp-axion-ring sp-ring-two" />
            <div className="sp-axion-ring sp-ring-three" />
            <div className="sp-axion-logo-frame">
              <img src={AXION_LOGO} alt="AXION" loading="lazy" />
            </div>
            <span className="sp-art-label sp-art-label-one">INNOVATION / 01</span>
            <span className="sp-art-label sp-art-label-two">EXECUTION / 02</span>
          </div>
        </div>
      </section>

      {/* EXISTING SITE CONTENT */}
      <div className="sp-existing-sections">
        <About />
        <Sponsors />
        <FAQ />
      </div>

      {/* FINAL CTA */}
      <section className="sp-join-section">
        <div className="sp-join-glow" />
        <div className="sp-join-content">
          <span className="sp-section-index">YOUR STORY STARTS HERE</span>
          <h2 className="sp-display">
            Don't just
            <br />
            <span>watch the future.</span>
            <br />
            Build it.
          </h2>
          <p>
            Find opportunities, challenge yourself and become part of the next
            generation of creators.
          </p>
          <div className="sp-join-actions">
            <Link href="/account/register" className="sp-button-primary">
              Join STAMPERS <ArrowUpRight size={18} />
            </Link>
            <Link href="/explore" className="sp-button-ghost">
              Explore events <ArrowRight size={17} />
            </Link>
          </div>
          <div className="sp-join-footnote">
            <Sparkles size={15} />
            <span>MAKE SOMETHING THAT MATTERS.</span>
          </div>
        </div>
      </section>

      <Footer />

      {mobileMenuOpen && (
        <div className="sp-mobile-menu" role="dialog" aria-modal="true">
          <button
            type="button"
            className="sp-mobile-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <Link href="/explore" onClick={() => setMobileMenuOpen(false)}>
            Explore events <ArrowUpRight size={19} />
          </Link>
          <Link
            href="/account/register"
            onClick={() => setMobileMenuOpen(false)}
          >
            Join STAMPERS <ArrowUpRight size={19} />
          </Link>
        </div>
      )}
    </main>
  );
}
