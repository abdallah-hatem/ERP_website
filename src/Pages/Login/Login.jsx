import React, { useCallback, useRef, useState } from "react";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import InputComponent from "../../Components/Web Components/InputComponent/InputComponent";

import { useTranslation } from "react-i18next";
import { LOGIN } from "./Api";

function Login() {
  const defaultValues = useRef({
    email: "",
    password: "",
  });
  const [values, setValues] = useState(defaultValues.current);
  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);
  function handleSubmit(e) {
    // e.preventDefault();
    if (!values.email || !values.password) {
      alert(t("Fill the inputs"));
      return;
    }
    LOGIN(values)
      .then(() => alert(t("Saved Successfully")))
      .catch((error) => alert(t(error.detail)));
  }
  const { t, i18n } = useTranslation();

  return (
    <FormComponent title={"Login"}>
      <div className="row">
        <div className="col-lg-12">
          <InputComponent
            label={"E-Mail :"}
            placeholder="E-Mail"
            handleChange={handleChange}
            name="email"
            value={values["email"]}
            required
            // errorMessage={error.FullName}
            // onBlur={CheckInputs(values, error)}
          />
          <InputComponent
            label={"Password :"}
            placeholder="Password"
            handleChange={handleChange}
            name="password"
            value={values["password"]}
            required
            // errorMessage={error.FullName}
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

export default Login;
