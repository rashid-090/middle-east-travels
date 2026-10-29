import VisaDetailClient from "./VisaDetailClient";
import { client, urlFor } from "@/lib/sanity";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;

  try {
    const query = `*[_type == "visaService" && (slug.current == $id || _id == $id || slug.current match $id)][0]{
      title,
      overview,
      image
    }`;
    const data = await client.fetch(query, { id: String(id) });
    const country = data?.title
      ? data.title.replace(/visa/i, "").trim()
      : "International";
    const title = data?.title
      ? `${data.title} | Requirements, Fees & Fast Processing | Middle East Travels`
      : "Visa Service Details | Middle East Travels";
    const description =
      data?.overview ||
      `Apply for ${country} Visa with Middle East Travels. Fast-track appointment booking, document guidance, and expert assistance in Calicut, Kerala.`;
    const imageUrl = data?.image
      ? urlFor(data.image)?.width(800).url()
      : "https://cdn.sanity.io/images/j088vign/production/6c3e0483ccd2612eed4a76b4489f7d48390cf542-400x400.webp";

    return {
      title: {
        absolute: title,
      },
      description,
      alternates: {
        canonical: `https://middleeasttravels.com/visas/${id}`,
      },
      openGraph: {
        title,
        description,
        url: `https://middleeasttravels.com/visas/${id}`,
        images: [{ url: imageUrl, alt: title }],
      },
    };
  } catch {
    return {
      title: {
        absolute: "Visa Service Details | Middle East Travels",
      },
      description:
        "Apply for your visa with Middle East Travels. Fast processing and expert assistance.",
      alternates: {
        canonical: `https://middleeasttravels.com/visas/${id}`,
      },
    };
  }
}

export default function VisaDetailPage() {
  return <VisaDetailClient />;
}
