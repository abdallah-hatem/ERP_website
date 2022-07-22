import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";
import ActionsButtons from "../../Components/Web Components/ActionButtons/ActionsButtons";
import { Column, Button } from "devextreme-react/data-grid";
import { Popup } from "devextreme-react/popup";
import QrCode from "./QrCode";

function ManageProduct() {
   const { t } = useTranslation();

   const [clickedQr, setClickedQr] = useState(false);
   const [clickedBar, setClickedBar] = useState(false);
   const [currentRowId, setCurrentRowId] = useState(0);

   const columns = [
      {
         field: "sl",
         caption: t("SL."),
      },
      {
         field: "product_name",
         caption: t("Product Name"),
      },
      {
         field: "product_model",
         caption: t("Product Model"),
      },
      {
         field: "supplier_name",
         caption: t("Supplier Name"),
      },
      {
         field: "price",
         caption: t("Price"),
         format: "currency",
      },
      {
         field: "supplier_price",
         caption: t("Supplier Price"),
         format: "currency",
      },
      {
         field: "images",
         caption: t("Images"),
         dataType: "Picture",
         cellRender: (data) => <img src={data.value} alt="pic"></img>,
      },
   ];

   const data = [
      {
         sl: 1,
         product_name: "Abdallah",
         product_model: "Sm",
         supplier_name: "Hudson",
         price: 5,
         supplier_price: 10,
         images:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
         sl: 2,
         product_name: "Abdallah",
         product_model: "Sm",
         supplier_name: "Hudson",
         price: 5,
         supplier_price: 10,
         images:
            "https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
         sl: 3,
         product_name: "Abdallah",
         product_model: "Sm",
         supplier_name: "Hudson",
         price: 5,
         supplier_price: 10,
         images:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
         sl: 4,
         product_name: "Abdallah",
         product_model: "Sm",
         supplier_name: "Hudson",
         price: 5,
         supplier_price: 10,
         images:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
         sl: 5,
         product_name: "Abdallah",
         product_model: "Sm",
         supplier_name: "Hudson",
         price: 5,
         supplier_price: 10,
         images:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
         sl: 6,
         product_name: "Abdallah",
         product_model: "Sm",
         supplier_name: "Hudson",
         price: 5,
         supplier_price: 10,
         images:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
   ];

   const buttons = [
      {
         title: "Add Product",
         path: "/add-product",
         iconClass: "ti-plus",
         class: "btn btn-info m-b-5 m-r-2",
      },
      {
         title: "Add Product (CSV)",
         path: "/add-product-csv",
         iconClass: "ti-align-justify",
         class: "btn btn-primary m-b-5 m-r-2",
      },
   ];

   return (
      <>
         <FormComponent title={"Manage Product"}>
            <MasterTable
               allowDelete
               allowUpdate
               allowPaging
               allowExcel
               allowPrint
               columnChooser={false}
               dataSource={data}
               colAttributes={columns}
               ColoredRows
            >
               <Column type="buttons" width={120}>
                  <Button
                     hint={t("QR-Code")}
                     icon="copy"
                     visible={true}
                     disabled={false}
                     onClick={(e) => {
                        setClickedQr(true);
                        setCurrentRowId(e.row.data.sl);
                     }}
                  />
                  <Button
                     hint={t("BarCode")}
                     icon="checklist"
                     visible={true}
                     disabled={false}
                     onClick={() => setClickedBar(true)}
                  />
                  <Button name="edit" />
                  <Button name="delete" />
               </Column>

               {clickedQr && (
                  <Popup
                     title={t("QR-Code")}
                     height={"95vh"}
                     visible={clickedQr}
                     onHiding={() => setClickedQr(false)}
                  >
                     <QrCode rowId={currentRowId} />
                  </Popup>
               )}

               {clickedBar && (
                  <Popup
                     title={t("Barcode")}
                     height={"95vh"}
                     visible={clickedBar}
                     onHiding={() => setClickedBar(false)}
             >
               BarCode
                  </Popup>
               )}
            </MasterTable>
         </FormComponent>

         <ActionsButtons buttons={buttons} />
      </>
   );
}

export default ManageProduct;
