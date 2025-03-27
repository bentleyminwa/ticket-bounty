import { LucideLoaderCircle } from "lucide-react";

export const Spinner = () => {
  return (
    <div className="flex-1 flex justify-center items-center self-center">
      <LucideLoaderCircle className="h-14 w-14 animate-spin" />
    </div>
  );
};
