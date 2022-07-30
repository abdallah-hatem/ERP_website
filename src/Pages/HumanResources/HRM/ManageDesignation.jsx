import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Column, Button } from "devextreme-react/data-grid";
import { Popup } from "devextreme-react/popup";

import MasterTable from "../../../Components/Web Components/MasterTable/MasterTable";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import AddDesignation from "./AddDesignation";

function ManageDesignation() {
  const { t } = useTranslation();

  const [clickedEdit, setClickedEdit] = useState(false);

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
      field: "details",
      caption: t("Details"),
    },
  ];

  const data = [
    {
      sl: 1,
      designation: "Sale Staff",
      details: "",
    },
    {
      sl: 2,
      designation: "Manager",
      details: "",
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
        >
          <Column type="buttons" width={120}>
            <Button
              hint={t("Update")}
              icon="edit"
              visible={true}
              disabled={false}
              onClick={(e) => {
                setClickedEdit(true);
              }}
            />

            <Button name="delete" />
          </Column>

          {clickedEdit && (
            <Popup
              title={t("Update Designation")}
              height={"auto"}
              visible={clickedEdit}
              hideOnOutsideClick
              onHiding={() => setClickedEdit(false)}
            >
              <AddDesignation hideCard hideHeader />
            </Popup>
          )}
        </MasterTable>
      </FormComponent>
    </>
  );
}

export default ManageDesignation;
