import React, { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchBar from "../../Closing/SearchBar";
import ManageSalaryTable from "../Payroll/ManageSalaryTable";

function ExpenseStatement() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    start_date: "",
    end_date: "",
    expense_item_name: "",
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

  const columns = [
    {
      field: "date",
      caption: t("Date"),
      allowEditing: false,
    },
    {
      field: "expense_item_name",
      caption: t("Expense Item Name"),
      allowEditing: false,
    },
    {
      field: "amount",
      caption: t("Amount"),
      allowEditing: false,
    },
  ];

  const summary = [
    {
      column: "amount",
      summaryType: "sum",
      valueFormat: "currency",
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
      label: "Expense Item Name :",
      placeholder: "Select Option",
      name: "expense_item_name",
      chooseOptions: true,
      options,
      handleChange,
      value: values["expense_item_name"],
    },
  ];

  return (
    <>
      <SearchBar
        // listView
        hideHeader
        hideCard={false}
        data={data}
        handleSubmit={handleSubmit}
        dateData={dateData}
        values={values}
        startDate={startDate}
        endDate={endDate}
        setValidDate={setValidDate}
      />

      <ManageSalaryTable
        columns={columns}
        summary={summary}
        title="Expense Statement"
      />
    </>
  );
}

export default ExpenseStatement;
