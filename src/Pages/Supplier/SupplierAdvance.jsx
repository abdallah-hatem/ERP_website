import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import InputComponent from "../../Components/Web Components/InputComponent/InputComponent";

function SupplierAdvance() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    supplier_name: "",
    advance_type: "",
    amount: 0,
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
  const AdvanceTypeOptions = [
    {
      label: "Payment",
      value: "payment",
    },
    {
      label: "Receive",
      value: "receive",
    },
  ];
  const data = [
    {
      label: "Supplier Name :",
      placeholder: "Select Option",
      name: "supplier_name",
      chooseOptions: true,
      options: options,
      handleChange,
      value: values["supplier_name"],
    },
    {
      label: "Advance Type :",
      placeholder: "Select Option",
      name: "advance_type",
      chooseOptions: true,
      options: AdvanceTypeOptions,
      handleChange,
      value: values["advance_type"],
    },
    {
      label: "Amount :",
      placeholder: "Amount",
      name: "amount",
      type: "number",
      handleChange,
      value: values["amount"],
    },
  ];
  useEffect(() => {
    console.log(values);
  }, [values]);
  return (
    <FormComponent title="Supplier Advance">
      <div className="row">
        <div className="col-lg-10">
          {data.map((el) => (
            <InputComponent
              label={el.label}
              placeholder={el.placeholder}
              chooseOptions={el.chooseOptions}
              options={el.options}
              type={el.type}
              width="70%"
              handleChange={el.handleChange}
              name={el.name}
              //   value={el.value}
            />
          ))}
          <div style={{ width: "20%", float: "right", marginTop: 20 }}>
            <ButtonComponent onClick={handleSubmit} title={"Submit"} />
          </div>
        </div>
      </div>
    </FormComponent>
  );
}

export default SupplierAdvance;
