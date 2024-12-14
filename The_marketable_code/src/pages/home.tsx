import { FAQSection } from "../components/faq/faq-section";
import FeaturesSection from "../components/features/features-section";
import CourseSection from "../components/hero/CourseSection";
import { HeroSection } from "../components/hero/hero-section";
import { NewsletterSection } from "../components/newsletter/newsletter-section";
import { TestimonialsSection } from "../components/testimonials/testimonials-section";
import {TutorsSection }from "../components/tutors/tutors-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CourseSection />
      <FeaturesSection />
      <TutorsSection />
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />
    </>
  );
}
