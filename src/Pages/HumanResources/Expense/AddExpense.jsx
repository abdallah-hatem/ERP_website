import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchBar from "../../Closing/SearchBar";

function AddExpense() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    amount: "",
    payment_type: "",
    expense_type: "",
    date: "",
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
  }

  const [startDate, setStartDate] = useState(new Date());

  const dateData = [
    {
      label: "Date :",
      value: "date",
      selected: startDate,
      onChange: setStartDate,
    },
  ];

  const expenseOptions = [
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

  const paymentOptions = [
    {
      label: "Cash Payment",
      value: "Cash Payment",
    },
    {
      label: "Bank Payment",
      value: "Bank Payment",
    },
  ];

  const data = [
    {
      label: "Amount :",
      placeholder: "Amount",
      name: "amount",
      type: "number",
      handleChange,
      value: values["amount"],
    },
    {
      label: "Expense Type :",
      placeholder: "Select Option",
      name: "expense_type",
      chooseOptions: true,
      options: expenseOptions,
      handleChange,
      value: values["expense_type"],
    },
    {
      label: "payment Type :",
      placeholder: "Select Option",
      name: "Payment_type",
      chooseOptions: true,
      options: paymentOptions,
      handleChange,
      value: values["payment_type"],
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values, startDate]);

  return (
    <SearchBar
      listView
      CardTitle="Add Expense"
      hideCard={false}
      data={data}
      handleSubmit={handleSubmit}
      dateData={dateData}
      values={values}
      startDate={startDate}
    />
  );
}

export default AddExpense;
