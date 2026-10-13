"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { siteConfig } from "@/site-config";
import {
  Building, Home, Key, MapPin, Search, ShieldCheck,
  ChevronDown, ArrowRight, CheckCircle2, ChevronRight, Briefcase,
  Phone, Star, Quote, Camera, UserCheck, Globe, Banknote
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const container = useRef<HTMLDivElement>(null);
  const [selectedType, setSelectedType] = useState("Flat");
  const [selectedLocality, setSelectedLocality] = useState("Gachibowli");
  const [openLocality, setOpenLocality] = useState(false);
  const [openType, setOpenType] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  useGSAP(() => {
    gsap.from(".hero-text", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });

    gsap.from(".vertical-card", {
      scrollTrigger: {
        trigger: ".verticals-section",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, { scope: container });

  const widgetWhatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hi ${siteConfig.brand.name}, I want to discuss management for my ${selectedType} in ${selectedLocality}.`
  )}`;

  const faqsData = [
    {
      q: "How does your pricing work without fixed rate cards?",
      a: "We do not use generic fee percentages. Because every asset demands a different level of operational bandwidth, we provide a custom, flat-fee management quote only after a comprehensive on-ground assessment of your property's condition and specific requirements. This guarantees absolute transparency and zero hidden operational costs."
    },
    {
      q: "Do you provide assistance with NRI taxation and TDS for rental income?",
      a: "Yes. Our dedicated remote dashboard desk assists NRI owners in navigating local taxation norms, coordinating with chartered accountants for proper TDS deduction compliance, and ensuring seamless international rent remittance without regulatory friction."
    },
    {
      q: "How are maintenance costs and repair disputes handled?",
      a: "No repair is executed without prior approval. We provide photo-verified estimates for any required maintenance. Once approved by you, the repair is conducted, and post-repair photos alongside original vendor invoices are submitted to ensure absolute financial integrity."
    },
    {
      q: "How do you protect vacant plots from encroachment?",
      a: "Our Plot Management vertical includes rigorous boundary pillar and fencing integrity checks. We install strong anti-encroachment warning boards, clear weed/debris to maintain high visibility, and send you quarterly geo-tagged photo and video inspection reports to prove absolute physical custody."
    }
  ];

  const reviewsData = [
    {
      text: `Living in the US, managing my Hyderabad villa was a nightmare until I found ${siteConfig.brand.name}. Their photo-verified repair estimates give me absolute peace of mind.`,
      initials: "RK",
      name: "Rahul K.",
      role: "NRI, United States"
    },
    {
      text: `The tenant KYC process is incredibly strict. I've had zero rent defaults in my apartment since ${siteConfig.brand.name} took over the management.`,
      initials: "SM",
      name: "Sneha M.",
      role: "Local Investor"
    },
    {
      text: "I receive direct rent transfers to my account without escrow holding. Total transparency and excellent commercial lease administration.",
      initials: "AD",
      name: "Anil D.",
      role: "Commercial Landlord"
    },
    {
      text: "Their team managed to get my vacant plot fenced and secured within a week. The quarterly geo-tagged photos are exactly what I needed to feel safe about my investment.",
      initials: "VJ",
      name: "Vikram J.",
      role: "Plot Owner"
    },
    {
      text: `I was struggling with common area maintenance in our 4-unit building. ${siteConfig.brand.name} took over the entire society coordination flawlessly.`,
      initials: "PR",
      name: "Priya R.",
      role: "Apartment Owner"
    }
  ];

  return (
    <div ref={container} className="bg-white text-gray-800 font-sans">
      <section className="relative pt-24 pb-32 min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image fill src="/images/villa.jpg" className="object-cover z-0" alt="Background" priority sizes="100vw" />
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="hero-text text-xl md:text-2xl font-serif italic text-cyan-400 mb-4 tracking-wide">
              Comprehensive property management in Hyderabad
            </p>
            <h1 className="hero-text text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 drop-shadow-lg">
              Your Assets, Our Care
            </h1>
            <div className="hero-text flex flex-wrap justify-center gap-4">
              <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1">
                Call Now
              </a>
              <Link href="/services/flat-management" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1">
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Search Widget */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-30">
          <div className="bg-white rounded-3xl md:rounded-full p-6 md:p-2 md:pl-8 shadow-2xl flex flex-col md:flex-row items-center gap-4 md:gap-4">
            <div 
              className="flex-1 flex items-center gap-3 w-full border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 relative cursor-pointer"
              onMouseLeave={() => setOpenLocality(false)}
            >
              <MapPin className="text-cyan-500 w-5 h-5 shrink-0" />
              <div 
                className="w-full flex justify-between items-center font-medium text-gray-700" 
                onClick={() => setOpenLocality(!openLocality)}
              >
                {selectedLocality}
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
              
              {openLocality && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 py-2">
                  {[...siteConfig.localities, "Other"].map((loc) => (
                    <div 
                      key={loc}
                      onClick={() => {
                        setSelectedLocality(loc);
                        setOpenLocality(false);
                      }}
                      className="px-4 py-2 hover:bg-cyan-50 hover:text-cyan-600 transition-colors cursor-pointer text-sm font-medium text-gray-700"
                    >
                      {loc === "Other" ? "Other Locations..." : loc}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div 
              className="flex-1 flex items-center gap-3 w-full border-b md:border-b-0 border-gray-200 pb-4 md:pb-0 relative cursor-pointer"
              onMouseLeave={() => setOpenType(false)}
            >
              <Building className="text-cyan-500 w-5 h-5 shrink-0" />
              <div 
                className="w-full flex justify-between items-center font-medium text-gray-700"
                onClick={() => setOpenType(!openType)}
              >
                {selectedType}
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
              
              {openType && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 py-2">
                  {["Flat", "Apartment", "Villa / Farmhouse", "Plot / Land", "Commercial"].map((type) => (
                    <div 
                      key={type}
                      onClick={() => {
                        setSelectedType(type);
                        setOpenType(false);
                      }}
                      className="px-4 py-2 hover:bg-cyan-50 hover:text-cyan-600 transition-colors cursor-pointer text-sm font-medium text-gray-700"
                    >
                      {type}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <a
              href={widgetWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-3.5 rounded-full font-bold transition-colors text-center"
            >
              Search
            </a>
          </div>
        </div>
      </section>

      {/* 2. Categories */}
      <section className="verticals-section py-24 bg-[#F8FAFC]" id="services">
        <div className="container mx-auto px-4 text-center">
          <p className="font-serif italic text-2xl text-cyan-500 mb-2">Specialized Assets For You</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-16">Asset Categories</h2>

          <div className="flex overflow-x-auto pb-12 snap-x hide-scrollbar gap-6 md:justify-center px-4">
            {[
              { title: "Flat", img: "/images/flat.jpg", href: "/services/flat-management" },
              { title: "Apartment", img: "/images/apartment.jpg", href: "/services/apartment-management" },
              { title: "Villa", img: "/images/villa.jpg", href: "/services/villa-farmhouse" },
              { title: "Plot", img: "/images/plot.jpg", href: "/services/plot-land-management" },
              { title: "Commercial", img: "/images/commercial.jpg", href: "/services/commercial-property" },
            ].map((cat, i) => (
              <Link key={i} href={cat.href} className="vertical-card shrink-0 snap-center group">
                <div className="w-[200px] h-[280px] rounded-[2rem] bg-white shadow-md group-hover:shadow-xl transition-all overflow-hidden flex flex-col relative border border-gray-100">
                  <div className="h-[75%] w-full overflow-hidden relative">
                    <Image fill src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  </div>
                  <div className="h-[25%] flex flex-col items-center justify-center bg-white px-2">
                    <h3 className="font-bold text-gray-900">{cat.title}</h3>
                    <p className="text-xs text-gray-500">See more</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Fiduciary Workflow */}
      <section className="py-24 bg-white" id="workflow">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Image Collage */}
            <div className="relative h-[500px] flex gap-4">
              <div className="flex flex-col gap-4 w-1/2">
                <div className="h-2/3 rounded-[3rem] overflow-hidden shadow-lg relative">
                  <Image fill src="/images/villa.jpg" className="w-full h-full object-cover" alt="Workflow 1" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <div className="h-1/3 rounded-[2rem] overflow-hidden shadow-lg relative">
                  <Image fill src="/images/commercial.jpg" className="w-full h-full object-cover" alt="Workflow 2" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
              </div>
              <div className="flex flex-col gap-4 w-1/2 pt-12">
                <div className="h-1/3 rounded-full overflow-hidden shadow-lg aspect-square relative">
                  <Image fill src="/images/inspection.jpg" className="w-full h-full object-cover" alt="Workflow 3" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <div className="h-2/3 rounded-[3rem] overflow-hidden shadow-lg relative">
                  <Image fill src="/images/flat.jpg" className="w-full h-full object-cover" alt="Workflow 4" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <p className="font-serif italic text-2xl text-cyan-500 mb-2">How We Work</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">Getting Started is Simple</h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Property management shouldn't be stressful. We believe in clear communication, no hidden fees, and taking care of your home exactly the way you would. Here's how we kick things off.
              </p>

              <div className="space-y-8">
                {[
                  { title: "Custom Proposal", desc: "A clear, flat-fee plan made just for your property." },
                  { title: "Your Go-To Manager", desc: "One dedicated person to call whenever you need anything." },
                  { title: "Seamless Handover", desc: "We take the keys, and you take a breather." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start group">
                    <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                      <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Owners Trust Us (4 points from design doc) */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <p className="font-serif italic text-2xl text-cyan-500 mb-2">Absolute Transparency</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Why Property Owners Trust Us</h2>
          </div>

          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory gap-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 md:snap-none hide-scrollbar">
            
            {/* Card 1 */}
            <div className="relative rounded-[2rem] overflow-hidden group h-[450px] flex flex-col justify-end w-[85vw] md:w-auto shrink-0 snap-center">
              <Image fill src="/images/flat.jpg" alt="Verified Repairs" className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-10"></div>
              
              <div className="relative z-20 p-6 flex flex-col gap-3">

                <h3 className="text-2xl font-bold text-white leading-tight">Verified<br/>Repairs</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">Photo-verified repair estimates prior to any maintenance execution.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-[2rem] overflow-hidden group h-[450px] flex flex-col justify-end w-[85vw] md:w-auto shrink-0 snap-center">
              <Image fill src="/images/apartment.jpg" alt="Strict Tenant KYC" className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-10"></div>
              
              <div className="relative z-20 p-6 flex flex-col gap-3">

                <h3 className="text-2xl font-bold text-white leading-tight">Strict<br/>Tenant KYC</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">Strict tenant KYC (police verification + employment verification).</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-[2rem] overflow-hidden group h-[450px] flex flex-col justify-end w-[85vw] md:w-auto shrink-0 snap-center">
              <Image fill src="/images/commercial.jpg" alt="Border-Free Management" className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-10"></div>
              
              <div className="relative z-20 p-6 flex flex-col gap-3">

                <h3 className="text-2xl font-bold text-white leading-tight">Border-Free<br/>Management</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">Dedicated support designed specifically to eliminate timezone friction for NRI property owners.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative rounded-[2rem] overflow-hidden group h-[450px] flex flex-col justify-end w-[85vw] md:w-auto shrink-0 snap-center">
              <Image fill src="/images/plot.jpg" alt="Zero Escrow" className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-10"></div>
              
              <div className="relative z-20 p-6 flex flex-col gap-3">

                <h3 className="text-2xl font-bold text-white leading-tight">Zero<br/>Escrow</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">Zero funds held in escrow: rent transferred directly to owner's designated account.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Geographic Coverage (Gallery Masonry) */}
      <section className="py-24 bg-white" id="coverage">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <p className="font-serif italic text-2xl text-cyan-500 mb-2">Top Coverage</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Geographic Coverage</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px]">
            <div className="rounded-[2rem] overflow-hidden shadow-md relative">
              <Image fill src="/images/apartment.jpg" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gachibowli" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <div className="rounded-[2rem] overflow-hidden shadow-md relative">
              <Image fill src="/images/commercial.jpg" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Jubilee Hills" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <div className="col-span-2 rounded-[2rem] overflow-hidden shadow-md relative group">
              <Image fill src="/images/villa.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Shankarpally" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />

            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 bg-[#F8FAFC]" id="reviews">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <p className="font-serif italic text-2xl text-cyan-500 mb-2">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-primary)]">What Clients Say About Us</h2>
          </div>

        </div>

        {/* Full-width slider */}
        <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar gap-6 md:gap-8 px-4 md:px-12 xl:px-[calc((100vw-72rem)/2+2rem)] w-full">
          {reviewsData.map((review, i) => (
            <div key={i} className="w-[85vw] md:w-[400px] shrink-0 snap-center bg-white rounded-[2rem] shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full border border-gray-100">
              <div className="p-8 flex-1">
                <Quote className="w-8 h-8 text-cyan-200 mb-4" />
                <p className="text-gray-600 leading-relaxed text-sm">
                  {review.text}
                </p>
              </div>
              <div className="bg-cyan-50 p-6 flex items-center gap-4 border-t border-cyan-100 mt-auto">
                <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-primary)] text-sm">{review.name}</h3>
                  <p className="text-xs text-cyan-700">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 bg-white" id="faq">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 flex flex-col items-center">
            <p className="font-serif italic text-2xl text-cyan-500 mb-2">Queries Solved</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-[2rem] shadow-sm overflow-hidden transition-all duration-300 border ${isOpen ? 'border-cyan-500 ring-2 ring-cyan-100' : 'border-gray-200 hover:border-cyan-300'}`}
                >
                  <div
                    className="flex items-center justify-between p-6 cursor-pointer"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                  >
                    <h3 className="text-lg font-bold text-gray-900 pr-8">
                      {faq.q}
                    </h3>
                    <div className={`w-10 h-10 bg-cyan-50 text-cyan-600 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-cyan-500 text-white' : ''}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>

                  <div
                    className={`px-6 text-gray-600 leading-relaxed transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
                  >
                    {faq.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
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
                  <Image src="/images/flat.jpg" alt="Property" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-[var(--color-primary)] object-cover z-30 relative" />
                  <Image src="/images/apartment.jpg" alt="Property" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-[var(--color-primary)] object-cover z-20 relative" />
                  <Image src="/images/villa.jpg" alt="Property" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-[var(--color-primary)] object-cover z-10 relative" />
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


