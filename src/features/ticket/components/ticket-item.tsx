import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketPath } from "@/paths";
import { Ticket } from "@prisma/client";
import clsx from "clsx";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { TICKET_ICONS } from "../constants";

interface TicketItemProps {
  ticket: Ticket;
  isDetailed?: boolean;
}

export const TicketItem = ({ ticket, isDetailed }: TicketItemProps) => {
  return (
    <div
      className={clsx("w-full flex gap-x-1", {
        "max-w-[420px]": !isDetailed,
        "max-w-[580px]": isDetailed,
      })}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <h3 className="truncate">{ticket.title}</h3>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p
            className={clsx("whitespace-break-spaces", {
              "line-clamp-3": !isDetailed,
            })}
          >
            {ticket.content}
          </p>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-y-1">
        {isDetailed ? null : (
          <Button variant="outline" asChild size="icon">
            <Link href={ticketPath(ticket.id)} className="">
              <LucideSquareArrowOutUpRight className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};
