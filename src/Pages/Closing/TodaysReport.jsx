import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import ActionsButtons from "../../Components/Web Components/ActionButtons/ActionsButtons";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import ReportTable from "./ReportTable";
import { useReactToPrint } from "react-to-print";

function TodaysReport() {
  const { t } = useTranslation();

  const columns1 = [
    {
      field: "sales_date",
      caption: t("Sales Date"),
      dataType: "date",
    },
    {
      field: "invoice_no",
      caption: t("Invoice No."),
      allowEditing: false,
      hideFilter: true,
    },

    {
      field: "customer_name",
      caption: t("Customer Name"),
      hideFilter: true,
    },
    {
      field: "total_amount",
      caption: t("Total Amount"),
      format: "currency",
      hideFilter: true,
    },
  ];

  const columns2 = [
    {
      field: "purchase_date",
      caption: t("Purchase Date"),
      dataType: "date",
    },
    {
      field: "invoice_no",
      caption: t("Invoice No."),
      allowEditing: false,
      hideFilter: true,
    },

    {
      field: "supplier_name",
      caption: t("Supplier Name"),
      hideFilter: true,
    },
    {
      field: "total_amount",
      caption: t("Total Amount"),
      format: "currency",
      hideFilter: true,
    },
  ];

  const summary = [
    {
      column: "total_amount",
      summaryType: "sum",
      valueFormat: "currency",
    },
  ];

  const buttons = [
    {
      title: "Sales Report",
      path: "sales-report",
      iconClass: "ti-plus",
      class: "btn btn-info m-b-5 m-r-2",
    },
    {
      title: "Purchase Report",
      path: "purchase-report",
      iconClass: "ti-align-justify",
      class: "btn btn-primary m-b-5 m-r-2",
    },
    {
      title: "sales Report (Product Wise)",
      path: "sales-report-product",
      iconClass: "ti-align-justify",
      class: "btn btn-success m-b-5 m-r-2",
    },
    {
      title: "profit Report (Sale Wise)",
      path: "profit-report-sale",
      iconClass: "ti-align-justify",
      class: "btn btn-warning m-b-5 m-r-2",
    },
  ];

  const salesReport = useRef();
  const purchaseReport = useRef();
  const handlePrintSales = useReactToPrint({
    content: () => salesReport.current,
  });
  const handlePrintPurchase = useReactToPrint({
    content: () => purchaseReport.current,
  });

  return (
    <>
      <div className="d-flex justify-content-end mb-2">
        <ButtonComponent
          title={"Print"}
          style={{ width: "100px" }}
          onClick={handlePrintSales}
        />
      </div>

      <div ref={salesReport}>
        <ReportTable
          title="today`s Sales Report"
          summary={summary}
          columns={columns1}
        />
      </div>

      <div className="d-flex justify-content-end mb-2">
        <ButtonComponent
          title={"Print"}
          style={{ width: "100px" }}
          onClick={handlePrintPurchase}
        />
      </div>

      <div ref={purchaseReport}>
        <ReportTable
          title="today`s Purchase Report"
          summary={summary}
          columns={columns2}
        />
      </div>

      <ActionsButtons style={{ float: "right" }} buttons={buttons} />
    </>
  );
}

export default TodaysReport;
