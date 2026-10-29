import TourPackageDetailClient from "./TourPackageDetailClient";
import { client, urlFor } from "@/lib/sanity";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;

  try {
    const query = `*[_type == "tourPackage" && (slug.current == $id || _id == $id || slug.current match $id)][0]{
      title,
      overview,
      image
    }`;
    const data = await client.fetch(query, { id: String(id) });
    const title = data?.title
      ? `${data.title} Tour Package | Middle East Travels`
      : "Holiday Tour Package Details | Middle East Travels";
    const description =
      data?.overview ||
      "Explore detailed itinerary, inclusions, pricing, and hotel accommodations for this tour package with Middle East Travels Calicut.";
    const imageUrl = data?.image
      ? urlFor(data.image)?.width(800).url()
      : "https://cdn.sanity.io/images/j088vign/production/6c3e0483ccd2612eed4a76b4489f7d48390cf542-400x400.webp";

    return {
      title: {
        absolute: title,
      },
      description,
      alternates: {
        canonical: `https://middleeasttravels.com/tour-packages/${id}`,
      },
      openGraph: {
        title,
        description,
        url: `https://middleeasttravels.com/tour-packages/${id}`,
        images: [{ url: imageUrl, alt: title }],
      },
    };
  } catch {
    return {
      title: {
        absolute: "Holiday Tour Package Details | Middle East Travels",
      },
      description:
        "Explore holiday package itinerary, inclusions, and best pricing with Middle East Travels.",
      alternates: {
        canonical: `https://middleeasttravels.com/tour-packages/${id}`,
      },
    };
  }
}

export default function TourPackageDetailPage() {
  return <TourPackageDetailClient />;
}
