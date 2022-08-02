import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { routes } from "../../Routes/Routes";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SideBar() {
   const [currentRoute, setCurrentRoute] = useState("");

   const location = useLocation();
   useEffect(() => {
      setCurrentRoute(location.pathname);
   }, [location]);

   const { t } = useTranslation();

   function handleNestedData() {
      let list = document.getElementById("nested-data");

      list.classList.toggle("show");
   }

   const [hide, setHide] = useState(true);
   const [show, setShow] = useState(false);

   return (
      <aside id="left-panel" className="left-panel small-sidebar-action">
         <nav
            style={{ backgroundColor: "#2c3136" }}
            class="navbar navbar-expand-sm navbar-default"
         >
            <div id="main-menu" class="main-menu collapse navbar-collapse">
               <ul class="nav navbar-nav">
                  <div
                     style={{ margin: "20px 0" }}
                     class="user-panel text-center"
                  >
                     <div class="image">
                        <img
                           src="https://saleserpnew.bdtask.com/saleserp_v9.9_demo/assets/dist/img/profile_picture/profile.jpg"
                           class="img-circle"
                           alt="UserImage"
                        />
                     </div>
                     <div class="info">
                        <p style={{ color: "white", marginBottom: "0px" }}>
                           Admin User
                        </p>
                        <a
                           style={{
                              color: "#37a000",
                              fontSize: "11px",
                           }}
                           href="#"
                        >
                           <i
                              style={{ paddingRight: "5px", marginTop: "0px" }}
                              class="fa fa-circle text-success"
                           ></i>
                           Admin
                        </a>
                     </div>
                  </div>
                  {routes.map((el) =>
                     el.path === "/dashboard" ? (
                        <li
                           className={el.path === currentRoute ? "Active" : ""}
                        >
                           <Link to={el.path}>
                              <i class="menu-icon fa fa-laptop"></i>
                              {t("Dashboard")}
                           </Link>
                        </li>
                     ) : (
                        <li
                           class="menu-item-has-children dropdown"
                           // className={
                           //    el.data &&
                           //    el.data.filter((e) => e.path === currentRoute)
                           //       .length > 0
                           //       ? "menu-item-has-children dropdown Active"
                           //       : "menu-item-has-children dropdown"
                           // }
                        >
                           <a
                              href="/"
                              className="dropdown-toggle"
                              data-toggle="dropdown"
                              // aria-haspopup="true"
                              aria-expanded="false"
                           >
                              <i class={el.icon}></i>
                              {t(el.title)}
                           </a>
                           <ul
                              // style={{ backgroundColor: "#2c3136" }}
                              style={{
                                 cursor: "pointer",
                                 // backgroundColor: "#1c1f22",
                                 backgroundColor: "rgb(44, 49, 54)",
                              }}
                              class="sub-menu children dropdown-menu"

                              // class={
                              //    "sub-menu children dropdown-menu" +
                              //    (el.data &&
                              //    el.data.data &&
                              //    el.data.data.filter(
                              //       (e) => e.path === currentRoute
                              //    ).length > 0
                              //       ? "show"
                              //       : "")
                              // }

                              // class={
                              //    "sub-menu children dropdown-menu" +
                              //    (el.data &&
                              //    el.data.filter((e) => e.path === currentRoute)
                              //       .length > 0
                              //       ? "show"
                              //       : "")
                              // }
                           >
                              {el.data &&
                                 el.data.length > 0 &&
                                 el.data.map((ele, index) =>
                                    ele.data && ele.data.length > 0 ? (
                                       <li
                                          class="menu-item-has-children dropdown"
                                          onClick={() =>
                                             setHide((prev) => !prev)
                                          }
                                       >
                                          <p
                                             style={{
                                                fontSize: "13px",
                                                marginBottom: 10,
                                                padding: "2px 0 2px 30px",
                                                display: "flex",
                                             }}
                                          >
                                             {t(ele.title)}
                                             <i
                                                className={`fas fa-angle-${
                                                   hide ? "right" : "down"
                                                }`}
                                             ></i>
                                          </p>

                                          <ul>
                                             {ele.data.map((ele, index) => (
                                                <li
                                                   // className="menu-item-has-children dropdown"
                                                   style={{
                                                      cursor: "pointer",
                                                      // display: hide && "none",
                                                      listStyle: "none",
                                                      paddingLeft: 15,
                                                      // backgroundColor:
                                                      //    "#1c1f22",
                                                   }}
                                                >
                                                   <Link
                                                      to={
                                                         ele.path
                                                            ? ele.path
                                                            : ""
                                                      }
                                                   >
                                                      <p
                                                         style={{
                                                            fontSize: "13px",
                                                            marginBottom: 10,
                                                         }}
                                                         className={
                                                            ele.path ===
                                                               currentRoute &&
                                                            "highlight"
                                                         }
                                                      >
                                                         {t(ele.title)}
                                                      </p>
                                                   </Link>
                                                </li>
                                             ))}
                                          </ul>
                                       </li>
                                    ) : (
                                       <li
                                          style={{
                                             cursor: "pointer",
                                             // backgroundColor: "#1c1f22",
                                             // paddingLeft: "70px",
                                          }}
                                       >
                                          <Link to={ele.path ? ele.path : ""}>
                                             <i></i>
                                             <p
                                                style={{
                                                   fontSize: "13px",
                                                   marginBottom: 10,
                                                }}
                                                className={
                                                   ele.path === currentRoute &&
                                                   "highlight"
                                                }
                                             >
                                                {t(ele.title)}
                                             </p>
                                          </Link>
                                       </li>
                                    )
                                 )}
                           </ul>
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
