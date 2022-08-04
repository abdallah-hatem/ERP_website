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
    <FormComponent
      hideHeader
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <MasterTable
        allowUpdate
        ColoredRows
        searchPanel={false}
        columnChooser={false}
        dataSource={data}
        colAttributes={columns}
      />
    </FormComponent>
  );
}

export default CashAdjustmentTable;
