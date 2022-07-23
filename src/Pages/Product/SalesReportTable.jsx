import React from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";

function SalesReportTable() {
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
      field: "customer_name",
      caption: t("Customer Name"),
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
    {
      field: "invoice_total",
      caption: t("Invoice Total"),
      format: "currency",
    },
  ];

  const data = [
    {
      invoice_number: 123,
      invoice_id: 20220202121317,
      customer_name: "Brandon",
      total_amount: 5,
      supplier_price: 10,
      date: "2022-02-02",
      quantity: 2,
      rate: 9500,
    },
    {
      invoice_number: 123,
      invoice_id: 20220202121317,
      customer_name: "Jake",
      total_amount: 5,
      supplier_price: 10,
      date: "2022-02-02",
      quantity: 1,
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
    <FormComponent title={"Sales Report"}>
      <MasterTable
        columnChooser={false}
        searchPanel={false}
        dataSource={data}
        colAttributes={columns}
        ColoredRows
        summaryItems={summary}
        onRowDoubleClick={(e) => console.log(e)}
      />
    </FormComponent>
  );
}

export default SalesReportTable;
