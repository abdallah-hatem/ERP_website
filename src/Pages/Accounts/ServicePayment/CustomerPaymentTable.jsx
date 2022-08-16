import React from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../../Components/Web Components/ButtonComponent/ButtonComponent";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../../Components/Web Components/MasterTable/MasterTable";

function CustomerPaymentTable() {
  const { t, i18n } = useTranslation();

  const options2 = [
    {
      ID: 1,
      Name: "Cash In Hand",
    },
    {
      ID: 2,
      Name: "Bank",
    },
  ];

  const columns2 = [
    {
      field: "payment_type",
      caption: t("Payment Type"),
      options: options2,
    },
    {
      field: "paid_amount",
      caption: t("Paid Amount"),
      // format: "number",
    },
  ];

  const data2 = [
    {
      payment_type: 1,
      paid_amount: 0.0,
    },
  ];

  return (
    <div className="col-12 mt-5">
      <MasterTable
        allowUpdate
        allowDelete
        searchPanel={false}
        columnChooser={false}
        dataSource={data2}
        colAttributes={columns2}
        ColoredRows
      />

      <div style={{ width: "250px", float: "right", marginTop: 20 }}>
        <ButtonComponent title={"Add New Payment Method"} />
      </div>
    </div>
  );
}

export default CustomerPaymentTable;
