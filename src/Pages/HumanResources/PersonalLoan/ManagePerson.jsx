import { useTranslation } from "react-i18next";
import ManageSalaryTable from "../Payroll/ManageSalaryTable";

function ManagePerson() {
  const { t } = useTranslation();

  const columns = [
    {
      field: "name",
      caption: t("Name"),
      allowEditing: false,
    },
    {
      field: "address",
      caption: t("Address"),
      allowEditing: false,
    },
    {
      field: "phone",
      caption: t("Phone"),
      allowEditing: false,
    },
    {
      field: "balance",
      caption: t("Balance"),
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
      column: "balance",
      summaryType: "sum",
      valueFormat: "currency",
    },
  ];

  return (
    <ManageSalaryTable
      columns={columns}
      summary={summary}
      title="Manage Person"
    />
  );
}

export default ManagePerson;
