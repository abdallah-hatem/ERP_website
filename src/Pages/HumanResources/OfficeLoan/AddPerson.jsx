import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchBar from "../../Closing/SearchBar";

function AddPerson() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    name: "",
    address: "",
    Phone: "",
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
      label: "Name :",
      placeholder: "Name",
      name: "name",
      handleChange,
      value: values["name"],
    },
    {
      label: "Phone :",
      placeholder: "Phone",
      name: "Phone",
      type: "number",
      handleChange,
      value: values["Phone"],
    },
    {
      label: "Address :",
      placeholder: "Address",
      name: "address",
      textArea: true,
      handleChange,
      value: values["address"],
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
     <SearchBar
        listView
        CardTitle="Add Person"
        buttonTitle="Save"
        hideCard={false}
        data={data}
        handleSubmit={handleSubmit}
        colWidth="10"
        labelWidth="200px"
        width="60%"
     />
  );
}

export default AddPerson;
