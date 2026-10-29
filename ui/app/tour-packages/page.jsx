import TourPackagesClient from "./TourPackagesClient";

export const metadata = {
  title: {
    absolute:
      "Holiday Tour Packages | International & Domestic Tours | Middle East Travels",
  },
  description:
    "Book best-selling holiday tour packages from Calicut, Kerala. Explore Dubai, Thailand, Europe, Bali, Singapore and more with flights, hotels, and tours included.",
  alternates: {
    canonical: "https://middleeasttravels.com/tour-packages",
  },
  openGraph: {
    title:
      "Holiday Tour Packages | International & Domestic Tours | Middle East Travels",
    description:
      "Book best-selling holiday tour packages from Calicut, Kerala. Explore Dubai, Thailand, Europe, Bali, Singapore and more with flights, hotels, and tours included.",
    url: "https://middleeasttravels.com/tour-packages",
  },
};

export default function TourPackagesPage() {
  return <TourPackagesClient />;
}
