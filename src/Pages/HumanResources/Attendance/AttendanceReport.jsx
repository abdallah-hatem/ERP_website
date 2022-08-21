import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ActionsButtons from "../../../Components/Web Components/ActionButtons/ActionsButtons";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../../Components/Web Components/MasterTable/MasterTable";
import { Popup } from "devextreme-react/popup";
import SearchBar from "../../Closing/SearchBar";
import ScrollView from "devextreme-react/scroll-view";

function AttendanceReport() {
  const { t } = useTranslation();

  const defaultValues = useRef({
    start_date: "",
    end_date: "",
    employee_name: "",
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

    if (!validDate) {
      alert(t("Start date cant be bigger than end date"));
    }
  }

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [validDate, setValidDate] = useState(true);

  const [dateClicked, setDateClicked] = useState(false);
  const [employeeClicked, setEmployeeClicked] = useState(false);

  const dateData = [
    {
      label: "Start Date :",
      value: "start_date",
      selected: startDate,
      onChange: setStartDate,
    },
    {
      label: "End Date :",
      value: "end_date",
      selected: endDate,
      onChange: setEndDate,
    },
  ];

  const columns = [
    {
      field: "sl",
      caption: t("SL No."),
      allowEditing: false,
    },
    {
      field: "name",
      caption: t("Name"),
      allowEditing: false,
    },
    {
      field: "date",
      caption: t("Date"),
      allowEditing: false,
    },
    {
      field: "check_in",
      caption: t("Check In"),
      allowEditing: false,
    },

    {
      field: "check_out",
      caption: t("Check Out"),
      allowEditing: false,
    },

    {
      field: "stay_time",
      caption: t("Stay Time"),
      allowEditing: false,
    },

    {
      field: "action",
      caption: t("Action"),
      allowEditing: false,
    },
  ];

  const buttons = [
    {
      title: "Date Wise Report",
      class: "btn btn-info m-b-5 m-r-2",
      handleClick: () => setDateClicked(true),
    },
    {
      title: "Employee Wise Report",
      class: "btn btn-primary m-b-5 m-r-2",
      handleClick: () => setEmployeeClicked(true),
    },
  ];

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
      label: "Employee Name :",
      placeholder: "Select Option",
      name: "employee_name",
      chooseOptions: true,
      options: options,
      handleChange,
      value: values["employee_name"],
    },
  ];

  const popUp = [
    {
      title: "Attendance Report",
      height: "70vh",
      visible: dateClicked,
      hideOnOutsideClick: true,
      onHiding: () => setDateClicked(false),
      children: (
        <ScrollView width="100%" height="100%">
          <SearchBar
            listView
            buttonTitle="Request"
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            dateData={dateData}
            startDate={startDate}
            values={values}
            setValidDate={setValidDate}
            colWidth="10"
            labelWidth="190px"
            width="60%"
          />
        </ScrollView>
      ),
    },
    {
      title: "Employee Wise Report",
      height: "70vh",
      visible: employeeClicked,
      hideOnOutsideClick: true,
      onHiding: () => setEmployeeClicked(false),
      children: (
        <ScrollView width="100%" height="100%">
          <SearchBar
            listView
            buttonTitle="Request"
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            dateData={dateData}
            data={data}
            startDate={startDate}
            values={values}
            setValidDate={setValidDate}
            colWidth="10"
            labelWidth="190px"
            width="60%"
          />
        </ScrollView>
      ),
    },
  ];

  useEffect(() => {
    console.log(values);
  }, [startDate, endDate]);

  return (
    <>
      <FormComponent title={"Attendance Report"}>
        <MasterTable
          searchPanel={false}
          columnChooser={false}
          colAttributes={columns}
        />
      </FormComponent>

      {popUp.map((el) => (
        <Popup
          title={t(el.title)}
          height={el.height}
          // width="auto"
          visible={el.visible}
          hideOnOutsideClick={el.hideOnOutsideClick}
          onHiding={el.onHiding}
        >
          {el.children}
        </Popup>
      ))}

      <ActionsButtons style={{ float: "right" }} buttons={buttons} />
    </>
  );
}

export default AttendanceReport;
