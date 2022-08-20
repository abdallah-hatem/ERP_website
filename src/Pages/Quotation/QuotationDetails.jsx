import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ReportTable from "../Closing/ReportTable";
import { useReactToPrint } from "react-to-print";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import DetailsCard from "../../Components/Web Components/DetailsCard/DetailsCard";
import ServiceDetailsCaption from "../Service/ServiceDetailsCaption";

function QuotationDetails({ caption }) {
  const { t } = useTranslation();

  const [summaryValue, setSummaryValue] = useState();
  console.log(summaryValue);

  const columns = [
    {
      field: "sl",
      caption: t("SL."),
    },
    {
      field: "service_name",
      caption: t("Service Name"),
    },
    {
      field: "qnty",
      caption: t("Qnty"),
    },
    {
      field: "charge",
      caption: t("Charge"),
      format: "currency",
    },
    {
      field: "discount",
      caption: t("Discount"),
    },
    {
      field: "discount_value",
      caption: t("Discount Value"),
      format: "currency",
    },
    {
      field: "total_amount",
      caption: t("Total Amount"),
      format: "currency",
      //   cellRender: (data) => "$" + data.row.data.qnty * data.row.data.charge,
    },
  ];

  const summary = [
    {
      column: "total_amount",
      summaryType: "sum",
      valueFormat: "currency",
    },
  ];

  const data = [
    {
      sl: 1,
      service_name: "Customer Service",
      qnty: 2,
      charge: 1500,
      discount: 0,
      discount_value: 0,
      total_amount: "",
    },
  ];

  data.filter((el) => (el.total_amount = el.charge * el.qnty));

  const paymentData = [
    {
      title: "Total Price After Discount :",
      name: "$" + summaryValue,
    },
    {
      title: "VAT Value :",
      name: "01021313495",
    },
    {
      title: "Grand Total :",
      name: "Salary",
    },
    {
      title: "Paid Amount :",
      name: "20000",
    },
  ];

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div className="d-flex justify-content-end mb-2">
        <ButtonComponent
          title={"Print"}
          style={{ width: "100px" }}
          onClick={handlePrint}
        />
      </div>

      <div ref={componentRef}>
        <ReportTable
          hideHeader
          data={data}
          caption={caption}
          summary={summary}
          columns={columns}
          setSummaryValue={setSummaryValue}
        />
        <ReportTable
          hideHeader
          hideCaption
          data={data}
          summary={summary}
          columns={columns}
          setSummaryValue={setSummaryValue}
        />
      </div>

      <DetailsCard summaryValue={summaryValue} data={paymentData} />
    </div>
  );
}

export default QuotationDetails;
