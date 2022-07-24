import React from "react";

import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import TreeTable from "../../Components/Web Components/TreeTable/TreeTable";
import { data } from "./Data";

// import "./style.scss";

function ChartOfAccount() {
  const columns = [
    {
      field: "head_name",
      caption: "Head Name",
      validation: true,
    },
    {
      field: "opening_balance",
      caption: "Opening Balance",
      format: "currency",
      validation: true,
    },
    {
      field: "balance",
      caption: "Balance",
      format: "currency",
      validation: true,
    },
    {
      field: "parent_id",
      //   caption: "Parent Id",
      visible: false,
      validation: true,
      lookup: true,
      sortBy: "head_name",
      id: "id",
    },
  ];

  return (
    <FormComponent title={"Account Chart"}>
      <TreeTable
        data={data}
        columns={columns}
        keyExpr="id"
        parentIdExpr="parent_id"
        popUpWidth="700px"
        allowUpdating
        allowDeleting
        rowAlternationEnabled
      />
    </FormComponent>
  );
}

export default ChartOfAccount;
