import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchBar from "../../Closing/SearchBar";

function PrintSettings() {
  const { t } = useTranslation();

  const [val, setVal] = useState(false);

  const defaultValues = useRef({
    header: "",
    footer: "",
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
      label: "Header :",
      placeholder: "200 Px",
      name: "header",
      value: values["header"],
      type: "number",
      handleChange,
    },
    {
      label: "Footer :",
      placeholder: "200 Px",
      name: "footer",
      value: values["footer"],
      type: "number",
      handleChange,
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <SearchBar
      listView
      hideCard={false}
      CardTitle="Print Settings"
      buttonTitle="Save Changes"
      buttonWidth="180px"
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      data={data}
      colWidth="7"
    />
  );
}

export default PrintSettings;
