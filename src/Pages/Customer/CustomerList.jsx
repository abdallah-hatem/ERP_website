import React from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";

function CustomerList() {
  const { t } = useTranslation();

  const columns = [
    {
      field: "sl",
      caption: t("SL."),
    },
    {
      field: "customer_name",
      caption: t("Customer Name"),
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
      field: "vat_no",
      caption: t("VAT NO"),
    },
    {
      field: "cr_no",
      caption: t("CR NO."),
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
      format: "currency",
    },
  ];

  const data = [
    {
      sl: 1,
      customer_name: "Abdallah",
      address_1: "1234 - street",
      balance: 5,
    },
    {
      sl: 2,
      customer_name: "Abdallah",
      address_1: "1234 - street",
      balance: 5,
    },
    {
      sl: 3,
      customer_name: "Abdallah",
      address_1: "1234 - street",
      balance: 5,
    },
    {
      sl: 4,
      customer_name: "Abdallah",
      address_1: "1234 - street",
      balance: 5,
    },
    {
      sl: 5,
      customer_name: "Abdallah",
      address_1: "1234 - street",
      balance: 5,
    },
    {
      sl: 6,
      customer_name: "Abdallah",
      address_1: "1234 - street",
      balance: 5,
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
    <FormComponent title={"Customer List"}>
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

export default CustomerList;
