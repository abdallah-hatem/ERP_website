import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchBar from "../../Closing/SearchBar";

function TrialBalance() {
   const { t } = useTranslation();

   const defaultValues = useRef({
      start_date: "",
      end_date: "",
      with_details: false,
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

   const handleBoxChange = useCallback((e) => {
      setValues((prev) => ({
         ...prev,
         [e.target.name]: !prev.with_details,
      }));
   }, []);

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

   const data = [
      {
         label: "With Details :",
         type: "checkbox",
         name: "with_details",
         value: values["with_details"],
         handleChange: handleBoxChange,
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
         data={data}
         startDate={startDate}
         endDate={endDate}
         values={values}
         setValidDate={setValidDate}
         colWidth="9"
         labelWidth="130px"
         width="70%"
      />
   );
}

export default TrialBalance;
