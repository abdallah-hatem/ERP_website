import React, { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../../Components/Web Components/MasterTable/MasterTable";

function ManageCompany() {
   const { t } = useTranslation();

   const columns = [
      {
         field: "sl",
         caption: t("SL."),
         allowEditing: false,
      },
      {
         field: "name",
         caption: t("Name"),
      },
      {
         field: "address",
         caption: t("Address"),
      },
      {
         field: "mobile",
         caption: t("Mobile"),
      },
      {
         field: "website",
         caption: t("Website"),
      },
      {
         field: "email",
         caption: t("E-mail"),
         visible: false,
      },
      {
         field: "vat_no",
         caption: t("VAT No."),
         visible: false,
      },
      {
         field: "cr_no",
         caption: t("CR No."),
         visible: false,
      },
   ];

   const data = [
      {
         sl: 1,
         name: "Demo Company",
         address: "demo address",
         mobile: 1234,
         website: "democompany.com",
         email: "democompany@gmail.com",
         vat_no: 2212,
         cr_no: 2212,
      },
   ];

   return (
      <FormComponent title={"Manage Company"}>
         <MasterTable
            allowUpdate
            ColoredRows
            editingMode="popup"
            searchPanel={false}
            columnChooser={false}
            dataSource={data}
            colAttributes={columns}
         />
      </FormComponent>
   );
}

export default ManageCompany;
