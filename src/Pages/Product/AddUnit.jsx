import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../Components/Web Components/ButtonComponent/ButtonComponent";
import SearchBar from "../Closing/SearchBar";

function AddUnit() {
   const { t } = useTranslation();

   const defaultValues = useRef({
      unit_name: "",
      status: "",
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

   const options = [
      {
         label: "Active",
         value: "active",
      },
      {
         label: "Inactive",
         value: "inactive",
      },
   ];

   const data = [
      {
         label: "Unit Name :",
         placeholder: "Unit Name",
         name: "unit_name",
         handleChange,
         value: values["unit_name"],
      },
      {
         label: "Status :",
         placeholder: "Status",
         name: "status",
         chooseOptions: true,
         options: options,
         handleChange,
         value: values["status"],
      },
   ];

   useEffect(() => {
      console.log(values);
   }, [values]);

   return (
      <SearchBar
         listView
         CardTitle="Add Unit"
         hideCard={false}
         data={data}
         buttonTitle="Save"
         handleSubmit={handleSubmit}
      >
         <div style={{ width: "200px", float: "right" }}>
            <ButtonComponent
               onClick={handleSubmit}
               title={"Save And Add Another"}
            />
         </div>
      </SearchBar>
   );
}

export default AddUnit;
