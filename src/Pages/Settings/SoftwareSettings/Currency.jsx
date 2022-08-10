import React, { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchBar from "../../Closing/SearchBar";

function Currency() {
   const { t } = useTranslation();

   const defaultValues = useRef({
      bank_name: "",
      description: "",
      currency_name: "",
      currency_symbol: "",
      date: "",
      account_type: "",
   });

   const [values, setValues] = useState(defaultValues.current);

   const handleChange = useCallback((e) => {
      setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   }, []);

   function handleSubmit(e) {
      for (const [key, value] of Object.entries(values)) {
         if (!value) {
            alert(t("Fill the inputs"));
         }
      }
   }
   const data = [
      {
         label: "Currency Name :",
         placeholder: "Currency Name",
         name: "currency_name",
         handleChange,
         value: values["currency_name"],
      },
      {
         label: "Currency Symbol :",
         placeholder: "Currency Symbol",
         name: "currency_symbol",
         handleChange,
         value: values["currency_symbol"],
      },
   ];

   return (
      <SearchBar
         listView
         CardTitle="Add Currency"
         buttonTitle="Save"
         hideCard={false}
         data={data}
         handleSubmit={handleSubmit}
      />
   );
}

export default Currency;
