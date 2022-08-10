import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import ReportTable from "./ReportTable";
import { useReactToPrint } from "react-to-print";
import SearchBar from "./SearchBar";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";

function ClosingReport() {
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
         field: "date",
         caption: t("Date"),
         dataType: "date",
      },
      {
         field: "cash_in",
         caption: t("Cash In"),
         hideFilter: true,
      },
      {
         field: "cash_out",
         caption: t("Cash Out"),
         hideFilter: true,
      },

      {
         field: "balance",
         caption: t("Balance"),
         hideFilter: true,
      },
   ];

   const ref = useRef();
   const handlePrint = useReactToPrint({
      content: () => ref.current,
   });

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
      <>
         <FormComponent hideHeader>
            <SearchBar
               width="57%"
               handleSubmit={handleSubmit}
               dateData={dateData}
               startDate={startDate}
               endDate={endDate}
               values={values}
               setValidDate={setValidDate}
            />
         </FormComponent>

         <div className="d-flex justify-content-end mb-2">
            <ButtonComponent
               title={"Print"}
               style={{ width: "100px" }}
               onClick={handlePrint}
            />
         </div>

         <div ref={ref}>
            <ReportTable columns={columns} title={"Closing Report"} />
         </div>
      </>
   );
}

export default ClosingReport;
