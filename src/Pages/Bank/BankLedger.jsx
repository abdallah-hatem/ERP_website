import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ActionsButtons from "../../Components/Web Components/ActionButtons/ActionsButtons";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import ReportTable from "../Closing/ReportTable";
import SearchBar from "../Closing/SearchBar";
import { useReactToPrint } from "react-to-print";

function BankLedger() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    start_date: "",
    end_date: "",
    bank: "",
  });

  const [values, setValues] = useState(defaultValues.current);

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

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
    },
    {
      field: "Bank Name",
      caption: t("Bank Name"),
    },
    {
      field: "Description",
      caption: t("Description"),
      format: "currency",
    },
    {
      field: "Withdraw / Deposit ID",
      caption: t("Withdraw / Deposit ID"),
    },
    {
      field: "Debit (+)",
      caption: t("Debit (+)"),
      format: "currency",
    },
    {
      field: "Credit (-)",
      caption: t("Credit (-)"),
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
      column: "Debit (+)",
      summaryType: "sum",
      valueFormat: "currency",
    },
    {
      column: "Credit (-)",
      summaryType: "sum",
      valueFormat: "currency",
    },
    {
      column: "balance",
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

  const options = [
    {
      label: "Hudson",
      value: "hudson",
    },
    {
      label: "Mike",
      value: "mike",
    },
    {
      label: "Justin",
      value: "justin",
    },
  ];

  const data = [
    {
      label: "Bank :",
      placeholder: "Select Option",
      name: "bank",
      chooseOptions: true,
      options,
      handleChange,
      value: values["bank"],
    },
  ];

  const buttons = [
    {
      title: "Add New Bank",
      path: "add-new-bank",
      iconClass: "ti-plus",
      class: "btn btn-info m-b-5 m-r-2",
    },
    {
      title: "Bank Transaction",
      path: "bank-transaction",
      iconClass: "ti-plus",
      class: "btn btn-primary m-b-5 m-r-2",
    },
    {
      title: "Manage Bank",
      path: "manage-bank",
      iconClass: "ti-plus",
      class: "btn btn-success m-b-5 m-r-2",
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
      <>
        <SearchBar
          hideHeader
          hideCard={false}
          handleSubmit={handleSubmit}
          dateData={dateData}
          data={data}
          values={values}
          startDate={startDate}
          endDate={endDate}
          setValidDate={setValidDate}
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
            title="Bank Ledger"
            summary={summary}
            columns={columns}
          />
        </div>

        <ActionsButtons style={{ float: "right" }} buttons={buttons} />
      </>
    </>
  );
}

export default BankLedger;
