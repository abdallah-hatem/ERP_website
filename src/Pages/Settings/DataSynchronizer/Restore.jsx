import React from "react";
import ButtonComponent from "../../../Components/Web Components/ButtonComponent/ButtonComponent";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import { TitleColor } from "../../../Styles/Colors";

function Restore() {
   const buttons = [
      {
         title: "Confirm",
         style: { width: "120px" },
      },
      {
         title: "Cancel",
         style: { width: "120px", backgroundColor: "red" },
      },
   ];

   return (
      <FormComponent title="Restore">
         <div class="form-group row">
            <div class="col-sm-12 text-center">
               <h3 style={{ color: TitleColor }}>
                  If You want to Restore your database . Please click on confirm
                  button.
               </h3>
               <p class="text-danger mt-4">
                  It will delete all your data from your database !!
               </p>
            </div>
         </div>

         <div className="text-center">
            {buttons.map((el) => (
               <ButtonComponent style={el.style} title={el.title} />
            ))}
         </div>
      </FormComponent>
   );
}

export default Restore;
