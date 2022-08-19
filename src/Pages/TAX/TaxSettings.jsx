import React, { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import InformationButton from "../../Components/Web Components/InformationButton/InformationButton.jsx";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";
import SearchBar from "../Closing/SearchBar";

function TaxSettings() {
   const { t } = useTranslation();

   const columns = [
      {
         field: "tax_name",
         caption: "Tax Name",
      },
      {
         field: "default_value",
         caption: "Default Value (%)",
         dataType: "number",
      },
      {
         field: "reg_no",
         caption: "Reg No",
      },
      {
         field: "is_shown",
         caption: "Is Shown",
         alignment: "center",
         dataType: "boolean",
      },
   ];

   const data = [
      {
         tax_name: "",
         default_value: "",
         reg_no: "",
         is_shown: false,
      },
   ];
   function handleSubmit() {}

   return (
      <FormComponent title={"Tax Settings"}>
         {/* {tables.map((el) => (
            <>
               <div className={el.data === data && "d-flex align-items-center"}>
                  <SearchBar
                     listView
                     hideCard={true}
                     data={el.data}
                     buttonTitle="Save"
                     handleSubmit={handleSubmit}
                     showButton={false}
                     colWidth="10"
                     labelWidth="200px"
                     width={"60%"}
                  />

                  {el.data === data && (
                     <InformationButton
                        text={"Put the number of global TAX want to add"}
                     />
                  )}
               </div>

               <div
                  className={el.data === data ? "mb-5" : "mb-5 border-bottom"}
               />
            </>
         ))}

         <p style={{ color: "red", fontSize: 22 }}>
            {t(
               "If you Update TAX settings ,All of your previous TAX record will be destroy.You Will Need to set TAX product wise and Service wise"
            )}
         </p>

        */}

         <MasterTable
            allowDelete
            allowAdd
            allowUpdate
            ColoredRows
            searchPanel={false}
            columnChooser={false}
            dataSource={data}
            colAttributes={columns}
         />

         <p style={{ color: "red", fontSize: 21, marginTop: 50 }}>
            {t(
               "If you Update TAX settings ,All of your previous TAX record will be destroy.You Will Need to set TAX product wise and Service wise"
            )}
         </p>
         <ButtonComponent
            style={{ width: "200px", float: "right", marginTop: 20 }}
            onClick={handleSubmit}
            title={"Save"}
         />
      </FormComponent>
   );
}

export default TaxSettings;
