"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/site-config";
import {
  ArrowRight, CheckCircle2, ChevronDown,
  Phone, Star, ShieldCheck, MapPin, Wrench, FileText
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export interface ServiceData {
  id: string;
  title: string;
  heroDescription: string;
  heroImage: string;
  overviewHeading: string;
  overviewDescription: string[];
  overviewImage: string;
  keyInclusions: string[];
  whatWeHandle: { title: string; desc: string; icon: any }[];
  howItWorks: { step: number; title: string; desc: string }[];
  gallery: string[];
  reviews: { quote: string; name: string; location: string }[];
  faq: { question: string; answer: string }[];
  whatsappMessage: string;
}

export function ExpandedServicePage({ data }: { data: ServiceData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(data.whatsappMessage)}`;

  return (
    <div className="pb-20 md:pb-0 bg-white">

      {/* 1. HERO SECTION (Vibrant Layout using Brand Colors) */}
      <section className="relative w-full pt-20 pb-32 md:pt-32 md:pb-40 bg-[var(--color-primary)] overflow-hidden">
        
        {/* Subtle background decorative curves */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <svg className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] opacity-5 text-white" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke="currentColor" strokeWidth="1" d="M38.1,-48.3C52.4,-35.1,69.2,-23.4,74.5,-7.9C79.8,7.6,73.6,26.9,61.7,41.9C49.8,56.9,32.3,67.6,12.7,71.2C-6.9,74.8,-28.7,71.2,-44.6,58.5C-60.5,45.8,-70.5,23.9,-71.3,1.6C-72.1,-20.7,-63.8,-43.4,-48.7,-56.9C-33.6,-70.4,-11.8,-74.6,1.4,-76.3C14.6,-78,31.7,-77.2,38.1,-48.3Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

            {/* Left Side Content */}
            <div className="w-full md:w-[50%] lg:w-[55%]">
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-white tracking-tight">
                <span className="text-[var(--color-accent)]">{data.title.split(' ')[0]}</span> {data.title.split(' ').slice(1).join(' ')}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg font-medium leading-relaxed">
                {data.heroDescription}
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <a href={`tel:${siteConfig.contact.phone}`} className="bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-colors shadow-lg shadow-cyan-500/20">
                  Inquire Now
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white font-medium hover:text-[var(--color-accent)] transition-colors group">
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right Side Image (Arch Design) */}
            <div className="w-full md:w-[50%] lg:w-[45%] flex justify-center relative">
              <div className="w-full max-w-[400px] aspect-[4/5] rounded-t-full rounded-b-[2.5rem] border-[12px] border-white/95 shadow-2xl overflow-hidden relative bg-white/20">
                <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </div>

        {/* Bottom White Fade matching screenshot */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>
      </section>

      {/* 2. OVERVIEW SECTION (matches SkyVoyage "Why Choose Us") */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left Side Bento Grid Images */}
            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px]">
              <div className="absolute left-0 top-0 w-[55%] h-[45%] rounded-2xl overflow-hidden shadow-lg border-4 border-white z-10 bg-gray-100">
                <img src={data.gallery[1] || data.overviewImage} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="About Us Image 1" />
              </div>
              <div className="absolute left-0 bottom-[5%] w-[65%] h-[45%] rounded-2xl overflow-hidden shadow-lg border-4 border-white z-20 bg-gray-100">
                <img src={data.gallery[2] || data.heroImage} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="About Us Image 2" />
              </div>
              <div className="absolute right-0 top-[25%] w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-30 bg-gray-100">
                <img src={data.gallery[3] || data.overviewImage} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="About Us Image 3" />
              </div>
            </div>

            {/* Right Side Text */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-gray-600 font-bold tracking-wider text-sm uppercase">About Us</span>
                <div className="w-12 h-[2px] bg-cyan-500"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900 leading-[1.2]">{data.overviewHeading}</h2>
              <div className="space-y-4 text-gray-500 leading-relaxed mb-8">
                {data.overviewDescription.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <Link href="/about" className="inline-flex bg-cyan-500 text-white px-8 py-3 rounded-full font-bold hover:bg-cyan-400 transition-colors items-center shadow-md">
                Read More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>


            </div>

          </div>
        </div>
      </section>

      {/* 3. INCLUSIONS SECTION */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-primary)] uppercase tracking-wide">Key Inclusions</h2>
            <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto mt-6"></div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-[var(--color-divider)] p-8 md:p-12">
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              {data.keyInclusions.map((feature, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <span className="text-lg text-[var(--color-foreground)] font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery Horizontal Scroll */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-8 text-center">Service Gallery</h3>
            <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {data.gallery.map((img, i) => (
                <div key={i} className="w-[280px] h-[200px] md:w-[320px] md:h-[240px] rounded-2xl overflow-hidden shadow-sm shrink-0 snap-start group relative">
                  <img src={img} alt={`${data.title} Gallery ${i + 1}`} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. REVIEWS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-primary)] uppercase tracking-wide">Top Reviews</h2>
            <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto mt-6"></div>
          </div>

          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory gap-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:snap-none hide-scrollbar">
            {data.reviews.map((review, i) => (
              <div key={i} className="w-[85vw] md:w-auto shrink-0 snap-center bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center font-semibold shrink-0 shadow-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-primary)] text-sm">{review.name}</h3>
                    <div className="flex text-[#FFB800] mt-1">
                      {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-current" />)}
                    </div>
                  </div>
                </div>
                <p className="text-[var(--color-muted)] text-sm italic leading-relaxed">"{review.quote}"</p>
                <div className="mt-auto pt-4 text-xs text-gray-400 font-medium">{review.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS / SPECIALTIES (Colorful Cards Layout) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 font-serif mb-4">How It Works</h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              We follow a streamlined, transparent process to ensure your property is managed efficiently and your returns are maximized without the daily hassle.
            </p>
          </div>

          <div className="flex overflow-x-auto gap-8 pb-12 pt-4 snap-x snap-mandatory w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {data.howItWorks.map((step, i) => (
              <div key={i} className="min-w-[280px] md:min-w-[320px] bg-white rounded-[2rem] p-8 flex flex-col text-left shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group shrink-0 snap-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-8 shadow-lg bg-cyan-500 shadow-cyan-500/40 group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 tracking-tight font-serif">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-24 bg-white border-t border-[var(--color-divider)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-primary)] uppercase tracking-wide">FAQ</h2>
            <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto mt-6"></div>
          </div>
          <div className="space-y-4">
            {data.faq.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`bg-white rounded-[2rem] shadow-sm overflow-hidden transition-all duration-300 border ${isOpen ? 'border-cyan-500 ring-2 ring-cyan-100' : 'border-gray-200 hover:border-cyan-300'}`}
                >
                  <div
                    className="flex items-center justify-between p-6 cursor-pointer"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                  >
                    <h3 className="text-lg font-bold text-gray-900 pr-8">
                      {faq.question}
                    </h3>
                    <div className={`w-10 h-10 bg-cyan-50 text-cyan-600 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-cyan-500 text-white' : ''}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>

                  <div
                    className={`px-6 text-gray-600 leading-relaxed transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-[var(--color-primary)] rounded-[3rem] p-10 md:p-16 text-white flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden">
            
            {/* Left Content */}
            <div className="lg:w-3/5 z-10 relative">
              <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 mb-6 bg-white/5 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> 
                <span className="text-sm font-medium text-gray-200">Professional Care</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-[1.15]">
                Your Property Deserves<br/>Professional Care
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
                Whether you own a rental flat, apartment, villa, farmhouse, plot or commercial property in Hyderabad, {siteConfig.brand.name} can help you manage it with greater confidence and transparency.
              </p>
            </div>

            {/* Right Content */}
            <div className="lg:w-2/5 flex flex-col items-start lg:items-end w-full z-10 relative">
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-start lg:justify-end mb-8">
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="bg-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2 shadow-lg">
                  Contact Us <ArrowRight className="w-5 h-5" />
                </a>
                <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  WhatsApp Us
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img src="/images/flat.jpg" alt="Property" className="w-10 h-10 rounded-full border-2 border-[var(--color-primary)] object-cover z-30 relative" />
                  <img src="/images/apartment.jpg" alt="Property" className="w-10 h-10 rounded-full border-2 border-[var(--color-primary)] object-cover z-20 relative" />
                  <img src="/images/villa.jpg" alt="Property" className="w-10 h-10 rounded-full border-2 border-[var(--color-primary)] object-cover z-10 relative" />
                  <div className="w-10 h-10 rounded-full border-2 border-[var(--color-primary)] bg-cyan-500 flex items-center justify-center text-xs font-bold text-white z-0 relative">
                    +5k
                  </div>
                </div>
                <div className="text-sm">
                  <span className="font-bold text-white">5/5</span> <span className="text-gray-400">(20+ properties)</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

