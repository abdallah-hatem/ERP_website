import React, { useCallback, useEffect, useRef, useState } from "react";

import { useTranslation } from "react-i18next";
import AddFormComponent from "../../Components/Web Components/AddFormComponent/AddFormComponent";

function AddCustomer() {
   const defaultValues = useRef({
      customer_name: "",
      email: "",
      phone: "",
      address_1: "",
      fax: "",
      country: "",
      state: "",
      mobile: "",
      vat_number: "",
      cr_number: "",
      address_2: "",
      city: "",
      zip_code: "",
      previous_balance: "",
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

   const { t, i18n } = useTranslation();

   useEffect(() => {
      console.log(values);
   }, [values]);

   const DataCol1 = [
      {
         label: "Customer Name :",
         placeholder: "Customer Name",
         handleChange: handleChange,
         name: "customer_name",
         value: values["customer_name"],
      },
      {
         label: "E-Mail Address :",
         placeholder: "E-Mail",
         handleChange: handleChange,
         name: "email",
         value: values["email"],
      },
      {
         label: "Phone :",
         placeholder: "Phone",
         handleChange: handleChange,
         name: "phone",
         value: values["phone"],
      },
      {
         label: "Address 1 :",
         placeholder: "Address 1",
         handleChange: handleChange,
         name: "address_1",
         value: values["address_1"],
         textArea: true,
      },
      {
         label: "Fax :",
         placeholder: "Fax",
         handleChange: handleChange,
         name: "fax",
         value: values["fax"],
      },
   ];

   const DataCol2 = [
      {
         label: "Mobile :",
         placeholder: "Mobile",
         handleChange: handleChange,
         name: "mobile",
         value: values["mobile"],
      },
      {
         label: "VAT Number :",
         placeholder: "VAT Number",
         handleChange: handleChange,
         name: "vat_number",
         value: values["vat_number"],
      },
      {
         label: "CR Number :",
         placeholder: "CR Number",
         handleChange: handleChange,
         name: "cr_number",
         value: values["cr_number"],
      },

      {
         label: "Address 2 :",
         placeholder: "Address 2",
         handleChange: handleChange,
         name: "address_2",
         value: values["address_2"],
         textArea: true,
      },
      {
         label: "City :",
         placeholder: "City",
         handleChange: handleChange,
         name: "city",
         value: values["city"],
      },
      {
         label: "Zip Code :",
         placeholder: "Zip Code",
         handleChange: handleChange,
         name: "zip_code",
         value: values["zip_code"],
      },
      {
         label: "Previous Balance :",
         placeholder: "Previous Balance",
         handleChange: handleChange,
         name: "previous_balance",
         value: values["previous_balance"],
      },
   ];

   return (
      <AddFormComponent
         title="Add Customer"
         DataCol1={DataCol1}
         DataCol2={DataCol2}
         handleSubmit={handleSubmit}
         handleChange={handleChange}
         values={values}
      />
   );
}

export default AddCustomer;
