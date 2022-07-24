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
        return;
      }
    }
  }

  const { t, i18n } = useTranslation();

  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    values["date"] = `${startDate.getDate()}/${
      startDate.getMonth() + 1
    }/${startDate.getFullYear()}`;
  }, [startDate]);

  useEffect(() => {
    console.log(values);
  }, [values, startDate]);

  return (
    <FormComponent title={"Supplier Payment"}>
      <div className="row">
        <div className="col-lg-12">
          <InputComponent label={"Date :"}>
            <DatePicker
              dateFormat={"dd/MM/yyyy"}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </InputComponent>

          <InputComponent
            textArea
            name={"remark"}
            value={values["remark"]}
            placeholder={"Remark"}
            label={"Remark :"}
            handleChange={handleChange}
          />
        </div>
      </div>

      <CustomerDetailsTable />

      <CustomerPaymentTable />

      <div style={{ width: "200px", float: "right", marginTop: 20 }}>
        <ButtonComponent onClick={handleSubmit} title={"Save"} />
      </div>
    </FormComponent>
  );
}

export default CustomerReceive;
