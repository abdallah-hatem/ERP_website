import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useReactToPrint } from "react-to-print";
import ActionsButtons from "../../Components/Web Components/ActionButtons/ActionsButtons";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import ReportTable from "./ReportTable";
import SearchBar from "./SearchBar";

function SalesReportProductWise() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    product: "",
    start_date: "",
    end_date: "",
  });

  const [values, setValues] = useState(defaultValues.current);

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  function handleSubmit(e) {
    // e.preventDefault();
    for (const [key, value] of Object.entries(values)) {
      if (!value) {
        alert(t("Fill the inputs"));
      }
    }

    if (!validDate) {
      alert(t("Start date cant be bigger than end date"));
    }
  }

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [validDate, setValidDate] = useState(true);

  const columns = [
    {
      field: "sales_date",
      caption: t("Sales Date"),
      dataType: "date",
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
      field: "Invoice_number",
      caption: t("Invoice No."),
      format: "currency",
    },
    {
      field: "customer_name",
      caption: t("Customer Name"),
    },
    {
      field: "rate",
      caption: t("Rate"),
    },
    {
      field: "total_amount",
      caption: t("Total Amount"),
      format: "currency",
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
      iconClass: "ti-align-justify",
      class: "btn btn-info m-b-5 m-r-2",
    },
    {
      title: "Purchase Report",
      path: "purchase-report",
      iconClass: "ti-align-justify",
      class: "btn btn-primary m-b-5 m-r-2",
    },
    {
      title: "Sales Report (Product Wise)",
      path: "sales-report-product",
      iconClass: "ti-align-justify",
      class: "btn btn-success m-b-5 m-r-2",
    },
    {
      title: "Profit Report (Sale Wise)",
      path: "profit-report-sale",
      iconClass: "ti-align-justify",
      class: "btn btn-warning m-b-5 m-r-2",
    },
  ];

  const options = [
    {
      label: "PS5",
      value: "PS5",
    },
    {
      label: "PS3",
      value: "PS3",
    },
    {
      label: "PS2",
      value: "PS2",
    },
  ];

  const data = [
    {
      label: "Product :",
      placeholder: "Select Option",
      name: "product",
      chooseOptions: true,
      options,
      handleChange,
      value: values["product"],
    },
  ];

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const dateData = [
    {
      label: "Start Date :",
      value: "start_date",
      selected: startDate,
      onChange: setStartDate,
    },
    {
      label: "End Date :",
      value: "end_date",
      selected: endDate,
      onChange: setEndDate,
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values, startDate, endDate]);

  return (
    <>
      <SearchBar
        hideHeader
        hideCard={false}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        data={data}
        dateData={dateData}
        startDate={startDate}
        endDate={endDate}
        values={values}
        setValidDate={setValidDate}
      />

      <div className="d-flex justify-content-end mb-2">
        <ButtonComponent
          title={"Print"}
          style={{ width: "100px" }}
          onClick={handlePrint}
        />
      </div>

      <div ref={componentRef}>
        <ReportTable
          title="Sales Report (Product Wise)"
          summary={summary}
          columns={columns}
        />
      </div>

      <ActionsButtons style={{ float: "right" }} buttons={buttons} />
    </>
  );
}

export default SalesReportProductWise;
