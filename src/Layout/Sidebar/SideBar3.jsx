import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import React, { useCallback, useRef, useState } from "react";
import "antd/dist/antd.css";
import { routes } from "../../Routes/Routes";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";

function getItem(key, label, icon, children) {
  return {
    key,
    label,
    icon,
    children,
    // type,
  };
}

// const items = [
//   getItem("Option 1", "1", <PieChartOutlined />),
//   getItem("Option 2", "2", <DesktopOutlined />),
//   getItem("Option 3", "3", <ContainerOutlined />),
//   getItem("Navigation One", "sub1", <MailOutlined />, [
//     getItem("Option 5", "5"),
//     getItem("Option 6", "6"),
//     getItem("Option 7", "7"),
//     getItem("Option 8", "8"),
//   ]),
//   getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
//     getItem("Option 9", "9"),
//     getItem("Option 10", "10"),
//     getItem("Submenu", "sub3", null, [
//       getItem("Option 11", "11"),
//       getItem("Option 12", "12"),
//     ]),
//   ]),
// ];

const SideBar3 = ({ clicked }) => {
  const location = useLocation();
  const { t } = useTranslation();

  const [currentRoute, setCurrentRoute] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const [currentKey, setCurrentKey] = useState("");

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location]);

  useEffect(() => {
    setCollapsed(document.body.classList.contains("open"));

    let menus = document.getElementsByClassName(
      "ant-menu ant-menu-sub ant-menu-inline"
    );

    // document.body.classList.contains("open") &&
    for (let i = 0; i < menus.length; i++) {
      if (!menus[i].classList.contains("ant-menu-hidden")) {
        menus[i].classList.add("ant-menu-hidden");
      }
    }
  }, [clicked]);

  // useEffect(() => {
  //   setCollapsed(clicked);
  // }, [clicked]);

  const items = useRef(
    routes.map(
      (el) =>
        el.data &&
        getItem(
          uuidv4(),
          t(el.title),
          <DesktopOutlined />,
          el.data.map((el2) =>
            getItem(uuidv4(), <Link to={el2.path || ""}>{t(el2.title)}</Link>)
          )
        )
    )
  );

  return (
    <aside
      id="left-panel"
      // style={{ backgroundColor: "#1d1d1d" }}
      className="left-panel small-sidebar-action"
    >
      <div
      // style={{
      //   width: 256,
      // }}
      >
        {/* <button onClick={() => setCollapsed((prev) => !prev)}>sasas</button> */}
        <Menu
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items.current}
          style={{ height: "100vh", overflowX: "scroll" }}
          onOpenChange={(e) => console.log(e)}
        />
      </div>
    </aside>
  );
};

export default SideBar3;
