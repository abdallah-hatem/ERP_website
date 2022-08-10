import React from "react";
import ActionsButtons from "../../../../Components/Web Components/ActionButtons/ActionsButtons";
import FormComponent from "../../../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../../../Components/Web Components/MasterTable/MasterTable";
import { Column, Button } from "devextreme-react/data-grid";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Language() {
   const { t } = useTranslation();
   const navigate = useNavigate();

   const tableData = [{ ID: 1, Language: "English" }];

   const columns = [
      {
         field: "ID",
         caption: "ID",
      },
      {
         field: "Language",
         caption: "Language",
      },
   ];

   const buttons = [
      {
         title: "Add Phrase",
         path: "add-phrase",
         iconClass: "ti-plus",
         class: "btn btn-info m-b-5 m-r-2",
      },
   ];

   return (
      <>
         <FormComponent hideHeader>
            <MasterTable
               allowAdd
               colAttributes={columns}
               dataSource={tableData}
               columnChooser={false}
               searchPanel={false}
            >
               <Column type="buttons" width={120}>
                  <Button
                     hint={t("Update")}
                     icon="edit"
                     visible={true}
                     disabled={false}
                     onClick={(e) => navigate(`edit-phrase/${e.row.data.ID}`)}
                  />
               </Column>
            </MasterTable>
         </FormComponent>

         <ActionsButtons style={{ float: "right" }} buttons={buttons} />
      </>
   );
}

export default Language;
