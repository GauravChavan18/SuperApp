import React from "react";
import data from "../data.js";
const CategoryPageRightDiv = (props) => {
  let setCategory = props.setCategory;
  let Category = props.Category;

  function ispresent(name) {
    return Category.includes(name);
  }

  // console.log(Category);
  function clickhandler(name) {
    // console.log("ans=", ispresent(name));
    if (ispresent(name)) {
      setCategory(
        Category.filter(function (element) {
          return element !== name;
        })
      );
    } else {
      setCategory([...Category, name]);
    }
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        // backgroundColor: "GrayText",
        margin: "auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          color: "white",
          flexWrap: "wrap",
          width: "75%",
          height: "80%",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => clickhandler(item.name)}
            style={{
              width: "155px",
              height: "157px",
              backgroundColor: `${item.bgcolor}`,
              margin: "10px",
              boxSizing: "border-box",
              borderRadius: "10px",
              cursor: "pointer",
              border: ispresent(item.name)
                ? "4px solid #11B800"
                : "4px solid transparent",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "90%",
                marginTop: "10px",
                marginLeft: "5px",
              }}
            >
              <p
                style={{
                  textAlign: "left",
                  margin: "0",
                  fontSize: "20px",
                  fontFamily: "Dm Sans",
                  fontWeight: "500",
                }}
              >
                {item.name}
              </p>
              <img
                src={item.imgscr}
                alt="data img"
                style={{
                  width: "140px",
                  height: "80px",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPageRightDiv;
