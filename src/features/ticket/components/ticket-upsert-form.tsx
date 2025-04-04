"use client";

import { FieldError } from "@/components/form/field-error";
import { useActionFeedback } from "@/components/form/hooks/use-action-feedback";
import { SubmitButton } from "@/components/form/submit-button";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "@prisma/client";
import { useActionState } from "react";
import { upsertTicket } from "../actions/upsert-ticket";

interface TicketUpsertFormProps {
  ticket?: Ticket;
}

export const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  const upsertTicketAction = upsertTicket.bind(null, ticket?.id);
  const [actionState, action] = useActionState(
    upsertTicketAction,
    EMPTY_ACTION_STATE
  );

  useActionFeedback(actionState, {
    onSuccess: ({ actionState }) => {
      console.log(actionState.message);
    },
    onError: ({ actionState }) => {
      console.log(actionState.message);
    },
  });

  return (
    <form action={action} className="flex flex-col gap-y-2">
      <Label htmlFor="title">Title</Label>
      <Input
        type="text"
        name="title"
        id="title"
        defaultValue={
          (actionState.payload?.get("title") as string) ?? ticket?.title
        }
      />
      <FieldError actionState={actionState} name="title" />

      <Label htmlFor="content">Content</Label>
      <Textarea
        name="content"
        id="content"
        defaultValue={
          (actionState.payload?.get("content") as string) ?? ticket?.content
        }
      />
      <FieldError actionState={actionState} name="content" />

      <SubmitButton label={ticket ? "Update" : "Create"} />
    </form>
  );
};
