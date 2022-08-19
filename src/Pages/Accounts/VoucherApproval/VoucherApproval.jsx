import React from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../../Components/Web Components/MasterTable/MasterTable";

function VoucherApproval() {
   const { t } = useTranslation();

   const columns = [
      {
         field: "sl",
         caption: t("SL No."),
      },
      {
         field: "voucher_no",
         caption: t("Voucher No."),
      },
      {
         field: "Date",
         caption: t("Date"),
      },
      {
         field: "Remark",
         caption: t("Remark"),
      },
      {
         field: "Debit",
         caption: t("Debit"),
      },
      {
         field: "Credit",
         caption: t("Credit"),
      },
   ];

   const data = [
      {
         sl: 1,
         payment_method_name: "Cash In Hand",
      },
      {
         sl: 2,
         payment_method_name: "Bank",
      },
   ];

   return (
      <FormComponent title={"Voucher Approval"}>
         <MasterTable
            allowPrint
            allowExcel
            allowPaging
            ColoredRows
            allowUpdate
            allowDelete
            columnChooser={false}
            dataSource={data}
            colAttributes={columns}
         />
      </FormComponent>
   );
}

export default VoucherApproval;
