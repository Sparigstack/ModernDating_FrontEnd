import React from "react";

export default function Signup(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-5 py-5 bg-F0F3F6 d-flex align-items-center">
            <img
              className="img-Fluid px-3"
              src="/assets/SigninImage1.svg"
              alt=""
            />
          </div>
          <div className="col-7 py-5 px-5">
            <form>
              <div className="row d-flex align-items-center justify-content-center px-0">
                <div className="col-2 text-end p-0">
                  <img src="/assets/LeftBlueHeart.svg" alt="" />
                </div>
                <div className="col-8 text-center p-0">
                  <h4 className="signinpage1 m-0" style={{ color: "#34B7EA" }}>
                    About yourself
                  </h4>
                </div>
                <div className="col-2 text-left p-0">
                  <img src="/assets/RightBlueHeart.svg" alt="" />
                </div>
              </div>
              <div className="mt-4 mx-3">
                <div className="inputButton mb-0">
                  <input
                    //{...register("FirstName")}
                    type="text"
                    name="FirstName"
                    autoComplete="off"
                    placeholder=""
                  />
                  <label htmlFor="Email">First Name</label>
                </div>
                {/* <small className="text-danger">{errors.Email?.message}</small> */}
              </div>
              <div className="mt-4 mx-3">
                <div className="inputButton mb-0">
                  <input
                    //{...register("FirstName")}
                    type="text"
                    name="DOB"
                    autoComplete="off"
                    placeholder=""
                  />
                  <label htmlFor="Email">DOB MM/YYYY</label>
                </div>
                {/* <small className="text-danger">{errors.Email?.message}</small> */}
              </div>
              <div className="mt-4 mx-3">
                <div className="inputButton mb-0">
                  <input
                    //{...register("FirstName")}
                    type="text"
                    name="Zip"
                    autoComplete="off"
                    placeholder=""
                  />
                  <label htmlFor="Email">ZIP Code</label>
                </div>
                {/* <small className="text-danger">{errors.Email?.message}</small> */}
              </div>
              <div className="mt-5 mx-3">
                <img
                  style={{ float: "right" }}
                  src="/assets/NextButton.svg"
                  alt=""
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
