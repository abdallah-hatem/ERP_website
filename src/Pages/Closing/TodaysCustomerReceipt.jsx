import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ActionsButtons from "../../Components/Web Components/ActionButtons/ActionsButtons";
import ReportTable from "./ReportTable";
import { useReactToPrint } from "react-to-print";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import SearchBar from "./SearchBar";
import InputComponent from "../../Components/Web Components/InputComponent/InputComponent";
import DatePicker from "react-datepicker";

function TodaysCustomerReceipt() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    customer_name: "",
    date: "",
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
        return;
      }
    }
  }

  const columns = [
    {
      field: "sl",
      caption: t("SL."),
    },
    {
      field: "customer_name",
      caption: t("Customer Name"),
      allowEditing: false,
      hideFilter: true,
    },

    {
      field: "description",
      caption: t("Description"),
      hideFilter: true,
    },
    {
      field: "receipt",
      caption: t("Receipt"),
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

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const options = [
    {
      label: "Hudson",
      value: "hudson",
    },
    {
      label: "Mike",
      value: "mike",
    },
    {
      label: "Justin",
      value: "justin",
    },
  ];

  const data = [
    {
      label: "Customer Name :",
      placeholder: "Select Option",
      name: "customer_name",
      chooseOptions: true,
      options: options,
      handleChange,
      value: values["customer_name"],
    },
  ];

  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    function formattedDate(name) {
      return `${name.getDate()}/${name.getMonth() + 1}/${name.getFullYear()}`;
    }

    values["date"] = formattedDate(startDate);
  }, [startDate]);

  useEffect(() => {
    console.log(values);
  }, [values, startDate]);

  return (
    <>
      <SearchBar
        data={data}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      >
        <InputComponent label={"Date :"}>
          <DatePicker
            dateFormat={"dd/MM/yyyy"}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </InputComponent>
      </SearchBar>

      <div className="d-flex justify-content-end mb-2">
        <ButtonComponent
          title={"Print"}
          style={{ width: "100px" }}
          onClick={handlePrint}
        />
      </div>

      <div ref={componentRef}>
        <ReportTable
          title="today`s Customer Receipt"
          summary={summary}
          columns={columns}
          //   printButton={
          //     <ButtonComponent
          //       title={"Print"}
          //       style={{ width: "100px" }}
          //       onClick={handlePrint}
          //     />
          //   }
        />
      </div>

      <ActionsButtons style={{ float: "right" }} buttons={buttons} />
    </>
  );
}

export default TodaysCustomerReceipt;
