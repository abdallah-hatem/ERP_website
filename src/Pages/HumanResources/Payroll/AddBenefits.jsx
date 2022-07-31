import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchBar from "../../Closing/SearchBar";

function AddBenefits() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    salary_benefits: "",
    benefits_type: "",
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
      label: "Salary Benefits :",
      placeholder: "Salary Benefits",
      name: "salary_benefits",
      handleChange,
      value: values["salary_benefits"],
    },
    {
      label: "Benefits Type :",
      placeholder: "Select Option",
      name: "benefits_type",
      chooseOptions: true,
      options: options,
      handleChange,
      value: values["benefits_type"],
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <SearchBar
      listView
      CardTitle="Add Benefits"
      hideCard={false}
      buttonTitle="Save"
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      data={data}
    />
  );
}

export default AddBenefits;
