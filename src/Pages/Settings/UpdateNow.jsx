import React from "react";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import { SecondaryColor } from "../../Styles/Colors";

function UpdateNow() {
   return (
      <FormComponent hideHeader>
         <div class="row">
            <div class="col-lg-5 m-auto">
               <div
                  class="alert text-center"
                  style={{
                     fontSize: "18px",
                     lineHeight: "28px",
                     margin: "auto",
                     backgroundColor: SecondaryColor,
                     color: "white",
                     // width: "50%",
                  }}
               >
                  Current Version <br />
                  V-9.9
               </div>
            </div>
         </div>
      </FormComponent>
   );
}

export default UpdateNow;
