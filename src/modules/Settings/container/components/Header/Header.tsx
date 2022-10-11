import { FC } from "react";

type SettingsTitleProps = {
  title: string;
  content?: string;
};

export const Header: FC<SettingsTitleProps> = (props: SettingsTitleProps) => (
  <div className="clevergy-mt-4 clevergy-mb-6">
    <h2 className="clevergy-font-semibold clevergy-text-xl">{props.title}</h2>
    {props.content && (
      <p className="clevergy-text-darkGrey text-[12px]">{props.content}</p>
    )}
  </div>
);
