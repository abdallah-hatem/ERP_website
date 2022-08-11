import React from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../../Components/Web Components/MasterTable/MasterTable";
import { useNavigate } from "react-router-dom";
import { Column, Button } from "devextreme-react/data-grid";

function RoleList() {
  const { t } = useTranslation();

  const nav = useNavigate();

  const columns = [
    {
      field: "sl",
      caption: t("SL."),
    },
    {
      field: "role_name",
      caption: t("Role Name"),
    },
  ];

  const data = [
    {
      sl: 1,
      role_name: "Manager",
    },
    {
      sl: 2,
      role_name: "Sale Counter",
    },
  ];

  return (
    <FormComponent title={"Role List"}>
      <MasterTable
        allowDelete
        searchPanel={false}
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
              nav(`/add-role/${e.row.data.sl}`);
            }}
          />

          <Button name="delete" />
        </Column>
      </MasterTable>
    </FormComponent>
  );
}

export default RoleList;
