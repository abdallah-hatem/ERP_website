import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import InputComponent from "../../Components/Web Components/InputComponent/InputComponent";
import SearchBar from "../Closing/SearchBar";

function QrCode({ rowId }) {
   const { t } = useTranslation();

   const defaultValues = useRef({
      quantity: "",
      number: "",
   });

   const [values, setValues] = useState(defaultValues.current);

   const handleChange = useCallback((e) => {
      setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   }, []);

   function handleSubmit(e) {
      // e.preventDefault();
      for (const [key, value] of Object.entries(values)) {
         if (!value) {
            alert(t("Fill the inputs"));
         }
      }
   }

   const data = [
      {
         label: "Qr-Code / row :",
         placeholder: "Qr-Code qunatity for each row",
         name: "quantity",
         handleChange,
         value: values["quantity"],
         type: "number",
      },
      {
         label: "No. Of Qr-Code  :",
         placeholder: "No. Of Qr-Code ",
         name: "number",
         handleChange,
         value: values["number"],
         type: "number",
      },
   ];

   useEffect(() => {
      console.log(values);
   }, [values]);

   return (
      <FormComponent hideCard hideHeader>
         <SearchBar
            data={data}
            buttonTitle="Generate"
            handleSubmit={handleSubmit}
         />

         <div style={{ display: "flex", justifyContent: "center" }}>
            <img
               src="https://saleserpnew.bdtask.com/saleserp_v9.9_demo/my-assets/image/qr/63538869.png"
               class="img-responsive center-block qrcode-image"
               alt=""
            />
         </div>

         <ButtonComponent
            style={{ width: "100px", float: "right", marginTop: 20 }}
            title={"Print"}
         />
      </FormComponent>
   );
}

export default QrCode;
