import React from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";

function AddIncomeTax() {
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
         field: "TAX Rate",
         caption: t("TAX Rate"),
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
         title="Setup TAX"
         style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
         <MasterTable
            allowAdd
            allowDelete
            allowUpdate
            searchPanel={false}
            columnChooser={false}
            dataSource={data}
            colAttributes={columns}
            ColoredRows
            onSaving={(e) => console.log(e)}
         />

         <ButtonComponent
            style={{ width: "200px", float: "right", marginTop: 20 }}
            onClick={handleSubmit}
            title={"Save"}
         />
      </FormComponent>
   );
}

export default AddIncomeTax;
