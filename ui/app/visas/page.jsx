import VisasClient from "./VisasClient";

export const metadata = {
  title: {
    absolute:
      "Browse All Visa Services & Express Processing | Middle East Travels",
  },
  description:
    "Search and compare visa services, processing times, requirements and prices for destinations across Middle East, Asia, Europe, and the Americas.",
  alternates: {
    canonical: "https://middleeasttravels.com/visas",
  },
  openGraph: {
    title:
      "Browse All Visa Services & Express Processing | Middle East Travels",
    description:
      "Search and compare visa services, processing times, requirements and prices for destinations across Middle East, Asia, Europe, and the Americas.",
    url: "https://middleeasttravels.com/visas",
  },
};

export default function VisasPage() {
  return <VisasClient />;
}
