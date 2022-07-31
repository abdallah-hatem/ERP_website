import React from "react";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../../Components/Web Components/MasterTable/MasterTable";

function ManageSalaryTable({ columns, title }) {
  return (
    <FormComponent title={title}>
      <MasterTable
        allowExcel
        allowPrint
        allowPaging
        columnChooser={false}
        colAttributes={columns}
      />
    </FormComponent>
  );
}

export default ManageSalaryTable;
