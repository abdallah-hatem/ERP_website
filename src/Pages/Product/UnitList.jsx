import React from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";

function UnitList() {
  const { t } = useTranslation();

  const columns = [
    {
      field: "sl",
      caption: t("SL."),
    },
    {
      field: "unit_name",
      caption: t("Unit Name"),
    },
    {
      field: "status",
      caption: t("Status"),
    },
  ];

  const data = [
    {
      sl: 1,
      unit_name: "Piece",
      status: "Active",
    },
    {
      sl: 2,
      unit_name: "Lbs",
      status: "Active",
    },
    {
      sl: 3,
      unit_name: "Kg",
      status: "Inactive",
    },
  ];

  function handleCellColor(e) {
    if (
      e.rowType === "data" &&
      e.column.dataField === "status" &&
      e.data.status === "Active"
    ) {
      e.cellElement.style.color = "#52cc00";
    } else if (
      e.rowType === "data" &&
      e.column.dataField === "status" &&
      e.data.status === "Inactive"
    ) {
      e.cellElement.style.color = "#FF1414";
    }
  }

  return (
    <FormComponent title={"Unit List"}>
      <MasterTable
        key="sl"
        allowDelete
        allowUpdate
        allowPaging
        columnChooser={false}
        dataSource={data}
        colAttributes={columns}
        handleStyle={handleCellColor}
        ColoredRows
      />
    </FormComponent>
  );
}

export default UnitList;
