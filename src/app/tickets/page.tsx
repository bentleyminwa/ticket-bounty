import { Heading } from "@/components/custom/heading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mockData } from "@/data";
import { ticketPath } from "@/paths";
import { LucideBadgeCheck, LucideFileText, LucidePencil } from "lucide-react";
import Link from "next/link";

const TICKET_ICONS = {
  OPEN: <LucideFileText />,
  IN__PROGRESS: <LucidePencil />,
  DONE: <LucideBadgeCheck />,
};

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets" description="All of your tickets in one place" />

      <div className="w-full flex flex-col gap-y-4 items-center animate-fade-in-from-top">
        {mockData.map((ticket) => (
          <Card key={ticket.id} className="w-full max-w-[420px]">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <span>{TICKET_ICONS[ticket.status]}</span>
                <h3 className="truncate">{ticket.title}</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3 whitespace-break-spaces">
                {ticket.content}
              </p>
            </CardContent>
            <CardFooter>
              <Link href={ticketPath(ticket.id)} className="text-sm underline">
                View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
