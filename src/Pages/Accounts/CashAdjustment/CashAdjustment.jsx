import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../style.scss";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import InputComponent from "../../../Components/Web Components/InputComponent/InputComponent";
import ButtonComponent from "../../../Components/Web Components/ButtonComponent/ButtonComponent";
import CashAdjustmentTable from "./CashAdjustmentTable";
import SearchBar from "../../Closing/SearchBar";

function CashAdjustment() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    voucher_number: "OP-2",
    adjustment_type: "",
    remark: "",
    date: "",
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
      label: "Voucher No. :",
      //   placeholder: "Select Option",
      name: "voucher_number",
      //   handleChange,
      value: values["voucher_number"],
      disabled: true,
    },
    {
      label: "Adjustment Type :",
      placeholder: "Select Option",
      name: "adjustment_type",
      chooseOptions: true,
      options: options,
      handleChange,
      value: values["adjustment_type"],
    },
    {
      label: "Remark :",
      placeholder: "Remark",
      name: "remark",
      textArea: true,
      handleChange,
      value: values["remark"],
    },
  ];

  const [startDate, setStartDate] = useState(new Date());

  const dateData = [
    { label: "Date :", selected: startDate, onChange: setStartDate },
  ];

  useEffect(() => {
    function formattedDate(name) {
      return `${name.getDate()}/${name.getMonth() + 1}/${name.getFullYear()}`;
    }

    values["date"] = formattedDate(startDate);
  }, [startDate]);

  useEffect(() => {
    console.log(values);
  }, [values, startDate]);
  return (
    <FormComponent title="Cash Adjustment">
      <SearchBar
        listView
        showButton={false}
        data={data}
        handleSubmit={handleSubmit}
      >
        {dateData.map((el) => (
          <InputComponent label={el.label}>
            <DatePicker
              dateFormat={"dd/MM/yyyy"}
              selected={el.selected}
              onChange={(date) => el.onChange(date)}
            />
          </InputComponent>
        ))}
      </SearchBar>

      <CashAdjustmentTable />

      <div style={{ width: "100%", marginTop: 20 }}>
        <ButtonComponent
          style={{ width: "200px", float: "right" }}
          onClick={handleSubmit}
          title={"Save"}
        />
      </div>
    </FormComponent>
  );
}

export default CashAdjustment;
