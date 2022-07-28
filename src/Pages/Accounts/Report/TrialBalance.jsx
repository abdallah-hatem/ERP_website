import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import SearchBar from "../../Closing/SearchBar";

function TrialBalance() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    start_date: "",
    end_date: "",
  });

  const [values, setValues] = useState(defaultValues.current);

  function handleSubmit(e) {
    // e.preventDefault();
    for (const [key, value] of Object.entries(values)) {
      if (!value) {
        alert(t("Fill the inputs"));
        return;
      }
    }
  }
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    function formattedDate(name) {
      return `${name.getDate()}/${name.getMonth() + 1}/${name.getFullYear()}`;
    }

    values["start_date"] = formattedDate(startDate);
    values["end_date"] = formattedDate(endDate);
  }, [startDate, endDate]);

  const dateData = [
    { label: "Start Date :", selected: startDate, onChange: setStartDate },
    { label: "End Date :", selected: endDate, onChange: setEndDate },
  ];

  useEffect(() => {
    console.log(values);
  }, [values, startDate, endDate]);
  return (
    <FormComponent hideHeader>
      <SearchBar listView handleSubmit={handleSubmit} dateData={dateData} />
    </FormComponent>
  );
}

export default TrialBalance;
