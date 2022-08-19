import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchBar from "../../Closing/SearchBar";

function AddExpenseItem() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    expense_item_name: "",
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
      label: "Expense Item :",
      placeholder: "Expense Item",
      name: "expense_item_name",
      handleChange,
      value: values["expense_item_name"],
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
     <SearchBar
        listView
        CardTitle="Add Expense Item"
        hideCard={false}
        buttonTitle="Save"
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        data={data}
        colWidth="10"
        labelWidth="200px"
        width="60%"
     />
  );
}

export default AddExpenseItem;
