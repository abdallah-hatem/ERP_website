import React from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../../Components/Web Components/MasterTable/MasterTable";

function CashAdjustmentTable() {
  const { t, i18n } = useTranslation();

  const columns = [
    {
      field: "code",
      caption: t("Code"),
      allowEditing: false,
      // cellRender: (data) => (
      //   <input style={{ width: "100%" }} disabled value={data.value}></input>
      // ),
    },
    {
      field: "amount",
      caption: t("Amount"),
      dataType: "number",
      // cellRender: (data) => (
      //   <input
      //     style={{ width: "100%" }}
      //     type="number"
      //     //   value={data.value}
      //   ></input>
      // ),
    },
  ];

  const data = [
    {
      code: 1110000001,
      //   amount: 100,
    },
  ];

  return (
    <div className="col-12 mt-5">
      <MasterTable
        allowUpdate
        ColoredRows
        searchPanel={false}
        columnChooser={false}
        dataSource={data}
        colAttributes={columns}
      />
    </div>
  );
}

export default CashAdjustmentTable;
