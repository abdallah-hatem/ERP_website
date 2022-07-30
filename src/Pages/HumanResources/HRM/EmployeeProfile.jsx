import React from "react";

function EmployeeProfile() {
   const personalData = [
      {
         title: "Name",
         name: "Jason Henry",
      },
      {
         title: "Phone",
         name: "01021313495",
      },
      {
         title: "E-Mail",
         name: "Test@gmail.com",
      },
      {
         title: "Country",
         name: "Egypt",
      },
      {
         title: "City",
         name: "Cairo",
      },
      {
         title: "Zip Code",
         name: "1245",
      },
   ];

   const positionalData = [
      {
         title: "Designation",
         name: "Manager",
      },
      {
         title: "Phone",
         name: "01021313495",
      },
      {
         title: "Rate Type",
         name: "Salary",
      },
      {
         title: "Hour Rate/Salary",
         name: "20000",
      },
   ];

   return (
      <div class="container">
         <div class="main-body">
            <div class="row gutters-sm">
               <div class="col-md-4 mb-3">
                  <div class="card">
                     <div class="card-body">
                        <div class="d-flex flex-column align-items-center text-center">
                           <img
                              src="https://saleserpnew.bdtask.com/saleserp_v9.9_demo/my-assets/image/employee/2022-02-02/9288ae91a675d63424aa4ae557c8d275.jpg"
                              alt="Admin"
                              class="rounded-circle"
                              width="150"
                           />
                           <div class="mt-3">
                              <h4>John Doe</h4>
                              <p class="text-secondary mb-1">
                                 Designation: Manager
                              </p>
                              <p class="text-muted font-size-sm">
                                 <i
                                    style={{ marginRight: 10 }}
                                    className="fas fa-phone"
                                 ></i>
                                 01021414856
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-md-8">
                  <div class="card mb-3">
                     <h3
                        style={{
                           textAlign: "center",
                           margin: "12px 0px",
                           width: "fitContent",
                        }}
                     >
                        Positional Information
                     </h3>
                     <hr />
                     <div class="card-body">
                        {positionalData.map((el) => (
                           <>
                              <div class="row">
                                 <div class="col-sm-3">
                                    <h6 class="mb-0">{el.title}</h6>
                                 </div>
                                 <div class="col-sm-9 text-secondary">
                                    {el.name}
                                 </div>
                              </div>
                              <hr />
                           </>
                        ))}
                     </div>
                  </div>
               </div>

               <div class="col-md-12">
                  <div class="card mb-3">
                     <h3 style={{ textAlign: "center", margin: "12px 0px" }}>
                        Personal Information
                     </h3>
                     <hr />

                     <div class="card-body">
                        {personalData.map((el) => (
                           <>
                              <div class="row">
                                 <div class="col-sm-3">
                                    <h6 class="mb-0">{el.title}</h6>
                                 </div>
                                 <div class="col-sm-9 text-secondary">
                                    {el.name}
                                 </div>
                              </div>
                              <hr />
                           </>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default EmployeeProfile;
