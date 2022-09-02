import React, { useCallback, useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import AddFormComponent from "../../../Components/Web Components/AddFormComponent/AddFormComponent"
import SearchBar from "../../Closing/SearchBar"

function MailSettings() {
  const { t } = useTranslation()

  const defaultValues = useRef({
    protocol: "",
    smtp_host: "",
    smtp_port: "",
    email: "",
    password: "",
    sale: false,
    service: false,
    quotation: false,
  })

  const [values, setValues] = useState(defaultValues.current)

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  function handleSubmit(e) {
    // e.preventDefault();
    for (const [key, value] of Object.entries(values)) {
      if (!value) {
        alert(t("Fill the inputs"))
      }
    }
  }

  const handleRadioChange = useCallback((e, el) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: el.value,
    }))
  }, [])

  const data = [
    { title: "Yes", value: true },
    { title: "No", value: false },
  ]

  function children(name, value) {
    return (
      <div className="d-flex">
        {data.map((el) => (
          <label class="d-flex">
            <input
              type="radio"
              name={name}
              value={value}
              onClick={(e) => handleRadioChange(e, el)}
              checked={el.value === values[name]}
            />
            {el.title}
          </label>
        ))}
      </div>
    )
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
  ]

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
  ]

  const DataCol2 = [
    {
      label: "Sale :",
      component: children("sale", values["sale"]),
      removeContainer: true,
    },
    {
      label: "Service :",
      component: children("service", values["service"]),
      removeContainer: true,
    },
    {
      label: "Quotation :",
      component: children("quotation", values["quotation"]),
      removeContainer: true,
    },
  ]

  useEffect(() => {
    console.log(values)
  }, [values])

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
  )
}

export default MailSettings
