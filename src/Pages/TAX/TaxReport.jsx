import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useReactToPrint } from "react-to-print";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";
import SearchBar from "../Closing/SearchBar";

function TaxReport() {
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

   const columns = [
      {
         field: "sl",
         caption: t("SL No."),
         allowEditing: false,
         hideFilter: true,
      },
      {
         field: "Invoice No. / Service Id",
         caption: t("Invoice No. / Service Id"),
         hideFilter: true,
      },
      {
         field: "date",
         caption: t("Date"),
         dataType: "date",
      },
      {
         field: "VAT",
         caption: t("VAT"),
         hideFilter: true,
      },

      {
         field: "IGT",
         caption: t("IGT"),
         hideFilter: true,
      },
   ];

   const summary = [
      {
         column: "VAT",
         summaryType: "sum",
         valueFormat: "currency",
      },
      {
         column: "IGT",
         summaryType: "sum",
         valueFormat: "currency",
      },
   ];

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

   const ref = useRef();
   const handlePrint = useReactToPrint({
      content: () => ref.current,
   });

   useEffect(() => {
      console.log(values);
   }, [values, startDate, endDate]);

   return (
      <>
         <SearchBar
            hideHeader
            hideCard={false}
            width="57%"
            handleSubmit={handleSubmit}
            dateData={dateData}
            startDate={startDate}
            endDate={endDate}
            values={values}
            setValidDate={setValidDate}
         />

         <div className="d-flex justify-content-end mb-2">
            <ButtonComponent
               title={"Print"}
               style={{ width: "100px" }}
               onClick={handlePrint}
            />
         </div>

         <div ref={ref}>
            <FormComponent title="TAX Report">
               <MasterTable
                  searchPanel={false}
                  ColoredRows
                  allowPaging
                  columnChooser={false}
                  colAttributes={columns}
                  summaryItems={summary}
               />
            </FormComponent>
         </div>
      </>
   );
}

export default TaxReport;
