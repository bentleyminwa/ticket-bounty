"use client";

import { Placeholder } from "@/components/custom/placeholder";

const Error = ({ error }: { error: Error }) => {
  return <Placeholder label={error.message || "Something went wrong"} />;
};

export default Error;
