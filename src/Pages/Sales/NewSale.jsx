import React from "react";
import DataGrid from "devextreme-react/data-grid";

function NewSale() {
  return (
    <DataGrid
      dataSource={[
        {
          id: 1,
          name: "hatem",
          name2: "hatem",
          name3: "hatem",
          name33: "hatem",
          name32: "hatem",
          name322: "hatem",
          name132: "hatem",
          name332: "hatem",
          name4: "hatem",
        },
      ]}
      // width={1000}
      // columnMinWidth={200}
      showBorders={true}
      columnAutoWidth={true}
    />
  );
}

export default NewSale;
