import React, { useCallback, useEffect, useRef, useState } from "react";

import { useTranslation } from "react-i18next";
import ButtonComponent from "../../../Components/Web Components/ButtonComponent/ButtonComponent";

import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";

import "react-datepicker/dist/react-datepicker.css";
import "../style.scss";
import CustomerDetailsTable from "./CustomerDetailsTable";
import CustomerPaymentTable from "./CustomerPaymentTable";
import SearchBar from "../../Closing/SearchBar";

function CustomerReceive() {
  const defaultValues = useRef({
    date: "",
    remark: "",
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

  const { t, i18n } = useTranslation();

  const [startDate, setStartDate] = useState(new Date());

  const dateData = [
    {
      label: "Date :",
      value: "date",
      selected: startDate,
      onChange: setStartDate,
    },
  ];

  const data = [
    {
      label: "Remark :",
      placeholder: "Remark",
      name: "remark",
      handleChange,
      value: values["remark"],
      textArea: true,
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values, startDate]);

  return (
    <FormComponent title={"Customer Receive"}>
      <SearchBar
        listView
        showButton={false}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        data={data}
        dateData={dateData}
        startDate={startDate}
        values={values}
      />

      <CustomerDetailsTable />

      <CustomerPaymentTable />

      <div style={{ width: "200px", float: "right", marginTop: 20 }}>
        <ButtonComponent onClick={handleSubmit} title={"Save"} />
      </div>
    </FormComponent>
  );
}

export default CustomerReceive;
