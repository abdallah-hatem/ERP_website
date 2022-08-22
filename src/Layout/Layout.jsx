import Navbar from "./Navbar/Navbar";

import SideBar from "./Sidebar/SideBar";
import SideBar2 from "./Sidebar/SideBar2";

import { Routes, Route } from "react-router-dom";
import { routes, singleRoutes } from "../Routes/Routes";
import { useState } from "react";

function Layout() {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {/* <SideBar /> */}
      <SideBar2 clicked={clicked} />

      <div id="right-panel" class="right-panel">
        <Navbar setClicked={setClicked} />

        <div class="content">
          <div class="animated fadeIn">
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
      </div>
    </>
  );
}

export default Layout;
