import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import "react-datepicker/dist/react-datepicker.css";
import "./style.scss";
import SearchBar from "../Closing/SearchBar";

function AddPaymentMethod() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    payment_method_name: "",
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

  const data = [
    {
      label: "Payment Method Name :",
      placeholder: "Payment Method Name",
      name: "payment_method_name",
      handleChange,
      value: values["payment_method_name"],
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values]);
  return (
    <SearchBar
      listView
      CardTitle={"Add Payment Method"}
      hideCard={false}
      data={data}
      buttonTitle="Save"
      handleSubmit={handleSubmit}
      colWidth="10"
      labelWidth="250px"
      width="55%"
    />
  );
}

export default AddPaymentMethod;
