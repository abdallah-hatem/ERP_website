import React, { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import InformationButton from "../../Components/Web Components/InformationButton/InformationButton.jsx";
import SearchBar from "../Closing/SearchBar";

function TaxSettings() {
   const { t } = useTranslation();

   const defaultValues = useRef({
      payment_method_name: "",
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
         label: "Number of TAX :",
         placeholder: "Number of TAX",
         name: "payment_method_name",
         handleChange,
         type: "number",
         value: values["payment_method_name"],
         labelWidth: "250px",
      },
   ];

   const data2 = [
      {
         label: "TAX Name 1 :",
         placeholder: "TAX Name 1",
         name: "tax_name_1",
         handleChange,
         value: values["tax_name_1"],
         labelWidth: "250px",
      },
      {
         label: "Default Value(%) :",
         placeholder: "Default Value(%)",
         name: "default_value",
         handleChange,
         type: "number",
         value: values["default_value"],
         labelWidth: "250px",
      },
      {
         label: "Reg No. :",
         placeholder: "Reg No.",
         name: "reg_no",
         handleChange,
         type: "number",
         value: values["reg_no"],
         labelWidth: "250px",
      },
      {
         label: "Is Shown :",
         handleChange,
         type: "checkbox",
         labelWidth: "250px",
      },
   ];

   const data3 = [
      {
         label: "TAX Name 2 :",
         placeholder: "TAX Name 2",
         name: "tax_name_2",
         handleChange,
         value: values["tax_name_2"],
         labelWidth: "250px",
      },
      {
         label: "Default Value(%) :",
         placeholder: "Default Value(%)",
         name: "default_value",
         handleChange,
         type: "number",
         value: values["default_value"],
         labelWidth: "250px",
      },
      {
         label: "Reg No. :",
         placeholder: "Reg No.",
         name: "reg_no",
         handleChange,
         type: "number",
         value: values["reg_no"],
         labelWidth: "250px",
      },
      {
         label: "Is Shown :",
         handleChange,
         type: "checkbox",
         labelWidth: "250px",
      },
   ];

   const tables = [
      {
         data: data,
      },
      {
         data: data2,
      },
      {
         data: data3,
      },
   ];

   return (
      <FormComponent title={"Tax Settings"}>
         {tables.map((el) => (
            <>
               <div className={el.data === data && "d-flex align-items-center"}>
                  <SearchBar
                     listView
                     hideCard={true}
                     data={el.data}
                     buttonTitle="Save"
                     handleSubmit={handleSubmit}
                     showButton={false}
                  />

                  {el.data === data && (
                     <InformationButton
                        text={"Put the number of global TAX want to add"}
                     />
                  )}
               </div>

               <div
                  className={el.data === data ? "mb-5" : "mb-5 border-bottom"}
               />
            </>
         ))}

         <p style={{ color: "red", fontSize: 22 }}>
            If you Update TAX settings ,All of your previous TAX record will be
            destroy.You Will Need to set TAX product wise and Service wise
         </p>

         <ButtonComponent
            style={{ width: "200px", float: "right" }}
            onClick={handleSubmit}
            title={"Save"}
         />
      </FormComponent>
   );
}

export default TaxSettings;
