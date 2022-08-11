import React, { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ImageUploader } from "../../../Components/Web Components/ImageUploader/ImageUploader";
import SearchBar from "../../Closing/SearchBar";

function User({ picture, title, hideCard = false }) {
  const { t } = useTranslation();

  const defaultValues = useRef({});

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

  const [currentBox1, setCurrentBox1] = useState("");
  const [currentBox2, setCurrentBox2] = useState("");

  const checkBoxes = [{ title: "User" }, { title: "Admin" }];
  const checkBoxes2 = [{ title: "Active" }, { title: "Inactive" }];

  function children1(data, current, handleClick) {
    return (
      <div className="d-flex">
        {data.map((el) => (
          <label class="d-flex">
            <input
              type="radio"
              name={el.title}
              onClick={(e) => handleClick(e.target.name)}
              checked={el.title === current}
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
          <img style={{ height: 150, width: 150 }} src={picture && picture} />
        </div>
      ),
      removeContainer: true,
    },
    {
      label: "Image :",
      // placeholder: "Image",
      handleChange,
      name: "image",
      value: values["image"],
      children: <ImageUploader />,
    },
    {
      label: "User Type :",
      // placeholder: "Image",
      handleChange,
      children: children1(checkBoxes, currentBox1, setCurrentBox1),
    },
    {
      label: "Status :",
      // placeholder: "Image",
      handleChange,
      children: children1(checkBoxes2, currentBox2, setCurrentBox2),
    },
  ];

  const newData = picture ? data : data.filter((el) => el.name && el);

  return (
    <SearchBar
      listView
      CardTitle={title}
      hideCard={hideCard}
      data={newData}
      handleSubmit={handleSubmit}
      buttonTitle="Save"
    />
  );
}

export default User;
