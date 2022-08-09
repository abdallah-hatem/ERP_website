import React, { useCallback, useEffect, useRef, useState } from "react";

import { useTranslation } from "react-i18next";
import UploadImageButton from "../../Components/Web Components/UploadImageButton/UploadImageButton";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";

import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import { ImageUploader } from "../../Components/Web Components/ImageUploader/ImageUploader";
import InputComponent from "../../Components/Web Components/InputComponent/InputComponent";

// import "./style.css";
import MasterTable from "../../Components/Web Components/MasterTable/MasterTable";
import AddFormComponent from "../../Components/Web Components/AddFormComponent/AddFormComponent";

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
         dataType: "number",
      },
   ];

   const data = [
      {
         supplier: "",
         supplier_price: "",
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
         </div>
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

         <FormComponent
            hideHeader
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
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
               onSaving={(e) => console.log(e)}
            />
         </FormComponent>

         <ButtonComponent
            style={{ width: "200px", float: "right", marginTop: 20 }}
            onClick={handleSubmit}
            title={"Save"}
         />
      </FormComponent>
   );
}

export default AddProduct;
