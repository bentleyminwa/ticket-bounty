import { getTickets } from "../queries/get-tickets";
import { TicketItem } from "./ticket-item";

export const TicketList = async () => {
  const tickets = await getTickets();

  return (
    <div className="w-full flex flex-col gap-y-4 items-center animate-fade-in-from-top">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};
