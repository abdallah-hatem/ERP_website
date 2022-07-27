import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import InputComponent from "../../Components/Web Components/InputComponent/InputComponent";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./style.scss";

function OpeningBalance() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    account_head: "",
    voucher_number: "OP-2",
    amount: null,
    remark: "",
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
        return;
      }
    }
  }

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
      label: "Voucher No. :",
      //   placeholder: "Select Option",
      name: "voucher_number",
      //   handleChange,
      value: values["voucher_number"],
      disabled: true,
    },
    {
      label: "Account Head :",
      placeholder: "Select Option",
      name: "account_head",
      chooseOptions: true,
      options: options,
      handleChange,
      value: values["account_head"],
    },

    {
      label: "Amount :",
      placeholder: "0.00",
      name: "amount",
      type: "number",
      handleChange,
      value: values["amount"],
    },
    {
      label: "Remark :",
      placeholder: "Remark",
      name: "remark",
      textArea: true,
      handleChange,
      value: values["remark"],
    },
  ];

  const [startDate, setStartDate] = useState(new Date());

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
    <FormComponent title="Opening Balance">
      <div className="row">
        <div className="col-lg-10">
          {data.map((el) => (
            <InputComponent
              label={el.label}
              placeholder={el.placeholder}
              chooseOptions={el.chooseOptions}
              textArea={el.textArea}
              options={el.options}
              type={el.type}
              width="70%"
              handleChange={el.handleChange}
              name={el.name}
              value={el.value}
              disabled={el.disabled}
            />
          ))}
          <InputComponent width="70%" label={"Date :"}>
            <DatePicker
              dateFormat={"dd/MM/yyyy"}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </InputComponent>
          <div style={{ width: "200px", float: "right", marginTop: 20 }}>
            <ButtonComponent onClick={handleSubmit} title={"Save"} />
          </div>
        </div>
      </div>
    </FormComponent>
  );
}

export default OpeningBalance;
