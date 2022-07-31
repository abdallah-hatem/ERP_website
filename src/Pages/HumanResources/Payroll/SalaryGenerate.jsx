import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchBar from "../../Closing/SearchBar";

function SalaryGenerate() {
  const { t } = useTranslation();

  const defaultValues = useRef({
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
      }
    }
  }

  const [startDate, setStartDate] = useState(new Date());

  const dateData = [
    {
      label: "Salary Month :",
      value: "date",
      selected: startDate,
      onChange: setStartDate,
      showMonthYearPicker: true,
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values, startDate]);

  return (
    <SearchBar
      listView
      hideHeader
      hideDays
      buttonTitle="Generate"
      hideCard={false}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      dateData={dateData}
      startDate={startDate}
      values={values}
    />
  );
}

export default SalaryGenerate;
