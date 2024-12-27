import { JsonLd } from 'react-schemaorg';
import { AutomotiveBusiness, Service, WithContext, FAQPage, HowTo } from 'schema-dts';
import { benefits, faqData } from '../constants';

export const GasServiceSchema = () => {
  const automotiveBusinessData: WithContext<AutomotiveBusiness> = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: "Gas Master",
    url: "https://gas-master.vercel.app",
    logo: "https://gas-master.vercel.app/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+380672324634",
      areaServed: "UA",
      availableLanguage: "Ukrainian",
    },
    sameAs: [
      "https://www.facebook.com/gasmasterlviv",
      "https://www.instagram.com/gasmasterlviv",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "вул. Народна, 7",
      addressLocality: "Львів",
      postalCode: "79000",
      addressCountry: "UA",
    },
    description: "Професійне встановлення та обслуговування газобалонного обладнання у Львові.",
    openingHours: [
      "Mo-Fr 09:00-18:00",
      "Sa 10:00-14:00",
      "Su Closed",
    ],
  };

  const serviceData: WithContext<Service> = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "ГБО встановлення та обслуговування",
    provider: automotiveBusinessData,
    description: "Ми надаємо послугу з професійного встановлення та обслуговування газобалонного обладнання для автомобілів.",
    areaServed: "UA",
  };

  return (
    <>
      <JsonLd item={automotiveBusinessData} />
      <JsonLd item={serviceData} />
    </>
  );
};

export const FaqSchema = () => {
  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLd item={faqSchema} />;
};

export const BenefitsSchema = () => {
  const benefitsSchema: WithContext<HowTo> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Переваги використання ГБО",
    step: benefits.map((benefit) => ({
      "@type": "HowTo",
      name: benefit.title,
      text: benefit.description,
    })),
  };

  return <JsonLd item={benefitsSchema} />;
};