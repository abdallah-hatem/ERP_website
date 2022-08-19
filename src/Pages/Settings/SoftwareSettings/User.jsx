import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ImageUploader } from "../../../Components/Web Components/ImageUploader/ImageUploader";
import SearchBar from "../../Closing/SearchBar";

function User({ picture, title, hideCard = false }) {
   const { t } = useTranslation();

   const defaultValues = useRef({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      image: "",
      user_type: "User",
      status: "Active",
   });

   const [values, setValues] = useState(defaultValues.current);

   const handleChange = useCallback((e) => {
      setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   }, []);

   function handleSubmit() {
      for (const [key, value] of Object.entries(values)) {
         if (!value) {
            alert(t("Fill the inputs"));
         }
      }
   }

   const handleRadioChange = useCallback((e, el) => {
      setValues((prev) => ({
         ...prev,
         [e.target.name]: el.title,
      }));
   }, []);

   const userRadio = [{ title: "User" }, { title: "Admin" }];
   const statusRadio = [{ title: "Active" }, { title: "Inactive" }];

   function children(name, data, value) {
      return (
         <div className="d-flex">
            {data.map((el) => (
               <label class="d-flex">
                  <input
                     type="radio"
                     name={name}
                     value={value}
                     onClick={(e) => handleRadioChange(e, el)}
                     checked={el.title === values[name]}
                  />
                  {el.title}
               </label>
            ))}
         </div>
      );
   }

   const data = [
      {
         label: "First Name :",
         placeholder: "First Name",
         handleChange,
         name: "first_name",
         value: values["first_name"],
      },
      {
         label: "Last Name :",
         placeholder: "Last Name",
         handleChange,
         name: "last_name",
         value: values["last_name"],
      },
      {
         label: "E-Mail :",
         placeholder: "E-Mail",
         handleChange,
         name: "email",
         value: values["email"],
      },
      {
         label: "Password :",
         placeholder: "Password",
         handleChange,
         name: "password",
         value: values["password"],
      },
      {
         children: (
            <div className="d-flex justify-content-center">
               <img
                  style={{ height: 150, width: 150 }}
                  src={picture && picture}
               />
            </div>
         ),
         removeContainer: true,
      },
      {
         label: "Image :",
         handleChange,
         name: "image",
         value: values["image"],
         children: <ImageUploader />,
      },
      {
         label: "User Type :",
         handleChange,
         children: children("user_type", userRadio, values["user_type"]),
      },
      {
         label: "Status :",
         handleChange,
         children: children("status", statusRadio, values["status"]),
      },
   ];

   const newData = picture ? data : data.filter((el) => el.name && el);

   useEffect(() => {
      console.log(values);
   }, [values]);

   return (
      <SearchBar
         listView
         CardTitle={title}
         hideCard={hideCard}
         data={newData}
         handleSubmit={handleSubmit}
         buttonTitle="Save"
         colWidth="10"
         labelWidth="200px"
         width={"65%"}
      />
   );
}

export default User;
