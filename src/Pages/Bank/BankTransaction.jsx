import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ActionsButtons from "../../Components/Web Components/ActionButtons/ActionsButtons";
import SearchBar from "../Closing/SearchBar";

function BankTransaction() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    bank_name: "",
    description: "",
    id: "",
    amount: "",
    date: "",
    account_type: "",
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

  const nameOptions = [
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
      label: "Cash",
      value: "Cash",
    },
    {
      label: "Bank",
      value: "Bank",
    },
  ];

  const data = [
    {
      label: "Bank Name :",
      placeholder: "Select Option",
      name: "bank_name",
      chooseOptions: true,
      options: nameOptions,
      handleChange,
      value: values["bank_name"],
    },
    {
      label: "Account Type :",
      placeholder: "Select Option",
      name: "account_type",
      chooseOptions: true,
      options: paymentOptions,
      handleChange,
      value: values["account_type"],
    },
    {
      label: "Withdraw / Deposit ID :",
      placeholder: "Withdraw / Deposit ID",
      name: "id",
      handleChange,
      value: values["id"],
    },
    {
      label: "Amount :",
      placeholder: "Amount",
      name: "amount",
      type: "number",
      handleChange,
      value: values["amount"],
    },
    {
      label: "Description :",
      placeholder: "Description",
      name: "description",
      textArea: true,
      handleChange,
      value: values["description"],
    },
  ];

  const buttons = [
    {
      title: "Add Person",
      path: "add-person",
      iconClass: "ti-plus",
      class: "btn btn-info m-b-5 m-r-2",
    },
    {
      title: "Add Payment",
      path: "add-payment",
      iconClass: "ti-plus",
      class: "btn btn-primary m-b-5 m-r-2",
    },
    {
      title: "Manage Person",
      path: "manage person",
      iconClass: "ti-plus",
      class: "btn btn-success m-b-5 m-r-2",
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values, startDate]);

  return (
     <>
        <SearchBar
           listView
           CardTitle="Bank Transaction"
           buttonTitle="Save"
           hideCard={false}
           data={data}
           dateData={dateData}
           values={values}
           startDate={startDate}
           handleSubmit={handleSubmit}
           colWidth="11"
           labelWidth="220px"
           width="60%"
        />

        <ActionsButtons style={{ float: "right" }} buttons={buttons} />
     </>
  );
}

export default BankTransaction;
