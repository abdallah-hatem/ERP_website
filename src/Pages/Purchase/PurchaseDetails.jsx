import React from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";

function PurchaseDetails() {
   const { t } = useTranslation();

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
      <FormComponent title="Purchase Details">
         <div
            style={{ justifyContent: "space-between" }}
            class="row print-font-size purchasedetails-header"
         >
            <div class="col-xs-4 ">
               <img
                  src="https://saleserpnew.bdtask.com/saleserp_v9.9_demo/assets/img/icons/2022-02-02/adc406eeef54c9a25db184e7d50ba8ec.png"
                  class="img-bottom-m print-logo invoice-img-position"
                  alt=""
               />
               <br />
               <br />

               <span
                  style={{
                     color: "green",
                     border: "2px solid green",
                     borderRadius: 5,
                     padding: 2,
                  }}
                  class="label label-success-outline m-r-15 p-10"
               >
                  Billing From
               </span>
               <br />
               <address class="margin-top10">
                  <strong class="">Demo Company</strong>
                  <br />
                  <span class="comp-web">Company Demo Address</span>
                  <br />
                  <abbr class="font-bold">Mobile: </abbr>
                  123456 <br />
                  <abbr class="font-bold">Email:</abbr>
                  demo@mail.com <br />
                  <abbr class="font-bold">Website:</abbr>
                  <span class="comp-web">https://www.demo.com/</span>
                  <br />
               </address>
            </div>
            <div class="col-xs-4 print-qr">
               <img
                  src="http://chart.apis.google.com/chart?cht=qr&amp;chs=250x250&amp;chld=L|4&amp;chl=SW52b2ljZSBObzogMjAyMjAyMDIxMjEzMTcgQ3VzdG9tZXIgTmFtZTogQW5kZXJzb24="
                  alt=""
               />
            </div>
            <div class="col-xs-4 text-left ">
               <h2 class="m-t-0">Purchase</h2>
               <div>
                  <abbr class="font-bold">Invoice No:</abbr>
                  123{" "}
               </div>
               <div class="m-b-15">
                  <abbr class="font-bold">Billing Date: </abbr>
                  2022-02-02 <br />
                  <abbr class="font-bold">Order Time: </abbr>
                  14:05:53
               </div>
               <span class="label label-success-outline m-r-15">
                  Billing To
               </span>
               <address style={{ marginTop: "10px" }} class="">
                  <strong class="">Anderson </strong>
                  <br />
                  andu villa, duse road <br />
                  <abbr class="font-bold">Mobile: </abbr>
                  324324334 <br />
                  <abbr class="font-bold">VAT NO: </abbr>
                  3101669953 <br />
               </address>
            </div>
         </div>
         <MasterTable
            allowPrint
            searchPanel={false}
            columnChooser={false}
            dataSource={data}
            colAttributes={columns}
            ColoredRows
            summaryItems={summary}
         />
      </FormComponent>
   );
}

export default PurchaseDetails;
