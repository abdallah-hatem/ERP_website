import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";
import SearchBar from "../Closing/SearchBar";

function StockReturnList() {
   const { t } = useTranslation();

   const defaultValues = useRef({
      start_date: "",
      end_date: "",
   });

   const [values, setValues] = useState(defaultValues.current);

   function handleSubmit() {
      if (!validDate) {
         alert(t("Start date cant be bigger than end date"));
      }
   }

   const [startDate, setStartDate] = useState(new Date());
   const [endDate, setEndDate] = useState(new Date());
   const [validDate, setValidDate] = useState(true);

   const columns = [
      {
         field: "sl",
         caption: t("SL No."),
         allowEditing: false,
         hideFilter: true,
      },
      {
         field: "Invoice ID",
         caption: t("Invoice ID"),
         hideFilter: true,
      },
      {
         field: "Customer Name",
         caption: t("Customer Name"),
         hideFilter: true,
      },
      {
         field: "date",
         caption: t("Date"),
         dataType: "date",
      },

      {
         field: "Total Amount",
         caption: t("Total Amount"),
         hideFilter: true,
      },
   ];

   const summary = [
      {
         column: "Total Amount",
         summaryType: "sum",
         valueFormat: "currency",
      },
   ];

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
      <>
         <SearchBar
            hideHeader
            hideCard={false}
            handleSubmit={handleSubmit}
            dateData={dateData}
            startDate={startDate}
            endDate={endDate}
            values={values}
            setValidDate={setValidDate}
            width="57%"
         />

         <FormComponent title={"Stock Return"}>
            <MasterTable
               searchPanel={false}
               ColoredRows
               allowPaging
               columnChooser={false}
               colAttributes={columns}
               summaryItems={summary}
            />
         </FormComponent>
      </>
   );
}

export default StockReturnList;
