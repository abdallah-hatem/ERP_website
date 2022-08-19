import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ImageUploader } from "../../../Components/Web Components/ImageUploader/ImageUploader";
import SearchBar from "../../Closing/SearchBar";

function Settings() {
   const { t } = useTranslation();

   const defaultValues = useRef({
      currency: "",
      currency_position: "",
      logo: "",
      time_zone: "",
      sale_logo: "",
      favicon: "",
      footer_text: "",
      qr_code: false,
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

   const handleBoxChange = useCallback((e) => {
      setValues((prev) => ({
         ...prev,
         [e.target.name]: !prev.qr_code,
      }));
   }, []);

   const options = [
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

   const data = [
      {
         label: "Logo :",
         name: "logo",
         value: values["logo"],
         children: <ImageUploader />,
         handleChange,
      },
      {
         label: "Sale Logo :",
         name: "sale_logo",
         value: values["sale_logo"],
         children: <ImageUploader />,
         handleChange,
      },
      {
         label: "Favicon :",
         name: "favicon",
         value: values["favicon"],
         children: <ImageUploader />,
         handleChange,
      },
      {
         label: "Currency :",
         placeholder: "Select Option",
         name: "currency",
         chooseOptions: true,
         options: options,
         value: values["currency"],
         handleChange,
      },
      {
         label: "Time Zone :",
         placeholder: "Select Option",
         name: "time_zone",
         value: values["time_zone"],
         chooseOptions: true,
         options: options,
         handleChange,
      },
      {
         label: "Currency Position :",
         placeholder: "Select Option",
         name: "currency_position",
         value: values["currency_position"],
         chooseOptions: true,
         options: options,
         handleChange,
      },
      {
         label: "Footer Text :",
         placeholder: "Footer Text",
         name: "footer_text",
         textArea: true,
         value: values["footer_text"],
         handleChange,
      },
      {
         label: "Language :",
         placeholder: "Select Option",
         name: "language",
         value: values["language"],
         chooseOptions: true,
         options: options,
         handleChange,
      },
      {
         label: "LTR/RTR :",
         placeholder: "Select Option",
         name: "direction",
         value: values["direction"],
         chooseOptions: true,
         options: options,
         handleChange,
      },
      {
         label: "Discount Type :",
         placeholder: "Select Option",
         name: "discount_type",
         value: values["discount_type"],
         chooseOptions: true,
         options: options,
         handleChange,
      },
      {
         label: "Invoice QR-Code :",
         type: "checkbox",
         name: "qr_code",
         value: values["qr_code"],
         handleChange: handleBoxChange,
      },
   ];

   useEffect(() => {
      console.log(values);
   }, [values]);

   return (
      <SearchBar
         listView
         hideCard={false}
         CardTitle="Update Settings"
         buttonTitle="Save Changes"
         buttonWidth="180px"
         handleSubmit={handleSubmit}
         handleChange={handleChange}
         data={data}
         colWidth="10"
         labelWidth="200px"
         width={"60%"}
      />
   );
}

export default Settings;
