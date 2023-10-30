import React, { useState } from "react";
import CategoryPageLeftDiv from "../Components/CategoryPageLeftDiv";
import CategoryPageRightDiv from "../Components/CategoryPageRightDiv";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const [Category, setCategory] = useState([]);
  const [nextcondition, setnextCondition] = useState(false);
  //   console.log(Category);
  const navigate = useNavigate();

  function nextbuttonhandler() {
    if (Category.length < 3) {
      setnextCondition(true);
    } else {
      setnextCondition(false);
      if (Category.length > 0) {
        localStorage.setItem("usercategory", JSON.stringify(Category));
      }
      navigate("/homepage");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
        position: "relative",
      }}
    >
      {/* CategoryPageLeftDiv */}
      <div
        style={{
          width: "40%",
          height: "100vh",
        }}
      >
        <CategoryPageLeftDiv
          Category={Category}
          setCategory={setCategory}
          nextcondition={nextcondition}
        />
      </div>

      {/* CategoryPageRightDiv */}
      <div style={{ width: "60%", height: "100vh" }}>
        <CategoryPageRightDiv Category={Category} setCategory={setCategory} />
      </div>
      <button
        onClick={nextbuttonhandler}
        style={{
          position: "absolute",
          bottom: "20px",
          right: "200px",
          width: "120px",
          height: "40px",
          color: "white",
          backgroundColor: "#148A08",
          borderRadius: "20px",
          textAlign: "center",
          fontWeight: "500",
          fontSize: "15px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Next Page
      </button>
    </div>
  );
};

export default CategoryPage;
