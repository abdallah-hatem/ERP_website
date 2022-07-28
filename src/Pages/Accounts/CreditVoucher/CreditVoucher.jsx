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

import CreditVoucherTable from "./CreditVoucherTable";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import InputComponent from "../../../Components/Web Components/InputComponent/InputComponent";
import ButtonComponent from "../../../Components/Web Components/ButtonComponent/ButtonComponent";
import SearchBar from "../../Closing/SearchBar";
// import "../style.scss";

function CreditVoucher() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    voucher_number: "OP-2",
    debit_account_head: "",
    remark: "",
    date: "",
    account_name: "",
    code: "",
    amount: "",
  });

  const [values, setValues] = useState(defaultValues.current);

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleChangeTable = useCallback((e) => {
    setValues((prev) => ({ ...prev, ...e }));
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
      label: "Cash In Hand",
      value: "cash in hand",
    },
    {
      label: "Cash In Bank",
      value: "cash in bank",
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
      label: "Debit Account Head :",
      placeholder: "Select Option",
      name: "debit_account_head",
      chooseOptions: true,
      options: options,
      handleChange,
      value: values["debit_account_head"],
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
    { label: "Start Date :", selected: startDate, onChange: setStartDate },
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
    <FormComponent title="Credit Voucher">
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

      <CreditVoucherTable handleChange={handleChangeTable} />

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

export default CreditVoucher;
