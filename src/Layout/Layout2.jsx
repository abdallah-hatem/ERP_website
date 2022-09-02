import React from "react"
import { LikeOutlined, UserOutlined } from "@ant-design/icons"
import { ProSettings } from "@ant-design/pro-components"
import { PageContainer, ProLayout, SettingDrawer } from "@ant-design/pro-components"
import { Avatar, Button, Descriptions, Result, Space, Statistic } from "antd"
import { useState } from "react"
import {
  AntDesignOutlined,
  CrownOutlined,
  SmileOutlined,
  TabletOutlined,
} from "@ant-design/icons"
// import "antd/dist/antd.css"
// import "@ant-design/pro-components/dist/components.css"
import { Routes, Route, Link } from "react-router-dom"
import { routes, singleRoutes } from "../Routes/Routes"
import { Dropdown, Menu } from "antd"
import logo from "../Images/logo.png"
import { useTranslation } from "react-i18next"

function Layout2() {
  const { t, i18n } = useTranslation()

  // const ex =         routes: [
  //     {
  //       path: "/welcome",
  //       name: "welcome",
  //       icon: <SmileOutlined />,
  //       component: "./Welcome",
  //     },
  //     {
  //       path: "/admin",
  //       name: "admin",
  //       icon: <CrownOutlined />,
  //       routes: [
  //         {
  //           path: "/admin/sub-page1",
  //           name: "一级页面",
  //           icon: <CrownOutlined />,
  //           component: "./Welcome",
  //         },
  //         {
  //           path: "/admin/sub-page2",
  //           name: "二级页面",
  //           icon: <CrownOutlined />,
  //           component: "./Welcome",
  //         },
  //         {
  //           path: "/admin/sub-page3",
  //           name: "三级页面",
  //           icon: <CrownOutlined />,
  //           component: "./Welcome",
  //         },
  //       ],
  //     },
  //   ],

  const defaultProps = {
    route: {
      routes,
    },
  }

  const [settings, setSetting] = useState({ fixSiderbar: true })
  const [pathname, setPathname] = useState("/")

  return (
    <div
      id="test-pro-layout"
      style={{
        height: "100vh",
      }}
    >
      <ProLayout
        menuHeaderRender={() => (
          <img style={{ width: "70%", height: "70px" }} src={logo} />
        )}
        siderWidth={"280px"}
        headerTheme="light"
        fixedHeader
        fixSiderbar
        lang="ar"
        // logo={logo}
        title={false}
        // collapsedButtonRender={false}
        // collapsed={false}
        {...defaultProps}
        // location={{
        //   pathname,
        // }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <Link
            to={item.path}
            onClick={() => {
              setPathname(item.path || "/welcome")
              i18n.changeLanguage("ar")
            }}
          >
            {dom}
          </Link>
        )}
        rightContentRender={() => (
          <div>
            <Space>
              <img style={{ width: "70px", height: "70px" }} src={logo} />
            </Space>
            <Avatar
              style={{ marginRight: 10 }}
              shape="square"
              size="small"
              icon={<UserOutlined />}
            />

            <Dropdown
              overlay={
                <Menu
                  items={[
                    {
                      label: "English",
                      key: "0",
                    },
                    {
                      label: "Arabice",
                      key: "1",
                    },
                  ]}
                />
              }
              trigger={["click"]}
            >
              <span onClick={(e) => e.preventDefault()}>
                <Space>
                  <i className="fas fa-globe"></i>
                </Space>
              </span>
            </Dropdown>
          </div>
        )}
      >
        <PageContainer pageHeaderRender={false}>
          <Routes>
            {routes.map((el) =>
              el.data && el.data.length > 0 ? (
                el.data.map((ele) =>
                  ele.data && ele.data.length > 0 ? (
                    ele.data.map((ele) => (
                      <Route path={ele.path} element={ele.component} />
                    ))
                  ) : (
                    <Route path={ele.path} element={ele.component} />
                  )
                )
              ) : (
                <Route path={el.path} element={el.component} />
              )
            )}

            {singleRoutes.map((el) => (
              <Route path={el.path} element={el.component} />
            ))}
          </Routes>
        </PageContainer>
      </ProLayout>
    </div>
  )
}

export default Layout2
