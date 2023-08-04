import { createContext, useState } from "react";

export const AuthSwitchContext = createContext(null);

export const AuthSwitchContextProvider = ({ children }) => {
  const [AuthSwitch, setAuthSwitch] = useState({
    loginPage: true,
    loginPhonePage: false,
    OtpPage: false,
  });
  const [AuthSwitchSignUp, setAuthSwitchSignUp] = useState({
    signUpPage: true,
    lookingPage: false,
    photosPage: false,
    phoneNumberPage: false,
    OtpPage: false,
  });
  const AuthSwitchData = { AuthSwitch, setAuthSwitch };
  const AuthSwitchSignUpData = { AuthSwitchSignUp, setAuthSwitchSignUp };
  return (
    <AuthSwitchContext.Provider
      value={{ AuthSwitchData, AuthSwitchSignUpData }}
    >
      {children}
    </AuthSwitchContext.Provider>
  );
};
