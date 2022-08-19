import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ActionsButtons from "../../Components/Web Components/ActionButtons/ActionsButtons";
import ReportTable from "./ReportTable";
import { useReactToPrint } from "react-to-print";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import SearchBar from "./SearchBar";

function TodaysCustomerReceipt() {
   const { t } = useTranslation();

   const defaultValues = useRef({
      customer_name: "",
      date: "",
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

   const [startDate, setStartDate] = useState(new Date());

   const columns = [
      {
         field: "sl",
         caption: t("SL."),
      },
      {
         field: "customer_name",
         caption: t("Customer Name"),
         allowEditing: false,
         hideFilter: true,
      },

      {
         field: "description",
         caption: t("Description"),
         hideFilter: true,
      },
      {
         field: "receipt",
         caption: t("Receipt"),
         format: "currency",
         hideFilter: true,
      },
   ];

   const summary = [
      {
         column: "total_amount",
         summaryType: "sum",
         valueFormat: "currency",
      },
   ];

   const buttons = [
      {
         title: "Sales Report",
         path: "sales-report",
         iconClass: "ti-align-justify",
         class: "btn btn-info m-b-5 m-r-2",
      },
      {
         title: "Purchase Report",
         path: "purchase-report",
         iconClass: "ti-align-justify",
         class: "btn btn-primary m-b-5 m-r-2",
      },
      {
         title: "Sales Report (Product Wise)",
         path: "sales-report-product",
         iconClass: "ti-align-justify",
         class: "btn btn-success m-b-5 m-r-2",
      },
      {
         title: "Profit Report (Sale Wise)",
         path: "profit-report-sale",
         iconClass: "ti-align-justify",
         class: "btn btn-warning m-b-5 m-r-2",
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
         label: "Customer Name :",
         placeholder: "Select Option",
         name: "customer_name",
         chooseOptions: true,
         options: options,
         handleChange,
         value: values["customer_name"],
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

   const componentRef = useRef();
   const handlePrint = useReactToPrint({
      content: () => componentRef.current,
   });

   useEffect(() => {
      console.log(values);
   }, [values, startDate]);

   return (
      <>
         <SearchBar
            hideHeader
            hideCard={false}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            data={data}
            dateData={dateData}
            startDate={startDate}
            values={values}
            // labelWidth="120px"
            // width="60%"
         />

         <div className="d-flex justify-content-end mb-2">
            <ButtonComponent
               title={"Print"}
               style={{ width: "100px" }}
               onClick={handlePrint}
            />
         </div>

         <div ref={componentRef}>
            <ReportTable
               title="Today`s Customer Receipt"
               summary={summary}
               columns={columns}
            />
         </div>

         <ActionsButtons style={{ float: "right" }} buttons={buttons} />
      </>
   );
}

export default TodaysCustomerReceipt;
