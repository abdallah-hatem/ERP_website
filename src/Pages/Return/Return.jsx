import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ActionsButtons from "../../Components/Web Components/ActionButtons/ActionsButtons";
import SearchBar from "../Closing/SearchBar";

function Return() {
   const { t } = useTranslation();

   const defaultValues = useRef({
      invoice_no: "",
      purchase_id: "",
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
   }

   const customerData = [
      {
         label: "Invoice No. :",
         placeholder: "Invoice No.",
         name: "invoice_no",
         value: values["invoice_no"],
         handleChange,
      },
   ];

   const supplierData = [
      {
         label: "Purchase ID :",
         placeholder: "Purchase ID",
         name: "purchase_id",
         value: values["purchase_id"],
         handleChange,
      },
   ];

   const tables = [
      {
         title: "Return From Customer",
         data: customerData,
      },
      {
         title: "Return To Supplier",
         data: supplierData,
      },
   ];

   const buttons = [
      {
         title: "Customer Return List",
         path: "customer-return-list",
         iconClass: "ti-plus",
         class: "btn btn-info m-b-5 m-r-2",
      },
      {
         title: "Supplier Return",
         path: "supplier-return",
         iconClass: "ti-plus",
         class: "btn btn-primary m-b-5 m-r-2",
      },
      {
         title: "Wastage List",
         path: "wastage-list",
         iconClass: "ti-plus",
         class: "btn btn-success m-b-5 m-r-2",
      },
   ];

   useEffect(() => {
      console.log(values);
   }, [values]);

   return (
      <>
         <div className="row">
            {tables.map((el) => (
               <div className="col-lg-6">
                  <SearchBar
                     hideCard={false}
                     CardTitle={el.title}
                     data={el.data}
                     handleSubmit={handleSubmit}
                     buttonTitle="Search"
                  />
               </div>
            ))}
         </div>

         <ActionsButtons style={{ float: "right" }} buttons={buttons} />
      </>
   );
}

export default Return;
