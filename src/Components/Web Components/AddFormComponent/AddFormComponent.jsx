import React from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import CountryChooser from "../CountryRegionComp/CountryChooser";
import RegionChooser from "../CountryRegionComp/RegionChooser";
import FormComponent from "../FormComponent/FormComponent";
import InputComponent from "../InputComponent/InputComponent";

function AddFormComponent({
  DataCol1,
  DataCol2,
  handleSubmit,
  handleChange,
  values,
  title,
  hideCard = false,
  countryChooser = true,
  regionChooser = true,
  hideButton = false,
}) {
  return (
    <FormComponent hideCard={hideCard} title={title}>
      <div className="row">
        <div className="col-lg-6">
          {DataCol1.map((el) => (
            <InputComponent
              label={el.label}
              hideLabel={el.hideLabel}
              placeholder={el.placeholder}
              handleChange={el.handleChange}
              name={el.name}
              value={el.value}
              textArea={el.textArea === true}
              chooseOptions={el.chooseOptions}
              options={el.options}
              disabled={el.disabled}
            >
              {el.component}
            </InputComponent>
          ))}

          {countryChooser && (
            <CountryChooser
              label="Country :"
              name="country"
              value={values.country}
              // classes="cls"
              handleChange={handleChange}
            />
          )}

          {regionChooser && (
            <RegionChooser
              label="State :"
              name="state"
              value={values.state}
              disableWhenEmpty={true}
              country={values.country}
              // classes="cls"
              handleChange={handleChange}
            />
          )}
        </div>
        <div className="col-lg-6">
          {DataCol2.map((el) => (
            <InputComponent
              label={el.label}
              hideLabel={el.hideLabel}
              placeholder={el.placeholder}
              handleChange={el.handleChange}
              name={el.name}
              value={el.value}
              textArea={el.textArea === true}
              chooseOptions={el.chooseOptions}
              options={el.options}
              disabled={el.disabled}
            >
              {el.component}
            </InputComponent>
          ))}
        </div>
      </div>

      <div
        style={{
          width: "200px",
          float: "right",
          marginTop: 20,
          display: hideButton && "none",
        }}
      >
        <ButtonComponent onClick={handleSubmit} title={"Submit"} />
      </div>
    </FormComponent>
  );
}

export default AddFormComponent;
