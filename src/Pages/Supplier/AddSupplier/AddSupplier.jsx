import React, { useCallback, useRef, useState } from "react";

import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../../Components/Web Components/ButtonComponent/ButtonComponent";
import CountryChooser from "../../../Components/Web Components/CountryChooser/CountryChooser";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import InputComponent from "../../../Components/Web Components/InputComponent/InputComponent";

import "./AddSupplier.css";

function AddSupplier() {
  const defaultValues = useRef({
    supplier_name: "",
    email: "",
    phone: "",
    address_1: "",
    fax: "",
    City: "",
    State: "",
    mobile: "",
    vat_number: "",
    contact: "",
    address_2: "",
    city: "",
    zip_code: "",
    previous_balance: "",
  });
  const [values, setValues] = useState(defaultValues.current);
  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);
  console.log(values);
  function handleSubmit(e) {
    // e.preventDefault();
    if (
      !values.supplier_name ||
      !values.email ||
      !values.phone ||
      !values.address_1 ||
      !values.fax ||
      !values.City ||
      !values.State ||
      !values.mobile ||
      !values.vat_number ||
      !values.contact ||
      !values.address_2 ||
      !values.city ||
      !values.zip_code ||
      !values.previous_balance
    ) {
      alert(t("Fill the inputs"));
      return;
    }
  }
  const [country, setCountry] = useState();
  const [region, setRegion] = useState();
  const { t, i18n } = useTranslation();

  function handleCountryChange(val, e) {
    setCountry(val);
    handleChange(e);
  }

  return (
    <FormComponent title={"Add Supplier"}>
      <div className="row">
        <div className="col-lg-6">
          <InputComponent
            label={"Supplier Name :"}
            placeholder="Supplier Name"
            handleChange={handleChange}
            name="supplier_name"
            value={values["supplier_name"]}
            required
            // errorMessage={error.FullName}
            // onBlur={CheckInputs(values, error)}
          />
          <InputComponent
            label={"E-Mail Address :"}
            placeholder="E-Mail"
            handleChange={handleChange}
            name="email"
            value={values["email"]}
            required
            // errorMessage={error.FullName}
            // onBlur={CheckInputs(values, error)}
          />

          <InputComponent
            label={"Phone :"}
            placeholder="Phone"
            handleChange={handleChange}
            name="phone"
            value={values["phone"]}
            required
            //   errorMessage={error.email}
            // onBlur={CheckInputs(values, error)}
          />

          <InputComponent
            textArea={true}
            label={"Address 1 :"}
            placeholder="Address 1"
            handleChange={handleChange}
            name="address_1"
            value={values["address_1"]}
            required
            // errorMessage={error.password}
            // onBlur={CheckInputs(values, error)}
          />
          <InputComponent
            label={"Fax :"}
            placeholder="fax"
            handleChange={handleChange}
            name="fax"
            value={values["fax"]}
            required
            // errorMessage={error.password}
            // onBlur={CheckInputs(values, error)}
          />
          {/* <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <label id="lbl">Country :</label>
            <CountryDropdown
              name="City"
              classes="cls"
              value={country}
              onChange={(val, e) => {
                handleCountryChange(val, e);
              }}
            />
          </div> */}
          <CountryChooser
            label="Country :"
            name="City"
            // classes="cls"
            value={country}
            onChange={(val, e) => {
              handleCountryChange(val, e);
            }}
          />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label id="lbl" htmlFor="feInputState">
              State :
            </label>
            <RegionDropdown
              name="State"
              disableWhenEmpty={true}
              country={country}
              value={region}
              classes="cls"
              onChange={(val, e) => {
                setRegion(val);
                handleChange(e);
              }}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <InputComponent
            label={"Mobile :"}
            placeholder="Mobile"
            handleChange={handleChange}
            name="mobile"
            value={values["mobile"]}
            required
            // errorMessage={error.FullName}
            // onBlur={CheckInputs(values, error)}
          />
          <InputComponent
            label={"VAT Number :"}
            placeholder="VAT Number"
            handleChange={handleChange}
            name="vat_number"
            value={values["vat_number"]}
            required
            // errorMessage={error.FullName}
            // onBlur={CheckInputs(values, error)}
          />

          <InputComponent
            label={"Contact :"}
            placeholder="Contact"
            handleChange={handleChange}
            name="contact"
            value={values["contact"]}
            //   required
            //   errorMessage={error.email}
            // onBlur={CheckInputs(values, error)}
          />

          <InputComponent
            textArea={true}
            label={"Address 2 :"}
            placeholder="Address 2"
            handleChange={handleChange}
            name="address_2"
            value={values["address_2"]}
            required
            // errorMessage={error.password}
            // onBlur={CheckInputs(values, error)}
          />
          <InputComponent
            label={"City :"}
            placeholder="City"
            handleChange={handleChange}
            name="city"
            value={values["city"]}
            required
            // errorMessage={error.password}
            // onBlur={CheckInputs(values, error)}
          />
          <InputComponent
            label={"Zip Code  :"}
            placeholder="Zip Code"
            handleChange={handleChange}
            name="zip_code"
            value={values["zip_code"]}
            required
            // errorMessage={error.password}
            // onBlur={CheckInputs(values, error)}
          />
          <InputComponent
            label={"Previous Balance :"}
            placeholder="Previous Balance"
            handleChange={handleChange}
            name="previous_balance"
            value={values["previous_balance"]}
            required
            // errorMessage={error.password}
            // onBlur={CheckInputs(values, error)}
          />
        </div>
      </div>

      <div style={{ width: "20%", float: "right", marginTop: 20 }}>
        <ButtonComponent onClick={handleSubmit} title={"Submit"} />
      </div>
    </FormComponent>
  );
}

export default AddSupplier;
