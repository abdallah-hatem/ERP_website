import React from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";

function Stock() {
  const { t } = useTranslation();

  const columns = [
    {
      field: "sl",
      caption: t("SL."),
    },
    {
      field: "product_name",
      caption: t("Product Name"),
    },
    {
      field: "product_model",
      caption: t("Product Model"),
    },
    {
      field: "sale_price",
      caption: t("Sale Price"),
      format: "currency",
    },
    {
      field: "purchase_price",
      caption: t("Purchase Price"),
      format: "currency",
    },
    {
      field: "in_quantity",
      caption: t("In Qty."),
    },
    {
      field: "out_quantity",
      caption: t("Out Qty."),
    },
    {
      field: "stock",
      caption: t("Stock"),
    },
    {
      field: "stock_sale_price",
      caption: t("Stock Sale Price"),
      format: "currency",
    },
    {
      field: "stock_purchase_price",
      caption: t("Stock Purchase Price"),
      dataType: "number",
      format: "currency",
    },
  ];

  const data = [
    {
      sl: 1,
      product_name: "PS5",
      product_model: "Electronics",
      sale_price: 500,
      purchase_price: 450,
      in_quantity: 20,
      out_quantity: 12,
      stock: 18,
      stock_sale_price: 2000,
      stock_purchase_price: 1800,
    },
    {
      sl: 2,
      product_name: "PS5",
      product_model: "Electronics",
      sale_price: 500,
      purchase_price: 450,
      in_quantity: 20,
      out_quantity: 12,
      stock: 18,
      stock_sale_price: 2000,
      stock_purchase_price: 1800,
    },
    {
      sl: 3,
      product_name: "PS5",
      product_model: "Electronics",
      sale_price: 500,
      purchase_price: 450,
      in_quantity: 20,
      out_quantity: 12,
      stock: 18,
      stock_sale_price: 2000,
      stock_purchase_price: 1800,
    },
    {
      sl: 4,
      product_name: "PS5",
      product_model: "Electronics",
      sale_price: 500,
      purchase_price: 450,
      in_quantity: 20,
      out_quantity: 12,
      stock: 18,
      stock_sale_price: 2000,
      stock_purchase_price: 1800,
    },
    {
      sl: 5,
      product_name: "PS5",
      product_model: "Electronics",
      sale_price: 500,
      purchase_price: 450,
      in_quantity: 20,
      out_quantity: 12,
      stock: 18,
      stock_sale_price: 2000,
      stock_purchase_price: 1800,
    },
    {
      sl: 6,
      product_name: "PS5",
      product_model: "Electronics",
      sale_price: 500,
      purchase_price: 450,
      in_quantity: 20,
      out_quantity: 12,
      stock: 18,
      stock_sale_price: 2000,
      stock_purchase_price: 1800,
    },
  ];

  const summary = [
    {
      column: "stock_sale_price",
      summaryType: "sum",
      valueFormat: "currency",
    },
    {
      column: "stock_purchase_price",
      summaryType: "sum",
      valueFormat: "currency",
    },
    {
      column: "stock",
      summaryType: "sum",
    },
  ];

  return (
    <FormComponent title={"Stock Report"}>
      <MasterTable
        allowPaging
        allowExcel
        allowPrint
        columnChooser={false}
        dataSource={data}
        colAttributes={columns}
        ColoredRows
        summaryItems={summary}
      />
    </FormComponent>
  );
}

export default Stock;
