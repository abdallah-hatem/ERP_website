import React, { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import FileUploader from "../../../Components/Web Components/FileUploader/FileUploader";
import SearchBar from "../../Closing/SearchBar";

function Import() {
   const { t } = useTranslation();

   const defaultValues = useRef({
      import: "",
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
         label: "Import :",
         name: "import",
         value: values["import"],
         children: <FileUploader />,
         handleChange,
      },
   ];

   return (
      <SearchBar
         listView
         hideCard={false}
         CardTitle="Import"
         buttonTitle="Import"
         data={data}
         handleSubmit={handleSubmit}
      />
   );
}

export default Import;
