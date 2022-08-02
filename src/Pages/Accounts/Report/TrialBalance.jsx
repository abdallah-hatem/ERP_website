import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import SearchBar from "../../Closing/SearchBar";

function TrialBalance() {
   const { t } = useTranslation();

   const defaultValues = useRef({
      start_date: "",
      end_date: "",
   });

   const [values, setValues] = useState(defaultValues.current);

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

   useEffect(() => {
      console.log(values);
   }, [values, startDate, endDate]);
   return (
      <SearchBar
         listView
         hideHeader
         hideCard={false}
         handleSubmit={handleSubmit}
         dateData={dateData}
         startDate={startDate}
         endDate={endDate}
         values={values}
         setValidDate={setValidDate}
      />
   );
}

export default TrialBalance;
