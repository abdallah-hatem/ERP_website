import React from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import InputComponent from "../../Components/Web Components/InputComponent/InputComponent";
import DatePicker from "react-datepicker";

function SearchBar({
  handleChange,
  handleSubmit,
  children,
  data = [],
  listView = false,
  showButton = true,
  buttonTitle = "Search",
  buttonWidth = "100px",
  labelWidth,
  dateData = [],
}) {
  const { t } = useTranslation();

  return (
    <div
      className={
        !listView
          ? "d-flex justify-content-between align-items-center flex-wrap"
          : "col-lg-8"
      }
    >
      {data.map((el) => (
        <InputComponent
          label={el.label}
          placeholder={el.placeholder}
          chooseOptions={el.chooseOptions}
          textArea={el.textArea}
          options={el.options}
          type={el.type}
          handleChange={el.handleChange}
          width={!listView && "202px"}
          name={el.name}
          value={el.value}
          disabled={el.disabled}
          labelWidth={el.labelWidth || labelWidth}
        />
      ))}

      {dateData.length > 0 &&
        dateData.map((el) => (
          <InputComponent labelWidth={labelWidth} label={el.label}>
            <DatePicker
              dateFormat={"dd/MM/yyyy"}
              selected={el.selected}
              onChange={(date) => el.onChange(date)}
            />
          </InputComponent>
        ))}

      {/* {children} */}

      {showButton && (
        <ButtonComponent
          style={{ width: buttonWidth, float: listView && "right" }}
          onClick={handleSubmit}
          title={t(buttonTitle)}
        />
      )}
    </div>
  );
}

export default SearchBar;
