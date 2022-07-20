import React from "react";
import { CountryDropdown } from "react-country-region-selector";
import { useTranslation } from "react-i18next";
import "./Style.css";

function CountryChooser({
  name,
  value,
  handleChange,
  label,
  placeholder = "Select Country",
}) {
  const { t, i18n } = useTranslation();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 10,
        direction: i18n.language === "en" ? "ltr" : "rtl",
        textAlign: i18n.language === "ar" && "right",
      }}
    >
      <label id="lbl" htmlFor="feInputState">
        {t(label)}
      </label>
      <CountryDropdown
        defaultOptionLabel={t(placeholder)}
        name={name}
        classes="cls"
        value={value}
        onChange={(e) => handleChange({ target: { name, value: e } })}
      />
    </div>
  );
}

export default CountryChooser;
