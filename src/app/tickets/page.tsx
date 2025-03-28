import { CardCompact } from "@/components/custom/card-compact";
import { Heading } from "@/components/custom/heading";
import { Spinner } from "@/components/custom/spinner";
import { TicketList } from "@/features/ticket/components/ticket-list";
import { TicketUpsertForm } from "@/features/ticket/components/ticket-upsert-form";
import { Suspense } from "react";

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets" description="All of your tickets in one place" />

      <CardCompact
        title="Create a new Ticket"
        description="A new ticket will be created"
        content={<TicketUpsertForm />}
        className="w-full max-w-[420px] self-center"
      />

      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default TicketsPage;
