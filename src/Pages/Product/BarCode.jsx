import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import InputComponent from "../../Components/Web Components/InputComponent/InputComponent";

function BarCode({ rowId }) {
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
        return;
      }
    }
  }

  const data = [
    {
      label: "Barcode / row :",
      placeholder: "Barcode quantity for each row",
      name: "quantity",
      handleChange,
      value: values["quantity"],
      type: "number",
    },
    {
      label: "No. Of Barcode  :",
      placeholder: "No. Of Barcode ",
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
      <div className="barcode-cont">
        {data.map((el) => (
          <div className="input-cont">
            <InputComponent
              label={el.label}
              placeholder={el.placeholder}
              type={el.type}
              //   width="100%"
              handleChange={el.handleChange}
              name={el.name}
              //   value={el.value}
            />
          </div>
        ))}
        <ButtonComponent
          title="Generate"
          onClick={handleSubmit}
          style={{ width: "100px", marginBottom: 15 }}
        />
      </div>

      <div
        style={{
          border: "1px solid lightgray",
          padding: 10,
          width: "20%",
          minWidth: "180px",
          marginTop: 30,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "10px" }}>Demo Company</p>
          <p style={{ fontSize: "10px" }}>Sm</p>
        </div>
        <img
          src="https://saleserpnew.bdtask.com/saleserp_v9.9_demo/vendor/barcode.php?size=30&text=63538869&print=true"
          class="img-responsive center-block qrcode-image"
          alt=""
        />
      </div>

      <ButtonComponent
        style={{ width: "100px", float: "right", marginTop: 20 }}
        title={"Print"}
      />
    </FormComponent>
  );
}

export default BarCode;
