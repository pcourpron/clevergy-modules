import { useState } from "react";
import { UpdateSettings } from "./container/UpdateSettings";
import { useTranslation } from "react-i18next";
import { useGetUserSettings } from "./hooks/useGetUserSettings";
import { StartSettings } from "./svg/StartSettings";
import { FC } from "react";
import { Loader } from "clevergy-components";

type SettingsProps = {
  token: string;
  cups: string;
  asOverlay?: boolean;
};

export const Settings: FC<SettingsProps> = ({ cups, token, asOverlay }) => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const { t } = useTranslation();

  const { data, refetch } = useGetUserSettings(cups);

  const showSettings = asOverlay ? showOverlay : true;
  return (
    <div>
      {asOverlay && (
        <div className="clevergy-px-6">
          {data && !data?.completed && (
            <div className="clevergy-flex clevergy-flex-col clevergy-items-center">
              <StartSettings />
              <h4 className="clevergy-text-xl clevergy-font-semibold">
                {t("user-settings.start_title")}
              </h4>
              <div className="clevergy-text-center clevergy-py-3">
                {t("user-settings.start_text")}
              </div>
            </div>
          )}
          <button
            onClick={() => setShowOverlay(true)}
            className="clevergy-bg-seaGreen clevergy-text-white clevergy-py-3 clevergy-font-semibold clevergy-rounded clevergy-w-full"
          >
            {data && !data?.completed
              ? t("user-settings.start_button")
              : t("user-settings.settings_button")}
          </button>
        </div>
      )}

      {showSettings && data ? (
        <UpdateSettings
          cups={cups}
          token={token}
          asOverlay={asOverlay}
          refetch={refetch}
          toggleOverlay={() => setShowOverlay(false)}
          userSettings={data}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};
