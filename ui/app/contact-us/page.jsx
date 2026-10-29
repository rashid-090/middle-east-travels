import ContactUsClient from "./ContactUsClient";

export const metadata = {
  title: {
    absolute:
      "Contact Us | Middle East Travels Calicut Office & Branch Addresses",
  },
  description:
    "Contact Middle East Travels in Calicut, Kerala. Call +91 70251 44666, chat on WhatsApp, or visit our head office and branches for flights, tours, and visas.",
  alternates: {
    canonical: "https://middleeasttravels.com/contact-us",
  },
  openGraph: {
    title:
      "Contact Us | Middle East Travels Calicut Office & Branch Addresses",
    description:
      "Contact Middle East Travels in Calicut, Kerala. Call +91 70251 44666, chat on WhatsApp, or visit our head office and branches for flights, tours, and visas.",
    url: "https://middleeasttravels.com/contact-us",
  },
};

export default function ContactUsPage() {
  return <ContactUsClient />;
}
