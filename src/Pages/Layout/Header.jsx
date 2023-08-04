import React, { createContext, useContext, useState } from "react";
import VerticallyCenterModal from "../../Components/VerticallyCenterModal";
import { Button } from "react-bootstrap";
import Login from "../Authentication/Login";
import { useLocation } from "react-router-dom";
import LoginWithPhone from "../Authentication/LoginWithPhone";
import Otp from "../Authentication/Otp";
import { AuthSwitchContext } from "../../Context/AuthSwitchContext";
import Signup from "../Authentication/Signup";
import LookingFor from "../Authentication/LookingFor";
import Photos from "../Authentication/Photos";
import Signupwithphone from "../Authentication/Signupwithphone";
import SignupOtp from "../Authentication/SignupOtp";

// export const AuthSwitchContext = createContext(null);

export default function Header() {
  const { AuthSwitchData, setAuthSwitchData } = useContext(AuthSwitchContext);
  const { AuthSwitchSignUpData, setAuthSwitchSignUpData } =
    useContext(AuthSwitchContext);
  console.log(AuthSwitchData);
  const location = useLocation();
  const [signUpModal, setSignUpModal] = useState(
    location.pathname == "/signUp" ? true : false
  );
  const [modalShow, setModalShow] = useState(
    location.pathname == "/login" ? true : false
  );
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Modern Dating
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            style={{ justifyContent: "end" }}
            className="collapse navbar-collapse"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li> */}
              <li className="nav-item">
                <Button
                  style={{
                    backgroundColor: "#F93E7B",
                    color: "white",
                    borderColor: "#F93E7B",
                    marginRight: "5px",
                  }}
                  variant="primary"
                  onClick={() => setSignUpModal(true)}
                >
                  Sign Up
                </Button>
              </li>
              <li className="nav-item">
                <Button
                  style={{
                    backgroundColor: "#F93E7B",
                    color: "white",
                    borderColor: "#F93E7B",
                  }}
                  variant="primary"
                  onClick={() => setModalShow(true)}
                >
                  Sign In
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <VerticallyCenterModal
          show={modalShow}
          onHide={() => {
            setModalShow(false);
            AuthSwitchData.setAuthSwitch({
              ...AuthSwitchData.AuthSwitch,
              loginPage: true,
              loginPhonePage: false,
              OtpPage: false,
            });
          }}
        >
          {}
          {/* <AuthSwitchContext.Provider value={{ AuthSwitch, setAuthSwitch }}> */}
          {AuthSwitchData?.AuthSwitch?.loginPage && (
            <Login setModalShow={setModalShow} />
          )}
          {AuthSwitchData?.AuthSwitch?.loginPhonePage && (
            <LoginWithPhone setModalShow={setModalShow} />
          )}
          {AuthSwitchData?.AuthSwitch?.OtpPage && (
            <Otp setModalShow={setModalShow} />
          )}
          {/* </AuthSwitchContext.Provider> */}
        </VerticallyCenterModal>
        <VerticallyCenterModal
          show={signUpModal}
          onHide={() => {
            setSignUpModal(false);
            AuthSwitchSignUp.setAuthSwitchSignUp({
              ...AuthSwitchSignUp.AuthSwitchSignUp,
              signUpPage: true,
              lookingPage: false,
              photosPage: false,
              phoneNumberPage: false,
              OtpPage: false,
            });
          }}
        >
          {AuthSwitchSignUpData?.AuthSwitchSignUp?.signUpPage && (
            <Signup setSignUpModal={setSignUpModal} />
          )}
          {AuthSwitchSignUpData?.AuthSwitchSignUp?.lookingPage && (
            <LookingFor setSignUpModal={setSignUpModal} />
          )}
          {AuthSwitchSignUpData?.AuthSwitchSignUp?.photosPage && (
            <Photos setSignUpModal={setSignUpModal} />
          )}
          {AuthSwitchSignUpData?.AuthSwitchSignUp?.phoneNumberPage && (
            <Signupwithphone setSignUpModal={setSignUpModal} />
          )}
          {AuthSwitchSignUpData?.AuthSwitchSignUp?.OtpPage && (
            <SignupOtp setSignUpModal={setSignUpModal} />
          )}
        </VerticallyCenterModal>
      </nav>
    </React.Fragment>
  );
}
