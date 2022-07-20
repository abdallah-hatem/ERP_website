import React from "react";
import { useTranslation } from "react-i18next";
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
      format: "currency",
    },
    {
      field: "credit",
      caption: t("Credit"),
      format: "currency",
    },
    {
      field: "balance",
      caption: t("Balance"),
      format: "currency",
    },
  ];

  const data = [
    {
      date: "2022 / 03 / 08",
      description: "Supplier .Anderson",
      voucher_no: "20220308110905",
      debit: "$ 0.00",
      credit: "$ 0.00",
      balance: "$ 0.00",
    },
    {
      date: "2022 / 010 / 08",
      description: "Supplier .Anderson",
      voucher_no: "20220308110905",
      debit: "$ 0.00",
      credit: "$ 0.00",
      balance: "$ 0.00",
    },
    {
      date: "2022 / 03 / 08",
      description: "Supplier .Justin",
      voucher_no: "20220308110905",
      debit: "$ 0.00",
      credit: "$ 0.00",
      balance: "$ 0.00",
    },
    {
      date: "2022 / 03 / 08",
      description: "Supplier .Justin",
      voucher_no: "20220308110905",
      debit: "$ 0.00",
      credit: "$ 0.00",
      balance: "$ 0.00",
    },
    {
      date: "2022 / 03 / 08",
      description: "Supplier .Nelson",
      voucher_no: "20220308110905",
      debit: "$ 0.00",
      credit: "$ 0.00",
      balance: "$ 0.00",
    },
    {
      date: "2022 / 03 / 08",
      description: "Supplier .Nelson",
      voucher_no: "20220308110905",
      debit: "$ 0.00",
      credit: "$ 0.00",
      balance: "$ 0.00",
    },
  ];
  const buttons = [
    {
      title: "Add Supplier",
      href: "add-supplier",
      iconClass: "ti-plus",
      class: "btn btn-info m-b-5 m-r-2",
    },
    {
      title: "Manage Supplier",
      href: "supplier-list",
      iconClass: "ti-align-justify",
      class: "btn btn-primary m-b-5 m-r-2",
    },
  ];

  return (
    <>
      <FormComponent title={"Supplier Ledger"}>
        <MasterTable
          summaryItems={data}
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
      <span style={{ float: "right" }} class="padding-lefttitle">
        {buttons.map((el) => (
          <a href={el.href} class={el.class} style={{ margin: 5 }}>
            <i class={el.iconClass}> </i>
            {t(el.title)}
          </a>
        ))}
      </span>
    </>
  );
}

export default SupplierLedger;
