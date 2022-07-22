import React from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";
import { Popup } from "devextreme-react/popup";
import { useState } from "react";

import { Column, Button } from "devextreme-react/data-grid";
import PurchaseDetails from "./PurchaseDetails";

function ManagePurchase() {
   const { t } = useTranslation();

   const [clicked, setClicked] = useState(false);

   const columns = [
      {
         field: "sl",
         caption: t("SL."),
      },
      {
         field: "invoice_number",
         caption: t("Invoice No."),
      },
      {
         field: "purchase_id",
         caption: t("Purchase ID"),
      },
      {
         field: "supplier_name",
         caption: t("Supplier Name"),
      },
      {
         field: "purchase_date",
         caption: t("Purchase Date"),
         dataType: "date",
      },
      {
         field: "total_amount",
         caption: t("Total Amount"),
         format: "currency",
      },
   ];

   const data = [
      {
         sl: 1,
         invoice_number: 123,
         purchase_id: 20220202121317,
         supplier_name: "Hudson",
         total_amount: 5,
         supplier_price: 10,
         purchase_date: "2022-02-02",
      },
      {
         sl: 2,
         invoice_number: 123,
         purchase_id: 20220202121317,
         supplier_name: "Hudson",
         total_amount: 5,
         supplier_price: 10,
         purchase_date: "2022-02-02",
      },
      {
         sl: 3,
         invoice_number: 123,
         purchase_id: 20220202121317,
         supplier_name: "Hudson",
         total_amount: 5,
         supplier_price: 10,
         purchase_date: "2022-02-02",
      },
      {
         sl: 4,
         invoice_number: 123,
         purchase_id: 20220202121317,
         supplier_name: "Hudson",
         total_amount: 5,
         supplier_price: 10,
         purchase_date: "2022-02-02",
      },
      {
         sl: 5,
         invoice_number: 123,
         purchase_id: 20220202121317,
         supplier_name: "Hudson",
         total_amount: 5,
         supplier_price: 10,
         purchase_date: "2022-02-02",
      },
      {
         sl: 6,
         invoice_number: 123,
         purchase_id: 20220202121317,
         supplier_name: "Hudson",
         total_amount: 5,
         supplier_price: 10,
         purchase_date: "2022-02-02",
      },
   ];

   const summary = [
      {
         column: "total_amount",
         summaryType: "sum",
         valueFormat: "currency",
      },
   ];

   return (
      <FormComponent title={"Manage Purchase"}>
         <MasterTable
            allowDelete
            allowUpdate
            allowPaging
            allowExcel
            allowPrint
            filterRow
            columnChooser={false}
            dataSource={data}
            colAttributes={columns}
            ColoredRows
            summaryItems={summary}
         >
            <Column type="buttons" width={120}>
               <Button
                  hint={t("Purchase Details")}
                  icon="copy"
                  visible={true}
                  // disabled={false}
                  onClick={() => setClicked(true)}
               />
               <Button name="edit" />
            </Column>

            {clicked && (
               <Popup
                  title={t("Purchase Details")}
                  height={"95vh"}
                  visible={clicked}
                  onHiding={() => setClicked(false)}
               >
                  <PurchaseDetails />
               </Popup>
            )}
         </MasterTable>
      </FormComponent>
   );
}

export default ManagePurchase;
