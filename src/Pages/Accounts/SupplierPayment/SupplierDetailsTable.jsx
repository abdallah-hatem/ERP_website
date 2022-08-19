import React from "react";
import MasterTable from "../../../Components/Web Components/MasterTable/MasterTable";

function SupplierDetailsTable({ columns, data, summary, button }) {
   return (
      <div className="mt-5">
         <MasterTable
            allowUpdate
            ColoredRows
            searchPanel={false}
            columnChooser={false}
            dataSource={data}
            colAttributes={columns}
            summaryItems={summary}
         />

         {button}
      </div>
   );
}

export default SupplierDetailsTable;
