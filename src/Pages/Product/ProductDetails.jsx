import React from "react";
import ActionsButtons from "../../Components/Web Components/ActionButtons/ActionsButtons";

import ProductDetailsTable from "./ProductDetailsTable";
import PurchaseReportTable from "./PurchaseReportTable";
import SalesReportTable from "./SalesReportTable";

function ProductDetails() {
  const buttons = [
    {
      title: "Add Product",
      path: "add-product",
      iconClass: "ti-plus",
      class: "btn btn-info m-b-5 m-r-2",
    },
    {
      title: "Add Product (CSV)",
      path: "add-product-csv",
      iconClass: "ti-align-justify",
      class: "btn btn-primary m-b-5 m-r-2",
    },
    {
      title: "Manage Product",
      path: "manage-product",
      iconClass: "ti-align-justify",
      class: "btn btn-success m-b-5 m-r-2",
    },
    // {
    //   title: "Paid Customer",
    //   path: "paid-customer",
    //   iconClass: "ti-align-justify",
    //   class: "btn btn-warning m-b-5 m-r-2",
    // },
  ];

  return (
    <>
      <ActionsButtons
        style={{
          marginBottom: "10px",
          display: "flex",
          justifyContent: "right",
        }}
        buttons={buttons}
      />
      <ProductDetailsTable />
      <PurchaseReportTable />
      <SalesReportTable />
    </>
  );
}

export default ProductDetails;
