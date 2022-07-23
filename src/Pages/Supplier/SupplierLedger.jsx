import React from "react";
import { useTranslation } from "react-i18next";
import ActionsButtons from "../../Components/Web Components/ActionButtons/ActionsButtons";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";

function SupplierLedger() {
  const { t } = useTranslation();

  const columns = [
    {
      field: "date",
      caption: t("Date"),
      dataType: "date",
    },
    {
      field: "description",
      caption: t("Description"),
    },
    {
      field: "voucher_no",
      caption: t("Voucher No."),
    },
    {
      field: "debit",
      caption: t("Debit"),
      dataType: "number",
      format: "currency",
    },
    {
      field: "credit",
      caption: t("Credit"),
      dataType: "number",
      format: "currency",
    },
    {
      field: "balance",
      caption: t("Balance"),
      dataType: "number",
      format: "currency",
    },
  ];

  const data = [
    {
      date: "2022 / 03 / 08",
      description: "Supplier .Anderson",
      voucher_no: "20220308110905",
      debit: 5,
      credit: 5,
      balance: 5,
    },
    {
      date: "2022 / 010 / 08",
      description: "Supplier .Anderson",
      voucher_no: "20220308110905",
      debit: 5,
      credit: 5,
      balance: 5,
    },
    {
      date: "2022 / 03 / 08",
      description: "Supplier .Justin",
      voucher_no: "20220308110905",
      debit: 5,
      credit: 5,
      balance: 5,
    },
    {
      date: "2022 / 03 / 08",
      description: "Supplier .Justin",
      voucher_no: "20220308110905",
      debit: 5,
      credit: 5,
      balance: 5,
    },
    {
      date: "2022 / 03 / 08",
      description: "Supplier .Nelson",
      voucher_no: "20220308110905",
      debit: 5,
      credit: 5,
      balance: 5,
    },
    {
      date: "2022 / 03 / 08",
      description: "Supplier .Nelson",
      voucher_no: "20220308110905",
      debit: 5,
      credit: 5,
      balance: 5,
    },
  ];

  const buttons = [
    {
      title: "Add Supplier",
      path: "add-supplier",
      iconClass: "ti-plus",
      class: "btn btn-info m-b-5 m-r-2",
    },
    {
      title: "Manage Supplier",
      path: "supplier-list",
      iconClass: "ti-align-justify",
      class: "btn btn-primary m-b-5 m-r-2",
    },
  ];

  const summary = [
    {
      column: "balance",
      summaryType: "sum",
      valueFormat: "currency",
    },
    {
      column: "debit",
      summaryType: "sum",
      valueFormat: "currency",
    },
    {
      column: "credit",
      summaryType: "sum",
      valueFormat: "currency",
    },
  ];

  return (
    <>
      <FormComponent title={"Supplier Ledger"}>
        <MasterTable
          summaryItems={summary}
          allowPrint
          filterRow
          headerFilter
          // allowPaging
          columnChooser={false}
          dataSource={data}
          colAttributes={columns}
          ColoredRows
        />
      </FormComponent>
      <ActionsButtons style={{ float: "right" }} buttons={buttons} />
    </>
  );
}

export default SupplierLedger;
