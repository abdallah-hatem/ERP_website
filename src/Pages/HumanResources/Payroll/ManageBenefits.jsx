import React from "react";
import { useTranslation } from "react-i18next";
import ManageSalaryTable from "./ManageSalaryTable";

function ManageBenefits() {
  const { t } = useTranslation();

  const columns = [
    {
      field: "sl",
      caption: t("SL"),
      allowEditing: false,
    },
    {
      field: "benefit",
      caption: t("Benefit"),
      allowEditing: false,
    },
    {
      field: "type",
      caption: t("Type"),
      allowEditing: false,
    },
    {
      field: "action",
      caption: t("Action"),
      allowEditing: false,
    },
  ];

  return <ManageSalaryTable columns={columns} title="Manage Benefits" />;
}

export default ManageBenefits;
