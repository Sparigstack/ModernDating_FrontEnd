import React, { useContext, useEffect, useState } from "react";
import { otpInput } from "../../Helper/Functions";
import OTPInput from "react-otp-input";
import { AuthSwitchContext } from "../../Context/AuthSwitchContext";

export default function Otp(props) {
  const { AuthSwitchData } = useContext(AuthSwitchContext);
  const [otp, setotp] = useState();
  useEffect(() => {
    otpInput(".otp__digit");
  });
  const login = (e) => {
    e.preventDefault();
    if (otp == "12345") {
      AuthSwitchData.setAuthSwitch({
        ...AuthSwitchData.AuthSwitch,
        loginPage: true,
        OtpPage: false,
      });
      props.setModalShow(false);
      setUser(true);
      navigate("/Admin");
    } else {
      alert("check Credentials");
    }
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-5 py-5 bg-F0F3F6 ">
            <img
              className="img-Fluid px-3"
              src="/assets/SigninImage3.svg"
              alt=""
            />
          </div>
          <div className="col-7 py-5 px-5 ">
            <form onSubmit={login}>
              <div className="row d-flex align-items-center px-0">
                <div className="col-2 text-end p-0">
                  <img src="/assets/LeftHeart.svg" alt="" />
                </div>
                <div className="col-8 text-center p-0">
                  <h4 className="signinpage1 m-0">Enter the verification</h4>
                </div>
                <div className="col-2 text-left p-0">
                  <img src="/assets/RightHeart.svg" alt="" />
                </div>
              </div>
              <div className="mt-4 mx-3 d-flex justify-content-center">
                <div className="bg-white"></div>
                <OTPInput
                  inputStyle={{
                    height: "40px",
                    width: "60px",
                    border: "1px solid #B8B8B8",
                    background: "#fef3f3",
                    outline: "none",
                    justifyContent: "center",
                  }}
                  containerStyle="element-with-gap"
                  value={otp}
                  onChange={setotp}
                  inputType="tel"
                  numInputs={5}
                  renderSeparator={<span>&nbsp;</span>}
                  renderInput={(props) => <input {...props} />}
                />
              </div>
              <div className="text-center">
                <a
                  className="ForPass"
                  style={{ textDecoration: "underline", color: "#011010" }}
                >
                  Re- Send Code
                </a>
              </div>
              <div className="mt-3 mx-5 text-web-center">
                <button className="btn-signIn" type="submit">
                  <span className="span-mother">
                    <span>S</span>
                    <span>i</span>
                    <span>g</span>
                    <span>n</span>
                    <span>&nbsp;I</span>
                    <span>n</span>
                  </span>
                  <span className="span-mother2">
                    <span>S</span>
                    <span>i</span>
                    <span>g</span>
                    <span>n</span>
                    <span>&nbsp;I</span>
                    <span>n</span>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
