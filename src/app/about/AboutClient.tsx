"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/site-config";
import { 
  Building2, Users, Wrench, Shield, ClipboardCheck, MessageSquare, 
  MapPin, FileText, CheckCircle2, ChevronDown, Phone,
  ArrowRight, ShieldCheck, Home, Leaf, Map, Briefcase, Key, Star, Camera
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(`Hi ${siteConfig.brand.name}, I would like to know more about your property management services.`)}`;

  return (
    <div className="pb-20 md:pb-0 bg-[var(--color-background)]">
      
      {/* 1. HERO SECTION (Matches Villagex Top Banner) */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/villa.jpg" alt={`About ${siteConfig.brand.name}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[var(--color-primary)]/80"></div>
        </div>
        <div className="relative z-10 text-center text-white flex flex-col items-center pt-16">
          <h1 className="text-5xl md:text-6xl font-semibold mb-4 tracking-tight">
            About Us
          </h1>
          <p className="max-w-2xl text-gray-200 mb-6 px-4">
            We are your trusted local team in Hyderabad, taking care of your properties just like you would—so you can relax, no matter where you are in the world.
          </p>
          <div className="text-[var(--color-accent)] font-semibold flex items-center gap-2 text-sm tracking-widest uppercase">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> <span className="text-white">&gt;&gt;</span> <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE (Matches 3-column "Paradise Village" layout) */}
      <section className="py-24 bg-[var(--color-background)] overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            
            {/* Left Col: Title, Text, Stats, Button */}
            <div className="flex flex-col justify-center h-full">
              <div className="text-[var(--color-accent)] font-semibold uppercase tracking-wider text-sm mb-2">{siteConfig.brand.name}</div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[var(--color-primary)] leading-[1.2]">A team you can actually trust with your keys.</h2>
              <p className="text-[var(--color-muted)] mb-8 leading-relaxed">
                We're a dedicated property management team based right here in Hyderabad. Whether you own a family home, a commercial space, or a vacant plot, we treat your property like it's our own—handling all the everyday headaches so you don't have to.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-y-6 gap-x-4 mb-8">
                <div>
                  <div className="text-3xl font-semibold text-[var(--color-primary)]">20+</div>
                  <div className="text-sm text-[var(--color-muted)]">Properties Managed</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-[var(--color-primary)]">17</div>
                  <div className="text-sm text-[var(--color-muted)]">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-[var(--color-primary)]">100%</div>
                  <div className="text-sm text-[var(--color-muted)]">Transparent Updates</div>
                </div>
              </div>
            </div>

            {/* Middle Col: Staggered Images + Badge */}
            <div className="relative h-full min-h-[400px] flex gap-4">
               {/* Left Image */}
               <div className="w-1/2 h-full rounded-2xl overflow-hidden shadow-lg">
                 <img src="/images/flat.jpg" className="w-full h-full object-cover" alt="Property" />
               </div>
               
               {/* Right Stacked Images */}
               <div className="w-1/2 flex flex-col gap-4">
                 <div className="h-1/2 rounded-2xl overflow-hidden shadow-lg">
                   <img src="/images/villa.jpg" className="w-full h-full object-cover" alt="Property" />
                 </div>
                 <div className="h-1/2 rounded-2xl overflow-hidden shadow-lg">
                   <img src="/images/commercial.jpg" className="w-full h-full object-cover" alt="Property" />
                 </div>
               </div>

               {/* Complete Custody Badge */}
               <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-primary)] text-white p-4 rounded-2xl shadow-2xl z-20 flex flex-col items-center justify-center w-32 border-4 border-white">
                 <span className="text-xs font-semibold text-center leading-tight">Complete<br/>Custody</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO */}
      <section className="py-24 bg-white border-y border-[var(--color-divider)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            
            <div className="w-full lg:w-1/2">
              <div className="rounded-3xl overflow-hidden shadow-sm h-[300px] md:h-[350px] lg:w-[90%] mx-auto">
                <img src="/images/flat.jpg" className="w-full h-full object-cover" alt="What We Do" />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="text-[var(--color-accent)] font-semibold flex items-center gap-2 text-sm tracking-widest uppercase mb-4">
                Our Services
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-primary)] mb-6">What We Do</h2>
              
              <div className="pt-8 border-t border-[var(--color-divider)]">
                <p className="text-lg text-[var(--color-muted)] leading-relaxed font-light">
                  {siteConfig.brand.name} provides end-to-end property care, ensuring your residential and commercial assets in Hyderabad are perfectly maintained and highly profitable. From sourcing verified tenants and executing secure rental agreements, to performing regular inspections and prompt maintenance—we handle all the daily operations so you can enjoy your returns with absolute peace of mind.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. OUR APPROACH */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-20 text-center text-[var(--color-primary)]">How We Manage Your Property</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-between relative">
            <div className="hidden md:block absolute top-6 left-12 right-12 h-0.5 bg-[var(--color-divider)] z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center flex-1">
              <div className="w-12 h-12 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-md shrink-0">01</div>
              <h3 className="text-lg font-bold mb-2 text-[var(--color-primary)] text-center">Understand</h3>
              <p className="text-[var(--color-muted)] text-center text-sm">We understand your property, requirements and current situation.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center flex-1">
              <div className="w-12 h-12 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-md shrink-0">02</div>
              <h3 className="text-lg font-bold mb-2 text-[var(--color-primary)] text-center">Inspect</h3>
              <p className="text-[var(--color-muted)] text-center text-sm">We assess the property's condition and identify immediate needs.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center flex-1">
              <div className="w-12 h-12 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-md shrink-0">03</div>
              <h3 className="text-lg font-bold mb-2 text-[var(--color-primary)] text-center">Coordinate</h3>
              <p className="text-[var(--color-muted)] text-center text-sm">We coordinate tenants, vendors, repairs and property-related tasks.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center flex-1">
              <div className="w-12 h-12 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-md shrink-0">04</div>
              <h3 className="text-lg font-bold mb-2 text-[var(--color-primary)] text-center">Report</h3>
              <p className="text-[var(--color-muted)] text-center text-sm">We keep owners informed through clear updates and photo/video documentation where appropriate.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center flex-1">
              <div className="w-12 h-12 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-md shrink-0">05</div>
              <h3 className="text-lg font-bold mb-2 text-[var(--color-primary)] text-center">Maintain</h3>
              <p className="text-[var(--color-muted)] text-center text-sm">We continue monitoring the property and coordinate ongoing care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY HYDERABAD PROPERTIES MANAGEMENT (Matches "Perfect Destination" vertical list layout) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Col: Clean Grid Images + White box */}
            <div className="w-full lg:w-1/2 relative pb-16">
              <div className="flex gap-4 h-[400px]">
                <div className="w-1/2 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/flat.jpg" className="w-full h-full object-cover" alt="Property Care" />
                </div>
                <div className="w-1/2 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/villa.jpg" className="w-full h-full object-cover" alt="Inspections" />
                </div>
              </div>
              
              {/* White Box overlapping */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white py-6 px-8 rounded-2xl shadow-2xl z-20 flex justify-between items-center border border-gray-100 w-[90%] max-w-sm">
                <div className="text-center flex-1">
                  <h3 className="font-semibold text-[var(--color-primary)] mb-1 text-sm md:text-base">Transparency</h3>
                  <p className="text-xs text-gray-400">Clear reporting</p>
                </div>
                <div className="w-px h-10 bg-gray-200 mx-4"></div>
                <div className="text-center flex-1">
                  <h3 className="font-semibold text-[var(--color-primary)] mb-1 text-sm md:text-base">Reliability</h3>
                  <p className="text-xs text-gray-400">On-ground checks</p>
                </div>
              </div>
            </div>

            {/* Right Col: Title + Vertical List */}
            <div className="w-full lg:w-1/2">
              <div className="text-[var(--color-accent)] font-semibold uppercase tracking-wider text-sm mb-2">Why {siteConfig.brand.name}</div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-[var(--color-primary)] leading-[1.2]">Perfect Partner for Property Owners</h2>
              
              <div className="space-y-8">
                {/* Item 1 */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-primary)] mb-2 text-lg">Local On-Ground Presence</h3>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">We are physically present in Hyderabad to check on your asset and handle local vendor coordination.</p>
                  </div>
                </div>
                
                {/* Item 2 */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0 shadow-md">
                    <ShieldCheck className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-primary)] mb-2 text-lg">Tenant KYC & Verification</h3>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">Strict background checks to ensure reliable occupancy and legal compliance for complete peace of mind.</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Camera className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-primary)] mb-2 text-lg">Photo-Verified Maintenance</h3>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">Visual proof of work done before any vendor payment, ensuring high standards and absolute transparency.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. FIDUCIARY TRUST */}
      <section className="py-24 bg-[var(--color-primary)] text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-[var(--color-accent)]">Your Property. Our Responsibility.</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            {siteConfig.brand.name} acts as a dedicated property custodian and coordinates property-related activities with the owner's interests entirely in mind.
          </p>
          <div className="bg-white/10 p-10 rounded-2xl border border-white/20 inline-block text-left max-w-2xl">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)]" /> Fiduciary Trust
            </h3>
            <p className="text-lg text-gray-300 italic">
              "We treat every property with the care, discipline and accountability expected from a professional custodian."
            </p>
          </div>
        </div>
      </section>

      {/* 8. TRANSPARENCY */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-[var(--color-primary)]">Complete Transparency</h2>
              <p className="text-lg text-[var(--color-muted)] mb-8">
                Property owners should always know what is happening with their asset.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[var(--color-foreground)] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" /> Clear communication
                </li>
                <li className="flex items-center gap-3 text-[var(--color-foreground)] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" /> Transparent service fees
                </li>
                <li className="flex items-center gap-3 text-[var(--color-foreground)] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" /> Rent collection records
                </li>
                <li className="flex items-center gap-3 text-[var(--color-foreground)] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" /> Maintenance updates
                </li>
                <li className="flex items-center gap-3 text-[var(--color-foreground)] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" /> Repair photographs
                </li>
                <li className="flex items-center gap-3 text-[var(--color-foreground)] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" /> Owner approval for major work where applicable
                </li>
              </ul>
            </div>
            
            {/* Simple Visual Reporting Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-[var(--color-divider)] overflow-hidden">
              <div className="bg-[var(--color-primary)] px-6 py-4 border-b border-white/10">
                <h3 className="text-white font-bold tracking-widest text-sm uppercase">Property Update</h3>
              </div>
              <div className="p-8 space-y-6">
                <div>
                  <p className="text-sm text-[var(--color-muted)] uppercase tracking-wider font-semibold mb-1">Property</p>
                  <p className="text-lg text-[var(--color-foreground)] font-medium">Hyderabad Rental Property</p>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-muted)] uppercase tracking-wider font-semibold mb-1">Status</p>
                  <p className="text-lg text-[var(--color-accent)] font-bold">Occupied</p>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-muted)] uppercase tracking-wider font-semibold mb-1">Maintenance</p>
                  <p className="text-lg text-[var(--color-foreground)] font-medium">Completed</p>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-muted)] uppercase tracking-wider font-semibold mb-1">Last Inspection</p>
                  <p className="text-lg text-[var(--color-foreground)] font-medium">Recently Updated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. ON-GROUND VERIFICATION */}
      <section className="py-24 bg-white border-t border-[var(--color-divider)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img src="/images/villa.jpg" alt="On Ground Verification" className="object-cover w-full h-full" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[var(--color-primary)]">Real People. Real Property. On-Ground Presence.</h2>
              <p className="text-lg text-[var(--color-muted)] mb-8 leading-relaxed">
                Property management cannot be handled entirely from a screen. Our approach combines communication with physical property checks and local coordination.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <MapPin className="text-[var(--color-accent)] w-5 h-5" />
                  <span className="font-medium text-[var(--color-foreground)]">Property inspections</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-[var(--color-accent)] w-5 h-5" />
                  <span className="font-medium text-[var(--color-foreground)]">Tenant verification</span>
                </div>
                <div className="flex items-center gap-3">
                  <Wrench className="text-[var(--color-accent)] w-5 h-5" />
                  <span className="font-medium text-[var(--color-foreground)]">Vendor visits</span>
                </div>
                <div className="flex items-center gap-3">
                  <ClipboardCheck className="text-[var(--color-accent)] w-5 h-5" />
                  <span className="font-medium text-[var(--color-foreground)]">Maintenance checks</span>
                </div>
                <div className="flex items-center gap-3">
                  <Camera className="text-[var(--color-accent)] w-5 h-5" />
                  <span className="font-medium text-[var(--color-foreground)]">Photo/video updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="text-[var(--color-accent)] w-5 h-5" />
                  <span className="font-medium text-[var(--color-foreground)]">Local issue resolution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PROPERTY CARE GALLERY */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-[var(--color-primary)]">Property Care in Action</h2>
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {[
              "/images/flat.jpg", 
              "/images/villa.jpg", 
              "/images/commercial.jpg",
              "/images/apartment.jpg", 
              "/images/maintenance.jpg", 
              "/images/inspection.jpg",
              "/images/agreement.jpg", 
              "/images/plot.jpg", 
            ].map((img, i) => (
              <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden shadow-sm shrink-0 snap-center group relative h-48 md:h-64">
                <img src={img} alt={`Gallery ${i}`} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. REVIEWS */}
      <section className="py-24 bg-white border-y border-[var(--color-divider)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-center text-[var(--color-primary)]">What Property Owners Say</h2>
          <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 -mx-4 px-4 md:overflow-visible md:snap-none md:pb-0 md:mx-0 md:px-0">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-[var(--color-background)] p-8 rounded-xl shadow-sm border border-[var(--color-divider)] w-[85vw] sm:w-[60vw] md:w-auto shrink-0 snap-center">
                <div className="flex text-[#FFB800] mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-[var(--color-muted)] mb-8 italic leading-relaxed text-lg">
                  "Managing a property from outside Hyderabad can be difficult. Having a local team coordinate the day-to-day requirements makes the process much easier."
                </p>
                <div className="mt-auto border-t border-[var(--color-divider)] pt-6">
                  <h3 className="font-bold text-[var(--color-primary)]">Property Owner</h3>
                  <p className="text-sm text-[var(--color-muted)]">Hyderabad</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-[var(--color-primary)]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: `What does ${siteConfig.brand.name} do?`,
                a: "We provide comprehensive property management services, coordinating tenants, maintenance, and asset care for owners in Hyderabad."
              },
              {
                q: "Which types of properties do you manage?",
                a: "We manage flats, apartments, villas, farmhouses, open plots, and commercial properties."
              },
              {
                q: "Do you manage properties for owners living outside Hyderabad?",
                a: "Yes, our services are specially designed to give peace of mind to NRI and distant owners who cannot physically visit their property."
              },
              {
                q: "Do you handle tenant coordination?",
                a: "Yes, we handle everything from finding tenants and KYC verification to rent collection and issue mediation."
              },
              {
                q: "How do property inspections work?",
                a: "We schedule regular physical visits to assess condition, identify repair needs, and ensure the property is secure."
              },
              {
                q: "Will I receive updates about my property?",
                a: "Absolutely. We provide regular reports and prompt photo/video updates for any maintenance work or issues."
              },
              {
                q: "How are maintenance requests handled?",
                a: "We coordinate with trusted local vendors to acquire quotes, seek your approval, execute the repairs, and provide visual proof upon completion."
              },
              {
                q: "How can I get started?",
                a: "Simply reach out via Contact Us or WhatsApp. We will discuss your property details and arrange an initial assessment."
              }
            ].map((faq, i) => {
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

      {/* 13. FINAL CTA (Floating Banner Layout) */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-[var(--color-primary)] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
            
            {/* Background Decorative Circles */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-[var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Left Side Content */}
            <div className="relative z-10 max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1.5 rounded-full text-sm font-semibold mb-6 border border-white/20">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)]" /> Professional Care
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white leading-[1.1]">
                Your Property Deserves Professional Care
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed font-medium">
                Whether you own a rental flat, apartment, villa, farmhouse, plot or commercial property in Hyderabad, {siteConfig.brand.name} can help you manage it with greater confidence and transparency.
              </p>
            </div>

            {/* Right Side Buttons and Social Proof */}
            <div className="relative z-10 flex flex-col items-start lg:items-end w-full lg:w-auto shrink-0">
              <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full sm:w-auto">
                <Link href="/contact" className="bg-[var(--color-accent)] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[var(--color-primary)] transition-colors inline-flex items-center justify-center shadow-lg w-full sm:w-auto">
                  Contact Us <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:border-white transition-colors inline-flex items-center justify-center w-full sm:w-auto">
                  WhatsApp Us
                </a>
              </div>
              
              {/* Avatar Group */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-[var(--color-primary)] overflow-hidden"><img src="/images/flat.jpg" className="w-full h-full object-cover" /></div>
                  <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-[var(--color-primary)] overflow-hidden"><img src="/images/villa.jpg" className="w-full h-full object-cover" /></div>
                  <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-[var(--color-primary)] overflow-hidden"><img src="/images/apartment.jpg" className="w-full h-full object-cover" /></div>
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] border-2 border-[var(--color-primary)] flex items-center justify-center text-xs font-bold text-white">+5k</div>
                </div>
                <div className="text-sm font-medium text-gray-300">
                  <span className="text-white font-bold">5/5</span> (20+ properties)
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

