import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { routes } from "../../Routes/Routes";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
} from "react-pro-sidebar";

import "react-pro-sidebar/dist/css/styles.css";
import UserProfile from "./UserProfile";

function SideBar2({ clicked }) {
  const { t } = useTranslation();

  const [currentRoute, setCurrentRoute] = useState("");
  const [collapsed, setCollapsed] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location]);

  useEffect(() => {
    let body = document.body;

    body.classList.contains("open") ? setCollapsed(true) : setCollapsed(false);
  }, [clicked]);

  function handleOpen(el) {
    let opened = false;

    el.data &&
      el.data.filter((e) => e.path === currentRoute).length > 0 &&
      (opened = true);

    return opened;
  }

  function handleColor(el) {
    let color = "";
    el.path === currentRoute && (color = "white");

    return color;
  }

  function handleClassName(el) {
    let className = "";
    el.data &&
      el.data.filter((e) => e.path === currentRoute).length > 0 &&
      (className = "Active");

    return className;
  }

  return (
    <aside
      id="left-panel"
      style={{ backgroundColor: "#1d1d1d" }}
      className="left-panel small-sidebar-action"
    >
      <ProSidebar collapsed={collapsed}>
        <SidebarHeader>
          <UserProfile />
        </SidebarHeader>

        <Menu iconShape="square">
          {routes.map((el) =>
            el.path === "/dashboard" ? (
              <MenuItem icon={<i className={el.icon}></i>}>
                {t(el.title)}
                <Link to={el.path} />
              </MenuItem>
            ) : (
              <SubMenu
                title={t(el.title)}
                icon={<i className={el.icon}></i>}
                // open={handleOpen(el)}
                className={handleClassName(el)}
              >
                {el.data &&
                  el.data.map((el2) =>
                    el2.data ? (
                      <SubMenu
                        title={t(el2.title)}
                        icon={<i className={el2.icon}></i>}
                      >
                        {el2.data.map((el3) => (
                          <MenuItem style={{ color: handleColor(el3) }}>
                            {t(el3.title)}
                            <Link to={el3.path} />
                          </MenuItem>
                        ))}
                      </SubMenu>
                    ) : (
                      <MenuItem style={{ color: handleColor(el2) }}>
                        {t(el2.title)}
                        <Link to={el2.path} />
                      </MenuItem>
                    )
                  )}
              </SubMenu>
            )
          )}
        </Menu>
      </ProSidebar>
    </aside>
  );
}

export default SideBar2;
