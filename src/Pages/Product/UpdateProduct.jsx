import React, { useCallback, useEffect, useRef, useState } from "react";

import { useTranslation } from "react-i18next";
import UploadImageButton from "../../Components/Web Components/UploadImageButton/UploadImageButton";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";

import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import { ImageUploader } from "../../Components/Web Components/ImageUploader/ImageUploader";
import InputComponent from "../../Components/Web Components/InputComponent/InputComponent";

import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";

function UpdateProduct({ UpdateData }) {
  const defaultValues = useRef({
    barcode: "",
    product_name: UpdateData.product_name,
    model: UpdateData.product_model,
    sale_price: UpdateData.price,
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

  function handleSubmit(e) {
    // e.preventDefault();

    for (const [key, value] of Object.entries(values)) {
      if (!value) {
        alert(t("Fill the inputs"));
        return;
      }
    }
  }

  let handleGetImages = (event) => {
    let files = event.target.files;
    setValues((prev) => ({ ...prev, image_path: files[0] }));
  };

  let handleRemoveImage = useCallback(() => {
    setValues((prev) => ({
      ...prev,
      image_path: "",
    }));
  }, []);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    console.log(values);
  }, [values]);

  console.log(UpdateData);

  const options = [
    {
      ID: 1,
      Name: UpdateData.supplier_name,
    },
    {
      ID: 2,
      Name: "Mike",
    },
    {
      ID: 3,
      Name: "Jack",
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
      name: "model",
      value: values["model"],
    },
    {
      label: "Sale Price :",
      placeholder: "Sale Price",
      handleChange,
      name: "sale_price",
      value: values["sale_price"],
    },
    // {
    //   label: "Image :",
    //   placeholder: "Image",
    //   handleChange: handleChange,
    //   name: "image",
    //   value: values["image"],
    // },
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
      supplier: 1,
      supplier_price: UpdateData.supplier_price,
    },
  ];

  return (
    <FormComponent title={"Update Product"}>
      <div className="row">
        <div className="col-lg-12">
          <InputComponent
            label="Barcode / QR-code :"
            placeholder="Barcode"
            name="barcode"
            value={values["barcode"]}
            handleChange={handleChange}
          />
        </div>
        <div className="col-lg-6">
          {DataCol1.map((el) => (
            <InputComponent
              label={el.label}
              placeholder={el.placeholder}
              handleChange={el.handleChange}
              name={el.name}
              value={el.value}
            />
          ))}
          <InputComponent children={false} label={"Image :"}>
            <ImageUploader />
            {/* <UploadImageButton
              isMultiple={false}
              handleGetImages={handleGetImages}
              handleRemoveImage={handleRemoveImage}
              imagesFiles={
                values && values.image_path
                  ? [
                      typeof values.image_path == "string"
                        ? // ? ApiBaseUrl + values.image_path
                          "ApiBaseUrl" + values.image_path
                        : values.image_path,
                    ]
                  : []
              }
            /> */}
          </InputComponent>
          <img
            style={{ height: "150px", width: "150px", margin: "10px 0" }}
            src={UpdateData.images}
            alt="product_img"
          ></img>
        </div>
        <div className="col-lg-6">
          {DataCol2.map((el) => (
            <InputComponent
              label={el.label}
              placeholder={el.placeholder}
              handleChange={el.handleChange}
              name={el.name}
              value={el.value}
              chooseOptions={el.chooseOptions}
              textArea={el.textArea}
              options={el.options}
            />
          ))}
        </div>
      </div>
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
    </FormComponent>
  );
}

export default UpdateProduct;
