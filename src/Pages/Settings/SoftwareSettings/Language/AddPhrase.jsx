import React from "react";
import ActionsButtons from "../../../../Components/Web Components/ActionButtons/ActionsButtons";
import FormComponent from "../../../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../../../Components/Web Components/MasterTable/MasterTable";

function AddPhrase() {
   const tableData = [
      { ID: 1, Phrase: "Accounts" },
      { ID: 2, Phrase: "Account_Code" },
   ];

   const columns = [
      {
         field: "ID",
         caption: "ID",
      },
      {
         field: "Phrase",
         caption: "Phrase",
      },
   ];

   const buttons = [
      {
         title: "Language List",
         path: "language-list",
         iconClass: "ti-plus",
         class: "btn btn-info m-b-5 m-r-2",
      },
   ];

   return (
      <>
         <FormComponent hideHeader>
            <MasterTable
               allowPaging
               allowAdd
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

export default AddPhrase;
