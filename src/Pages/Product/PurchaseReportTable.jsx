import React from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";

function PurchaseReportTable() {
  const { t } = useTranslation();

  const columns = [
    {
      field: "date",
      caption: t("Date"),
      dataType: "date",
    },
    {
      field: "invoice_number",
      caption: t("Invoice No."),
    },
    {
      field: "invoice_id",
      caption: t("Invoice ID"),
    },
    {
      field: "supplier_name",
      caption: t("Supplier Name"),
    },

    {
      field: "quantity",
      caption: t("QTY"),
    },
    {
      field: "rate",
      caption: t("Rate"),
      format: "currency",
    },
    {
      field: "total_amount",
      caption: t("Total Amount"),
      format: "currency",
    },
  ];

  const data = [
    {
      invoice_number: 123,
      invoice_id: 20220202121317,
      supplier_name: "Hudson",
      total_amount: 5,
      supplier_price: 10,
      date: "2022-02-02",
      quantity: 20,
      rate: 9500,
    },
  ];

  data.filter((el) => (el.total_amount = el.rate * el.quantity));

  const summary = [
    {
      column: "total_amount",
      summaryType: "sum",
      valueFormat: "currency",
    },
    {
      column: "quantity",
      summaryType: "sum",
    },
  ];

  return (
    <FormComponent title={"Purchase Report"}>
      <MasterTable
        columnChooser={false}
        searchPanel={false}
        dataSource={data}
        colAttributes={columns}
        ColoredRows
        summaryItems={summary}
      />
    </FormComponent>
  );
}

export default PurchaseReportTable;
