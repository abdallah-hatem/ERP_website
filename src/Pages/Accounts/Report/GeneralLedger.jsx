import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchBar from "../../Closing/SearchBar";

function GeneralLedger() {
   const { t } = useTranslation();

   const defaultValues = useRef({
      start_date: "",
      end_date: "",
      transaction_head: "",
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
   const [endDate, setEndDate] = useState(new Date());
   const [validDate, setValidDate] = useState(true);

   const dateData = [
      {
         label: "Start Date :",
         value: "start_date",
         selected: startDate,
         onChange: setStartDate,
      },
      {
         label: "End Date :",
         value: "end_date",
         selected: endDate,
         onChange: setEndDate,
      },
   ];

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
         label: "General Head :",
         placeholder: "Select Option",
         name: "general_head",
         chooseOptions: true,
         options,
         handleChange,
         value: values["general_head"],
      },
      {
         label: "Transaction Head :",
         placeholder: "Select Option",
         name: "transaction_head",
         handleChange,
         value: values["transaction_head"],
      },
   ];

   useEffect(() => {
      console.log(values);
   }, [values, startDate, endDate]);
   return (
      <SearchBar
         listView
         hideHeader
         hideCard={false}
         handleSubmit={handleSubmit}
         data={data}
         dateData={dateData}
         startDate={startDate}
         endDate={endDate}
         values={values}
         setValidDate={setValidDate}
      />
   );
}

export default GeneralLedger;
