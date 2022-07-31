import React from "react";
import { useTranslation } from "react-i18next";
import ManageSalaryTable from "./ManageSalaryTable";

function SalaryPayment() {
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
      field: "salary_month",
      caption: t("Salary Month"),
      allowEditing: false,
    },
    {
      field: "total_salary",
      caption: t("Total Salary"),
      allowEditing: false,
    },
    {
      field: "generated_by",
      caption: t("Total Working Hours"),
      allowEditing: false,
    },
    {
      field: "generated_by",
      caption: t("Working Period"),
      allowEditing: false,
    },
    {
      field: "generated_by",
      caption: t("Payment Type"),
      allowEditing: false,
    },
    {
      field: "generated_by",
      caption: t("Payment Date"),
      allowEditing: false,
    },
    {
      field: "generated_by",
      caption: t("Paid By"),
      allowEditing: false,
    },
    {
      field: "action",
      caption: t("Action"),
      allowEditing: false,
    },
  ];

  return <ManageSalaryTable columns={columns} title="Salary Payment" />;
}

export default SalaryPayment;
