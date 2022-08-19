import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import CodeGenerator from "../../../Components/Web Components/CodeGenerator/CodeGenerator";
import { TitleColor } from "../../../Styles/Colors";
import SearchBar from "../../Closing/SearchBar";

function AppSettings() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    online_server_url: "",
    local_server_url: "",
    hotspot_url: "",
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
      label: "Local Server URL :",
      placeholder: "Local Server URL",
      name: "local_server_url",
      value: values["local_server_url"],
      handleChange,
    },
    {
      label: "Online Server URL :",
      placeholder: "Online Server URL",
      name: "online_server_url",
      value: values["online_server_url"],
      handleChange,
    },
    {
      label: "Connected Hotspot Ip/Url :",
      placeholder: "Connected Hotspot Ip/Url",
      name: "hotspot_url",
      value: values["hotspot_url"],
      handleChange,
    },
  ];

  const style = {
    color: TitleColor,
    fontSize: 19,
    fontWeight: "bold",
  };

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <FormComponent title="App Settings">
      <div className="row border-bottom pb-4">
        {data.map((el) => (
          <div className="col">
            <CodeGenerator
              displayValue
              value={el.value}
              label={el.placeholder}
              style={style}
            />
          </div>
        ))}
      </div>

      <div className="mt-5">
        <SearchBar
          listView
          data={data}
          handleSubmit={handleSubmit}
          colWidth={12}
          labelWidth="250px"
          buttonTitle="Save"
        />
      </div>
    </FormComponent>
  );
}

export default AppSettings;
