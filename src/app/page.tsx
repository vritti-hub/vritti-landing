import Hero from '@/components/sections/Hero';
import PainPoints from '@/components/sections/PainPoints';
import SolutionOverview from '@/components/sections/SolutionOverview';
import IndustryCards from '@/components/sections/IndustryCards';
import CTASection from '@/components/sections/CTASection';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Vritti AI",
  "description": "AI Business Operating System for Small Businesses",
  "url": "https://vritti.ai",
  "logo": "https://vritti.ai/vritti-full-logo.png",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "Vritti AI Team"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1234567890",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://twitter.com/vrittiAI",
    "https://linkedin.com/company/vritti-ai"
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Vritti AI Business Operating System",
  "description": "AI-powered business operating system that transforms small business operations through WhatsApp integration and intelligent automation",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web-based, iOS, Android",
  "offers": {
    "@type": "Offer",
    "price": "114",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "RecurringPriceSpecification",
      "billingDuration": "P1M",
      "billingIncrement": 1
    }
  },
  "featureList": [
    "Smart Scheduling",
    "Customer Intelligence", 
    "Inventory Tracking",
    "Financial Intelligence",
    "AI Assistant",
    "WhatsApp Integration"
  ],
  "author": {
    "@type": "Organization",
    "name": "Vritti AI"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Vritti AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vritti AI is an AI-powered business operating system designed for small businesses. It replaces WhatsApp chaos with intelligent automation, providing enterprise-grade business intelligence through a simple conversational interface."
      }
    },
    {
      "@type": "Question", 
      "name": "Do I need technical knowledge to use Vritti AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No technical knowledge is required. Setup is completely conversational - you simply tell the AI about your business, and it automatically configures everything for you."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Vritti AI cost?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Vritti AI costs $114/month which includes everything: $99 for AI + ~$15 for hosting. Additional business locations are $29/month each. No hidden fees, no contracts."
      }
    },
    {
      "@type": "Question",
      "name": "Which types of businesses can use Vritti AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vritti AI is built for service-based small businesses including salons & spas, restaurants, medical clinics, driving schools, fitness centers, and retail stores."
      }
    },
    {
      "@type": "Question",
      "name": "How does WhatsApp integration work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Customers continue using WhatsApp to contact your business. The AI automatically handles bookings, inquiries, and follow-ups through your existing WhatsApp number. No app downloads required for customers."
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page Content */}
      <Hero />
      <PainPoints />
      <SolutionOverview />
      <IndustryCards />
      <CTASection />
    </>
  );
}