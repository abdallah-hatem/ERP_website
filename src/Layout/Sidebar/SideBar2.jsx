import React, { useCallback, useEffect, useRef, useState } from "react";
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
  const location = useLocation();

  const [currentRoute, setCurrentRoute] = useState("");
  const [collapsed, setCollapsed] = useState(false);

  const [currentIndex, setCurrentIndex] = useState("");
  const [currentIndex2, setCurrentIndex2] = useState("");

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location]);

  useEffect(() => {
    setCollapsed(document.body.classList.contains("open"));
  }, [clicked]);

  function handleOpen(el) {
    let opened = false;

    if (el.data?.filter((e) => e.path === currentRoute).length > 0) {
      opened = true;
      return opened;
    }

    el.data?.map((el) => {
      if (el.data?.filter((e) => e.path === currentRoute).length > 0) {
        opened = true;
        return opened;
      }
    });

    return opened;
  }

  function handleColor(el) {
    let color = "";
    el.path === currentRoute && (color = "white");

    return color;
  }

  function handleClassName(el) {
    let className = "";

    if (el.data?.filter((e) => e.path === currentRoute).length > 0) {
      className = "Active";
      return className;
    }

    el.data?.map((el) => {
      if (el.data?.filter((e) => e.path === currentRoute).length > 0) {
        className = "Active";
        return className;
      }
    });

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
          {routes.map((el, index) =>
            el.path === "/dashboard" ? (
              <MenuItem icon={<i className={el.icon}></i>}>
                {t(el.title)}
                <Link to={el.path} />
              </MenuItem>
            ) : (
              <SubMenu
                onClick={() => setCurrentIndex(index)}
                open={index === currentIndex}
                title={t(el.title)}
                icon={<i className={el.icon} />}
                className={handleClassName(el)}
              >
                {el.data &&
                  el.data.map((el2, index2) =>
                    el2.data ? (
                      <SubMenu
                        onClick={() => setCurrentIndex2(index2)}
                        open={index2 === currentIndex2}
                        title={t(el2.title)}
                        icon={<i className={el2.icon} />}
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
