import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import AddFormComponent from "../../../Components/Web Components/AddFormComponent/AddFormComponent";
import SearchBar from "../../Closing/SearchBar";

function MailSettings() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    protocol: "",
    smtp_host: "",
    smtp_port: "",
    email: "",
    password: "",
    sale: false,
    service: false,
    quotation: false,
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

  const [currentBox1, setCurrentBox1] = useState();
  const [currentBox2, setCurrentBox2] = useState();
  const [currentBox3, setCurrentBox3] = useState();

  const checkBoxes = [
    { name: "sale", title: "Yes" },
    { name: "sale_no", title: "No" },
  ];
  const checkBoxes2 = [
    { name: "service", title: "Yes" },
    { name: "service_no", title: "No" },
  ];
  const checkBoxes3 = [
    { name: "quotation", title: "Yes" },
    { name: "quotation_no", title: "No" },
  ];

  function children1(data, current, handleClick) {
    return (
      <div style={{ width: "200px" }} className="d-flex">
        {data.map((el) => (
          <label style={{ minWidth: "10px", width: "60px" }} class="d-flex">
            <input
              type="radio"
              name={el.name}
              onClick={(e) => handleClick(e.target.name)}
              checked={el.name === current}
            />
            {el.title}
          </label>
        ))}
      </div>
    );
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

  const DataCol1 = [
    {
      label: "Protocol :",
      placeholder: "Protocol",
      handleChange,
      name: "protocol",
      value: values["protocol"],
    },
    {
      label: "SMTP Host :",
      placeholder: "SMTP Host",
      handleChange,
      name: "smtp_host",
      value: values["smtp_host"],
    },
    {
      label: "SMTP Port :",
      placeholder: "SMTP Port",
      handleChange,
      name: "smtp_port",
      value: values["smtp_port"],
    },
    {
      label: "Sender Mail :",
      placeholder: "Sender Mail",
      handleChange,
      name: "email",
      value: values["email"],
    },
    {
      label: "Password :",
      placeholder: "Password",
      handleChange,
      name: "password",
      value: values["password"],
    },
    {
      label: "Mail Type :",
      placeholder: "Select Option",
      chooseOptions: true,
      options,
      handleChange,
      name: "mail_type",
      value: values["mail_type"],
    },
  ];

  const DataCol2 = [
    {
      label: "Sale :",
      handleChange,
      component: children1(checkBoxes, currentBox1, setCurrentBox1),
      removeContainer: true,
    },
    {
      label: "Service :",
      handleChange,
      component: children1(checkBoxes2, currentBox2, setCurrentBox2),
      removeContainer: true,
    },
    {
      label: "Quotation :",
      handleChange,
      component: children1(checkBoxes3, currentBox3, setCurrentBox3),
      removeContainer: true,
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <AddFormComponent
      title="Mail Configuration"
      DataCol1={DataCol1}
      DataCol2={DataCol2}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      values={values}
      countryChooser={false}
      regionChooser={false}
      buttonTitle="Save Changes"
    />
  );
}

export default MailSettings;
