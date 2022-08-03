import { useTranslation } from "react-i18next";
import ManageSalaryTable from "../Payroll/ManageSalaryTable";

function ManageExpense() {
  const { t } = useTranslation();

  const columns = [
    {
      field: "date",
      caption: t("Date"),
      allowEditing: false,
    },
    {
      field: "type",
      caption: t("Type"),
      allowEditing: false,
    },
    {
      field: "amount",
      caption: t("Amount"),
      allowEditing: false,
    },
    {
      field: "action",
      caption: t("Action"),
      allowEditing: false,
    },
  ];

  const summary = [
    {
      column: "amount",
      summaryType: "sum",
      valueFormat: "currency",
    },
  ];

  return (
    <ManageSalaryTable
      columns={columns}
      summary={summary}
      title="Manage Expense Item"
    />
  );
}

export default ManageExpense;
