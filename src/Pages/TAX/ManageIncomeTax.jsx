import React from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";

function ManageIncomeTax() {
   const { t } = useTranslation();

   function handleSubmit() {}

   const columns = [
      {
         field: "SL",
         caption: t("SL"),
         dataType: "number",
         allowEditing: false,
      },
      {
         field: "Start Amount",
         caption: t("Start Amount"),
         dataType: "number",
      },
      {
         field: "End Amount",
         caption: t("End Amount"),
         dataType: "number",
      },
      {
         field: "Rate",
         caption: t("Rate"),
         dataType: "number",
      },
   ];

   const data = [
      {
         SL: 1,
      },
      {
         SL: 2,
      },
   ];

   return (
      <FormComponent
         title="Manage Income TAX"
         style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
         <MasterTable
            allowDelete
            allowUpdate
            allowPrint
            allowExcel
            ColoredRows
            allowPaging
            columnChooser={false}
            // dataSource={data}
            colAttributes={columns}
            onSaving={(e) => console.log(e)}
         />
      </FormComponent>
   );
}

export default ManageIncomeTax;
