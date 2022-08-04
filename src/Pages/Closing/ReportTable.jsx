import React from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";

function ReportTable({
  columns,
  title,
  summary = [],
  printButton,
  caption,
  hideHeader = false,
  data,
  setSummaryValue,
  hideCaption = false,
}) {
  const { t } = useTranslation();

  function handleSummary(e) {
    setSummaryValue &&
      setSummaryValue(
        e.summaryCells?.filter((el) => el.length > 0)[0][0].value
      );
  }

  return (
    <FormComponent hideHeader={hideHeader} content={printButton} title={title}>
      {!caption && !hideCaption && (
        <div
          className="border-bottom mb-5"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
            padding: "5px 0px",
          }}
        >
          <img
            src="https://saleserpnew.bdtask.com/saleserp_v9.9_demo/assets/img/icons/2022-02-02/8fe541722b06adf1bea9a126ed17e1e1.png"
            alt=""
          ></img>
          <div style={{ color: "#374767" }} class="text-center mb-3">
            <h3> Demo Company </h3>
            <h4>Company Demo Address </h4>
            <h4>demo@mail.com </h4>
            <h4> 123456 </h4>
            <strong>Closing Report</strong>
          </div>
          <span>Date: 27-Jul-2022</span>
        </div>
      )}

      {caption}
      {caption && <hr style={{ backgroundColor: "black", height: "2px" }} />}
      <MasterTable
        ColoredRows
        dataSource={data}
        searchPanel={false}
        columnChooser={false}
        colAttributes={columns}
        summaryItems={summary}
        onRowPrepared={(e) => handleSummary(e)}
      />
    </FormComponent>
  );
}

export default ReportTable;
