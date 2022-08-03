import { useTranslation } from "react-i18next";
import ActionsButtons from "../../Components/Web Components/ActionButtons/ActionsButtons";
import ManageSalaryTable from "../HumanResources/Payroll/ManageSalaryTable";

function ManageBank() {
  const { t } = useTranslation();

  const columns = [
    {
      field: "SL",
      caption: t("SL"),
      allowEditing: false,
    },
    {
      field: "Bank Name",
      caption: t("Bank Name"),
      allowEditing: false,
    },
    {
      field: "A/C Name",
      caption: t("A/C Name"),
      allowEditing: false,
    },
    {
      field: "A/C Number",
      caption: t("A/C Number"),
      allowEditing: false,
    },
    {
      field: "Branch",
      caption: t("Branch"),
      allowEditing: false,
    },
    {
      field: "Balance",
      caption: t("Balance"),
      allowEditing: false,
    },
    {
      field: "Signature Picture",
      caption: t("Signature Picture"),
      allowEditing: false,
    },
    {
      field: "Action",
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

  const buttons = [
    {
      title: "Add New Bank",
      path: "add-new-bank",
      iconClass: "ti-plus",
      class: "btn btn-info m-b-5 m-r-2",
    },
    {
      title: "Bank Transaction",
      path: "bank-transaction",
      iconClass: "ti-plus",
      class: "btn btn-primary m-b-5 m-r-2",
    },
    {
      title: "Bank Ledger",
      path: "bank-ledger",
      iconClass: "ti-plus",
      class: "btn btn-success m-b-5 m-r-2",
    },
  ];

  return (
    <>
      <ManageSalaryTable
        columns={columns}
        summary={summary}
        title="Bank List"
      />
      <ActionsButtons style={{ float: "right" }} buttons={buttons} />
    </>
  );
}

export default ManageBank;
