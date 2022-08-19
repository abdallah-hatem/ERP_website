import React from "react";
import MasterTable from "../../../Components/Web Components/MasterTable/MasterTable";
import { TitleColor } from "../../../Styles/Colors";

function AddRoleTable({ title, data }) {
   const columns = [
      {
         field: "sl",
         caption: "SL No.",
         allowEditing: false,
      },
      {
         field: "menu_name",
         caption: "Menu Name",
         allowEditing: false,
      },
      {
         field: "create",
         caption: "Create",
         alignment: "center",
         dataType: "boolean",
         // headerCellRender: () => Header("Create"),
         // cellRender: (e) => (
         //    <CheckBox
         //       defaultValue={e.data.create}
         //       onValueChange={(e) => console.log(e)}
         //    />
         // ),
      },
      {
         field: "read",
         caption: "Read",
         alignment: "center",
         dataType: "boolean",
         // headerCellRender: () => Header("Read"),
         // cellRender: (e) => <CheckBox value={e.data.read} />,
      },
      {
         field: "update",
         caption: "Update",
         alignment: "center",
         dataType: "boolean",
         // headerCellRender: () => Header("Update"),
         // cellRender: (e) => <CheckBox value={e.data.update} />,
      },
      {
         field: "delete",
         caption: "Delete",
         alignment: "center",
         dataType: "boolean",
         // headerCellRender: () => Header("Delete"),
         // cellRender: (e) => <CheckBox value={e.data.delete} />,
      },
   ];

   const titleStyle = {
      color: TitleColor,
      fontWeight: "550",
   };

   return (
      <>
         <h3 style={titleStyle}>{"title"}</h3>
         <MasterTable
            allowUpdate
            editingMode="batch"
            allowColumnReordering
            searchPanel={false}
            columnChooser={false}
            dataSource={data}
            colAttributes={columns}
            onSaving={(e) => console.log(e)}
         />
      </>
   );
}

export default AddRoleTable;