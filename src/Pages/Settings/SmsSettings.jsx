import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AddFormComponent from "../../Components/Web Components/AddFormComponent/AddFormComponent";
import { SecondaryColor } from "../../Styles/Colors";

function SmsSettings() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    nexmo_api_key: "",
    nexmo_api_secret: "",
    sender_numbe: "",

    sale: false,
    service: false,
    customer_receive: false,
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

  const [currentBox1, setCurrentBox1] = useState("sale_no");
  const [currentBox2, setCurrentBox2] = useState("service_no");
  const [currentBox3, setCurrentBox3] = useState("customer_receive_no");

  const checkBoxes = [
    { name: "sale", title: "Yes" },
    { name: "sale_no", title: "No" },
  ];
  const checkBoxes2 = [
    { name: "service", title: "Yes" },
    { name: "service_no", title: "No" },
  ];
  const checkBoxes3 = [
    { name: "customer_receive", title: "Yes" },
    { name: "customer_receive_no", title: "No" },
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

  const DataCol1 = [
    {
      label: "Nexmo Api Key :",
      placeholder: "Nexmo Api Key",
      handleChange,
      name: "nexmo_api_key",
      value: values["nexmo_api_key"],
    },
    {
      label: "Nexmo Api Secret :",
      placeholder: "Nexmo Api Secret",
      handleChange,
      name: "nexmo_api_secret",
      value: values["nexmo_api_secret"],
    },
    {
      label: "Sender Number :",
      placeholder: "Sender Number",
      handleChange,
      name: "sender_numbe",
      value: values["sender_numbe"],
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
      label: "Customer Receive :",
      handleChange,
      component: children1(checkBoxes3, currentBox3, setCurrentBox3),
      removeContainer: true,
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <>
      <AddFormComponent
        title="SMS Configuration"
        DataCol1={DataCol1}
        DataCol2={DataCol2}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        values={values}
        countryChooser={false}
        regionChooser={false}
        buttonTitle="Save Changes"
        //   labelWidth="180px"
      />

      <a
        href={
          "https://ui.idp.vonage.com/ui/auth/login?context=eyJoeWRyYUZsb3ciOiJhODc0Yzc2YTA5NDQ0ZTQyYjRlZmVmMWE0MzkwN2E1OSIsInN1YmplY3QiOiIiLCJmb3JjZUlkUCI6IiIsIm9pZGNDb250ZXh0Ijp7ImFjcl92YWx1ZXMiOm51bGwsInVpX2xvY2FsZXMiOm51bGx9LCJjbGllbnRJRCI6ImRhc2hib2FyZC1tYWluIiwicmVnaXN0cmF0aW9uRmxvdyI6IiIsImxvZ2luRmxvdyI6IlZiNURZYkRSZjBkemNoTm5ZR1pJeEhhWUgrZkUyNjRhNms0eTUwS21tMTBWdE9nazhONk40UmRwLzFITXdCU1B3eGg2ZnF0RVFpUEtncnFCNmF3bHhiUUxIK3FERWlSdXlQdlpZeE9vS3lLVHU4NmNaejc5Y0UveW1EYUZYZWsxIiwiYWRkcmVzc1ZlcmlmeSI6bnVsbCwiZm9yY2VMb2dnZWRPdXQiOmZhbHNlLCJmbG93VHJhY2VJZCI6IjNmZDdmZjdmLTgxODYtNDdjOS1hOWFmLTlhYmVhMDFkMDIyYSIsInBob25lVmVyaWZpZWQiOmZhbHNlfQ=="
        }
        style={{ color: SecondaryColor }}
      >
        Nexmo Registration?
      </a>
    </>
  );
}

export default SmsSettings;
