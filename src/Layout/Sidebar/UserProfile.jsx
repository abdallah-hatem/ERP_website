import React from "react";

function UserProfile() {
   return (
      <div
         style={{ margin: "20px 0"}}
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
            <p style={{ color: "white", marginBottom: "0px" }}>Admin User</p>
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
   );
}

export default UserProfile;
