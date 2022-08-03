import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import ReportTable from "../Closing/ReportTable";
import { useReactToPrint } from "react-to-print";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import ServiceDetailsCaption from "./ServiceDetailsCaption";

function ServiceDetails() {
  const { t } = useTranslation();

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
      cellRender: (data) => "$" + data.row.data.qnty * data.row.data.charge,
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

  const positionalData = [
    {
      title: "Total Price After Discount :",
      name: "Manager",
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
          caption={<ServiceDetailsCaption />}
          summary={summary}
          columns={columns}
        />
      </div>
      <div class="col-md-7 float-right">
        <div class="card mb-3">
          <div class="card-body">
            {positionalData.map((el) => (
              <>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">{el.title}</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{el.name}</div>
                </div>
                <hr />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
