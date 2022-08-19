import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "react-datepicker/dist/react-datepicker.css";
import SearchBar from "../Closing/SearchBar";
import SupplierDetailsTable from "./SupplierPayment/SupplierDetailsTable";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";

function AccountsTable({ title, name }) {
   const { t, i18n } = useTranslation();

   const defaultValues = useRef({
      date: "",
      remark: "",
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

   //    function handleName() {
   //       name === "supplier" && (name = "supplier");
   //       name === "customer" && (name = "customer");
   //       name === "service" && (name = "service");
   //       return name;
   //    }

   const [startDate, setStartDate] = useState(new Date());

   const dateData = [
      {
         label: "Date :",
         value: "date",
         selected: startDate,
         onChange: setStartDate,
      },
   ];

   const data = [
      {
         label: "Remark :",
         placeholder: "Remark",
         name: "remark",
         handleChange,
         value: values["remark"],
         textArea: true,
      },
   ];

   const supplierTypeOptions = [
      {
         label: "Cash In Hand",
         value: "Cash In Hand",
      },
      {
         label: "Bank",
         value: "Bank",
      },
   ];

   const supplierTypeColumns = [
      {
         field: "payment_type",
         caption: t("Payment Type"),
         options: supplierTypeOptions,
      },
      {
         field: "paid_amount",
         caption: t("Paid Amount"),
         dataType: "number",
      },
   ];

   const supplierTypeData = [
      {
         payment_type: "",
         paid_amount: 20,
      },
   ];

   const supplierValueOptions = [
      {
         label: "Hudson",
         value: "Hudson",
      },
      {
         label: "Mike",
         value: "Mike",
      },
      {
         label: "Jack",
         value: "Jack",
      },
   ];

   const VoucherOptions = [
      {
         label: "Option1",
         value: "Option1",
      },
      {
         label: "Option2",
         value: "Option2",
      },
      {
         label: "Option3",
         value: "Option3",
      },
   ];

   const supplierDetailsColumns = [
      {
         field: name,
         caption: name,
         options: supplierValueOptions,
      },
      {
         field: "voucher_no",
         caption: t("Voucher No."),
         options: VoucherOptions,
      },
      {
         field: "due_amount",
         caption: t("Due Amount"),
         format: "currency",
         allowEditing: false,
      },
      {
         field: "amount",
         caption: t("Amount"),
         format: "currency",
      },
   ];

   const supplierDetailsData = [
      {
         supplier: "",
         voucher_no: "",
         due_amount: "",
         amount: "",
      },
   ];

   const summary = [
      {
         column: "amount",
         summaryType: "sum",
         valueFormat: "currency",
      },
   ];

   const button = (
      <ButtonComponent
         style={{ width: "250px", marginTop: 20 }}
         title={"Add New Payment Method"}
      />
   );

   const tables = [
      {
         colummns: supplierDetailsColumns,
         data: supplierDetailsData,
         summary,
      },
      {
         colummns: supplierTypeColumns,
         data: supplierTypeData,
         button: button,
      },
   ];

   useEffect(() => {
      console.log(values);
   }, [values, startDate]);

   return (
      <FormComponent title={title}>
         <SearchBar
            listView
            showButton={false}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            data={data}
            dateData={dateData}
            startDate={startDate}
            values={values}
            colWidth="10"
            labelWidth="140px"
            width="70%"
         />

         {tables.map((el) => (
            <SupplierDetailsTable
               columns={el.colummns}
               data={el.data}
               summary={el.summary}
               button={el.button}
            />
         ))}

         <ButtonComponent
            style={{ width: "200px", float: "right", marginTop: 20 }}
            onClick={handleSubmit}
            title={"Save"}
         />
      </FormComponent>
   );
}

export default AccountsTable;
