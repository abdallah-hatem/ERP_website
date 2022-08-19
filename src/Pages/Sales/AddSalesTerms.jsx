import React, { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchBar from "../Closing/SearchBar";

function AddSalesTerms() {
   const { t } = useTranslation();

   const defaultValues = useRef({
      terms_and_conditions: "",
      status: "",
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

   const options = [
      {
         label: "Active",
         value: "Active",
      },
      {
         label: "Inactive",
         value: "Inactive",
      },
   ];

   const data = [
      {
         label: "Terms & Conditions :",
         placeholder: "Terms & Conditions",
         name: "terms_and_conditions",
         textArea: true,
         handleChange,
         value: values["terms_and_conditions"],
      },
      {
         label: "Status :",
         placeholder: "Select Option",
         name: "status",
         chooseOptions: true,
         options: options,
         handleChange,
         value: values["status"],
      },
   ];

   return (
      <div>
         <SearchBar
            listView
            CardTitle={"Add Sales Terms"}
            hideCard={false}
            data={data}
            buttonTitle="Save"
            handleSubmit={handleSubmit}
            labelWidth={"200px"}
            colWidth="11"
            width="60%"
         />
      </div>
   );
}

export default AddSalesTerms;
