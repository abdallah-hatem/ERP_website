import React from "react";
import ActionsButtons from "../../../../Components/Web Components/ActionButtons/ActionsButtons";
import FormComponent from "../../../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../../../Components/Web Components/MasterTable/MasterTable";
import { useTranslation } from "react-i18next";

function EditPhrase() {
   const { t } = useTranslation();

   const tableData = [
      { ID: 1, Phrase: "Accounts" },
      { ID: 2, Phrase: "Accounts_Code" },
   ];

   const columns = [
      {
         field: "ID",
         caption: "ID",
         allowEditing: false,
      },
      {
         field: "Phrase",
         caption: "Phrase",
         allowEditing: false,
      },
      {
         field: "Label",
         caption: "Label",
      },
   ];

   const buttons = [
      {
         title: "Add Phrase",
         path: "add-phrase",
         iconClass: "ti-plus",
         class: "btn btn-info m-b-5 m-r-2",
      },
      {
         title: "Language List",
         path: "language-list",
         iconClass: "ti-plus",
         class: "btn btn-warning m-b-5 m-r-2",
      },
   ];

   return (
      <>
         <FormComponent hideHeader>
            <MasterTable
               allowUpdate
               colAttributes={columns}
               dataSource={tableData}
               columnChooser={false}
               searchPanel={false}
            />
         </FormComponent>

         <ActionsButtons style={{ float: "right" }} buttons={buttons} />
      </>
   );
}

export default EditPhrase;
