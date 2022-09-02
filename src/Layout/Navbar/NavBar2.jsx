import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import logo from "../../Images/logo.png"
import { Burger, Menu, Button } from "@mantine/core"
import { SecondaryColor } from "../../Styles/Colors"

function NavBar2({ setCollapsed }) {
  const { t, i18n } = useTranslation()

  const [opened, setOpened] = useState(false)
  const title = opened ? "Close navigation" : "Open navigation"

  const style = { backgroundColor: SecondaryColor, color: "white", width: "180px" }

  return (
    <div className="nav">
      <div className="nav-bar-left">
        <img src={logo} alt="logo" />

        <Burger
          className="ml-4"
          opened={opened}
          style={{
            border: `2px solid ${SecondaryColor}`,
            width: "auto",
            fontWeight: 900,
          }}
          transitionDuration={500}
          onClick={() => {
            setOpened((prev) => !prev)
            setCollapsed((prev) => !prev)
          }}
          title={title}
        />
      </div>

      <div className="nav-bar-right">
        <div class="d-flex align-items-center">
          <div class="dropdown">
            <a
              class="text-reset me-3 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-globe"></i>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li style={{ cursor: "pointer" }}>
                <span
                  onClick={() => i18n.changeLanguage("ar")}
                  style={i18n.language === "ar" ? style : {}}
                  class="dropdown-item"
                  href="#"
                >
                  العربية
                </span>
              </li>
              <li style={{ cursor: "pointer" }}>
                <span
                  onClick={() => i18n.changeLanguage("en")}
                  style={i18n.language === "en" ? style : {}}
                  class="dropdown-item"
                  href="#"
                >
                  English
                </span>
              </li>
            </ul>
          </div>

          <div class="dropdown">
            <a
              class="text-reset me-3 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-bell"></i>
              <span class="badge rounded-pill badge-notification bg-danger">1</span>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a class="dropdown-item" href="#">
                  Some news
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another news
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>

          <div class="dropdown">
            <a
              class="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                class="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </a>

            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <span class="dropdown-item" href="#">
                  My profile
                </span>
              </li>
              <li>
                <span class="dropdown-item" href="#">
                  Settings
                </span>
              </li>
              <li>
                <span class="dropdown-item" href="#">
                  Logout
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar2
