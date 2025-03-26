import { Heading } from "@/components/custom/heading";
import { mockData } from "@/data";
import { TicketItem } from "@/features/ticket/components/ticket-item";

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets" description="All of your tickets in one place" />

      <div className="w-full flex flex-col gap-y-4 items-center animate-fade-in-from-top">
        {mockData.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
