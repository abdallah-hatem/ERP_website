import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "react-datepicker/dist/react-datepicker.css";
import "./style.scss";
import SearchBar from "../Closing/SearchBar";

function OpeningBalance() {
   const { t } = useTranslation();

   const defaultValues = useRef({
      account_head: "",
      voucher_number: "OP-2",
      amount: null,
      remark: "",
      date: "",
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

      if (!validDate) {
         alert(t("Start date cant be bigger than end date"));
      }
   }

   const [startDate, setStartDate] = useState(new Date());
   const [validDate, setValidDate] = useState(true);

   const options = [
      {
         label: "Hudson",
         value: "hudson",
      },
      {
         label: "Mike",
         value: "mike",
      },
      {
         label: "Justin",
         value: "justin",
      },
   ];

   const data = [
      {
         label: "Voucher No. :",
         //   placeholder: "Select Option",
         name: "voucher_number",
         //   handleChange,
         value: values["voucher_number"],
         disabled: true,
      },
      {
         label: "Account Head :",
         placeholder: "Select Option",
         name: "account_head",
         chooseOptions: true,
         options: options,
         handleChange,
         value: values["account_head"],
      },

      {
         label: "Amount :",
         placeholder: "0.00",
         name: "amount",
         type: "number",
         handleChange,
         value: values["amount"],
      },
      {
         label: "Remark :",
         placeholder: "Remark",
         name: "remark",
         textArea: true,
         handleChange,
         value: values["remark"],
      },
   ];

   const dateData = [
      {
         label: "Date :",
         value: "date",
         selected: startDate,
         onChange: setStartDate,
      },
   ];

   useEffect(() => {
      console.log(values);
   }, [values, startDate]);
   return (
      <SearchBar
         listView
         hideCard={false}
         CardTitle="Opening Balance"
         buttonTitle="Save"
         handleSubmit={handleSubmit}
         handleChange={handleChange}
         data={data}
         dateData={dateData}
         startDate={startDate}
         values={values}
         setValidDate={setValidDate}
      />
   );
}

export default OpeningBalance;
