import React from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import InputComponent from "../../Components/Web Components/InputComponent/InputComponent";

function ClosingTable({ data, handleSubmit, title }) {
    const { t } = useTranslation();
    
   return (
      <>
         <h3
            className="m-0 mt-5"
            style={{ textAlign: "center", fontSize: "22px" }}
         >
            {t(title)}
         </h3>
         <div className="row">
            <div className="col-lg-10">
               {data.map((el) => (
                  <InputComponent
                     label={el.label}
                     placeholder={el.placeholder}
                     type={el.type}
                     width="70%"
                     handleChange={el.handleChange}
                     name={el.name}
                     value={el.value}
                     disabled={el.disabled}
                  />
               ))}

               <div style={{ width: "200px", float: "right", marginTop: 20 }}>
                  <ButtonComponent onClick={handleSubmit} title={"Save"} />
               </div>
            </div>
         </div>
      </>
   );
}

export default ClosingTable;
