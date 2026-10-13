"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/site-config";
import { MapPin, Phone, Mail, MessageCircle, Send, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(`Hi ${siteConfig.brand.name}, I would like to inquire about your property management services.`)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", propertyType: "", message: "" });
    }, 1500);
  };

  return (
    <div className="bg-[var(--color-background)] min-h-screen pb-20 md:pb-0">
      
      {/* 1. HERO SECTION (Matches About Us Banner) */}
      <section className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/commercial.jpg" alt={`Contact ${siteConfig.brand.name}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[var(--color-primary)]/80"></div>
        </div>
        <div className="relative z-10 text-center text-white flex flex-col items-center pt-16">
          <h1 className="text-5xl md:text-6xl font-semibold mb-4 tracking-tight">
            Contact Us
          </h1>
          <p className="max-w-2xl text-gray-200 mb-6 px-4">
            Get in touch with our team to discuss how we can help manage and protect your valuable assets in Hyderabad.
          </p>
          <div className="text-[var(--color-accent)] font-semibold flex items-center gap-2 text-sm tracking-widest uppercase">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> <span className="text-white">&gt;&gt;</span> <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORM */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Left Col: Contact Info (Takes 2 cols) */}
            <div className="lg:col-span-2 flex flex-col justify-center space-y-8">
              <div>
                <div className="text-[var(--color-accent)] font-semibold uppercase tracking-wider text-sm mb-2">Get in touch</div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[var(--color-primary)] leading-[1.2]">We are here to help you</h2>
                <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                  Whether you have a question about our services, pricing, or need immediate assistance with your property, our dedicated team is ready to answer all your questions.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-primary)] text-lg mb-1">Call Us</h3>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-[var(--color-muted)] hover:text-[var(--color-accent)] font-medium transition-colors">
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-primary)] text-lg mb-1">WhatsApp</h3>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] font-medium transition-colors">
                      Chat with our team
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-primary)] text-lg mb-1">Email Us</h3>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-[var(--color-muted)] hover:text-[var(--color-accent)] font-medium transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-primary)] text-lg mb-1">Office Location</h3>
                    <p className="text-[var(--color-muted)] font-medium">
                      {siteConfig.contact.officeAddress}
                    </p>
                    <p className="text-sm text-[var(--color-muted)] mt-2">
                      <span className="font-semibold text-[var(--color-primary)]">Timings:</span> {siteConfig.contact.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Contact Form (Takes 3 cols) */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-2">Send us a message</h3>
                <p className="text-[var(--color-muted)] mb-8">Fill out the form below and we will get back to you shortly.</p>

                {isSubmitted ? (
                  <div className="bg-green-50 text-green-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center py-12 border border-green-100">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                      <Send className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-700">Thank you for reaching out to {siteConfig.brand.name}. Our team will contact you within 24 hours.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-green-700 font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-[var(--color-primary)]">Full Name</label>
                        <input 
                          type="text" 
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 focus:border-[var(--color-accent)] transition-all font-medium"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-[var(--color-primary)]">Email Address</label>
                        <input 
                          type="email" 
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 focus:border-[var(--color-accent)] transition-all font-medium"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-[var(--color-primary)]">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 focus:border-[var(--color-accent)] transition-all font-medium"
                          placeholder="+91 95027 86217"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="propertyType" className="text-sm font-semibold text-[var(--color-primary)]">Service of Interest</label>
                        <select 
                          id="propertyType"
                          value={formData.propertyType}
                          onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 focus:border-[var(--color-accent)] transition-all font-medium text-[var(--color-foreground)]"
                        >
                          <option value="" disabled>Select a service</option>
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
                      <label htmlFor="message" className="text-sm font-semibold text-[var(--color-primary)]">Your Message</label>
                      <textarea 
                        id="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 focus:border-[var(--color-accent)] transition-all font-medium resize-none"
                        placeholder="Tell us about your property requirements..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-[var(--color-primary)] text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90'}`}
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>Send Message <ArrowRight className="w-5 h-5" /></>
                      )}
                    </button>
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
