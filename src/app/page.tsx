import type { Metadata } from "next";
import {
  Hero,
  Journey,
  ServicesGrid,
  RealtorCallout,
  TrustStack,
  Testimonials,
  ProjectGallery,
  StartProject,
} from "@/components/sections";

export const metadata: Metadata = {
  description: "Trusted by realtors and homeowners for closing repairs, home maintenance, and transformative renovations in Greenville, SC. Request a free estimate today.",
  alternates: { canonical: '/' },
  openGraph: {
    images: [{ url: 'https://images.pexels.com/photos/35689825/pexels-photo-35689825.jpeg?auto=compress&cs=tinysrgb&w=1920', width: 1920, height: 1280, alt: 'Odio Custom Builders — Home Remodeling & Repairs in Greenville, SC' }],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Journey />
      <ServicesGrid />
      <RealtorCallout />
      <ProjectGallery />
      <StartProject />
      <TrustStack />
      <Testimonials />
    </>
  );
}
