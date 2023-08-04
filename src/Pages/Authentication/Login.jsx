import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AuthSwitchContext } from "../../Context/AuthSwitchContext";

const schema = yup
  .object({
    email: yup.string().email("must be a valid email").required(),
    password: yup.string().required(),
  })
  .required();
export default function Login(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { setUser } = useContext(AuthContext);
  const { AuthSwitchData } = useContext(AuthSwitchContext);
  const [eyeIcon, seteyeIcon] = useState("fa-eye-slash");
  const navigate = useNavigate();
  const ShowHidePass = () => {
    if (eyeIcon == "fa-eye") {
      seteyeIcon("fa-eye-slash");
    } else {
      seteyeIcon("fa-eye");
    }
  };
  const login = (e) => {
    // e.preventDefault();
    console.log(e);
    // if (
    //   e.target.email.value == "Test@gmail.com" &&
    //   e.target.password.value == "Test"
    // ) {
    //   sessionStorage.setItem("Email", e.target.email.value);
    //   sessionStorage.setItem("Password", e.target.password.value);
    //   props.setModalShow(false);
    //   setUser(true);
    //   navigate("/Admin");
    // } else {
    // alert("check Credentials");
    // }
  };
  const VerifyWithPhone = () => {
    AuthSwitchData.setAuthSwitch({
      ...AuthSwitchData.AuthSwitch,
      loginPage: false,
      loginPhonePage: true,
    });
  };
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
            <form onSubmit={handleSubmit(login)}>
              <div className="row d-flex align-items-center px-0">
                <div className="col-2 text-end p-0">
                  <img src="/assets/LeftHeart.svg" alt="" />
                </div>
                <div className="col-8 text-center p-0">
                  <h4 className="signinpage1 m-0">Enter Modern Dating</h4>
                </div>
                <div className="col-2 text-left p-0">
                  <img src="/assets/RightHeart.svg" alt="" />
                </div>
              </div>
              <div className="mt-4 mx-3">
                <div className="inputButton mb-0">
                  <input
                    {...register("email")}
                    type="text"
                    name="email"
                    autoComplete="off"
                    placeholder=""
                  />
                  <label htmlFor="Email">Email Id</label>
                </div>
                <small className="text-danger">{errors.Email?.message}</small>
              </div>
              <div className="mt-4 mx-3">
                <div className="inputButton position-relative mb-0">
                  <a
                    className="ForPass mb-2"
                    style={{ float: "right", cursor: "pointer" }}
                  >
                    Forgot password?
                  </a>
                  <input
                    {...register("password")}
                    type={eyeIcon == "fa-eye" ? "text" : "password"}
                    name="password"
                    autoComplete="off"
                    placeholder=""
                  />
                  <label htmlFor="Password">Password</label>
                  <i
                    style={{ color: "#A7A9AC" }}
                    onClick={ShowHidePass}
                    className={`iconPass fa-regular ${eyeIcon}`}
                  ></i>
                </div>
                <small className="text-danger">
                  {errors.Password?.message}
                </small>
              </div>
              <div className="mt-4 mx-5 text-web-center">
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
              <div className="mt-4 mx-3 row">
                <div className="col-5 p-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="142"
                    height="3"
                    viewBox="0 0 142 3"
                    fill="none"
                  >
                    <path
                      d="M1 1.16052L141 1.16053"
                      stroke="black"
                      strokeOpacity="0.1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="10 10"
                    />
                  </svg>
                </div>
                <div className="col-2 orLine text-center">or</div>
                <div className="col-5 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="142"
                    height="3"
                    viewBox="0 0 142 3"
                    fill="none"
                  >
                    <path
                      d="M1 1.16052L141 1.16053"
                      stroke="black"
                      strokeOpacity="0.1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="10 10"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-4 mx-5 text-web-center">
                <button className="BorderBtn" onClick={VerifyWithPhone}>
                  <span>Verify with Phone</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
