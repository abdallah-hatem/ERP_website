import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useReactToPrint } from "react-to-print";

import SearchBar from "../../Closing/SearchBar";
import ButtonComponent from "../../../Components/Web Components/ButtonComponent/ButtonComponent";
import ReportTable from "../../Closing/ReportTable";

function InventoryLedger() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    start_date: "",
    end_date: "",
  });
  const [values, setValues] = useState(defaultValues.current);

  function handleSubmit(e) {
    // e.preventDefault();
    for (const [key, value] of Object.entries(values)) {
      if (!value) {
        alert(t("Fill the inputs"));
        return;
      }
    }

    if (!validDate) {
      alert(t("Start date cant be bigger than end date"));
    }
  }

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [validDate, setValidDate] = useState(true);

  const columns = [
    {
      field: "sl",
      caption: t("SL."),
    },
    {
      field: "date",
      caption: t("Date"),
    },
    {
      field: "voucher_no",
      caption: t("Voucher No."),
    },
    {
      field: "voucher_type",
      caption: t("Voucher Type"),
      format: "currency",
    },
    {
      field: "remark",
      caption: t("Remark"),
    },
    {
      field: "debit",
      caption: t("Debit"),
      format: "currency",
    },
    {
      field: "credit",
      caption: t("Credit"),
      format: "currency",
    },
    {
      field: "balance",
      caption: t("Balance"),
      format: "currency",
    },
  ];

  const summary = [
    {
      column: "debit",
      summaryType: "sum",
      valueFormat: "currency",
    },
    {
      column: "credit",
      summaryType: "sum",
      valueFormat: "currency",
    },
    {
      column: "balance",
      summaryType: "sum",
      valueFormat: "currency",
    },
  ];

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const dateData = [
    {
      label: "Start Date :",
      value: "start_date",
      selected: startDate,
      onChange: setStartDate,
    },
    {
      label: "End Date :",
      value: "end_date",
      selected: endDate,
      onChange: setEndDate,
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values, startDate, endDate]);

  return (
    <>
      <SearchBar
        hideHeader
        hideCard={false}
        handleSubmit={handleSubmit}
        dateData={dateData}
        values={values}
        startDate={startDate}
        endDate={endDate}
        setValidDate={setValidDate}
        labelWidth="120px"
        width="60%"
      />

      <div className="d-flex justify-content-end mb-2">
        <ButtonComponent
          title={"Print"}
          style={{ width: "100px" }}
          onClick={handlePrint}
        />
      </div>

      <div ref={componentRef}>
        <ReportTable
          title="Inventory Ledger"
          summary={summary}
          columns={columns}
        />
      </div>
    </>
  );
}

export default InventoryLedger;
