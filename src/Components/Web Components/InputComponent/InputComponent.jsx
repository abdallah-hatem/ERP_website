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
  children = false,
  hideLabel = false,
}) {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}>
      <div className="squared-input-container">
        <label
          style={{
            textAlign: i18n.language === "ar" && "right",
            display: hideLabel && "none",
          }}
          id="domain-label"
        >
          {t(label)}
        </label>
        {textArea ? (
          <textarea
            className="textArea"
            onChange={handleChange}
            type={type}
            onBlur={onBlur}
            name={name}
            value={value}
            placeholder={t(placeholder)}
            id={id}
            disabled={disabled}
            onFocus={onFocus}
            style={{ width: width, minHeight: "62px" }}
          />
        ) : chooseOptions ? (
          <div
            className="options-cont"
            style={{
              textAlign: i18n.language === "ar" && "right",
              width: width,
            }}
          >
            <Select
              // classNamePrefix={"options-cont"}
              placeholder={t(placeholder)}
              options={options}
              name={name}
              // value={value}
              onChange={(e) =>
                handleChange({ target: { name, value: e.value } })
              }
            />
          </div>
        ) : children ? (
          <div
            className="image-upload-cont"
            style={{
              textAlign: i18n.language === "ar" && "right",
              width: width,
            }}
          >
            {children}
          </div>
        ) : (
          <input
            onChange={handleChange}
            type={type}
            onBlur={onBlur}
            name={name}
            value={value}
            placeholder={t(placeholder)}
            id={id}
            disabled={disabled}
            onFocus={onFocus}
            style={{ width: width }}
          />
        )}
        {errorMessage ? (
          <div className="error-text">{t(errorMessage)}</div>
        ) : null}
      </div>
    </div>
  );
}

export default React.memo(InputComponent);
