import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import ReportTable from "./ReportTable";
import { useReactToPrint } from "react-to-print";

function ClosingReport() {
  const { t } = useTranslation();

  const columns = [
    {
      field: "sl",
      caption: t("SL No."),
      allowEditing: false,
      hideFilter: true,
    },
    {
      field: "date",
      caption: t("Date"),
      dataType: "date",
    },
    {
      field: "cash_in",
      caption: t("Cash In"),
      hideFilter: true,
    },
    {
      field: "cash_out",
      caption: t("Cash Out"),
      hideFilter: true,
    },

    {
      field: "balance",
      caption: t("Balance"),
      hideFilter: true,
    },
  ];

  const ref = useRef();
  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });

  return (
    <>
      <div ref={ref}>
        <ReportTable columns={columns} title={"Closing Report"} />
      </div>

      <div className="d-flex justify-content-end mb-2">
        <ButtonComponent
          title={"Print"}
          style={{ width: "100px" }}
          onClick={handlePrint}
        />
      </div>
    </>
  );
}

export default ClosingReport;
