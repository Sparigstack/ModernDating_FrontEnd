import React, { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const navigate = useNavigate();
  const logout = useCallback((e) => {
    e.preventDefault();
    sessionStorage.clear();
    navigate("/");
  });
  return (
    <React.Fragment>
      <div>
        <h1 className="text-center">AdminPage</h1>
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <button
          style={{
            backgroundColor: "#F93E7B",
            color: "white",
            border: "none",
            outline: "none",
            padding: "10px",
            borderRadius: "10px",
            float: "right",
          }}
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </React.Fragment>
  );
}
