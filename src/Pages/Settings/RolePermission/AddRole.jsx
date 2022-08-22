import { React, useEffect, useState } from "react";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import { routes } from "../../../Routes/Routes";
import AddRoleTable from "./AddRoleTable";

function AddRole() {
   return (
      <FormComponent title="Add Role">
         {routes.map(
            (el) =>
               el.data && (
                  <>
                     <AddRoleTable data={el.data} title={el.title} />
                     <div className="mb-5" />
                  </>
               )
         )}
      </FormComponent>
   );
}

export default AddRole;
