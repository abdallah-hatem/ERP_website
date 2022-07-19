import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import InputComponent from "../../Components/Web Components/InputComponent/InputComponent";

function AddUnit() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    unit_name: "",
    status: "",
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
      label: "Active",
      value: "active",
    },
    {
      label: "Inactive",
      value: "inactive",
    },
  ];
  const data = [
    {
      label: "Unit Name :",
      placeholder: "Unit Name",
      name: "unit_name",
      handleChange,
      value: values["unit_name"],
    },
    {
      label: "Status :",
      placeholder: "Status",
      name: "status",
      chooseOptions: true,
      options: options,
      handleChange,
      value: values["status"],
    },
  ];
  useEffect(() => {
    console.log(values);
  }, [values]);
  return (
    <FormComponent title="Add Unit">
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
          <>
            <div style={{ width: "200px", float: "right", marginTop: 20 }}>
              <ButtonComponent
                onClick={handleSubmit}
                title={"Save And Add Another"}
              />
            </div>
            <div style={{ width: "100px", float: "right", marginTop: 20 }}>
              <ButtonComponent onClick={handleSubmit} title={"Save"} />
            </div>
          </>
        </div>
      </div>
    </FormComponent>
  );
}

export default AddUnit;
