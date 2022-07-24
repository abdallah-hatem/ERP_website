import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import InputComponent from "../../Components/Web Components/InputComponent/InputComponent";

import "react-datepicker/dist/react-datepicker.css";
import "./style.scss";

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
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values]);
  return (
    <FormComponent title="Opening Balance">
      <div className="row">
        <div className="col-lg-9">
          {data.map((el) => (
            <InputComponent
              label={el.label}
              placeholder={el.placeholder}
              handleChange={el.handleChange}
              name={el.name}
              value={el.value}
              width="70%"
            />
          ))}

          <div style={{ width: "200px", float: "right", marginTop: 20 }}>
            <ButtonComponent onClick={handleSubmit} title={"Save"} />
          </div>
        </div>
      </div>
    </FormComponent>
  );
}

export default AddPaymentMethod;
