import { Loader } from "clevergy-components";

import { useEffect } from "react";
import { FC } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { clevergyPostMessage } from "../../utils/postMesssage";
import { Feedback } from "./components/Feedback";
import { useGetTip } from "./hooks/useGetTips";
import { useUpdateTip } from "./hooks/useUpdateTips";
import { useColor } from "../../context/hooks/useColor";

export const Tips: FC<{ cups: string; token: string }> = ({ cups, token }) => {
  const [like, setLike] = useState<boolean>();
  const [error, setError] = useState<string>();
  const { t } = useTranslation();
  const { mutateAsync, isLoading: loading } = useUpdateTip();
  const { data, isLoading, isFetched } = useGetTip({ cups });

  const { primary } = useColor();

  useEffect(() => {
    if (isFetched && !data) {
      clevergyPostMessage({ tips: "empty" });
    }
  }, [isFetched, data]);

  const updateLike = async (like: boolean) => {
    try {
      await mutateAsync({ payload: { id: data!.id, like, cups, token } });
      setLike(like);

      clevergyPostMessage({ tipsLiked: like });
    } catch (e) {
      setError(t("error"));
    }
  };

  const TipsBody = (
    <div>
      <div className="clevergy-flex clevergy-items-start">
        <div style={{ width: 24 }} className="clevergy-pt-1 clevergy-mr-1">
          <Book />
        </div>
        <div
          className=" clevergy-text-xl clevergy-font-semibold "
          style={{ color: primary }}
        >
          {t(data?.title ?? "")}
        </div>
      </div>
      <div
        className="clevergy-bg-gray-500 clevergt-text-xs clevergy-text-white clevergy-rounded clevergy-px-1 clevergy-my-2"
        style={{ width: "fit-content" }}
      >
        {t(`tips.${data?.tag}` ?? "")}
      </div>
      <div className="">{t(data?.text ?? "")}</div>
      <div className="clevergy-flex clevergy-justify-between clevergy-items-center clevergy-mt-6">
        {!like ? (
          <>
            <div>
              <div className="clevergy-font-semibold clevergy-text-xs">
                {t("tips.util")}
              </div>
              {error && (
                <div className="clevergy-text-xs clevergy-text-red clevergy-text-center">
                  {error}
                </div>
              )}
            </div>
            <div className="clevergy-flex">
              <Feedback
                loading={loading}
                className="clevergy-border-acidGreen"
                onClick={() => {
                  updateLike(true);
                }}
              >
                👍
              </Feedback>
              <Feedback
                loading={loading}
                className="clevergy-border-darkOrange clevergy-ml-4"
                onClick={() => {
                  updateLike(false);
                }}
              >
                👎
              </Feedback>
            </div>
          </>
        ) : (
          t("tips.thanks")
        )}
      </div>
    </div>
  );
  return (
    <div>
      {isLoading && <Loader />}
      {data && !isLoading && TipsBody}
      {!data && isFetched && !isLoading && t("No hay mas tips para ti!")}
    </div>
  );
};

const Book = () => {
  const { primary } = useColor();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 12V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H6.5C5.11929 21 4 19.8807 4 18.5V18.5C4 17.1193 5.11929 16 6.5 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12V7C20 5.11438 20 4.17157 19.4142 3.58579C18.8284 3 17.8856 3 16 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V18.5"
        stroke={primary}
        strokeWidth="2"
      />
      <path
        d="M9 8L15 8"
        stroke={primary}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
