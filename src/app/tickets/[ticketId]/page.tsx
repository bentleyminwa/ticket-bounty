import { mockData } from "@/data";

type TicketPageProps = {
  params: Promise<{ ticketId: string }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = mockData.find((ticket) => ticket.id === ticketId);

  if (!ticket) {
    return <div>Ticket not found</div>;
  }

  return (
    <div>
      <h2>{ticket.title}</h2>
      <p>{ticket.content}</p>
      <p>{ticket.status}</p>
    </div>
  );
};

export default TicketPage;
