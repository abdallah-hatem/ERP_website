import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ActionsButtons from "../../../Components/Web Components/ActionButtons/ActionsButtons";
import SearchBar from "../../Closing/SearchBar";

import { Popup } from "devextreme-react/popup";
import DownloadFileButton from "../../../Components/Web Components/DownloadFileButton/DownloadFileButton";
import TimePickerComponent from "../../../Components/Web Components/TimePickerComponent/TimePickerComponent";

function Attendance() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    employee_name: "",
    date: "",
    sign_in: "",
    csv: "",
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

  const [time, setTime] = useState(null);

  function handleChangeTime(e) {
    setTime(e);
    setValues((prev) => ({ ...prev, sign_in: e }));
  }

  function handleClick(e) {
    setClickedEdit(true);
  }

  const [startDate, setStartDate] = useState(new Date());

  const [clickedEdit, setClickedEdit] = useState(false);

  const dateData = [
    {
      label: "Date :",
      value: "date",
      selected: startDate,
      onChange: setStartDate,
    },
  ];

  const options = [
    {
      label: "Justin",
      value: "Justin",
    },
    {
      label: "Mike",
      value: "Mike",
    },
  ];

  const data = [
    {
      label: "Employee Name :",
      placeholder: "Select Option",
      name: "employee_name",
      chooseOptions: true,
      options,
      handleChange,
      value: values["employee_name"],
    },
    {
      label: "Sign In :",
      placeholder: "Sign In",
      name: "sign_in",
      handleChange,
      value: values["sign_in"],
      children: (
        <TimePickerComponent value={time} handleChange={handleChangeTime} />
      ),
    },
  ];

  const popupData = [
    {
      label: "Upload CSV File :",
      //   placeholder: "Sign In",
      name: "csv",
      type: "file",
      handleChange,
      value: values["csv"],
    },
  ];

  const buttons = [
    {
      title: "Bulk Check-In",
      //   path: "sales-report",
      class: "btn btn-info m-b-5 m-r-2",
      handleClick,
    },
    {
      title: "Manage Attendance",
      path: "manage-attendance",
      class: "btn btn-primary m-b-5 m-r-2",
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [values, startDate]);

  return (
     <>
        <SearchBar
           listView
           hideHeader
           buttonTitle="Check In"
           hideCard={false}
           handleSubmit={handleSubmit}
           handleChange={handleChange}
           data={data}
           dateData={dateData}
           startDate={startDate}
           values={values}
           colWidth="10"
           labelWidth="200px"
           width="60%"
        />

        <Popup
           title={t("Attendance")}
           height={"auto"}
           visible={clickedEdit}
           hideOnOutsideClick
           onHiding={() => setClickedEdit(false)}
        >
           <SearchBar
              listView
              buttonTitle="Submit"
              handleSubmit={handleClick}
              handleChange={handleChange}
              data={popupData}
              colWidth="10"
              labelWidth="200px"
              width="60%"
           />

           <DownloadFileButton link="https://saleserpnew.bdtask.com/saleserp_v9.9_demo/assets/data/csv/sample_product .csv" />
        </Popup>

        <ActionsButtons style={{ float: "right" }} buttons={buttons} />
     </>
  );
}

export default Attendance;
