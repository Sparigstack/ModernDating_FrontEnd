import React, { useContext } from "react";
import { AuthSwitchContext } from "../../Context/AuthSwitchContext";

export default function LoginWithPhone(props) {
  const { AuthSwitchData } = useContext(AuthSwitchContext);
  const SendOtp = (e) => {
    e.preventDefault;
    if (e.target.phoneNumber.value == "123") {
      AuthSwitchData.setAuthSwitch({
        ...AuthSwitchData.AuthSwitch,
        loginPhonePage: false,
        OtpPage: true,
      });
    } else {
      alert("Confirm No.");
    }
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-5 py-5 bg-F0F3F6 d-flex align-items-center">
            <img
              className="img-Fluid px-3"
              src="/assets/SigninImage2.svg"
              alt=""
            />
          </div>
          <div className="col-7 py-5 px-5 d-flex align-items-center">
            <form onSubmit={SendOtp}>
              <div className="row d-flex align-items-center px-0">
                <div className="col-2 text-end p-0">
                  <img src="/assets/LeftHeart.svg" alt="" />
                </div>
                <div className="col-8 text-center p-0">
                  <h4 className="signinpage1 m-0">Your Phone Number</h4>
                </div>
                <div className="col-2 text-left p-0">
                  <img src="/assets/RightHeart.svg" alt="" />
                </div>
              </div>
              <div className="mt-4 mx-3 row">
                <div className="col-3 d-flex align-items-center">
                  <select className="selectPhone">
                    <option>+91</option>
                    <option>+92</option>
                    <option>+93</option>
                  </select>
                </div>
                <div className="col-9 px-0">
                  <div className="inputButton">
                    <input
                      style={{ borderRadius: "5px" }}
                      type="text"
                      name="phoneNumber"
                      placeholder=""
                      autoComplete="off"
                    />
                    <label htmlFor="Email">Enter Your Phone Number</label>
                  </div>
                </div>
              </div>
              <div className="mx-4">
                <p className="warningPhoneLogin">
                  We may send a text with a verification code. Message and data
                  rates may apply. Learn what happens when your number changes.
                </p>
              </div>
              <div className="mt-4 mx-5 text-web-center">
                <button className="btn-signIn" type="submit">
                  <span className="span-mother">
                    <span>S</span>
                    <span>e</span>
                    <span>n</span>
                    <span>d</span>
                    <span>&nbsp;C</span>
                    <span>o</span>
                    <span>d</span>
                    <span>e</span>
                  </span>
                  <span className="span-mother2">
                    <span>S</span>
                    <span>e</span>
                    <span>n</span>
                    <span>d</span>
                    <span>&nbsp;C</span>
                    <span>o</span>
                    <span>d</span>
                    <span>e</span>
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
