import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";
import SearchBar from "../Closing/SearchBar";

function WastageReturnList() {
   const { t } = useTranslation();

   const columns = [
      {
         field: "sl",
         caption: t("SL No."),
         allowEditing: false,
         hideFilter: true,
      },
      {
         field: "Invoice ID",
         caption: t("Invoice ID"),
         hideFilter: true,
      },
      {
         field: "Customer Name",
         caption: t("Customer Name"),
         hideFilter: true,
      },
      {
         field: "date",
         caption: t("Date"),
         dataType: "date",
      },

      {
         field: "Total Amount",
         caption: t("Total Amount"),
         hideFilter: true,
      },
   ];

   const summary = [
      {
         column: "Total Amount",
         summaryType: "sum",
         valueFormat: "currency",
      },
   ];

   return (
      <>
         <FormComponent title={"Wastage Return"}>
            <MasterTable
               ColoredRows
               allowPaging
               searchPanel={false}
               columnChooser={false}
               colAttributes={columns}
               summaryItems={summary}
            />
         </FormComponent>
      </>
   );
}

export default WastageReturnList;
