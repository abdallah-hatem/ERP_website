import { useTranslation } from "react-i18next";
import ManageSalaryTable from "../Payroll/ManageSalaryTable";

function ManageExpenseItem() {
  const { t } = useTranslation();

  const columns = [
    {
      field: "sl",
      caption: t("SL"),
      allowEditing: false,
    },
    {
      field: "expense_item_name",
      caption: t("Expense Item Name"),
      allowEditing: false,
    },
    {
      field: "action",
      caption: t("Action"),
      allowEditing: false,
    },
  ];

  return <ManageSalaryTable columns={columns} title="Manage Expense Item" />;
}

export default ManageExpenseItem;
