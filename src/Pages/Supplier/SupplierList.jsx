import React from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";

function SupplierList() {
  const { t } = useTranslation();

  const columns = [
    {
      field: "sl",
      caption: t("SL."),
    },
    {
      field: "supplier_name",
      caption: t("Supplier Name"),
    },
    {
      field: "address_1",
      caption: t("Address 1"),
    },
    {
      field: "mobile_no",
      caption: t("Mobile No."),
    },
    {
      field: "email",
      caption: t("E-Mail"),
    },
    {
      field: "city",
      caption: t("City"),
    },
    {
      field: "state",
      caption: t("State"),
    },
    {
      field: "zip_code",
      caption: t("Zip Code"),
    },
    {
      field: "country",
      caption: t("Country"),
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
      sl: 1,
      supplier_name: "Abdallah",
      address_1: "1234 - street",
      balance: 10,
    },
    {
      sl: 2,
      supplier_name: "Abdallah",
      address_1: "1234 - street",
      balance: 10,
    },
    {
      sl: 3,
      supplier_name: "Abdallah",
      address_1: "1234 - street",
      balance: 10,
    },
    {
      sl: 4,
      supplier_name: "Abdallah",
      address_1: "1234 - street",
      balance: 10,
    },
    {
      sl: 5,
      supplier_name: "Abdallah",
      address_1: "1234 - street",
      balance: 10,
    },
    {
      sl: 6,
      supplier_name: "Abdallah",
      address_1: "1234 - street",
      balance: 10,
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
    <FormComponent title={"Supplier List"}>
      <MasterTable
        allowDelete
        allowUpdate
        allowPaging
        columnChooser={false}
        dataSource={data}
        colAttributes={columns}
        ColoredRows
        summaryItems={summary}
      />
    </FormComponent>
  );
}

export default SupplierList;
