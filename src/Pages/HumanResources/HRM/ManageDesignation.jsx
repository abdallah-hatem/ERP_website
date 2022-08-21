import React from "react";
import { useTranslation } from "react-i18next";

import MasterTable from "../../../Components/Web Components/MasterTable/MasterTable";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";

function ManageDesignation() {
  const { t } = useTranslation();

  const columns = [
    {
      field: "sl",
      caption: t("SL."),
      allowEditing: false,
    },
    {
      field: "designation",
      caption: t("Designation"),
    },
    {
      field: "details",
      caption: t("Details"),
    },
  ];

  const data = [
    {
      sl: 1,
      designation: "Sale Staff",
      details: "",
    },
    {
      sl: 2,
      designation: "Manager",
      details: "",
    },
  ];

  return (
    <>
      <FormComponent title={"Manage Designation"}>
        <MasterTable
          allowDelete
          allowPaging
          allowUpdate
          allowExcel
          allowPrint
          columnChooser={false}
          dataSource={data}
          colAttributes={columns}
          ColoredRows
        />
      </FormComponent>
    </>
  );
}

export default ManageDesignation;
