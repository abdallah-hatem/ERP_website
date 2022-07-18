import React from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
import Select from "react-select";

function InputComponent({
  label,
  name,
  value,
  type = "text",
  handleChange,
  required,
  errorMessage = "",
  onBlur,
  placeholder,
  id,
  disabled = false,
  onFocus,
  textArea = false,
  chooseOptions = false,
  options = [],
  width,
}) {
  const { t, i18n } = useTranslation();

  return (
    <div
      style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}
      // style={{ direction: i18n.language === "en" ? "ltr" : "ltr" }}
    >
      <div className="squared-input-container">
        <label id="domain-label">{t(label)}</label>
        {textArea ? (
          <textarea
            className="textArea"
            onChange={handleChange}
            type={type}
            onBlur={onBlur}
            name={name}
            value={value}
            placeholder={placeholder}
            id={id}
            disabled={disabled}
            onFocus={onFocus}
          />
        ) : chooseOptions ? (
          <div style={{ width }}>
            <Select
              className="options-cont"
              placeholder="Select Option"
              options={options}
              name={name}
              value={value}
              // onChange={handleChange}
              onChange={(e) =>
                handleChange({ target: { name, value: e.value } })
              }
            />
          </div>
        ) : (
          <input
            onChange={handleChange}
            type={type}
            onBlur={onBlur}
            name={name}
            value={value}
            placeholder={placeholder}
            id={id}
            disabled={disabled}
            onFocus={onFocus}
            style={{ width }}
          />
        )}
        {errorMessage ? (
          <div className="error-text">{t(errorMessage)}</div>
        ) : null}
      </div>
    </div>
  );
}

export default InputComponent;
