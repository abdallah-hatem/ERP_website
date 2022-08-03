import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ActionsButtons from "../../Components/Web Components/ActionButtons/ActionsButtons";
import { ImageUploader } from "../../Components/Web Components/ImageUploader/ImageUploader";
import SearchBar from "../Closing/SearchBar";

function AddNewBank() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    bank_name: "",
    signature_picture: "",
    ac_name: "",
    ac_number: "",
    branch: "",
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
      label: "Bank Name :",
      placeholder: "Bank Name",
      name: "bank_name",
      handleChange,
      value: values["bank_name"],
    },
    {
      label: "A/C Name :",
      placeholder: "A/C Name",
      name: "ac_name",
      handleChange,
      value: values["ac_name"],
    },
    {
      label: "A/C Number :",
      placeholder: "A/C Number",
      name: "ac_number",
      type: "number",
      handleChange,
      value: values["ac_number"],
    },
    {
      label: "Branch :",
      placeholder: "Branch",
      name: "branch",
      handleChange,
      value: values["branch"],
    },
    {
      label: "Signature Picture :",
      placeholder: "Signature Picture",
      name: "signature_picture",
      handleChange,
      value: values["signature_picture"],
      children: <ImageUploader />,
    },
  ];

  const buttons = [
    {
      title: "Add Person",
      path: "add-person",
      iconClass: "ti-plus",
      class: "btn btn-info m-b-5 m-r-2",
    },
    {
      title: "Add Payment",
      path: "add-payment",
      iconClass: "ti-plus",
      class: "btn btn-primary m-b-5 m-r-2",
    },
    {
      title: "Manage Person",
      path: "manage person",
      iconClass: "ti-plus",
      class: "btn btn-success m-b-5 m-r-2",
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <>
      <SearchBar
        listView
        CardTitle="Add New Bank"
        buttonTitle="Save"
        hideCard={false}
        data={data}
        handleSubmit={handleSubmit}
      />

      <ActionsButtons style={{ float: "right" }} buttons={buttons} />
    </>
  );
}

export default AddNewBank;
