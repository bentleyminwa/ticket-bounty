import { Placeholder } from "@/components/custom/placeholder";
import { buttonVariants } from "@/components/ui/button";
import { mockData } from "@/data";
import { ticketsPath } from "@/paths";
import Link from "next/link";

type TicketPageProps = {
  params: Promise<{ ticketId: string }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = mockData.find((ticket) => ticket.id === ticketId);

  if (!ticket) {
    return (
      <Placeholder
        label="Ticket not found"
        button={
          <Link
            href={ticketsPath()}
            className={buttonVariants({ variant: "outline" })}
          >
            Go to Tickets
          </Link>
        }
      />
    );
  }

  return (
    <div>
      <h2>{ticket.title}</h2>
      <p>{ticket.content}</p>
    </div>
  );
};

export default TicketPage;
