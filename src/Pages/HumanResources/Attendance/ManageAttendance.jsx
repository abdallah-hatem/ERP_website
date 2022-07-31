import React from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../../Components/Web Components/MasterTable/MasterTable";

function ManageAttendance() {
  const { t } = useTranslation();

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

  return (
    <FormComponent title={"Manage Attendance"}>
      <MasterTable
        searchPanel={false}
        columnChooser={false}
        colAttributes={columns}
      />
    </FormComponent>
  );
}

export default ManageAttendance;
