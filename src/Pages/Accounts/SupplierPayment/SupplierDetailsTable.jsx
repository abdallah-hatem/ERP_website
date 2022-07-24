import React from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../../Components/Web Components/MasterTable/MasterTable";

function SupplierDetailsTable() {
  const { t, i18n } = useTranslation();

  const options = [
    {
      ID: 1,
      Name: "Hudson",
    },
    {
      ID: 2,
      Name: "Mike",
    },
    {
      ID: 3,
      Name: "Jack",
    },
  ];

  const VoucherOptions = [
    {
      ID: 1,
      Name: "Option1",
    },
    {
      ID: 2,
      Name: "Option2",
    },
    {
      ID: 3,
      Name: "Option3",
    },
  ];

  const columns = [
    {
      field: "supplier",
      caption: t("Supplier Name"),
      options: options,
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
    },
    {
      field: "amount",
      caption: t("Amount"),
      format: "currency",
    },
  ];

  const data = [
    {
      supplier: 1,
      voucher_no: 1,
      due_amount: 0,
      amount: 0,
    },
  ];

  const summary = [
    {
      column: "amount",
      summaryType: "sum",
      valueFormat: "currency",
    },
  ];

  return (
    <FormComponent
      hideHeader
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <MasterTable
        allowUpdate
        searchPanel={false}
        columnChooser={false}
        dataSource={data}
        colAttributes={columns}
        ColoredRows
        onSaving={(e) => console.log(e)}
        summaryItems={summary}
      />
    </FormComponent>
  );
}

export default SupplierDetailsTable;
