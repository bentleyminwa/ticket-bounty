import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const tickets = [
  {
    title: "Ticket 1",
    content: "This is the content of ticket 1 from the database",
    status: "DONE" as const,
  },
  {
    title: "Ticket 2",
    content: "This is the content of ticket 2 from the database",
    status: "OPEN" as const,
  },
  {
    title: "Ticket 3",
    content: "This is the content of ticket 3 from the database",
    status: "IN_PROGRESS" as const,
  },
];

const seed = async () => {
  const t0 = performance.now();
  console.log(`Db seeding started`);

  await prisma.ticket.deleteMany();

  await prisma.ticket.createMany({
    data: tickets,
  });

  const t1 = performance.now();
  console.log(`Db seeding finished in ${t1 - t0} milliseconds`);
};

seed();
