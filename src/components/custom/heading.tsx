import { Separator } from "@/components/ui/separator";

type HeadingProps = {
  title: string;
  description?: string;
};

export const Heading = ({ title, description }: HeadingProps) => {
  return (
    <>
      <div className="px-8 py-5">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        {description && <p className="text-sm text-mutedz">{description}</p>}
      </div>

      <Separator />
    </>
  );
};
