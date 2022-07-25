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
      allowEditing: false,
    },
    {
      field: "payment_method_name",
      caption: t("Payment Method Name"),
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
        columnChooser={false}
        dataSource={data}
        colAttributes={columns}
      />
    </FormComponent>
  );
}

export default VoucherApproval;
