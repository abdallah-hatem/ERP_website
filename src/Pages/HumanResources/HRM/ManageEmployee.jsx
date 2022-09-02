import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Column, Button } from "devextreme-react/data-grid";
import { Popup } from "devextreme-react/popup";

import MasterTable from "../../../Components/Web Components/MasterTable/MasterTable";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import AddEmployee from "./AddEmployee";
import EmployeeProfile from "./EmployeeProfile";
import { useNavigate } from "react-router-dom";
import { SecondaryColor } from "../../../Styles/Colors";

function ManageEmployee() {
  const { t } = useTranslation();

  const nav = useNavigate();

  const [clickedEdit, setClickedEdit] = useState(false);
  const [currentRowData, setCurrentRowData] = useState("");

  function cell(data) {
    return (
      <span
        onClick={(e) => {
          nav(`employee-profile/${data.data.sl}`);
          e.preventDefault();
        }}
        style={{ cursor: "pointer", color: SecondaryColor }}
      >
        {data.value}
      </span>
    );
  }

  const columns = [
    {
      field: "sl",
      caption: t("SL."),
    },
    {
      field: "designation",
      caption: t("Designation"),
    },
    {
      field: "name",
      caption: t("Name"),
      cellRender: (data) => cell(data),
    },
    {
      field: "phone",
      caption: t("Phone"),
    },
    {
      field: "email",
      caption: t("E-Mail"),
    },
    {
      field: "picture",
      caption: t("Picture"),
      dataType: "Picture",
      cellRender: (data) => <img style={{width:"100%",height:"100%"}} src={data.value} alt="pic"></img>,
    },
  ];

  const data = [
    {
      sl: 1,
      name: "Jason",
      phone: "01234568789",
      email: "test@gmail.com",
      designation: "Sale Staff",
      picture:
        "https://saleserpnew.bdtask.com/saleserp_v9.9_demo/my-assets/image/employee/2022-02-02/9288ae91a675d63424aa4ae557c8d275.jpg",
    },
    {
      sl: 2,
      name: "Mike",
      phone: "01021415478",
      email: "test@gmail.com",
      designation: "Manager",
      picture:
        "https://saleserpnew.bdtask.com/saleserp_v9.9_demo/my-assets/image/employee/2022-02-02/5c13a83e6cf1e7b80d1e1fd271924751.jpg",
    },
  ];

  return (
    <>
      <FormComponent title={"Manage Designation"}>
        <MasterTable
          allowDelete
          allowPaging
          allowExcel
          allowPrint
          columnChooser={false}
          dataSource={data}
          colAttributes={columns}
          ColoredRows
          // onRowDoubleClick={(e) => nav(`employee-profile/${e.data.sl}`)}
        >
          <Column type="buttons" width={120}>
            <Button
              hint={t("Update")}
              icon="edit"
              visible={true}
              disabled={false}
              onClick={(e) => {
                setClickedEdit(true);
                setCurrentRowData(e.row.data);
              }}
            />

            <Button name="delete" />
          </Column>

          {clickedEdit && (
            <Popup
              title={t("Update Employee")}
              height={"auto"}
              visible={clickedEdit}
              hideOnOutsideClick
              onHiding={() => setClickedEdit(false)}
            >
              <AddEmployee hideCard UpdateData={currentRowData} />
            </Popup>
          )}
        </MasterTable>
      </FormComponent>
    </>
  );
}

export default ManageEmployee;
