import React from "react";
import { CountryDropdown } from "react-country-region-selector";
import { useTranslation } from "react-i18next";
import "./CountryChooser.css";

function CountryChooser({
  name = "City",
  value,
  setCountry,
  handleChange,
  label,
  handleCountryChange,
}) {
  const { t } = useTranslation();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 10,
      }}
    >
      <label id="lbl" htmlFor="feInputState">
        {t(label)}
      </label>
      <CountryDropdown
        name={name}
        classes="cls"
        value={value}
        onChange={handleCountryChange}
      />
    </div>
  );
}

export default CountryChooser;
