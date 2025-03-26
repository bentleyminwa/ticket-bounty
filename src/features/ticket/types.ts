export type TicketStatus = "OPEN" | "IN__PROGRESS" | "DONE";

export type Ticket = {
  id: string;
  title: string;
  content: string;
  status: TicketStatus;
};
