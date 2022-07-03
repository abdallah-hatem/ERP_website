import "./App.scss";

import $ from "jquery";
import jQuery from "jquery";
import { useEffect, useState } from "react";

function App() {
  $.noConflict();

  jQuery(document).ready(function ($) {
    "use strict";

    // [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {
    //   new SelectFx(el);
    // });

    // jQuery('.selectpicker').selectpicker;

    $(".search-trigger").on("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      $(".search-trigger").parent(".header-left").addClass("open");
    });

    $(".search-close").on("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      $(".search-trigger").parent(".header-left").removeClass("open");
    });

    // $('.equal-height').matchHeight({
    //   property: 'max-height'
    // });

    // var chartsheight = $('.flotRealtime2').height();
    // $('.traffic-chart').css('height', chartsheight-122);

    // Menu Trigger
    $("#menuToggle").on("click", function (event) {
      var windowWidth = $(window).width();
      if (windowWidth < 1010) {
        $("body").removeClass("open");
        if (windowWidth < 760) {
          $("#left-panel").slideToggle();
        } else {
          $("#left-panel").toggleClass("open-menu");
        }
      } else {
        $("body").toggleClass("open");
        $("#left-panel").removeClass("open-menu");
      }
    });

    $(".menu-item-has-children.dropdown").each(function () {
      $(this).on("click", function () {
        var $temp_text = $(this).children(".dropdown-toggle").html();
        $(this)
          .children(".sub-menu")
          .prepend('<li class="subtitle">' + $temp_text + "</li>");
      });
    });

    // Load Resize
    $(window).on("load resize", function (event) {
      var windowWidth = $(window).width();
      if (windowWidth < 1010) {
        $("body").addClass("small-device");
      } else {
        $("body").removeClass("small-device");
      }
    });
  });

  const [data, setData] = useState([
    { id: 0, title: "Sale", icon: "menu-icon fa fa-cogs" },
    { id: 1, title: "Customer", icon: "menu-icon fa fa-cogs" },
    { id: 2, title: "Supply", icon: "menu-icon fa fa-cogs" },
    { id: 3, title: "Product", icon: "menu-icon fa fa-cogs" },
    { id: 4, title: "Purchase", icon: "menu-icon fa fa-cogs" },
    { id: 5, title: "Stock", icon: "menu-icon fa fa-cogs" },
  ]);

  function handleClick(e) {
    let elements = document.querySelectorAll(
      ".menu-item-has-children.dropdown"
    );
    console.log(elements);
    let dash = document.getElementById("dashboard");
    for (let index = 0; index < elements.length; index++) {
      elements[index].classList.remove("active");
    }

    dash.classList.remove("active");
    e.currentTarget.classList.add("active");
  }

  return (
    <>
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
              <li
                onClick={(e) => handleClick(e)}
                style={{ backgroundColor: "#2c3136" }}
                id="dashboard"
                className="active"
              >
                <a>
                  <i class="menu-icon fa fa-laptop"></i>Dashboard
                </a>
              </li>
              {data.map((el) => (
                <li
                  onClick={(e) => handleClick(e)}
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
                  <ul
                    style={{ backgroundColor: "#2c3136" }}
                    class="sub-menu children dropdown-menu"
                  >
                    <li>
                      <i class="fa fa-puzzle-piece"></i>
                      <a href="ui-buttons.html">Buttons</a>
                    </li>
                    <li>
                      <i class="fa fa-id-badge"></i>
                      <a href="ui-badges.html">Badges</a>
                    </li>
                    <li>
                      <i class="fa fa-bars"></i>
                      <a href="ui-tabs.html">Tabs</a>
                    </li>
                    <li>
                      <i class="fa fa-id-card-o"></i>
                      <a href="ui-cards.html">Cards</a>
                    </li>
                    <li>
                      <i class="fa fa-exclamation-triangle"></i>
                      <a href="ui-alerts.html">Alerts</a>
                    </li>
                    <li>
                      <i class="fa fa-spinner"></i>
                      <a href="ui-progressbar.html">Progress Bars</a>
                    </li>
                    <li>
                      <i class="fa fa-fire"></i>
                      <a href="ui-modals.html">Modals</a>
                    </li>
                    <li>
                      <i class="fa fa-book"></i>
                      <a href="ui-switches.html">Switches</a>
                    </li>
                    <li>
                      <i class="fa fa-th"></i>
                      <a href="ui-grids.html">Grids</a>
                    </li>
                    <li>
                      <i class="fa fa-file-word-o"></i>
                      <a href="ui-typgraphy.html">Typography</a>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>
      <div id="right-panel" class="right-panel">
        <header id="header" class="header">
          <div class="top-left">
            <div class="navbar-header">
              <a class="navbar-brand" href="./">
                <img
                  src="	https://technext.github.io/elaadmin/images/logo.png"
                  alt="Logo"
                />
              </a>
              <a class="navbar-brand hidden" href="./">
                <img src="images/logo2.png" alt="Logo" />
              </a>
              <a id="menuToggle" class="menutoggle">
                <i class="fa fa-bars"></i>
              </a>
            </div>
          </div>
          <div class="top-right">
            <div class="header-menu">
              {/* <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                class="top-fixed-link"
              >
                <a
                  style={{ marginRight: 10 }}
                  href=""
                  class="btn btn-success btn-outline"
                >
                  <i class="fa fa-balance-scale"></i> Sale
                </a>

                <a
                  style={{ marginRight: 10 }}
                  href=""
                  class="btn btn-success btn-outline"
                >
                  <i class="fa fa-money"></i> Customer Receive
                </a>

                <a
                  style={{ marginRight: 10 }}
                  href=""
                  class="btn btn-success btn-outline"
                >
                  <i class="fa fa-money" aria-hidden="true"></i> Supplier
                  Payment
                </a>

                <a href="" class="btn btn-success btn-outline">
                  <i class="ti-shopping-cart"></i> Purchase
                </a>
              </div> */}

              <div class="header-left">
                <button class="search-trigger">
                  <i class="fa fa-search"></i>
                </button>

                <div class="form-inline">
                  <form class="search-form">
                    <input
                      class="form-control mr-sm-2"
                      type="text"
                      placeholder="Search ..."
                      aria-label="Search"
                    />
                    <button class="search-close" type="submit">
                      <i class="fa fa-close"></i>
                    </button>
                  </form>
                </div>

                <div class="dropdown for-notification">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="notification"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fa fa-bell"></i>
                    <span class="count bg-danger">3</span>
                  </button>
                  <div class="dropdown-menu" aria-labelledby="notification">
                    <p class="red">You have 3 Notification</p>
                    <a class="dropdown-item media" href="#">
                      <i class="fa fa-check"></i>
                      <p>Server #1 overloaded.</p>
                    </a>
                    <a class="dropdown-item media" href="#">
                      <i class="fa fa-info"></i>
                      <p>Server #2 overloaded.</p>
                    </a>
                    <a class="dropdown-item media" href="#">
                      <i class="fa fa-warning"></i>
                      <p>Server #3 overloaded.</p>
                    </a>
                  </div>
                </div>

                <div class="dropdown for-message">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="message"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fa fa-envelope"></i>
                    <span class="count bg-primary">4</span>
                  </button>
                  <div class="dropdown-menu" aria-labelledby="message">
                    <p class="red">You have 4 Mails</p>
                    <a class="dropdown-item media" href="#">
                      <span class="photo media-left">
                        <img
                          alt="avatar"
                          src="https://technext.github.io/elaadmin/images/admin.jpg"
                        />
                      </span>
                      <div class="message media-body">
                        <span class="name float-left">Jonathan Smith</span>
                        <span class="time float-right">Just now</span>
                        <p>Hello, this is an example msg</p>
                      </div>
                    </a>
                    <a class="dropdown-item media" href="#">
                      <span class="photo media-left">
                        <img
                          alt="avatar"
                          src="https://technext.github.io/elaadmin/images/admin.jpg"
                        />
                      </span>
                      <div class="message media-body">
                        <span class="name float-left">Jack Sanders</span>
                        <span class="time float-right">5 minutes ago</span>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                      </div>
                    </a>
                    <a class="dropdown-item media" href="#">
                      <span class="photo media-left">
                        <img
                          alt="avatar"
                          src="https://technext.github.io/elaadmin/images/admin.jpg"
                        />
                      </span>
                      <div class="message media-body">
                        <span class="name float-left">Cheryl Wheeler</span>
                        <span class="time float-right">10 minutes ago</span>
                        <p>Hello, this is an example msg</p>
                      </div>
                    </a>
                    <a class="dropdown-item media" href="#">
                      <span class="photo media-left">
                        <img
                          alt="avatar"
                          src="https://technext.github.io/elaadmin/images/admin.jpg"
                        />
                      </span>
                      <div class="message media-body">
                        <span class="name float-left">Rachel Santos</span>
                        <span class="time float-right">15 minutes ago</span>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div class="user-area dropdown float-right">
                <a
                  href="#"
                  class="dropdown-toggle active"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    class="user-avatar rounded-circle"
                    src="https://technext.github.io/elaadmin/images/admin.jpg"
                    alt="User Avatar"
                  />
                </a>

                <div class="user-menu dropdown-menu">
                  <a class="nav-link" href="#">
                    <i class="fa fa- user"></i>My Profile
                  </a>

                  <a class="nav-link" href="#">
                    <i class="fa fa- user"></i>Notifications
                    <span class="count">13</span>
                  </a>

                  <a class="nav-link" href="#">
                    <i class="fa fa -cog"></i>Settings
                  </a>

                  <a class="nav-link" href="#">
                    <i class="fa fa-power -off"></i>Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="content">
          <div class="animated fadeIn">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body">
                    <div class="stat-widget-five">
                      <div class="stat-icon dib flat-color-1">
                        <i class="pe-7s-cash"></i>
                      </div>
                      <div class="stat-content">
                        <div class="text-left dib">
                          <div class="stat-text">
                            $<span class="count">23569</span>
                          </div>
                          <div class="stat-heading">Revenue</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body">
                    <div class="stat-widget-five">
                      <div class="stat-icon dib flat-color-2">
                        <i class="pe-7s-cart"></i>
                      </div>
                      <div class="stat-content">
                        <div class="text-left dib">
                          <div class="stat-text">
                            <span class="count">3435</span>
                          </div>
                          <div class="stat-heading">Sales</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body">
                    <div class="stat-widget-five">
                      <div class="stat-icon dib flat-color-3">
                        <i class="pe-7s-browser"></i>
                      </div>
                      <div class="stat-content">
                        <div class="text-left dib">
                          <div class="stat-text">
                            <span class="count">349</span>
                          </div>
                          <div class="stat-heading">Templates</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body">
                    <div class="stat-widget-five">
                      <div class="stat-icon dib flat-color-4">
                        <i class="pe-7s-users"></i>
                      </div>
                      <div class="stat-content">
                        <div class="text-left dib">
                          <div class="stat-text">
                            <span class="count">2986</span>
                          </div>
                          <div class="stat-heading">Clients</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="orders">
              <div class="row">
                <div class="col-xl-8">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="box-title">Orders </h4>
                    </div>
                    <div class="card-body--">
                      <div class="table-stats order-table ov-h">
                        <table class="table ">
                          <thead>
                            <tr>
                              <th class="serial">#</th>
                              <th class="avatar">Avatar</th>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Product</th>
                              <th>Quantity</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="serial">1.</td>
                              <td class="avatar">
                                <div class="round-img">
                                  <a href="#">
                                    <img
                                      class="rounded-circle"
                                      src="https://technext.github.io/elaadmin/images/admin.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </td>
                              <td> #5469 </td>
                              <td>
                                {" "}
                                <span class="name">Louis Stanley</span>{" "}
                              </td>
                              <td>
                                {" "}
                                <span class="product">iMax</span>{" "}
                              </td>
                              <td>
                                <span class="count">231</span>
                              </td>
                              <td>
                                <span class="badge badge-complete">
                                  Complete
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td class="serial">2.</td>
                              <td class="avatar">
                                <div class="round-img">
                                  <a href="#">
                                    <img
                                      class="rounded-circle"
                                      src="https://technext.github.io/elaadmin/images/admin.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </td>
                              <td> #5468 </td>
                              <td>
                                {" "}
                                <span class="name">Gregory Dixon</span>{" "}
                              </td>
                              <td>
                                {" "}
                                <span class="product">iPad</span>{" "}
                              </td>
                              <td>
                                <span class="count">250</span>
                              </td>
                              <td>
                                <span class="badge badge-complete">
                                  Complete
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td class="serial">3.</td>
                              <td class="avatar">
                                <div class="round-img">
                                  <a href="#">
                                    <img
                                      class="rounded-circle"
                                      src="https://technext.github.io/elaadmin/images/admin.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </td>
                              <td> #5467 </td>
                              <td>
                                {" "}
                                <span class="name">Catherine Dixon</span>{" "}
                              </td>
                              <td>
                                {" "}
                                <span class="product">SSD</span>{" "}
                              </td>
                              <td>
                                <span class="count">250</span>
                              </td>
                              <td>
                                <span class="badge badge-complete">
                                  Complete
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td class="serial">4.</td>
                              <td class="avatar">
                                <div class="round-img">
                                  <a href="#">
                                    <img
                                      class="rounded-circle"
                                      src="https://technext.github.io/elaadmin/images/admin.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </td>
                              <td> #5466 </td>
                              <td>
                                {" "}
                                <span class="name">Mary Silva</span>{" "}
                              </td>
                              <td>
                                {" "}
                                <span class="product">Magic Mouse</span>{" "}
                              </td>
                              <td>
                                <span class="count">250</span>
                              </td>
                              <td>
                                <span class="badge badge-pending">Pending</span>
                              </td>
                            </tr>
                            <tr class=" pb-0">
                              <td class="serial">5.</td>
                              <td class="avatar pb-0">
                                <div class="round-img">
                                  <a href="#">
                                    <img
                                      class="rounded-circle"
                                      src="https://technext.github.io/elaadmin/images/admin.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </td>
                              <td> #5465 </td>
                              <td>
                                {" "}
                                <span class="name">Johnny Stephens</span>{" "}
                              </td>
                              <td>
                                {" "}
                                <span class="product">Monitor</span>{" "}
                              </td>
                              <td>
                                <span class="count">250</span>
                              </td>
                              <td>
                                <span class="badge badge-complete">
                                  Complete
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
