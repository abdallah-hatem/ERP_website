import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useReactToPrint } from "react-to-print";
import ActionsButtons from "../../Components/Web Components/ActionButtons/ActionsButtons";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import InputComponent from "../../Components/Web Components/InputComponent/InputComponent";
import ReportTable from "./ReportTable";
import SearchBar from "./SearchBar";
import DatePicker from "react-datepicker";

function SalesReturn() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    start_date: "",
    end_date: "",
  });
  const [values, setValues] = useState(defaultValues.current);

  function handleSubmit(e) {
    // e.preventDefault();
    for (const [key, value] of Object.entries(values)) {
      if (!value) {
        alert(t("Fill the inputs"));
        return;
      }
    }
  }
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    function formattedDate(name) {
      return `${name.getDate()}/${name.getMonth() + 1}/${name.getFullYear()}`;
    }

    values["start_date"] = formattedDate(startDate);
    values["end_date"] = formattedDate(endDate);
  }, [startDate, endDate]);

  const columns = [
    {
      field: "sl",
      caption: t("SL."),
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
      field: "date",
      caption: t("Date"),
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
      title: "Todays Report",
      path: "todays-report",
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

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const data = [
    { label: "Start Date :", selected: startDate, onChange: setStartDate },
    { label: "End Date :", selected: endDate, onChange: setEndDate },
  ];

  useEffect(() => {
    console.log(values);
  }, [values, startDate, endDate]);

  return (
    <>
      <SearchBar handleSubmit={handleSubmit}>
        {data.map((el) => (
          <InputComponent label={el.label}>
            <DatePicker
              dateFormat={"dd/MM/yyyy"}
              selected={el.selected}
              onChange={(date) => el.onChange(date)}
            />
          </InputComponent>
        ))}
      </SearchBar>

      <div className="d-flex justify-content-end mb-2">
        <ButtonComponent
          title={"Print"}
          style={{ width: "100px" }}
          onClick={handlePrint}
        />
      </div>

      <div ref={componentRef}>
        <ReportTable title="Sales Return" summary={summary} columns={columns} />
      </div>
      <ActionsButtons style={{ float: "right" }} buttons={buttons} />
    </>
  );
}

export default SalesReturn;
