import React from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../../Components/Web Components/MasterTable/MasterTable";

import "./SupplierList.css";

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
  ];

  const data = [
    {
      sl: 1,
      supplier_name: "Abdallah",
      address_1: "1234 - street",
    },
    {
      sl: 2,
      supplier_name: "Abdallah",
      address_1: "1234 - street",
    },
    {
      sl: 3,
      supplier_name: "Abdallah",
      address_1: "1234 - street",
    },
    {
      sl: 3,
      supplier_name: "Abdallah",
      address_1: "1234 - street",
    },
    {
      sl: 3,
      supplier_name: "Abdallah",
      address_1: "1234 - street",
    },
    {
      sl: 3,
      supplier_name: "Abdallah",
      address_1: "1234 - street",
    },
    {
      sl: 3,
      supplier_name: "Abdallah",
      address_1: "1234 - street",
    },
    {
      sl: 3,
      supplier_name: "Abdallah",
      address_1: "1234 - street",
    },
    {
      sl: 3,
      supplier_name: "Abdallah",
      address_1: "1234 - street",
    },
    {
      sl: 3,
      supplier_name: "Abdallah",
      address_1: "1234 - street",
    },
    {
      sl: 3,
      supplier_name: "Abdallah",
      address_1: "1234 - street",
    },
    {
      sl: 3,
      supplier_name: "Abdallah",
      address_1: "1234 - street",
    },
    {
      sl: 3,
      supplier_name: "Abdallah",
      address_1: "1234 - street",
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
      />
    </FormComponent>
  );
}

export default SupplierList;
