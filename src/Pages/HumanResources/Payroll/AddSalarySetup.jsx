import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchBar from "../../Closing/SearchBar";

function AddSalarySetup() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    employee_name: "",
    salary_type: "",
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
      label: "Employee Name :",
      placeholder: "Select Option",
      name: "employee_name",
      chooseOptions: true,
      options,
      handleChange,
      value: values["employee_name"],
    },
    {
      label: "Salary Type :",
      name: "salary_type",
      handleChange,
      value: values["salary_type"],
      disabled: true,
    },
    {
      label: "Gross Salary :",
      name: "gross_salary",
      handleChange,
      value: values["gross_salary"],
      disabled: true,
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <SearchBar
      listView
      CardTitle="Add Salary Setup"
      hideCard={false}
      buttonTitle="Save"
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      data={data}
      colWidth="10"
      labelWidth="200px"
      width="60%"
    />
  );
}

export default AddSalarySetup;
