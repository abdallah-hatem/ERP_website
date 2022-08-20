import React from "react";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";
import { DataGrid } from "devextreme-react/data-grid";

function SalesTermsList() {
  const options = [
    {
      label: "Active",
      value: "Active",
    },
    {
      label: "Inactive",
      value: "Inactive",
    },
  ];

  const columns = [
    {
      field: "sl",
      caption: "SL No.",
      allowEditing: false,
      // width: "auto",
      // minWidth: 80,
    },
    {
      field: "TermsAndConditions",
      caption: "Terms & Conditions",
      alignment: "center",
      editorType: "dxTextArea",
      // width: "auto",
      // minWidth: 200,
    },
    {
      field: "status",
      caption: "Status",
      alignment: "center",
      // width: "auto",
      options,
      // minWidth: 50,
    },
  ];

  const data = [
    {
      sl: 1,
      TermsAndConditions:
        "Goods purchased without the original invoice are not to be returned or exchanged",
      status: "Active",
    },
  ];

  return (
    <FormComponent title={"Sales Terms List"}>
      <MasterTable
        allowPrint
        allowExcel
        allowDelete
        allowUpdate
        allowPaging
        ColoredRows
        editingMode="popup"
        columnChooser={false}
        dataSource={data}
        colAttributes={columns}
        onSaving={(e) => console.log(e)}
      />
      {/* <DataGrid
        dataSource={data}
        wordWrapEnabled
        showBorders
        columnAutoWidth={true}
      /> */}
    </FormComponent>
  );
}

export default SalesTermsList;
