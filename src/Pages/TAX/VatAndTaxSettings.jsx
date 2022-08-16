import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import { TitleColor } from "../../Styles/Colors";
import "./style.scss";

function VatAndTaxSettings() {
  const { t } = useTranslation();

  const [currentBox, setCurrentBox] = useState("");

  function handleClick() {}

  const data = [
    {
      label: t("Fixed VAT :"),
      desc: t(
        "**Individual Product & service VAT.Set VAT value from product & service add (Dynamic TAX wont apply)**"
      ),
    },
    {
      label: t("Dynamic TAX :"),
      desc: t(
        "** Global TAX for product & service. Need to add multiple taxs from TAX setting (Fixed VAT wont apply)**"
      ),
    },
  ];

  return (
    <FormComponent title={"VAT & TAX Settings"}>
      {data.map((el, index) => (
        <li style={{ listStyle: "none" }} class="checkbox">
          <input
            onClick={() => setCurrentBox(index)}
            checked={currentBox === index}
            class="checkbox-pop"
            type="checkbox"
            id={index}
          />
          <label for={index}>
            <span></span>
            <p
              style={{
                display: "inline-block",
                fontWeight: 700,
                color: TitleColor,
              }}
            >
              {el.label}
            </p>
          </label>
          <p style={{ fontSize: 12, color: "black" }}>{el.desc}</p>
        </li>
      ))}

      <ButtonComponent
        title="Save"
        style={{ float: "right", width: "150px" }}
        onClick={handleClick}
      />
    </FormComponent>
  );
}

export default VatAndTaxSettings;
