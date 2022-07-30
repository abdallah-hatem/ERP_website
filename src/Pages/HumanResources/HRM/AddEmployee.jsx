import React, { useCallback, useEffect, useRef, useState } from "react";

import { useTranslation } from "react-i18next";
import AddFormComponent from "../../../Components/Web Components/AddFormComponent/AddFormComponent";
import { ImageUploader } from "../../../Components/Web Components/ImageUploader/ImageUploader";

function AddEmployee({ UpdateData }) {
  const { t, i18n } = useTranslation();

  const defaultValues = useRef({
    first_name: "",
    email: "",
    phone: "",
    address_1: "",
    blood_group: "",
    country: "",
    state: "",
    designation: "",
    hour_rate_salary: "",
    rate_type: "",
    address_2: "",
    last_name: "",
    zip_code: "",
    picture: "",
  });

  const [values, setValues] = useState(defaultValues.current);

  useEffect(() => {
    setValues((prev) => ({ ...prev, ...UpdateData }));
  }, [UpdateData]);

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
      label: "Hourly",
      value: "Hourly",
    },
    {
      label: "Salary",
      value: "Salary",
    },
  ];

  const DesignationOptions = [
    {
      label: "Sale Staff",
      value: "Sale Staff",
    },
    {
      label: "Manager",
      value: "Manager",
    },
  ];

  const DataCol1 = [
    {
      label: "First Name :",
      placeholder: "First Name",
      handleChange: handleChange,
      name: "first_name",
      value: values["first_name"],
    },
    {
      label: "Rate Type :",
      placeholder: "Rate Type",
      handleChange: handleChange,
      name: "rate_type",
      value: values["rate_type"],
      chooseOptions: true,
      options,
    },
    {
      label: "Phone :",
      placeholder: "Phone",
      handleChange: handleChange,
      name: "phone",
      value: values["phone"],
    },
    {
      label: "Address 1 :",
      placeholder: "Address 1",
      handleChange: handleChange,
      name: "address_1",
      value: values["address_1"],
      textArea: true,
    },
    {
      label: "Blood Group :",
      placeholder: "Blood Group",
      handleChange: handleChange,
      name: "blood_group",
      value: values["blood_group"],
    },
  ];

  const DataCol2 = [
    {
      label: "Last Name :",
      placeholder: "Last Name",
      handleChange: handleChange,
      name: "last_name",
      value: values["last_name"],
    },
    {
      label: "Hour Rate/Salary:",
      placeholder: "Hour Rate/Salary",
      handleChange: handleChange,
      name: "hour_rate_salary",
      value: values["hour_rate_salary"],
    },

    {
      label: "E-Mail Address :",
      placeholder: "E-Mail",
      handleChange: handleChange,
      name: "email",
      value: values["email"],
    },

    {
      label: "Address 2 :",
      placeholder: "Address 2",
      handleChange: handleChange,
      name: "address_2",
      value: values["address_2"],
      textArea: true,
    },
    {
      label: "Designation :",
      placeholder: "Designation",
      handleChange: handleChange,
      name: "designation",
      value: values["designation"],
      chooseOptions: true,
      options: DesignationOptions,
    },
    {
      label: "Zip Code :",
      placeholder: "Zip Code",
      handleChange: handleChange,
      name: "zip_code",
      value: values["zip_code"],
    },
    {
      label: "Picture :",
      placeholder: "Picture",
      handleChange: handleChange,
      name: "picture",
      value: values["picture"],
      component: <ImageUploader />,
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <AddFormComponent
      title="Add Employee"
      DataCol1={DataCol1}
      DataCol2={DataCol2}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      values={values}
    />
  );
}

export default AddEmployee;
