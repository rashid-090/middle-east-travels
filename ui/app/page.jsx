import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TourPackages from "@/components/TourPackages";
import VisaServices from "@/components/VisaServices";
import Counts from "@/components/Counts";
import Blogs from "@/components/Blogs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      {/* Reusable Header Component */}
      <Header />

      {/* Hero, Tour Packages, Visa Services, Counts, Testimonials, Blogs & Contact Sections */}
      <main className="flex-1">
        <Hero />
        <TourPackages />
        <VisaServices />
        <Counts />
        <Testimonials />
        <Blogs />
        <Contact />
      </main>

      {/* Modern Big Footer Component */}
      <Footer />
    </div>
  );
}
