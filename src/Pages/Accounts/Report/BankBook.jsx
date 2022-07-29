import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useReactToPrint } from "react-to-print";

import DatePicker from "react-datepicker";
import SearchBar from "../../Closing/SearchBar";
import InputComponent from "../../../Components/Web Components/InputComponent/InputComponent";
import ButtonComponent from "../../../Components/Web Components/ButtonComponent/ButtonComponent";
import ReportTable from "../../Closing/ReportTable";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";

function BankBook() {
   const { t } = useTranslation();

   const defaultValues = useRef({
      start_date: "",
      end_date: "",
      general_head: "",
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
            return;
         }
      }

      if (values.start_date > values.end_date) {
         alert(t("Start date cant be bigger than end date"));
      }
   }
   const [startDate, setStartDate] = useState(new Date());
   const [endDate, setEndDate] = useState(new Date());

   useEffect(() => {
      function formattedDate(name) {
         return `${name.getDate()}/${
            name.getMonth() + 1
         }/${name.getFullYear()}`;
      }

      values["start_date"] = formattedDate(startDate);
      values["end_date"] = formattedDate(endDate);
   }, [startDate, endDate]);

   const dateData = [
      { label: "Start Date :", selected: startDate, onChange: setStartDate },
      { label: "End Date :", selected: endDate, onChange: setEndDate },
   ];

   const columns = [
      {
         field: "sl",
         caption: t("SL."),
      },
      {
         field: "date",
         caption: t("Date"),
      },
      {
         field: "voucher_no",
         caption: t("Voucher No."),
      },
      {
         field: "voucher_type",
         caption: t("Voucher Type"),
         format: "currency",
      },
      {
         field: "head_of_account",
         caption: t("Head Of Account"),
      },
      {
         field: "debit",
         caption: t("Debit"),
         format: "currency",
      },
      {
         field: "credit",
         caption: t("Credit"),
         format: "currency",
      },
      {
         field: "balance",
         caption: t("Balance"),
         format: "currency",
      },
   ];

   const summary = [
      {
         column: "debit",
         summaryType: "sum",
         valueFormat: "currency",
      },
      {
         column: "credit",
         summaryType: "sum",
         valueFormat: "currency",
      },
      {
         column: "balance",
         summaryType: "sum",
         valueFormat: "currency",
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
         label: "Account Head :",
         //   placeholder: "Select Option",
         name: "account_head",
         //   handleChange,
         value: values["account_head"],
         disabled: true,
      },
   ];

   const componentRef = useRef();
   const handlePrint = useReactToPrint({
      content: () => componentRef.current,
   });

   useEffect(() => {
      console.log(values);
   }, [values, startDate, endDate]);

   return (
      <>
         <FormComponent hideHeader>
            <SearchBar
               labelWidth={"300px"}
               data={data}
               listView
               handleSubmit={handleSubmit}
               dateData={dateData}
            />
         </FormComponent>

         <div className="d-flex justify-content-end mb-2">
            <ButtonComponent
               title={"Print"}
               style={{ width: "100px" }}
               onClick={handlePrint}
            />
         </div>

         <div ref={componentRef}>
            <ReportTable hideHeader summary={summary} columns={columns} />
         </div>
      </>
   );
}

export default BankBook;
