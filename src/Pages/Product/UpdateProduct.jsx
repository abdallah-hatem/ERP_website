import React, { useCallback, useEffect, useRef, useState } from "react";

import { useTranslation } from "react-i18next";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";

import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import { ImageUploader } from "../../Components/Web Components/ImageUploader/ImageUploader";

import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";
import AddFormComponent from "../../Components/Web Components/AddFormComponent/AddFormComponent";

function UpdateProduct({ UpdateData }) {
  const defaultValues = useRef({
    barcode: "",
    product_name: "",
    product_model: "",
    price: "",
    image: "",
    igt: "",
    sn: "",
    category: "",
    unit: "",
    vat: "",
    product_details: "",
    image_path: "",
  });

  const [values, setValues] = useState(defaultValues.current);

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  useEffect(() => {
    setValues((prev) => ({ ...prev, ...UpdateData }));
  }, [UpdateData]);

  function handleSubmit(e) {
    // e.preventDefault();

    for (const [key, value] of Object.entries(values)) {
      if (!value) {
        alert(t("Fill the inputs"));
      }
    }
  }

  const { t } = useTranslation();

  useEffect(() => {
    console.log(values);
    console.log(UpdateData);
  }, [values, UpdateData]);

  const options = [
    {
      label: "Sam",
      value: "Sam",
    },
    {
      label: "Mike",
      value: "Mike",
    },
    {
      label: "Jack",
      value: "Jack",
    },
  ];

  const CategoryOptions = [
    {
      label: "Electronics",
      value: "electronics",
    },
    {
      label: "Food",
      value: "food",
    },
  ];

  const UnitOptions = [
    {
      label: "Piece",
      value: "piece",
    },
    {
      label: "Lbs",
      value: "lbs",
    },
    {
      label: "KG",
      value: "kg",
    },
  ];

  const DataCol1 = [
    {
      label: "Product Name :",
      placeholder: "Product Name",
      handleChange,
      name: "product_name",
      value: values["product_name"],
    },
    {
      label: "Model :",
      placeholder: "Model",
      handleChange,
      name: "product_model",
      value: values["product_model"],
    },
    {
      label: "Sale Price :",
      placeholder: "Sale Price",
      handleChange,
      name: "price",
      value: values["price"],
    },
    {
      label: "Image :",
      // placeholder: "Image",
      handleChange: handleChange,
      name: "image",
      value: values["image"],
      component: <ImageUploader />,
    },
    {
      label: "IGT :",
      placeholder: "IGT",
      handleChange: handleChange,
      name: "igt",
      value: values["igt"],
    },
  ];

  const DataCol2 = [
    {
      label: "SN :",
      placeholder: "SN",
      handleChange,
      name: "sn",
      value: values["sn"],
    },
    {
      label: "Category :",
      placeholder: "Category",
      handleChange,
      name: "category",
      chooseOptions: true,
      options: CategoryOptions,
    },
    {
      label: "Unit :",
      placeholder: "Unit",
      handleChange,
      name: "unit",
      chooseOptions: true,
      options: UnitOptions,
    },

    {
      label: "VAT :",
      placeholder: "VAT",
      handleChange,
      name: "vat",
      value: values["vat"],
    },
    {
      label: "Product Details :",
      placeholder: "Product Details",
      handleChange,
      name: "product_details",
      value: values["product_details"],
      textArea: true,
    },
  ];

  const columns = [
    {
      field: "supplier",
      caption: t("Supplier"),
      options,
    },
    {
      field: "supplier_price",
      caption: t("Supplier Price"),
    },
  ];

  const data = [
    {
      supplier: UpdateData.supplier_name,
      supplier_price: UpdateData.supplier_price,
    },
  ];

  return (
    <div>
      <AddFormComponent
        hideCard
        hideButton
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        values={values}
        DataCol1={DataCol1}
        DataCol2={DataCol2}
        countryChooser={false}
        regionChooser={false}
      />
      <img
        style={{ height: "150px", width: "150px", margin: "10px 0" }}
        src={UpdateData.images}
        alt="product_img"
      ></img>

      <FormComponent
        hideHeader
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        <MasterTable
          allowAdd
          allowDelete
          allowUpdate
          searchPanel={false}
          columnChooser={false}
          dataSource={data}
          colAttributes={columns}
          ColoredRows
          options={options}
        />
      </FormComponent>

      <div style={{ width: "200px", float: "right", marginTop: 20 }}>
        <ButtonComponent onClick={handleSubmit} title={"Update"} />
      </div>
    </div>
  );
}

export default UpdateProduct;
