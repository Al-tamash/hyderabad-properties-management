import { siteConfig } from "@/site-config";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface Props {
  title: string;
  description: string;
  features: string[];
  whatsappMessage: string;
}

export function ServicePageTemplate({ title, description, features, whatsappMessage }: Props) {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-primary)] mb-6">
            {title}
          </h1>
          <p className="text-xl text-[var(--color-muted)] mb-12 leading-relaxed">
            {description}
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-[var(--color-divider)] p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold mb-8 text-[var(--color-primary)]">Key Inclusions</h2>
            <ul className="grid md:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <span className="text-lg text-[var(--color-foreground)] font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center gap-2"
            >
              Inquire Now <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
