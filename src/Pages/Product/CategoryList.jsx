import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";

function CategoryList() {
  const { t } = useTranslation();

  const options = [
    {
      label: "Active",
      value: "Active",
    },
    {
      label: "Inactive",
      value: "Inactive",
    },
  ];

  const columns = useRef([
    {
      field: "sl",
      caption: t("SL."),
      allowEditing: false,
    },
    {
      field: "category_name",
      caption: t("Category Name"),
    },
    {
      field: "status",
      caption: t("Status"),
      options,
    },
  ]);

  const data = [
    {
      sl: 1,
      category_name: "Electronics",
      status: "Active",
    },
    {
      sl: 2,
      category_name: "Electronics",
      status: "Active",
    },
    {
      sl: 3,
      category_name: "Electronics",
      status: "Inactive",
    },
    {
      sl: 4,
      category_name: "Electronics",
      status: "Active",
    },
    {
      sl: 5,
      category_name: "Electronics",
      status: "Inactive",
    },
    {
      sl: 6,
      category_name: "Electronics",
      status: "Active",
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
    <FormComponent title={"Category List"}>
      <MasterTable
        allowDelete
        allowUpdate
        allowPaging
        editingMode="popup"
        columnChooser={false}
        dataSource={data}
        colAttributes={columns.current}
        handleStyle={handleCellColor}
        ColoredRows
      />
    </FormComponent>
  );
}

export default CategoryList;
