import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "react-datepicker/dist/react-datepicker.css";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import ButtonComponent from "../../../Components/Web Components/ButtonComponent/ButtonComponent";
import SearchBar from "../../Closing/SearchBar";
import SupplierDetailsTable from "../SupplierPayment/SupplierDetailsTable";

function CreditVoucher() {
   const { t } = useTranslation();

   const defaultValues = useRef({
      voucher_number: "OP-2",
      debit_account_head: "",
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

   const options = [
      {
         label: "Cash In Hand",
         value: "cash in hand",
      },
      {
         label: "Cash In Bank",
         value: "cash in bank",
      },
   ];

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
         label: "Debit Account Head :",
         placeholder: "Select Option",
         name: "debit_account_head",
         chooseOptions: true,
         options: options,
         handleChange,
         value: values["debit_account_head"],
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
         field: "amount",
         caption: t("Amount"),
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
         column: "amount",
         summaryType: "sum",
         valueFormat: "currency",
      },
   ];

   useEffect(() => {
      console.log(values);
   }, [values, startDate]);

   return (
      <FormComponent title="Credit Voucher">
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

export default CreditVoucher;
