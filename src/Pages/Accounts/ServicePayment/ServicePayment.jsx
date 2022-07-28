import React, { useCallback, useEffect, useRef, useState } from "react";

import { useTranslation } from "react-i18next";
import ButtonComponent from "../../../Components/Web Components/ButtonComponent/ButtonComponent";

import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import InputComponent from "../../../Components/Web Components/InputComponent/InputComponent";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../style.scss";
import CustomerDetailsTable from "./CustomerDetailsTable";
import CustomerPaymentTable from "./CustomerPaymentTable";
import SearchBar from "../../Closing/SearchBar";

function ServicePayment() {
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
        return;
      }
    }
  }

  const { t, i18n } = useTranslation();

  const [startDate, setStartDate] = useState(new Date());

  const dateData = [
    { label: "Date :", selected: startDate, onChange: setStartDate },
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
    function formattedDate(name) {
      return `${name.getDate()}/${name.getMonth() + 1}/${name.getFullYear()}`;
    }

    values["date"] = formattedDate(startDate);
  }, [startDate]);

  useEffect(() => {
    console.log(values);
  }, [values, startDate]);

  return (
    <FormComponent title={"Service Payment"}>
      <SearchBar
        listView
        showButton={false}
        data={data}
        handleSubmit={handleSubmit}
      >
        {dateData.map((el) => (
          <InputComponent label={el.label}>
            <DatePicker
              dateFormat={"dd/MM/yyyy"}
              selected={el.selected}
              onChange={(date) => el.onChange(date)}
            />
          </InputComponent>
        ))}
      </SearchBar>

      <CustomerDetailsTable />

      <CustomerPaymentTable />

      <div style={{ width: "200px", float: "right", marginTop: 20 }}>
        <ButtonComponent onClick={handleSubmit} title={"Save"} />
      </div>
    </FormComponent>
  );
}

export default ServicePayment;
