import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ActionsButtons from "../../Components/Web Components/ActionButtons/ActionsButtons";
import SearchBar from "../Closing/SearchBar";

function AddService() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    service_name: "",
    description: "",
    charge: "",
    amount: "",
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
      label: "Service Name :",
      placeholder: "Service Name",
      name: "service_name",
      handleChange,
      value: values["service_name"],
    },
    {
      label: "Charge :",
      placeholder: "Charge",
      name: "charge",
      handleChange,
      value: values["charge"],
    },
    {
      label: "Description :",
      placeholder: "Description",
      name: "description",
      textArea: true,
      handleChange,
      value: values["description"],
    },
    {
      label: "VAT :",
      placeholder: "2.00 %",
      name: "vat",
      handleChange,
      value: values["vat"],
    },
    {
      label: "IGT :",
      placeholder: "2.00 %",
      name: "igt",
      handleChange,
      value: values["igt"],
    },
  ];

  const buttons = [
    {
      title: "Manage Service",
      path: "manage-service",
      iconClass: "ti-plus",
      class: "btn btn-info m-b-5 m-r-2",
    },
    {
      title: "Service CSV Upload",
      path: "service-csv-upload",
      iconClass: "ti-plus",
      class: "btn btn-primary m-b-5 m-r-2",
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <>
      <SearchBar
        listView
        CardTitle="Add Service"
        buttonTitle="Save"
        hideCard={false}
        data={data}
        handleSubmit={handleSubmit}
      />

      <ActionsButtons style={{ float: "right" }} buttons={buttons} />
    </>
  );
}

export default AddService;
