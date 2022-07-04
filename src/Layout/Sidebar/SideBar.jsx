import React from "react";

import $ from "jquery";
import jQuery from "jquery";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { routes } from "../../Routes/Routes";

function SideBar() {
  let navigate = useNavigate();

  // window.location.pathname
  const [select, setSelect] = useState(0);
  const [data, setData] = useState(routes);

  function handleClick(e) {
    let elements = document.querySelectorAll(
      ".menu-item-has-children.dropdown"
    );
    let dash = document.getElementById("dashboard");
    for (let index = 0; index < elements.length; index++) {
      elements[index].classList.remove("active");
    }

    dash.classList.remove("active");
    e.currentTarget.classList.add("active");
  }
  return (
    <aside
      style={{ backgroundColor: "#2c3136" }}
      id="left-panel"
      class="left-panel"
    >
      <nav
        style={{ backgroundColor: "#2c3136" }}
        class="navbar navbar-expand-sm navbar-default"
      >
        <div id="main-menu" class="main-menu collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <div style={{ margin: "30px 0" }} class="user-panel text-center">
              <div class="image">
                <img
                  src="https://saleserpnew.bdtask.com/saleserp_v9.9_demo/assets/dist/img/profile_picture/profile.jpg"
                  class="img-circle"
                  alt="User Image"
                />
              </div>
              <div style={{ fontSize: "13px" }} class="info">
                <p
                  style={{
                    color: "white",
                    marginTop: 10,
                    marginBottom: "0px",
                  }}
                >
                  Admin User
                </p>
                <a style={{ color: "#28a745" }} href="#">
                  <i
                    style={{ marginRight: 6 }}
                    class="fa fa-circle text-success"
                  ></i>
                  Admin
                </a>
              </div>
            </div>

            {data.map((el) =>
              el.data ? (
                <li
                  onClick={(e) => {
                    handleClick(e);
                    // navigate(el.data.path);
                  }}
                  style={{ backgroundColor: "#2c3136" }}
                  class="menu-item-has-children dropdown"
                >
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
                  {el.data && el.data.length > 0 ? (
                    <ul
                      style={{ backgroundColor: "#1c1f22" }}
                      class="sub-menu children dropdown-menu"
                    >
                      {el.data.map((ele) => (
                        <li
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          <Link to={ele.path}>
                            <i class="fa fa-file-word-o"></i>
                            <p>{ele.title}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ) : (
                <li
                  style={{
                    backgroundColor: "#2c3136",
                    cursor: "pointer",
                    padding: "12px 15px",
                  }}
                  id="dashboard"
                >
                  <a href={el.path}>
                    <i class="menu-icon fa fa-laptop"></i>
                    {el.title}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </aside>
  );
}

export default SideBar;
