import React from "react";

import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import InputComponent from "../../Components/Web Components/InputComponent/InputComponent";

function AddSupplier() {
  return (
    <FormComponent title={"Add Supplier"}>
      <div className="row">
        <div className="col-lg-6">
          <InputComponent
            label={"First Name :"}
            placeholder="First Name"
            // handleChange={handleChange}
            // name="first_name"
            // value={values["first_name"]}
            // required
            // errorMessage={error.FullName}
            // onBlur={CheckInputs(values, error)}
          />
          <InputComponent
            label={"Last Name :"}
            placeholder="First Name"
            // handleChange={handleChange}
            // name="last_name"
            // value={values["last_name"]}
            // required
            // errorMessage={error.FullName}
            // onBlur={CheckInputs(values, error)}
          />

          <InputComponent
            label={"E-Mail :"}
            placeholder="First Name"
            //   handleChange={handleChange}
            //   name="email"
            //   value={values["email"]}
            //   required
            //   errorMessage={error.email}
            // onBlur={CheckInputs(values, error)}
          />

          <InputComponent
            label={"Password :"}
            placeholder="First Name"
            // handleChange={handleChange}
            // name="password"
            // value={values["password"]}
            // required
            // errorMessage={error.password}
            // onBlur={CheckInputs(values, error)}
          />
        </div>
        <div className="col-lg-6">
          <InputComponent
            label={"First Name :"}
            placeholder="First Name"
            // handleChange={handleChange}
            // name="first_name"
            // value={values["first_name"]}
            // required
            // errorMessage={error.FullName}
            // onBlur={CheckInputs(values, error)}
          />
          <InputComponent
            label={"Last Name :"}
            placeholder="First Name"
            // handleChange={handleChange}
            // name="last_name"
            // value={values["last_name"]}
            // required
            // errorMessage={error.FullName}
            // onBlur={CheckInputs(values, error)}
          />

          <InputComponent
            label={"E-Mail :"}
            placeholder="First Name"
            //   handleChange={handleChange}
            //   name="email"
            //   value={values["email"]}
            //   required
            //   errorMessage={error.email}
            // onBlur={CheckInputs(values, error)}
          />

          <InputComponent
            label={"Password :"}
            placeholder="First Name"
            // handleChange={handleChange}
            // name="password"
            // value={values["password"]}
            // required
            // errorMessage={error.password}
            // onBlur={CheckInputs(values, error)}
          />
        </div>
      </div>

      <div style={{ width: "20%", float: "right", marginTop: 20 }}>
        <ButtonComponent title={"Submit"} />
      </div>
    </FormComponent>
  );
}

export default AddSupplier;
