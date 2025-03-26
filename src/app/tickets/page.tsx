import { mockData } from "@/data";
import { ticketPath } from "@/paths";
import Link from "next/link";

const TICKET_ICONS = {
  OPEN: "🟢",
  IN__PROGRESS: "🟡",
  DONE: "🔵",
};

const TicketsPage = () => {
  return (
    <div>
      {mockData.map((ticket) => (
        <div key={ticket.id}>
          <div>{TICKET_ICONS[ticket.status]}</div>
          <h2 className="text-lg">{ticket.title}</h2>
          <Link href={ticketPath(ticket.id)} className="text-sm underline">
            View
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TicketsPage;
