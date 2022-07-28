import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import InputComponent from "../../../Components/Web Components/InputComponent/InputComponent";
import SearchBar from "../../Closing/SearchBar";

function GeneralLedger() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    start_date: "",
    end_date: "",
    transaction_head: "",
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
      label: "General Head :",
      placeholder: "Select Option",
      name: "general_head",
      chooseOptions: true,
      options,
      handleChange,
      value: values["general_head"],
    },
    {
      label: "Transaction Head :",
      placeholder: "Select Option",
      name: "transaction_head",
      handleChange,
      value: values["transaction_head"],
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values, startDate, endDate]);
  return (
    <FormComponent hideHeader>
      <SearchBar
        labelWidth={"300px"}
        data={data}
        listView
        handleSubmit={handleSubmit}
        dateData={dateData}
      />
    </FormComponent>
  );
}

export default GeneralLedger;
