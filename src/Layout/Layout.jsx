import Navbar from "./Navbar/Navbar";
import SideBar from "./Sidebar/SideBar";

import { Routes, Route } from "react-router-dom";
import { routes } from "../Routes/Routes";

import ProductDetails from "../Pages/Product/ProductDetails";
import UpdateProduct from "../Pages/Product/UpdateProduct";
import EmployeeProfile from "../Pages/HumanResources/HRM/EmployeeProfile";

function Layout() {
  return (
    <>
      <SideBar />

      <div id="right-panel" class="right-panel">
        <Navbar />

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

              <Route
                path={"product-details/:id"}
                element={<ProductDetails />}
              />
              <Route
                path={"manage-employee/employee-profile/:id"}
                element={<EmployeeProfile />}
              />
              <Route path={"update-product/:id"} element={<UpdateProduct />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
