import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../../Components/Web Components/MasterTable/MasterTable";
import { TitleColor } from "../../../Styles/Colors";
import SearchBar from "../../Closing/SearchBar";

function UserAssignRole() {
   const { t } = useTranslation();

   const defaultValues = useRef({
      role_name: "",
      user: "",
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

   const userOptions = [
      {
         label: "Hudson",
         value: "hudson",
      },
      {
         label: "Mike",
         value: "mike",
      },
      {
         label: "Justin",
         value: "justin",
      },
   ];

   const roleOptions = [
      {
         label: "Manager",
         value: "Manager",
      },
      {
         label: "Sale Counter",
         value: "Sale Counter",
      },
   ];

   const data = [
      {
         label: "User :",
         placeholder: "Select Option",
         name: "user",
         chooseOptions: true,
         options: userOptions,
         handleChange,
         value: values["user"],
      },
      {
         label: "Role Name :",
         placeholder: "Select Option",
         name: "role_name",
         chooseOptions: true,
         options: roleOptions,
         handleChange,
         value: values["role_name"],
      },
   ];

   const columns = [
      {
         field: "sl",
         caption: t("SL No."),
      },
      {
         field: "role_name",
         caption: t("Role Name"),
      },
   ];

   useEffect(() => {
      console.log(values);
   }, [values]);

   return (
      <FormComponent title="User Assign Role">
         <div className="d-flex mb-5">
            <SearchBar
               listView
               hideCard={true}
               buttonTitle="Save"
               handleSubmit={handleSubmit}
               handleChange={handleChange}
               data={data}
               colWidth="10"
               labelWidth="200px"
               width="60%"
            />
         </div>

         <div className="col-lg-6">
            <h3 style={{ color: TitleColor, marginBottom: 10 }}>
               {t("Existing Role")}
            </h3>
            <MasterTable
               ColoredRows
               searchPanel={false}
               columnChooser={false}
               //   dataSource={tableData}
               colAttributes={columns}
            />
         </div>
      </FormComponent>
   );
}

export default UserAssignRole;
