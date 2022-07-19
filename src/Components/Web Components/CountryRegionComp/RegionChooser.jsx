import React from "react";
import { RegionDropdown } from "react-country-region-selector";
import { useTranslation } from "react-i18next";
import "./Style.css";

function RegionChooser({
  name,
  country,
  handleChange,
  value,
  label,
  disableWhenEmpty = true,
}) {
  const { t, i18n } = useTranslation();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        direction: i18n.language === "en" ? "ltr" : "rtl",
        textAlign: i18n.language === "ar" && "right",
      }}
    >
      <label id="lbl" htmlFor="feInputState">
        {t(label)}
      </label>
      <RegionDropdown
        name={name}
        disableWhenEmpty={disableWhenEmpty}
        country={country}
        value={value}
        classes="cls"
        onChange={(e) => handleChange({ target: { name, value: e } })}
      />
    </div>
  );
}

export default RegionChooser;
