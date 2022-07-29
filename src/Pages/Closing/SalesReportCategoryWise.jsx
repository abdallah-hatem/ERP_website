import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useReactToPrint } from "react-to-print";
import ActionsButtons from "../../Components/Web Components/ActionButtons/ActionsButtons";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import InputComponent from "../../Components/Web Components/InputComponent/InputComponent";
import ReportTable from "./ReportTable";
import SearchBar from "./SearchBar";
import DatePicker from "react-datepicker";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";

function SalesReportCategoryWise() {
   const { t } = useTranslation();

   const defaultValues = useRef({
      category: "",
      start_date: "",
      end_date: "",
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

   const columns = [
      {
         field: "category_name",
         caption: t("Category Name"),
      },
      {
         field: "product_name",
         caption: t("Product Name"),
      },
      {
         field: "model",
         caption: t("Model"),
         format: "currency",
      },
      {
         field: "date",
         caption: t("Date"),
         dataType: "date",
      },
      {
         field: "quantity",
         caption: t("Qnty"),
      },
      {
         field: "amount",
         caption: t("Amount"),
         format: "currency",
      },
   ];

   const summary = [
      {
         column: "amount",
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
         label: "Electronics",
         value: "Electronics",
      },
      {
         label: "Wood",
         value: "Wood",
      },
      {
         label: "Food",
         value: "Food",
      },
   ];

   const data = [
      {
         label: "Category :",
         placeholder: "Select Option",
         name: "category",
         chooseOptions: true,
         options,
         handleChange,
         value: values["category"],
      },
   ];

   const componentRef = useRef();
   const handlePrint = useReactToPrint({
      content: () => componentRef.current,
   });

   const dateData = [
      { label: "Start Date :", selected: startDate, onChange: setStartDate },
      { label: "End Date :", selected: endDate, onChange: setEndDate },
   ];

   useEffect(() => {
      console.log(values);
   }, [values, startDate, endDate]);

   return (
      <>
         <FormComponent hideHeader>
            <SearchBar data={data} dateData={dateData} handleSubmit={handleSubmit} />
         </FormComponent>

         <div className="d-flex justify-content-end mb-2">
            <ButtonComponent
               title={"Print"}
               style={{ width: "100px" }}
               onClick={handlePrint}
            />
         </div>

         <div ref={componentRef}>
            <ReportTable
               title="Sales Report (Category Wise)"
               summary={summary}
               columns={columns}
            />
         </div>
         <ActionsButtons style={{ float: "right" }} buttons={buttons} />
      </>
   );
}

export default SalesReportCategoryWise;
