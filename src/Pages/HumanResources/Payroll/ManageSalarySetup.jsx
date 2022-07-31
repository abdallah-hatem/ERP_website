import React from "react";
import { useTranslation } from "react-i18next";
import ManageSalaryTable from "./ManageSalaryTable";

function ManageSalarySetup() {
  const { t } = useTranslation();

  const columns = [
    {
      field: "sl",
      caption: t("SL"),
      allowEditing: false,
    },
    {
      field: "employee_name",
      caption: t("Employee Name"),
      allowEditing: false,
    },
    {
      field: "salary_type",
      caption: t("Salary Type"),
      allowEditing: false,
    },
    {
      field: "date",
      caption: t("Date"),
      allowEditing: false,
    },
    {
      field: "action",
      caption: t("Action"),
      allowEditing: false,
    },
  ];

  return <ManageSalaryTable columns={columns} title="Manage Salary Setup" />;
}

export default ManageSalarySetup;
