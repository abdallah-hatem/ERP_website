import React, { useCallback, useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import AddFormComponent from "../../Components/Web Components/AddFormComponent/AddFormComponent"
import { SecondaryColor } from "../../Styles/Colors"

function SmsSettings() {
  const { t } = useTranslation()

  const defaultValues = useRef({
    nexmo_api_key: "",
    nexmo_api_secret: "",
    sender_numbe: "",
    sale: false,
    service: false,
    customer_receive: false,
  })

  const [values, setValues] = useState(defaultValues.current)

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  function handleSubmit() {
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
      label: "Customer Receive :",
      component: children("customer_receive", values["customer_receive"]),
      removeContainer: true,
    },
  ]

  useEffect(() => {
    console.log(values)
  }, [values])

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
        labelWidth="100%"
        width="100%"
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
  )
}

export default SmsSettings
