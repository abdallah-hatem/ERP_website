import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ActionsButtons from "../../Components/Web Components/ActionButtons/ActionsButtons";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";
import SearchBar from "../Closing/SearchBar";
import { useReactToPrint } from "react-to-print";
import ReportTable from "../Closing/ReportTable";

function SupplierLedger() {
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
      field: "date",
      caption: t("Date"),
      dataType: "date",
    },
    {
      field: "description",
      caption: t("Description"),
    },
    {
      field: "voucher_no",
      caption: t("Voucher No."),
    },
    {
      field: "debit",
      caption: t("Debit"),
      dataType: "number",
      format: "currency",
    },
    {
      field: "credit",
      caption: t("Credit"),
      dataType: "number",
      format: "currency",
    },
    {
      field: "balance",
      caption: t("Balance"),
      dataType: "number",
      format: "currency",
    },
  ];

  const data = [
    {
      date: "2022 / 03 / 08",
      description: "Supplier .Anderson",
      voucher_no: "20220308110905",
      debit: 5,
      credit: 5,
      balance: 5,
    },
    {
      date: "2022 / 010 / 08",
      description: "Supplier .Anderson",
      voucher_no: "20220308110905",
      debit: 5,
      credit: 5,
      balance: 5,
    },
    {
      date: "2022 / 03 / 08",
      description: "Supplier .Justin",
      voucher_no: "20220308110905",
      debit: 5,
      credit: 5,
      balance: 5,
    },
    {
      date: "2022 / 03 / 08",
      description: "Supplier .Justin",
      voucher_no: "20220308110905",
      debit: 5,
      credit: 5,
      balance: 5,
    },
    {
      date: "2022 / 03 / 08",
      description: "Supplier .Nelson",
      voucher_no: "20220308110905",
      debit: 5,
      credit: 5,
      balance: 5,
    },
    {
      date: "2022 / 03 / 08",
      description: "Supplier .Nelson",
      voucher_no: "20220308110905",
      debit: 5,
      credit: 5,
      balance: 5,
    },
  ];

  const buttons = [
    {
      title: "Add Supplier",
      path: "add-supplier",
      iconClass: "ti-plus",
      class: "btn btn-info m-b-5 m-r-2",
    },
    {
      title: "Manage Supplier",
      path: "supplier-list",
      iconClass: "ti-align-justify",
      class: "btn btn-primary m-b-5 m-r-2",
    },
  ];

  const summary = [
    {
      column: "balance",
      summaryType: "sum",
      valueFormat: "currency",
    },
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
  ];

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

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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
        startDate={startDate}
        endDate={endDate}
        values={values}
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
          hideCaption
          title="Supplier Ledger"
          data={data}
          summary={summary}
          columns={columns}
        />
      </div>

      <ActionsButtons style={{ float: "right" }} buttons={buttons} />
    </>
  );
}

export default SupplierLedger;
