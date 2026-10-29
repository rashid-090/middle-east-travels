import BookFlightsClient from "./BookFlightsClient";

export const metadata = {
  title: {
    absolute:
      "Flight Ticket Booking | Cheap Air Tickets From Calicut | Middle East Travels",
  },
  description:
    "Book cheap flight tickets online with Middle East Travels. Best deals on domestic and international flights from Calicut (CCJ), Kochi (COK), and Kannur (CNN).",
  alternates: {
    canonical: "https://middleeasttravels.com/book-flights",
  },
  openGraph: {
    title:
      "Flight Ticket Booking | Cheap Air Tickets From Calicut | Middle East Travels",
    description:
      "Book cheap flight tickets online with Middle East Travels. Best deals on domestic and international flights from Calicut (CCJ), Kochi (COK), and Kannur (CNN).",
    url: "https://middleeasttravels.com/book-flights",
  },
};

export default function BookFlightsPage() {
  return <BookFlightsClient />;
}
