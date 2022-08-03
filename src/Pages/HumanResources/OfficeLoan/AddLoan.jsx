import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ActionsButtons from "../../../Components/Web Components/ActionButtons/ActionsButtons";
import SearchBar from "../../Closing/SearchBar";

function AddLoan() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    name: "",
    details: "",
    phone: "",
    amount: "",
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
      label: "Name :",
      placeholder: "Select Option",
      name: "name",
      chooseOptions: true,
      options: nameOptions,
      handleChange,
      value: values["name"],
    },
    {
      label: "Phone :",
      placeholder: "Phone",
      name: "phone",
      type: "number",
      handleChange,
      value: values["phone"],
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
      label: "Payment Type :",
      placeholder: "Select Option",
      name: "payment_type",
      chooseOptions: true,
      options: paymentOptions,
      handleChange,
      value: values["payment_type"],
    },
    {
      label: "Details :",
      placeholder: "Details",
      name: "details",
      textArea: true,
      handleChange,
      value: values["details"],
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
        CardTitle="Add Office Loan"
        buttonTitle="Save"
        hideCard={false}
        data={data}
        dateData={dateData}
        values={values}
        startDate={startDate}
        handleSubmit={handleSubmit}
      />

      <ActionsButtons style={{ float: "right" }} buttons={buttons} />
    </>
  );
}

export default AddLoan;
