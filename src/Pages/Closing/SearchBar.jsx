import React from "react";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import InputComponent from "../../Components/Web Components/InputComponent/InputComponent";

function SearchBar({ handleChange, handleSubmit, children, data = [] }) {
  return (
    <FormComponent hideHeader>
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        {data.map((el) => (
          <InputComponent
            label={el.label}
            placeholder={el.placeholder}
            chooseOptions={el.chooseOptions}
            options={el.options}
            type={el.type}
            handleChange={el.handleChange}
            width="202px"
            name={el.name}
            value={el.value}
          />
        ))}

        {children}

        <ButtonComponent
          style={{ width: "100px" }}
          onClick={handleSubmit}
          title={"Search"}
        />
      </div>
    </FormComponent>
  );
}

export default SearchBar;
