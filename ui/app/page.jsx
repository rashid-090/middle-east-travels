import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import TourPackages from "@/components/TourPackages";
import VisaServices from "@/components/VisaServices";

const Counts = dynamic(() => import("@/components/Counts"), {
  loading: () => <div className="w-full h-44 bg-slate-100 animate-pulse my-8 rounded-3xl" />,
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="w-full h-72 bg-slate-100 animate-pulse my-8 rounded-3xl" />,
});

const Flight = dynamic(() => import("@/components/Flight"), {
  loading: () => (
    <div className="w-full h-[400px] bg-slate-100 animate-pulse my-8 rounded-3xl flex items-center justify-center text-slate-400 font-medium text-sm">
      Loading interactive flight map...
    </div>
  ),
});

const HappyCustomers = dynamic(() => import("@/components/HappyCustomers"), {
  loading: () => <div className="w-full h-72 bg-slate-100 animate-pulse my-8 rounded-3xl" />,
});

const Contact = dynamic(() => import("@/components/contact"), {
  loading: () => <div className="w-full h-96 bg-slate-100 animate-pulse my-8 rounded-3xl" />,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Hero, Tour Packages, Visa Services, Counts, Testimonials, Blogs & Contact Sections */}
      <main className="flex-1">
        <Hero />
        <TourPackages />
        <VisaServices />
        <Counts />
        <Testimonials />
        <Flight />
        <HappyCustomers />
        <Contact />
      </main>
    </div>
  );
}
