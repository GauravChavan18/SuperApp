import React from "react";
import frontbagimg from "../Assests/frontbagimg.png";
import RegisterForm from "../Components/RegisterForm";
const Registration = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: "45%", height: "100vh", position: "relative" }}>
        <img
          src={frontbagimg}
          style={{ width: "100%", height: "100%" }}
          alt="aa"
        />
        <h1
          style={{
            color: "white",
            position: "absolute",
            bottom: "80px",
            left: "50px",
            textAlign: "left",
          }}
        >
          Discover new things on <br /> Superapp
        </h1>
      </div>

      <div style={{ width: "55%", height: "100vh", backgroundColor: "black" }}>
        <div
          style={{
            width: "45%",
            height: "100%",
            margin: "auto",
            marginTop: "50px",
          }}
        >
          <h1
            style={{
              color: "rgba(114, 219, 115, 1)",
              fontFamily: "Single Day",
              fontSize: "40px",
              fontWeight: "500",
              marginBottom: "0",
            }}
          >
            Super app
          </h1>
          <p style={{ color: "white", marginBottom: "30px", marginTop: "0px" }}>
            Create your new account
          </p>

          <div style={{ width: "100%" }}>
            <RegisterForm />
          </div>

          <div style={{ margin: "0" }}>
            <p
              style={{
                color: "rgba(124, 124, 124, 1)",
                textAlign: "left",
                fontSize: "14px",
                fontFamily: "Roboto",
              }}
            >
              By clicking on Sign up. you agree to Superapp{" "}
              <span style={{ color: "rgba(114, 219, 115, 1)" }}>
                Terms and Conditions of Use
              </span>
            </p>
          </div>

          <div style={{ marginTop: "0" }}>
            <p
              style={{
                color: "rgba(124, 124, 124, 1)",
                textAlign: "left",
                fontSize: "14px",
                fontFamily: "Roboto",
              }}
            >
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp{" "}
              <span style={{ color: "rgba(114, 219, 115, 1)" }}>
                Privacy Policy
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
