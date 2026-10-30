"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/site-config";
import { MapPin, Phone, Mail, MessageCircle, Send, ArrowRight, AlertCircle } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  message: string;
  consent: boolean;
};

const EMPTY_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  propertyType: "",
  message: "",
  consent: false,
};

function buildEnquiry(data: FormData) {
  return [
    `New enquiry — ${siteConfig.brand.name}`,
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Service: ${data.propertyType || "Not specified"}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [honeypot, setHoneypot] = useState("");
  const [sent, setSent] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    buildEnquiry(formData)
  )}`;
  const mailtoUrl = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    `Property enquiry from ${formData.name || "website visitor"}`
  )}&body=${encodeURIComponent(buildEnquiry(formData))}`;

  const setField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (formData.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim()))
      next.email = "Please enter a valid email address.";
    const digits = formData.phone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 13)
      next.phone = "Please enter a valid phone number with country code.";
    if (formData.message.trim().length < 10)
      next.message = "Please tell us a little about your property (at least 10 characters).";
    if (!formData.consent) next.consent = "Please confirm we may contact you about this enquiry.";
    return next;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (honeypot) return; // silently drop bots
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = document.getElementById(`contact-${Object.keys(nextErrors)[0]}`);
      first?.focus();
      return;
    }
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const resetForm = () => {
    setFormData(EMPTY_FORM);
    setErrors({});
    setSent(false);
  };

  const fieldClass = (key: string) =>
    `w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-strong)]/40 focus:border-[var(--color-accent-strong)] transition-all font-medium ${
      errors[key] ? "border-red-400" : "border-gray-200"
    }`;

  return (
    <div className="bg-[var(--color-background)] min-h-screen pb-20 md:pb-0">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            fill
            priority
            sizes="100vw"
            src="/images/commercial.jpg"
            alt=""
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-primary)]/80"></div>
        </div>
        <div className="relative z-10 text-center text-white flex flex-col items-center pt-16">
          <h1 className="text-5xl md:text-6xl font-semibold mb-4 tracking-tight">
            Contact Us
          </h1>
          <p className="max-w-2xl text-gray-200 mb-6 px-4">
            Talk to us about your property in Hyderabad — what you need, what it costs, and how we would handle it.
          </p>
          <nav aria-label="Breadcrumb" className="text-[var(--color-accent)] font-semibold flex items-center gap-2 text-sm tracking-widest uppercase">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true" className="text-white">&gt;&gt;</span>
            <Link href="/contact" aria-current="page" className="hover:text-white transition-colors">Contact</Link>
          </nav>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORM */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Col: Contact Info */}
            <div className="lg:col-span-2 flex flex-col justify-center space-y-8">
              <div>
                <div className="text-[var(--color-accent-strong)] font-semibold uppercase tracking-wider text-sm mb-2">Get in touch</div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[var(--color-primary)] leading-[1.2]">We are here to help you</h2>
                <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                  Questions about our services, pricing, or a problem at your property? Call, message us on WhatsApp, or send the form below. We will get back to you as soon as we can.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-[var(--color-primary)] text-lg mb-1">Call Us</h3>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-[var(--color-muted)] hover:text-[var(--color-accent-strong)] font-medium transition-colors">
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-[var(--color-primary)] text-lg mb-1">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                        `Hi ${siteConfig.brand.name}, I would like to enquire about your property management services.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-muted)] hover:text-[var(--color-accent-strong)] font-medium transition-colors"
                    >
                      Chat with our team
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-[var(--color-primary)] text-lg mb-1">Email Us</h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-[var(--color-muted)] hover:text-[var(--color-accent-strong)] font-medium transition-colors [overflow-wrap:anywhere]"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-[var(--color-primary)] text-lg mb-1">Office Location</h3>
                    <p className="text-[var(--color-muted)] font-medium">
                      {siteConfig.contact.officeAddress}
                    </p>
                    <p className="text-sm text-[var(--color-muted)] mt-2">
                      <span className="font-semibold text-[var(--color-primary)]">Timings:</span> {siteConfig.contact.workingHours}, Mon&ndash;Sat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-2">Send us a message</h3>
                <p className="text-[var(--color-muted)] mb-8">
                  Fill in your details and send the enquiry straight to our team on WhatsApp or by email.
                </p>

                {sent ? (
                  <div
                    role="status"
                    aria-live="polite"
                    className="bg-green-50 text-green-900 p-6 rounded-2xl flex flex-col items-center justify-center text-center py-12 border border-green-100"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-700 mb-4">
                      <Send className="w-8 h-8" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Almost done &mdash; press send in WhatsApp</h3>
                    <p className="text-green-800 max-w-md">
                      Your enquiry has been prepared and opened in WhatsApp. Press <strong>Send</strong> there so it reaches {siteConfig.brand.name}.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-green-700 text-white font-semibold px-5 py-3 rounded-xl hover:bg-green-800 transition-colors"
                      >
                        <MessageCircle className="w-5 h-5" aria-hidden="true" />
                        Open WhatsApp again
                      </a>
                      <a
                        href={mailtoUrl}
                        className="inline-flex items-center justify-center gap-2 border border-green-700 text-green-800 font-semibold px-5 py-3 rounded-xl hover:bg-green-100 transition-colors"
                      >
                        <Mail className="w-5 h-5" aria-hidden="true" />
                        Email it instead
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="mt-6 text-green-800 font-semibold underline underline-offset-4 hover:text-green-900"
                    >
                      Write another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {Object.keys(errors).length > 0 && (
                      <div role="alert" className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>Please check the highlighted fields and try again.</span>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="contact-name" className="text-sm font-semibold text-[var(--color-primary)]">Full Name</label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          autoComplete="name"
                          required
                          value={formData.name}
                          onChange={(e) => setField("name", e.target.value)}
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? "contact-name-error" : undefined}
                          className={fieldClass("name")}
                          placeholder="Your full name"
                        />
                        {errors.name && <p id="contact-name-error" className="text-sm text-red-700">{errors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="contact-email" className="text-sm font-semibold text-[var(--color-primary)]">Email Address</label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          autoComplete="email"
                          required
                          value={formData.email}
                          onChange={(e) => setField("email", e.target.value)}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? "contact-email-error" : undefined}
                          className={fieldClass("email")}
                          placeholder="you@example.com"
                        />
                        {errors.email && <p id="contact-email-error" className="text-sm text-red-700">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="contact-phone" className="text-sm font-semibold text-[var(--color-primary)]">Phone Number</label>
                        <input
                          type="tel"
                          id="contact-phone"
                          name="phone"
                          autoComplete="tel"
                          inputMode="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setField("phone", e.target.value)}
                          aria-invalid={Boolean(errors.phone)}
                          aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                          className={fieldClass("phone")}
                          placeholder="+91 95027 86217"
                        />
                        {errors.phone && <p id="contact-phone-error" className="text-sm text-red-700">{errors.phone}</p>}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="contact-propertyType" className="text-sm font-semibold text-[var(--color-primary)]">Service of Interest</label>
                        <select
                          id="contact-propertyType"
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={(e) => setField("propertyType", e.target.value)}
                          className={`${fieldClass("propertyType")} text-[var(--color-foreground)]`}
                        >
                          <option value="">Select a service</option>
                          <option value="Flat Management">Flat Management</option>
                          <option value="Apartment Management">Apartment Management</option>
                          <option value="Villa / Farmhouse">Villa / Farmhouse</option>
                          <option value="Plot / Land">Plot / Land Management</option>
                          <option value="Commercial Property">Commercial Property</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contact-message" className="text-sm font-semibold text-[var(--color-primary)]">Your Message</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setField("message", e.target.value)}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? "contact-message-error" : undefined}
                        className={`${fieldClass("message")} resize-none`}
                        placeholder="Tell us about your property requirements..."
                      ></textarea>
                      {errors.message && <p id="contact-message-error" className="text-sm text-red-700">{errors.message}</p>}
                    </div>

                    {/* Honeypot — hidden from users, catches bots */}
                    <div aria-hidden="true" className="hidden">
                      <label htmlFor="contact-company">Company</label>
                      <input
                        id="contact-company"
                        name="company"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="contact-consent"
                          name="consent"
                          checked={formData.consent}
                          onChange={(e) => setField("consent", e.target.checked)}
                          aria-invalid={Boolean(errors.consent)}
                          aria-describedby={errors.consent ? "contact-consent-error" : undefined}
                          className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-[var(--color-accent-strong)] focus:ring-[var(--color-accent-strong)]"
                        />
                        <label htmlFor="contact-consent" className="text-sm text-[var(--color-muted)]">
                          I agree to be contacted about this enquiry. See our{" "}
                          <Link href="/privacy" className="font-medium text-[var(--color-accent-strong)] underline underline-offset-2">
                            Privacy Policy
                          </Link>
                          .
                        </label>
                      </div>
                      {errors.consent && <p id="contact-consent-error" className="text-sm text-red-700">{errors.consent}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[var(--color-primary)] text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg hover:bg-[var(--color-primary)]/90"
                    >
                      Send Message <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </button>

                    <p className="text-xs text-center text-[var(--color-muted)]">
                      Prefer email? Write to{" "}
                      <a href={`mailto:${siteConfig.contact.email}`} className="font-medium text-[var(--color-accent-strong)] underline underline-offset-2 [overflow-wrap:anywhere]">
                        {siteConfig.contact.email}
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
