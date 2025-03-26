import { LucideMessageSquareWarning } from "lucide-react";

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement;
  button?: React.ReactNode;
};

export const Placeholder = ({
  label,
  icon = <LucideMessageSquareWarning width={40} height={40} />,
  button = null,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-4">
      {icon}
      <h2 className="text-center text-lg">{label}</h2>
      {button}
    </div>
  );
};
