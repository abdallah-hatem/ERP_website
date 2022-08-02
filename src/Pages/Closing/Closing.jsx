import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";

import "react-datepicker/dist/react-datepicker.css";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";
import ActionsButtons from "../../Components/Web Components/ActionButtons/ActionsButtons";
import SearchBar from "./SearchBar";

function Closing() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    opening_balance_cash: "",
    opening_balance_bank: "",
  });

  const [values, setValues] = useState(defaultValues.current);

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  function handleSubmit(e) {
    // e.preventDefault();
    for (const [key, value] of Object.entries(values)) {
      if (!value) {
        alert(t("Fill the inputs"));
      }
    }
  }

  const dataCash = [
    {
      label: "Opening Balance :",
      placeholder: "0.00",
      name: "opening_balance_cash",
      type: "number",
      handleChange,
      value: values["opening_balance_cash"],
    },
    {
      value: 0,
      disabled: true,
    },
    {
      value: 0,
      disabled: true,
    },
    {
      label: "Closing Balance :",
      placeholder: "0.00",
      name: "opening_balance_cash",
      type: "number",
      disabled: true,
      value: values["opening_balance_cash"],
    },
  ];

  const dataBank = [
    {
      label: "Opening Balance :",
      placeholder: "0.00",
      name: "opening_balance_bank",
      type: "number",
      handleChange,
      value: values["opening_balance_bank"],
    },
    {
      value: 0,
      disabled: true,
    },
    {
      value: 0,
      disabled: true,
    },
    {
      label: "Closing Balance :",
      placeholder: "0.00",
      name: "opening_balance_bank",
      type: "number",
      disabled: true,
      value: values["opening_balance_bank"],
    },
  ];

  const tables = [
    { title: "Cash In Hand", data: dataCash },
    { title: "Bank", data: dataBank },
  ];

  const columns = [
    {
      field: "note_name",
      caption: t("Note Name"),
      dataType: "number",
      allowEditing: false,
    },
    {
      field: "pcs",
      caption: t("Pcs."),
      dataType: "number",
    },
    {
      field: "amount",
      caption: t("Amount"),
      format: "currency",
      allowEditing: false,
      calculateCellValueHandle: (rowData) => rowData.pcs * rowData.note_name,
    },
  ];

  const data = [
    {
      note_name: 2000,
      pcs: "",
      amount: "",
    },
    {
      note_name: 1000,
      pcs: "",
      amount: "",
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
      title: "Closing Report",
      path: "closing-report",
      iconClass: "ti-align-justify",
      class: "btn btn-primary m-b-5 m-r-2",
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values]);
  return (
    <>
      <FormComponent title="Closing Account">
        <div className="border-bottom">
          <div style={{ color: "#374767" }} class="text-center mb-3">
            <h3>Demo Company</h3>
            <h4>Company Demo Address</h4>
            <h4>Cash Closing</h4>
            <h4>Date:26/07/2022</h4>
          </div>
        </div>

        {tables.map((el) => (
          <>
            <SearchBar
              listView
              handleSubmit={handleSubmit}
              data={el.data}
              title={el.title}
              colWidth="10"
              width="70%"
            />
            <br />
            <br />
          </>
        ))}
      </FormComponent>

      <FormComponent title="Cash In Hand">
        <MasterTable
          allowUpdate
          searchPanel={false}
          columnChooser={false}
          dataSource={data}
          colAttributes={columns}
          ColoredRows
          summaryItems={summary}
        />
      </FormComponent>

      <ActionsButtons buttons={buttons} />
    </>
  );
}

export default Closing;
