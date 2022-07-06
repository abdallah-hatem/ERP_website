import React from "react";
import { routes } from "../../Routes/Routes";

function SideBar() {
  return (
    <aside id="left-panel" className="left-panel small-sidebar-action">
      <nav
        style={{ backgroundColor: "#2c3136" }}
        class="navbar navbar-expand-sm navbar-default"
      >
        <div id="main-menu" class="main-menu collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li>
              <a href="index.html">
                <i class="menu-icon fa fa-laptop"></i>Dashboard
              </a>
            </li>
            {routes.map((el) => (
              <li class="menu-item-has-children dropdown">
                <a
                  href="/"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  // aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class={el.icon}></i>
                  {el.title}
                </a>
                <ul
                  style={{ backgroundColor: "#2c3136" }}
                  class="sub-menu children dropdown-menu"
                >
                  {el.data &&
                    el.data.length > 0 &&
                    el.data.map((ele) => (
                      <li>
                        <i class={ele.icon}></i>
                        <a style={{ fontSize: "13px" }} href={ele.path}>
                          {ele.title}
                        </a>
                      </li>
                    ))}
                  {/* <li>
                    <i class={"menu-icon fa fa-laptop"}></i>
                    <a href="ui-buttons.html">{"itemmmmmmmmmmm"}</a>
                  </li> */}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}

export default SideBar;
