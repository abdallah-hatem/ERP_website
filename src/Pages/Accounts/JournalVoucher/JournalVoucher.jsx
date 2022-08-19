import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "react-datepicker/dist/react-datepicker.css";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import ButtonComponent from "../../../Components/Web Components/ButtonComponent/ButtonComponent";
import SearchBar from "../../Closing/SearchBar";
import SupplierDetailsTable from "../SupplierPayment/SupplierDetailsTable";

function JournalVoucher() {
   const { t } = useTranslation();

   const defaultValues = useRef({
      voucher_number: "OP-2",
      remark: "",
      date: "",
      account_name: "",
      code: "",
      amount: "",
   });

   const [values, setValues] = useState(defaultValues.current);

   const handleChange = useCallback((e) => {
      setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   }, []);

   function handleSubmit() {
      for (const [key, value] of Object.entries(values)) {
         if (!value) {
            alert(t("Fill the inputs"));
         }
      }
   }

   const data = [
      {
         label: "Voucher No. :",
         //   placeholder: "Select Option",
         name: "voucher_number",
         //   handleChange,
         value: values["voucher_number"],
         disabled: true,
      },
      {
         label: "Remark :",
         placeholder: "Remark",
         name: "remark",
         textArea: true,
         handleChange,
         value: values["remark"],
      },
   ];

   const [startDate, setStartDate] = useState(new Date());

   const dateData = [
      {
         label: "Date :",
         value: "date",
         selected: startDate,
         onChange: setStartDate,
      },
   ];

   const tableOptions = [
      {
         label: "Hudson",
         value: "Hudson",
         //   value: "123",
      },
      {
         label: "Mike",
         value: "Mike",
         //   value: "1234",
      },
      {
         label: "Justin",
         value: "Justin",
         //   value: "12345",
      },
   ];

   const columns = [
      {
         field: "account_name",
         caption: t("Account Name"),
         options: tableOptions,
      },
      {
         field: "code",
         caption: t("Code"),
         allowEditing: false,
      },
      {
         field: "debit",
         caption: t("Debit"),
         dataType: "number",
      },
      {
         field: "credit",
         caption: t("Credit"),
         dataType: "number",
      },
   ];

   const tableData = [
      {
         account_name: "",
         code: 0,
         amount: 5,
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
   ];

   useEffect(() => {
      console.log(values);
   }, [values, startDate]);

   return (
      <FormComponent title="Journal Voucher">
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
            labelWidth="200px"
            width="58%"
         />

         <SupplierDetailsTable
            columns={columns}
            data={tableData}
            summary={summary}
         />

         <ButtonComponent
            style={{ width: "200px", float: "right", marginTop: 20 }}
            onClick={handleSubmit}
            title={"Save"}
         />
      </FormComponent>
   );
}

export default JournalVoucher;
