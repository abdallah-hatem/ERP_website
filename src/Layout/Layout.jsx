import Navbar from "./Navbar/Navbar"

import SideBar from "./Sidebar/SideBar"
import SideBar2 from "./Sidebar/SideBar2"

import { Routes, Route } from "react-router-dom"
import { routes, singleRoutes } from "../Routes/Routes"
import { useEffect, useState } from "react"
import SideBar3 from "./Sidebar/SideBar3"
import SideBar4 from "./Sidebar/SideBar4"

import "./Sidebar/SideBar.scss"
import NavBar2 from "./Navbar/NavBar2"

function Layout() {
  const [clicked, setClicked] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowSize(window.innerWidth)
    })

    let sidebar = document.getElementById("side-bar")

    if (windowSize < 1024) {
      sidebar.classList.add("closed")
    } else {
      sidebar.classList.remove("closed")
    }
  }, [windowSize])

  useEffect(() => {
    let sidebar = document.getElementById("side-bar")
    let contentContainer = document.getElementById("content-container")

    if (!sidebar.classList.contains("closed")) {
      sidebar.classList = "side-bar closed"
      contentContainer.classList.add("content-cont-tablet")
    } else {
      sidebar.classList = "side-bar"
      contentContainer.classList.remove("content-cont-tablet")
    }
  }, [collapsed])

  return (
    // <>
    //   {/* <SideBar /> */}
    //   <SideBar2 clicked={clicked} />
    //   {/* <SideBar3 clicked={clicked} /> */}
    //   {/* <SideBar4/> */}

    //   <div id="right-panel" class="right-panel">
    //     <Navbar setClicked={setClicked} />

    //     <div class="content">
    //       <div class="animated fadeIn">
    //         <Routes>
    //           {routes.map((el) =>
    //             el.data && el.data.length > 0 ? (
    //               el.data.map((ele) =>
    //                 ele.data && ele.data.length > 0 ? (
    //                   ele.data.map((ele) => (
    //                     <Route path={ele.path} element={ele.component} />
    //                   ))
    //                 ) : (
    //                   <Route path={ele.path} element={ele.component} />
    //                 )
    //               )
    //             ) : (
    //               <Route path={el.path} element={el.component} />
    //             )
    //           )}

    //           {singleRoutes.map((el) => (
    //             <Route path={el.path} element={el.component} />
    //           ))}
    //         </Routes>
    //       </div>
    //     </div>
    //   </div>
    // </>

    <>
      <NavBar2 setCollapsed={setCollapsed} />

      <div className="bottom-cont">
        <div className="side-bar" id="side-bar">
          <SideBar2 />
        </div>

        <div className="content-cont" id="content-container">
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
        </div>
      </div>
    </>
  )
}

export default Layout
