import { Modal } from "clevergy-components";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HelpIcon } from "./svg/HelpIcon";
import { CircleSVG } from "./svg/Circle";
import { MejoraSVG } from "./svg/Mejora";
export const InfoModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { t } = useTranslation();
  return (
    <>
      <button
        className="clevergy-absolute clevergy-top-1 clevergy-right-0"
        onClick={() => setShowModal(true)}
      >
        <HelpIcon />
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="clevergy-text-lightBlue clevergy-text-xl clevergy-w-[175px] clevergy-mx-auto clevergy-text-center clevergy-mb-6 clevergy-mt-[-15px] clevergy-font-bold">
            {t("profiler.modal.title")}
          </div>
          <MejoraSVG className="clevergy-mx-auto clevergy-mb-4" />
          <div className="clevergy-text-grey-p2 clevergy-mb-6s">
            {t("profiler.modal.main")}
          </div>
          <div className="clevergy-font-semibold clevergy-mt-6">
            {t("profiler.modal.assign")}
          </div>
          <div className="clevergy-flex clevergy-relative clevergy-min-h-[579px]">
            <div className="clevergy-w-[175px] clevergy-ml-[-9px]">
              <div className="clevergy-mt-[50px]">
                <div className="clevergy-text-lightBlue clevergy-font-bold ">
                  🔥 {t("profiler.profiles.top_saver")}
                </div>
                <div className="clevergy-text-xs clevergy-text-grey-p2">
                  {t("profiler.modal.description1")}
                </div>
              </div>
              <div className="clevergy-mt-[50px]">
                <div className="clevergy-text-houseGreen clevergy-font-bold ">
                  😃 {t("profiler.profiles.saver")}
                </div>
                <div className="clevergy-text-xs clevergy-text-grey-p2">
                  {t("profiler.modal.description2")}
                </div>
              </div>
              <div className="clevergy-mt-[50px]">
                <div className="clevergy-text-darkOrange clevergy-font-bold ">
                  🙂 {t("profiler.profiles.medium")}
                </div>
                <div className="clevergy-text-xs clevergy-text-grey-p2">
                  {t("profiler.modal.description3")}
                </div>
              </div>
              <div className="clevergy-mt-[50px]">
                <div className="clevergy-text-houseRed clevergy-font-bold ">
                  💪 {t("profiler.profiles.can_improve")}
                </div>
                <div className="clevergy-text-xs clevergy-text-grey-p2">
                  {t("profiler.modal.description4")}
                </div>
              </div>
            </div>
            <CircleSVG className="clevergy-absolute clevergy-top-0 clevergy-right-[-16px]" />
          </div>
        </Modal>
      )}
    </>
  );
};
