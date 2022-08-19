import React, { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import DownloadFileButton from "../../Components/Web Components/DownloadFileButton/DownloadFileButton";
import FileUploader from "../../Components/Web Components/FileUploader/FileUploader";
import FormComponent from "../../Components/Web Components/FormComponent/FormComponent";
import SearchBar from "../Closing/SearchBar";

function AddProductCsv() {
   const { t } = useTranslation();

   const defaultValues = useRef({
      csv: "",
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

   const data = [
      {
         label: "Upload CSV File :",
         name: "csv",
         handleChange,
         value: values["csv"],
         children: <FileUploader />,
      },
   ];

   return (
      <>
         <FormComponent title="CSV File Information">
            <div className="col-lg-12">
               <div>
                  <span class="text-warning">
                     The first line in downloaded csv file should remain as it
                     is. Please do not change the order of columns.
                  </span>
                  <br />
                  <span class="text-info">
                     (Serial No,Supplier Name, Product Name, Product
                     Model,Category Name ,Sale Price,Supplier Price Product
                     Variants separated by vertical bar)
                  </span>
                  <br />
                  Please make sure the csv file is UTF-8 encoded and not saved
                  with byte order mark (BOM).
                  <p>
                     The images should be uploaded in <strong>uploads</strong>{" "}
                     folder.
                  </p>
               </div>

               <DownloadFileButton link="https://saleserpnew.bdtask.com/saleserp_v9.9_demo/assets/data/csv/sample_product .csv" />
            </div>
         </FormComponent>

         <SearchBar
            listView
            CardTitle="Import Product (CSV)"
            hideCard={false}
            data={data}
            buttonTitle="Submit"
            handleSubmit={handleSubmit}
            colWidth="10"
            labelWidth="200px"
            width={"60%"}
         >
            <ButtonComponent
               title={"Submit And Add Another"}
               style={{ float: "right", width: 200 }}
               onClick={handleSubmit}
            />
         </SearchBar>
      </>
   );
}

export default AddProductCsv;
