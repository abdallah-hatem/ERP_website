import React from "react";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import './style.scss'

function VatAndTaxSettings() {
  const data = [
    {
    label:"Fixed Vat :" , 
    desc:"**Individual Product & service VAT.Set VAT value from product & service add (Dynamic TAX wont apply)**"
  },
  {
    label:"Dynamic Tax :",
    desc:"** Global TAX for product & service. Need to add multiple taxs from TAX setting (Fixed VAT wont apply)**"

    }];

  return (
    <FormComponent title={"VAT & TAX Settings"}>
      {data.map((el,index) => (
        <li style={{listStyle:"none"}} class="checkbox">
          <input class="checkbox-pop" type="checkbox" id={index} />
          <label for={index}>
            <span></span>  {el.label} 
          </label>
          <p>{el.desc}</p>
        </li>
        // <div className="d-flex align-items-center mb-3">
        //   <label>Fixed VAT</label>
        //   <input type={"checkbox"} />
        //   <span className="ml-4">
        //     ** Individual Product & service VAT.Set VAT value from product &
        //     service add (Dynamic TAX wont apply)**
        //   </span>
        // </div>
      ))}
    </FormComponent>
  );
}

export default VatAndTaxSettings;
