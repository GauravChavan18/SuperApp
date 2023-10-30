import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [error, seterror] = useState(false);
  const navigate = useNavigate();
  const [nameerr, setnameerr] = useState(true);
  const [usernameerr, setusernameerr] = useState(true);
  const [emailerr, setemailerr] = useState(true);
  const [mobileerr, setmobileerr] = useState(true);
  const [showdataerr, setshowdataerr] = useState(true);
  const [formdata, setformdata] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    sharedata: false,
  });

  function changehandler(event) {
    const { type, name, value, checked } = event.target;
    setformdata((prevdata) => {
      return {
        ...prevdata,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submithandler(event) {
    event.preventDefault();
    if (
      formdata.name === "" ||
      formdata.username === "" ||
      formdata.email === "" ||
      formdata.mobile === "" ||
      formdata.sharedata === false
    ) {
      seterror(true);

      let namecheck = /^[a-zA-Z ]+$/;
      if (formdata.name !== "" && namecheck.test(formdata.name)) {
        setnameerr(false);
      } else {
        setnameerr(true);
      }

      let usernamecheck = /^[a-zA-z0-9_]+$/;
      if (formdata.username !== "" && usernamecheck.test(formdata.username)) {
        setusernameerr(false);
      } else {
        setusernameerr(true);
      }

      // let emailcheck = /^[a-z0-9@.]+$/;
      if (formdata.email !== "") {
        setemailerr(false);
      } else {
        setemailerr(true);
      }
      let numcheck = /^[0-9]+$/;
      if (formdata.mobile !== "" && numcheck.test(formdata.mobile)) {
        setmobileerr(false);
      } else {
        setmobileerr(true);
      }

      if (formdata.sharedata === true) {
        setshowdataerr(false);
      } else {
        setshowdataerr(true);
      }
    } else {
      seterror(false);

      localStorage.setItem("user", JSON.stringify(formdata));
      navigate("/categoryroute");
      // console.log(formdata);
      formdata.name = "";
      formdata.username = "";
      formdata.email = "";
      formdata.mobile = "";
      formdata.sharedata = false;
    }
  }

  return (
    <div>
      <form onSubmit={submithandler} autoComplete="on">
        {/* name div */}
        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <input
            type="text"
            placeholder="Name"
            onChange={changehandler}
            name="name"
            value={formdata.name}
            style={{
              backgroundColor: "rgba(41, 41, 41, 1)",
              color: "rgba(114, 219, 115, 1)",
              fontSize: "15px",
              border: error && nameerr ? "1px solid red" : "initial",
              width: "100%",
              height: "40px",
              padding: "5px",
              paddingLeft: "10px",
              fontFamily: "Dm Sans",
              borderRadius: "5px",
              boxSizing: "border-box",
            }}
          />
          {error && nameerr && (
            <span style={{ color: "red", width: "100%" }}>
              Field is required
            </span>
          )}
        </div>

        {/* username div */}
        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <input
            type="username"
            placeholder="Username"
            onChange={changehandler}
            name="username"
            value={formdata.username}
            style={{
              backgroundColor: "rgba(41, 41, 41, 1)",
              color: "rgba(114, 219, 115, 1)",
              fontSize: "15px",
              width: "100%",
              height: "40px",
              padding: "5px",
              paddingLeft: "10px",
              fontFamily: "Dm Sans",
              borderRadius: "5px",
              border: error && usernameerr ? "1px solid red" : "initial",
              boxSizing: "border-box",
            }}
          />
          {error && usernameerr && (
            <span style={{ color: "red", width: "100%" }}>
              Field is required
            </span>
          )}
        </div>

        {/* email div  */}
        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <input
            autoComplete="on"
            type="email"
            placeholder="Email"
            onChange={changehandler}
            name="email"
            value={formdata.email}
            style={{
              backgroundColor: "rgba(41, 41, 41, 1)",
              color: "rgba(114, 219, 115, 1)",
              fontSize: "15px",
              width: "100%",
              height: "40px",
              padding: "5px",
              paddingLeft: "10px",
              fontFamily: "Dm Sans",
              borderRadius: "5px",
              border: error && emailerr ? "1px solid red" : "initial",
              boxSizing: "border-box",
            }}
          />
          {error && emailerr && (
            <span style={{ color: "red", width: "100%" }}>
              Field is required
            </span>
          )}
        </div>

        {/* mobile div */}
        <div style={{ marginBottom: "10px", textAlign: "left" }}>
          <input
            // inputmode="numeric"
            autoComplete="on"
            placeholder="Mobile"
            onChange={changehandler}
            name="mobile"
            value={formdata.mobile}
            style={{
              backgroundColor: "rgba(41, 41, 41, 1)",
              color: "rgba(114, 219, 115, 1)",
              fontSize: "15px",
              width: "100%",
              height: "40px",
              padding: "5px",
              paddingLeft: "10px",
              fontFamily: "Dm Sans",
              borderRadius: "5px",
              border: error && mobileerr ? "1px solid red" : "initial",
              boxSizing: "border-box",
            }}
          />
          {error && mobileerr && (
            <span style={{ color: "red", width: "100%" }}>
              Field is required
            </span>
          )}
        </div>

        <div
          style={{
            margin: "0",
            marginBottom: "35px",
            textAlign: "left",
            width: "100%",
          }}
        >
          <input
            type="checkbox"
            name="sharedata"
            value={formdata.sharedata}
            checked={formdata.sharedata}
            onClick={changehandler}
          />
          <span style={{ color: "rgba(124, 124, 124, 1)", width: "100%" }}>
            Share my registration data with Superapp
          </span>
          <br />
          {error && showdataerr && (
            <span style={{ color: "red", width: "100%" }}>
              Check this box if you want to proceed
            </span>
          )}
        </div>

        <button
          style={{
            width: "100%",
            backgroundColor: "rgba(114, 219, 115, 1)",
            height: "40px",
            boxSizing: "border-box",
            borderRadius: "30px",
            color: "white",
            fontWeight: "600",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
