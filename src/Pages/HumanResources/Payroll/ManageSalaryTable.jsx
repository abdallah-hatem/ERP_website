import React from "react";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../../Components/Web Components/MasterTable/MasterTable";

function ManageSalaryTable({ columns, title, summary }) {
  return (
    <FormComponent title={title}>
      <MasterTable
        allowExcel
        allowPrint
        allowPaging
        columnChooser={false}
        colAttributes={columns}
        summaryItems={summary}
      />
    </FormComponent>
  );
}

export default ManageSalaryTable;
