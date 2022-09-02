import React from "react"
import { Avatar, Indicator } from "@mantine/core"

function UserProfile() {
  return (
    // <div
    //    style={{ margin: "20px 0"}}
    //    class="user-panel text-center"
    // >
    //    <div class="image">
    //       <img
    //          src="https://saleserpnew.bdtask.com/saleserp_v9.9_demo/assets/dist/img/profile_picture/profile.jpg"
    //          class="img-circle"
    //          alt="UserImage"
    //       />
    //    </div>
    //    <div class="info">
    //       <p style={{ color: "white", marginBottom: "0px" }}>Admin User</p>
    //       <a
    //          style={{
    //             color: "#37a000",
    //             fontSize: "11px",
    //          }}
    //          href="#"
    //       >
    //          <i
    //             style={{ paddingRight: "5px", marginTop: "0px" }}
    //             class="fa fa-circle text-success"
    //          ></i>
    //          Admin
    //       </a>
    //    </div>
    // </div>
    <div className="text-center p-3">
      <div>
        <Indicator
          inline
          size={16}
          offset={7}
          position="bottom-end"
          color="green"
          withBorder
        >
          <Avatar
            size="lg"
            radius="xl"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
          />
        </Indicator>
      </div>
      <span style={{ color: "white" }}>Admin</span>
    </div>
  )
}

export default UserProfile
