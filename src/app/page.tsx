"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { siteConfig } from "@/site-config";
import {
  Building, MapPin, ShieldCheck,
  ChevronDown, ArrowRight, CheckCircle2, Quote
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const container = useRef<HTMLDivElement>(null);
  const [selectedType, setSelectedType] = useState("Flat");
  const [selectedLocality, setSelectedLocality] = useState("Gachibowli");
  const [openLocality, setOpenLocality] = useState(false);
  const [openType, setOpenType] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
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

      gsap.from(".portfolio-tile", {
        scrollTrigger: {
          trigger: ".portfolio-section",
          start: "top 75%",
        },
        y: 32,
        opacity: 0,
        duration: 0.7,
        stagger: 0.07,
        ease: "power3.out",
      });
    });

    return () => mm.revert();
  }, { scope: container });

  const widgetWhatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hi ${siteConfig.brand.name}, I want to discuss management for my ${selectedType} in ${selectedLocality}.`
  )}`;

  const faqsData = [
    {
      q: "How does your pricing work without fixed rate cards?",
      a: "We don't work from a rate card. Every property needs a different amount of attention, so we visit first, look at the condition and the work involved, then quote a flat monthly fee. The quote sets out what is covered, so there are no surprise charges later."
    },
    {
      q: "Do you provide assistance with NRI taxation and TDS for rental income?",
      a: "We keep the property records your chartered accountant needs and coordinate with them on TDS and remittance. Tax advice stays with your CA; we handle the property side and make sure paperwork is not holding up your rent."
    },
    {
      q: "How are maintenance costs and repair disputes handled?",
      a: "No repair starts without your approval. We send a photo of the problem and a written estimate from the vendor. Once you approve, the work is done and you get after photos along with the original invoice."
    },
    {
      q: "How do you protect vacant plots from encroachment?",
      a: "We visit on a fixed schedule, check the boundary pillars and fencing, clear weeds and debris so the land stays visible from the road, and put up anti-encroachment boards. Each visit is documented with geo-tagged photos and video, which we send to you."
    }
  ];

  const portfolioData = [
    {
      img: "/images/portfolio/villa-farmhouse-lawn-sunset-hyderabad.jpg",
      alt: "Villa and farmhouse with a manicured lawn and terrace at sunset in Hyderabad",
      type: "Villa & Farmhouse",
      note: "Lawn, terrace and pool upkeep",
      href: "/services/villa-farmhouse",
      span: "col-span-2 row-span-2",
    },
    {
      img: "/images/portfolio/apartment-building-facade-hyderabad.jpg",
      alt: "Modern standalone apartment building with balconies in Hyderabad",
      type: "Apartment",
      note: "Block and common area upkeep",
      href: "/services/apartment-management",
      span: "col-span-1 row-span-2",
    },
    {
      img: "/images/portfolio/tazeen-heights-apartment-moinabad.jpg",
      alt: "Tazeen Heights apartment building with balconies in Moinabad, Hyderabad",
      type: "Apartment · Moinabad",
      note: "Tazeen Heights",
      href: "/services/apartment-management",
      span: "col-span-1 row-span-1",
    },
    {
      img: "/images/portfolio/barka-plaza-commercial-complex-hyderabad.jpg",
      alt: "Barka Plaza mixed-use commercial complex with ground floor retail in Hyderabad",
      type: "Commercial",
      note: "Barka Plaza",
      href: "/services/commercial-property",
      span: "col-span-1 row-span-1",
      focus: "object-[50%_18%]",
    },
    {
      img: "/images/portfolio/ss-convention-showroom-building-hyderabad.jpg",
      alt: "Commercial showroom and office building facades in Hyderabad",
      type: "Commercial",
      note: "SS Convention",
      href: "/services/commercial-property",
      span: "col-span-2 row-span-1",
    },
    {
      img: "/images/portfolio/duplex-villa-garden-hyderabad.jpg",
      alt: "Duplex villa with a private lawn and covered balcony in Hyderabad",
      type: "Villa",
      note: "Standalone home care",
      href: "/services/villa-farmhouse",
      span: "col-span-2 row-span-1",
    },
  ];

  const reviewsData = [
    {
      text: `I live in the US, and managing a villa in Hyderabad used to be a constant worry. Now I get photos before and after every repair, and the estimate comes to me first.`,
      initials: "RK",
      name: "Rahul K.",
      role: "NRI, United States"
    },
    {
      text: `Their tenant checks are thorough. I have not had a single payment issue since ${siteConfig.brand.name} took over my apartment.`,
      initials: "SM",
      name: "Sneha M.",
      role: "Local Investor"
    },
    {
      text: "Rent comes straight to my account, and the lease paperwork is handled without me chasing anyone.",
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
      text: `I was struggling with common area maintenance in our 4-unit building. ${siteConfig.brand.name} took over the society coordination. The common areas are finally looked after properly.`,
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
              Property management in Hyderabad, since 2009
            </p>
            <h1 className="hero-text text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 drop-shadow-lg">
              Your Assets, Our Care
            </h1>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="bg-[var(--color-accent-strong)] hover:bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1">
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
              <MapPin className="text-[var(--color-accent-strong)] w-5 h-5 shrink-0" />
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
                      className="px-4 py-2 hover:bg-cyan-50 hover:text-[var(--color-accent-strong)] transition-colors cursor-pointer text-sm font-medium text-[var(--color-primary)]"
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
              <Building className="text-[var(--color-accent-strong)] w-5 h-5 shrink-0" />
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
                      className="px-4 py-2 hover:bg-cyan-50 hover:text-[var(--color-accent-strong)] transition-colors cursor-pointer text-sm font-medium text-[var(--color-primary)]"
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
              className="w-full md:w-auto bg-[var(--color-accent-strong)] hover:bg-[var(--color-primary)] text-white px-10 py-3.5 rounded-full font-bold transition-colors text-center"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 2. Categories */}
      <section className="verticals-section py-24 bg-[#F8FAFC]" id="services">
        <div className="container mx-auto px-4 text-center">
          <p className="font-serif italic text-2xl text-[var(--color-accent-strong)] mb-2">What We Manage</p>
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
              <p className="font-serif italic text-2xl text-[var(--color-accent-strong)] mb-2">How We Work</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">Getting Started is Simple</h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Property management shouldn&apos;t be stressful. We believe in clear communication, no hidden fees, and taking care of your home exactly the way you would. Here&apos;s how we kick things off.
              </p>

              <div className="space-y-8">
                {[
                  { title: "Custom Proposal", desc: "A clear, flat-fee plan made just for your property." },
                  { title: "Your Go-To Manager", desc: "One dedicated person to call whenever you need anything." },
                  { title: "Simple Handover", desc: "We take the keys, and you take a breather." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start group">
                    <div className="w-12 h-12 bg-cyan-100 text-[var(--color-accent-strong)] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[var(--color-accent-strong)] group-hover:text-white transition-colors">
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
            <p className="font-serif italic text-2xl text-[var(--color-accent-strong)] mb-2">Straight Answers</p>
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
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">Support timed around your timezone, for owners living outside India.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative rounded-[2rem] overflow-hidden group h-[450px] flex flex-col justify-end w-[85vw] md:w-auto shrink-0 snap-center">
              <Image fill src="/images/plot.jpg" alt="Zero Escrow" className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-10"></div>
              
              <div className="relative z-20 p-6 flex flex-col gap-3">

                <h3 className="text-2xl font-bold text-white leading-tight">Zero<br/>Escrow</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">Rent goes straight to your bank account. We never hold your money.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Geographic Coverage (Gallery Masonry) */}
      <section className="py-24 bg-white" id="coverage">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <p className="font-serif italic text-2xl text-[var(--color-accent-strong)] mb-2">Where We Work</p>
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

      {/* 6. Real assets portfolio */}
      <section className="portfolio-section py-24 bg-[var(--color-primary)]" id="properties">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-12">
            <div className="max-w-xl">
              <p className="font-serif italic text-2xl text-cyan-400 mb-2">On The Ground</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white">Managed by HPM</h2>
            </div>
            <div className="max-w-sm">
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Apartment blocks, standalone villas and busy commercial complexes across
                Hyderabad. Every one is inspected in person, photographed, and reported
                back to its owner.
              </p>
              <Link
                href="/services/commercial-property"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 underline underline-offset-4 decoration-cyan-300/40 hover:text-white hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                How we manage commercial assets <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[130px] md:auto-rows-[190px] gap-3 md:gap-4">
            {portfolioData.map((asset) => (
              <Link
                key={asset.img}
                href={asset.href}
                className={`portfolio-tile group relative overflow-hidden rounded-[2rem] ${asset.span} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300`}
              >
                <Image
                  fill
                  src={asset.img}
                  alt={asset.alt}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover ${asset.focus ?? ""} transition-transform duration-700 group-hover:scale-[1.04]`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/95 via-[var(--color-primary)]/40 to-transparent to-65%" />
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-5 [text-shadow:0_1px_12px_rgba(15,23,42,0.9)]">
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-cyan-300 md:text-[11px] md:tracking-[0.16em] whitespace-nowrap">
                    {asset.type}
                  </p>
                  <p className="mt-1 text-xs font-semibold leading-snug text-white md:text-base">
                    {asset.note}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 bg-[#F8FAFC]" id="reviews">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <p className="font-serif italic text-2xl text-[var(--color-accent-strong)] mb-2">Testimonials</p>
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
                <div className="w-12 h-12 bg-[var(--color-accent-strong)] text-white rounded-full flex items-center justify-center font-bold shrink-0">
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

      {/* 8. FAQ */}
      <section className="py-24 bg-white" id="faq">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 flex flex-col items-center">
            <p className="font-serif italic text-2xl text-[var(--color-accent-strong)] mb-2">Common Questions</p>
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
                  <h3 className="m-0">
                    <button
                      type="button"
                      id={`faq-button-${idx}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${idx}`}
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-6 text-left"
                    >
                      <span className="text-lg font-bold text-gray-900 pr-8">
                        {faq.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[var(--color-primary)] text-white' : 'bg-cyan-50 text-[var(--color-accent-strong)]'}`}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`faq-panel-${idx}`}
                    role="region"
                    aria-labelledby={`faq-button-${idx}`}
                    aria-hidden={!isOpen}
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

      {/* 9. Final CTA */}
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
                Whether you own a rental flat, apartment, villa, farmhouse, plot or commercial property in Hyderabad, {siteConfig.brand.name} can take the day-to-day work off your hands.
              </p>
            </div>

            {/* Right Content */}
            <div className="lg:w-2/5 flex flex-col items-start lg:items-end w-full z-10 relative">
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-start lg:justify-end mb-8">
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="bg-[var(--color-accent-strong)] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--color-primary)] transition-colors flex items-center justify-center gap-2 shadow-lg">
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
                  <div className="w-10 h-10 rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-accent-strong)] flex items-center justify-center text-xs font-bold text-white z-0 relative">
                    +20
                  </div>
                </div>
                <div className="text-sm">
                  <span className="font-bold text-white">20+</span> <span className="text-gray-400">properties managed</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}


