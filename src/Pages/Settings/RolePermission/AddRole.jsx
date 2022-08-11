import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../../Components/Web Components/MasterTable/MasterTable";
import { CheckBox } from "devextreme-react/check-box";
import { TitleColor } from "../../../Styles/Colors";

function AddRole() {
  const { t } = useTranslation();

  const [value, setValue] = useState(false);

  function header(title) {
    return (
      <>
        <span className="pr-2">{title}</span>
        <CheckBox defaultValue={false} />
      </>
    );
  }

  const columns = [
    {
      field: "sl",
      caption: t("SL No."),
      allowEditing: false,
    },
    {
      field: "menu_name",
      caption: t("Menu Name"),
    },
    {
      field: "create",
      caption: t("Create"),
      alignment: "center",
      headerCellRender: () => header("Create"),
      cellRender: () => <CheckBox defaultValue={false} />,
    },
    {
      field: "read",
      caption: t("Read"),
      alignment: "center",
      // dataType: "boolean",
      // headerCellRender: () => header("Read"),
      // cellRender: () => <CheckBox defaultValue={false} />,
    },
  ];

  const data = [
    {
      sl: 1,
      menu_name: "New Sale",
    },
    {
      sl: 2,
      menu_name: "Manage Sale",
    },
    {
      sl: 3,
      menu_name: "POS Sale",
    },
  ];

  const titleStyle = { color: TitleColor, fontWeight: "550", marginBottom: 10 };

  return (
    <FormComponent title="Add Role">
      <h3 style={titleStyle}>Sale</h3>
      <MasterTable
        // allowSelection
        allowColumnReordering
        onCellClick={(e) => console.log(e)}
        searchPanel={false}
        columnChooser={false}
        dataSource={data}
        colAttributes={columns}
      />
    </FormComponent>
  );
}

export default AddRole;
