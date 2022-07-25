import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../../Components/Web Components/MasterTable/MasterTable";

function ContraVoucherTable({ handleChange }) {
  const { t, i18n } = useTranslation();

  const [val, setVal] = useState("choose a name");

  const options = [
    {
      label: "Hudson",
      value: "Hudson",
      //   value: "123",
    },
    {
      label: "Mike",
      value: "Mike",
      //   value: "1234",
    },
    {
      label: "Justin",
      value: "Justin",
      //   value: "12345",
    },
  ];

  const columns = [
    {
      field: "account_name",
      caption: t("Account Name"),
      options,
    },
    {
      field: "code",
      caption: t("Code"),
      allowEditing: false,
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
  ];

  const data = [
    {
      account_name: "",
      code: "0",
      debit: "",
      credit: "",
    },
  ];

  const summary = [
    {
      column: "credit",
      summaryType: "sum",
      valueFormat: "currency",
    },
    {
      column: "debit",
      summaryType: "sum",
      valueFormat: "currency",
    },
  ];

  return (
    <FormComponent
      hideHeader
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <MasterTable
        allowUpdate
        allowAdd
        ColoredRows
        searchPanel={false}
        columnChooser={false}
        dataSource={data}
        colAttributes={columns}
        summaryItems={summary}
        onSaving={(e) => {
          console.log(e);
          //   handleChange(e.changes[0].data);
        }}
      />
    </FormComponent>
  );
}

export default ContraVoucherTable;
