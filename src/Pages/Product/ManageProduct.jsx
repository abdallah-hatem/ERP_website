import React from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";
import { Link } from "react-router-dom";
import ActionsButtons from "../../Components/Web Components/ActionButtons/ActionsButtons";

function ManageProduct() {
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
      field: "supplier_name",
      caption: t("Supplier Name"),
    },
    {
      field: "price",
      caption: t("Price"),
      format: "currency",
    },
    {
      field: "supplier_price",
      caption: t("Supplier Price"),
      format: "currency",
    },
    {
      field: "images",
      caption: t("Images"),
      dataType: "Picture",
      cellRender: (data) => <img src={data.value} alt="pic"></img>,
    },
  ];

  const data = [
    {
      sl: 1,
      product_name: "Abdallah",
      product_model: "Sm",
      supplier_name: "Hudson",
      price: 5,
      supplier_price: 10,
      images:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      sl: 2,
      product_name: "Abdallah",
      product_model: "Sm",
      supplier_name: "Hudson",
      price: 5,
      supplier_price: 10,
      images:
        "https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      sl: 3,
      product_name: "Abdallah",
      product_model: "Sm",
      supplier_name: "Hudson",
      price: 5,
      supplier_price: 10,
      images:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      sl: 4,
      product_name: "Abdallah",
      product_model: "Sm",
      supplier_name: "Hudson",
      price: 5,
      supplier_price: 10,
      images:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      sl: 5,
      product_name: "Abdallah",
      product_model: "Sm",
      supplier_name: "Hudson",
      price: 5,
      supplier_price: 10,
      images:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      sl: 6,
      product_name: "Abdallah",
      product_model: "Sm",
      supplier_name: "Hudson",
      price: 5,
      supplier_price: 10,
      images:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const buttons = [
    {
      title: "Add Product",
      path: "/add-product",
      iconClass: "ti-plus",
      class: "btn btn-info m-b-5 m-r-2",
    },
    {
      title: "Add Product (CSV)",
      path: "/add-product-csv",
      iconClass: "ti-align-justify",
      class: "btn btn-primary m-b-5 m-r-2",
    },
  ];

  return (
    <>
      <FormComponent title={"Manage Product"}>
        <MasterTable
          // keyExpr="sl"
          allowDelete
          allowUpdate
          allowPaging
          allowExcel
          allowPrint
          columnChooser={false}
          dataSource={data}
          colAttributes={columns}
          ColoredRows
        />
      </FormComponent>

      <ActionsButtons buttons={buttons} />
    </>
  );
}

export default ManageProduct;
