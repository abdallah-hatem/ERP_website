import React from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../../Components/Web Components/ButtonComponent/ButtonComponent";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../../Components/Web Components/MasterTable/MasterTable";

function CustomerPaymentTable() {
  const { t, i18n } = useTranslation();

  const options = [
    {
      label: "Cash In Hand",
      value: "Cash In Hand",
    },
    {
      label: "Bank",
      value: "Bank",
    },
  ];

  const columns = [
    {
      field: "payment_type",
      caption: t("Payment Type"),
      options: options,
    },
    {
      field: "paid_amount",
      caption: t("Paid Amount"),
      dataType: "number",
      format: "currency",
    },
  ];

  const data = [
    {
      payment_type: "",
      paid_amount: "",
    },
  ];

  return (
    <div className="col-12 mt-5">
      <MasterTable
        allowUpdate
        allowDelete
        searchPanel={false}
        columnChooser={false}
        dataSource={data}
        colAttributes={columns}
        ColoredRows
      />

      <div style={{ width: "250px", float: "right", marginTop: 20 }}>
        <ButtonComponent title={"Add New Payment Method"} />
      </div>
    </div>
  );
}

export default CustomerPaymentTable;
