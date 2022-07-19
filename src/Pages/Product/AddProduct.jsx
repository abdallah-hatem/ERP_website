import React, { useCallback, useEffect, useRef, useState } from "react";

import { useTranslation } from "react-i18next";
import UploadImageButton from "../../Components/Web Components/UploadImageButton/UploadImageButton";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";

import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import { ImageUploader } from "../../Components/Web Components/ImageUploader/ImageUploader";
import InputComponent from "../../Components/Web Components/InputComponent/InputComponent";

import "./style.css";

function AddProduct() {
  const defaultValues = useRef({
    barcode: "",
    product_name: "",
    model: "",
    sale_price: "",
    image: "",
    igt: "",
    sn: "",
    category: "",
    unit: "",
    vat: "",
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

  const { t, i18n } = useTranslation();

  useEffect(() => {
    console.log(values);
  }, [values]);

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
  ];

  return (
    <FormComponent title={"Add Product"}>
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
            {/* <UploadImageButton />  */}
          </InputComponent>
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
              options={el.options}
            />
          ))}
        </div>
      </div>

      <div style={{ width: "200px", float: "right", marginTop: 20 }}>
        <ButtonComponent onClick={handleSubmit} title={"Submit"} />
      </div>
    </FormComponent>
  );
}

export default AddProduct;
