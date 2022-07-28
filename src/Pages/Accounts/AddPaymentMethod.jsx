import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import InputComponent from "../../Components/Web Components/InputComponent/InputComponent";

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
        return;
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
      labelWidth: "500px",
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values]);
  return (
    <FormComponent title="Add Payment Method">
      <SearchBar
        listView
        data={data}
        buttonTitle="Save"
        buttonWidth="200px"
        handleSubmit={handleSubmit}
      />
    </FormComponent>
  );
}

export default AddPaymentMethod;
