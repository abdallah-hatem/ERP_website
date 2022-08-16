import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import FormComponent from "../../../Components/Web Components/FormComponent/FormComponent";
import MasterTable from "../../../Components/Web Components/MasterTable/MasterTable";
import { CheckBox } from "devextreme-react/check-box";
import { TitleColor } from "../../../Styles/Colors";

function AddRole() {
  const { t } = useTranslation();

  const [value, setValue] = useState({ value: false, title: "Create" });
  const [data, setdata] = useState([
    {
      sl: 1,
      menu_name: "New Sale",
      read: false,
    },
    {
      sl: 2,
      menu_name: "Manage Sale",
      read: false,
    },
    {
      sl: 3,
      menu_name: "POS Sale",
      read: true,
    },
  ]);

  function Header(e) {
    console.log(e);
    return (
      <>
        <span className="pr-2">{t(value.title)}</span>
        <CheckBox
          value={value.value}
          onValueChange={(ex) => {
            console.log(data.map((e) => ({ ...e, read: ex })));
            //console.log(data.map({ ...e, read: ex }));
            setValue({ ...value, value: ex });
            setdata(data.map((e) => ({ ...e, read: ex })));
          }}
        />
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
      headerCellRender: () => Header({ value: false, title: "Create" }),
      cellRender: () => <CheckBox defaultValue={false} />,
    },
    {
      field: "read",
      caption: t("Read"),
      alignment: "center",
      dataType: "boolean",
      headerCellRender: (e) => <Header {...e} title={"Read"} />,
      cellRender: (e) => {
        return <CheckBox defaultValue={e.data.read} />;
      },
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
