import React from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../../Components/Web Components/MasterTable/MasterTable";

function SupplierDetailsTable() {
  const { t, i18n } = useTranslation();

  const options = [
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

  const columns = [
    {
      field: "supplier",
      caption: t("Supplier Value"),
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
        summaryItems={summary}
      />
    </FormComponent>
  );
}

export default SupplierDetailsTable;
