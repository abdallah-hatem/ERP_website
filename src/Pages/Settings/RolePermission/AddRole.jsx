import { React, useEffect, useState } from "react";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import { routes } from "../../../Routes/Routes";
import AddRoleTable from "./AddRoleTable";

function AddRole() {
   let dataArray = [];

   useEffect(() => {
      let arr = [];
      routes.map((el) => {
         arr.push(el.data?.map((el2) => el2.title));
      });
      console.log(arr, "arr");

      arr.length > 0 &&
         arr.map((el) => {
            let temp = [];
            el?.map((el2, index) =>
               temp.push({
                  sl: index + 1,
                  menu_name: el2 || "",
                  create: false,
                  read: false,
                  update: false,
                  delete: false,
               })
            );
            dataArray.push(temp);
         });

      console.log(dataArray, "dataArray");
   }, []);

   const [tables, setTables] = useState();
   useEffect(() => {
      setTables([
         dataArray?.map((el) => el.length > 0 && el.map((el2) => el2)),
      ]);
   }, [dataArray.length > 0]);
   tables && console.log(tables, "tables");

   return (
      <FormComponent title="Add Role">
         {tables?.map((el) =>
            el?.map(
               (el2) =>
                  el2 && (
                     <>
                        <AddRoleTable data={el2} />
                        <div className="mb-5" />
                     </>
                  )
            )
         )}
      </FormComponent>
   );
}

export default AddRole;
