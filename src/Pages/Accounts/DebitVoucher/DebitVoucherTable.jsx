import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import InputComponent from "../../../Components/Web Components/InputComponent/InputComponent";
import MasterTable from "../../../Components/Web Components/MasterTable/MasterTable";

function DebitVoucherTable({ handleChange }) {
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
      //   cellRender: () => (
      //     <select style={{ width: "100%" }}>
      //       <option value={"jack"} label={"Jack"}></option>
      //       <option value={"hudson"} label={"Hudson"}></option>
      //       <option value={"Drake"} label={"Drake"}></option>
      //     </select>
      //   ),
    },
    {
      field: "code",
      caption: t("Code"),
      allowEditing: false,
      //   cellRender: (data) => (
      //     <input style={{ width: "100%" }} disabled value={data.value}></input>
      //   ),
    },
    {
      field: "amount",
      caption: t("Amount"),
      dataType: "number",
      //   cellRender: (data) => (
      //     <input
      //       //   onChange={(e) => setValue(e.target.value)}
      //       style={{ width: "100%" }}
      //       type="number"
      //       //   value={data.value}
      //     ></input>
      //   ),
    },
  ];

  const data = [
    {
      account_name: "",
      code: 0,
      amount: 5,
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
    <div className="col-12 mt-5">
      <MasterTable
        allowUpdate
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
    </div>
  );
}

export default DebitVoucherTable;
