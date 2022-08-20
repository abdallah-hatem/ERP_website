import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Column, Button } from "devextreme-react/data-grid";
import { Popup } from "devextreme-react/popup";
import ScrollView from "devextreme-react/scroll-view";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";
import AddFormComponent from "../../Components/Web Components/AddFormComponent/AddFormComponent";
import DatePicker from "react-datepicker";
import SearchBar from "../Closing/SearchBar";
import DateInput from "../../Components/Web Components/DateInput/DateInput";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";

function AddQuotation() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    barcode: "",
    customer: "",
    address: "",
    mobile: "",
    details: "",
    igt: "",
    quotation_no: "",
    quotation_date: "",
    expiry_date: "",
    vat: "",
    product_details: "",
    image_path: "",
    start_date: "",
    end_date: "",
  });

  const [values, setValues] = useState(defaultValues.current);

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  function handleSubmit(e) {
    // e.preventDefault();

    for (const [key, value] of Object.entries(values)) {
      if (!value) {
        alert(t("Fill the inputs"));
        return;
      }
    }
    if (!validDate) {
      alert(t("Start date cant be bigger than end date"));
    }
  }

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [validDate, setValidDate] = useState(true);

  const startDateData = [
    {
      label: "Start Date :",
      value: "start_date",
      selected: startDate,
      onChange: setStartDate,
    },
  ];

  const endDateData = [
    {
      label: "End Date :",
      value: "end_date",
      selected: endDate,
      onChange: setEndDate,
    },
  ];

  const options = [
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
    {
      label: "3",
      value: "3",
    },
  ];

  const itemColumns = [
    {
      field: "item_information",
      caption: t("Item Information"),
    },
    {
      field: "description",
      caption: t("Description"),
    },
    {
      field: "batch_number",
      caption: t("Batch Number"),
      options,
    },
    {
      field: "av_qnty",
      caption: t("Av. Qnty."),
      // format: "currency",
      allowEditing: false,
    },
    {
      field: "unit",
      caption: t("Unit"),
      allowEditing: false,
    },
    {
      field: "qnty",
      caption: t("Qnty"),
      dataType: "number",
    },
    {
      field: "rate",
      caption: t("Rate"),
      dataType: "number",
    },
    {
      field: "discount",
      caption: t("Discount %"),
    },
    {
      field: "discount_value",
      caption: t("Dis. Value"),
      allowEditing: false,
      dataType: "number",
      calculateCellValueHandle: (rowData) =>
        (rowData.discount / 100) * rowData.qnty * rowData.rate,
    },
    {
      field: "sale_discount",
      caption: t("Sale Discount"),
      dataType: "number",
    },
    {
      field: "total_discount",
      caption: t("Total Discount"),
      allowEditing: false,
      calculateCellValueHandle: (rowData) =>
        (rowData.discount / 100) * rowData.qnty * rowData.rate +
        rowData.sale_discount,
    },
    {
      field: "total",
      caption: t("Total"),
      allowEditing: false,
      calculateCellValueHandle: (rowData) =>
        Math.abs(
          (rowData.discount / 100) * rowData.qnty * rowData.rate +
            rowData.sale_discount -
            rowData.qnty * rowData.rate
        ),
    },
  ];

  const serviceColumns = [
    {
      field: "Service Name",
      caption: t("Service Name"),
    },
    {
      field: "qnty",
      caption: t("Qnty"),
      dataType: "number",
    },
    {
      field: "charge",
      caption: t("Charge"),
      dataType: "number",
    },
    {
      field: "discount",
      caption: t("Discount %"),
    },
    {
      field: "discount_value",
      caption: t("Dis. Value"),
      allowEditing: false,
      dataType: "number",
      calculateCellValueHandle: (rowData) =>
        (rowData.discount / 100) * rowData.qnty * rowData.charge,
    },
    {
      field: "service_discount",
      caption: t("Service Discount"),
      dataType: "number",
    },
    {
      field: "total_discount",
      caption: t("Total Discount"),
      allowEditing: false,
      calculateCellValueHandle: (rowData) =>
        (rowData.discount / 100) * rowData.qnty * rowData.charge +
        rowData.service_discount,
    },
    {
      field: "total",
      caption: t("Total"),
      allowEditing: false,
      calculateCellValueHandle: (rowData) =>
        Math.abs(
          (rowData.discount / 100) * rowData.qnty * rowData.charge +
            rowData.service_discount -
            rowData.qnty * rowData.charge
        ),
    },
  ];

  const data = [
    {
      batch_number: "",
      av_qnty: "",
      // rate: "",
      // discount_value: "s",
    },
  ];

  const DataCol1 = [
    {
      label: "Customer :",
      placeholder: "Select options",
      handleChange,
      chooseOptions: true,
      options,
      name: "customer",
      value: values["customer"],
    },
    {
      label: "Address :",
      placeholder: "Address",
      handleChange,
      name: "address",
      value: values["address"],
      disabled: true,
    },
    {
      label: "Mobile :",
      placeholder: "Mobile",
      handleChange,
      name: "mobile",
      value: values["mobile"],
      disabled: true,
    },
    {
      label: "Details :",
      placeholder: "Details",
      handleChange: handleChange,
      name: "details",
      textArea: true,
      value: values["details"],
    },
  ];

  const DataCol2 = [
    {
      label: "Quotation No. :",
      placeholder: "Quotation No.",
      handleChange,
      name: "quotation_no",
      value: values["quotation_no"],
      disabled: true,
    },
    {
      label: "Quotation Date :",
      placeholder: "Quotation Date",
      handleChange,
      name: "quotation_date",
      component: startDateData.map((el) => (
        <DateInput
          // component
          dateData={startDateData}
          startDate={startDate}
          endDate={endDate}
          values={values}
          setValidDate={setValidDate}
        />
      )),
    },
    {
      label: "Expiry Date :",
      placeholder: "Expiry Date",
      handleChange,
      name: "expiry_date",
      component: endDateData.map((el) => (
        <DateInput
          // component
          dateData={endDateData}
          startDate={startDate}
          endDate={endDate}
          values={values}
          setValidDate={setValidDate}
        />
      )),
    },
  ];

  const tables = [
    {
      title: "Item Quotation",
      columns: itemColumns,
      data,
    },
    {
      title: "Service Quotation",
      columns: serviceColumns,
      data,
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values, startDate, endDate]);

  return (
    <FormComponent title={"Add Quotation"}>
      <AddFormComponent
        hideCard
        hideButton
        title="Add Customer"
        DataCol1={DataCol1}
        DataCol2={DataCol2}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        values={values}
        countryChooser={false}
        regionChooser={false}
      />

      {tables.map((el) => (
        <>
          <div className="mt-5" />

          <MasterTable
            allowDelete
            allowAdd
            allowUpdate
            editingMode="popup"
            searchPanel={false}
            columnChooser={false}
            dataSource={el.data}
            colAttributes={el.columns}
            ColoredRows
            // onRowDoubleClick={(e) => navigate(`/product-details/${e.data.sl}`)}
          />
        </>
      ))}

      <ButtonComponent
        style={{
          width: "200px",
          float: "right",
          marginTop: 50,
        }}
        onClick={handleSubmit}
        title={"Save"}
      />
    </FormComponent>
  );
}

export default AddQuotation;
