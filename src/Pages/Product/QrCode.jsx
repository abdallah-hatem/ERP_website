import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import InputComponent from "../../Components/Web Components/InputComponent/InputComponent";
import QrCodeGenerator from "../../Components/Web Components/QrCodeGenerator/QrCodeGenerator";
import SearchBar from "../Closing/SearchBar";

function QrCode({ rowId }) {
  const { t } = useTranslation();

  const defaultValues = useRef({
    quantity: "",
    number: "",
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
      label: "Qr-Code / row :",
      placeholder: "Qr-Code qunatity for each row",
      name: "quantity",
      handleChange,
      value: values["quantity"],
      type: "number",
    },
    {
      label: "No. Of Qr-Code  :",
      placeholder: "No. Of Qr-Code ",
      name: "number",
      handleChange,
      value: values["number"],
      type: "number",
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <FormComponent hideCard hideHeader>
      <SearchBar
        data={data}
        buttonTitle="Generate"
        handleSubmit={handleSubmit}
      />

      <div className="row border-top pt-4 justify-content-center">
        <div className="border p-4">
          <div className="d-flex justify-content-between">
            <p className="text-center" style={{ fontSize: "12px" }}>
              Demo Company
            </p>
            <p style={{ fontSize: "12px" }}>SM</p>
          </div>
          <QrCodeGenerator value="googl.com" />
          <div className="d-flex flex-column">
            <span className="text-center pt-2" style={{ fontSize: "12px" }}>
              Oven
            </span>
            <p className="text-center" style={{ fontSize: "12px" }}>
              $ 10000 Incl. Vat
            </p>
          </div>
        </div>
      </div>

      <ButtonComponent
        style={{ width: "100px", float: "right", marginTop: 20 }}
        title={"Print"}
      />
    </FormComponent>
  );
}

export default QrCode;
