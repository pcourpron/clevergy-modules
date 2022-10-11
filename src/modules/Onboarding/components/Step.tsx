import { ReactNode } from "react";

export const Step = ({
  title,
  description,
}: {
  title: string;
  description: ReactNode;
}) => {
  return (
    <div className="clevergy-w-[100vw] clevergy-px-4 clevergy-text-md">
      <h4 className="clevergy-text-xl clevergy-font-semibold clevergy-mb-1 ">
        {title}
      </h4>
      <div className="clevergy-text-lg">{description}</div>
    </div>
  );
};
