import React from "react";
import "./UserCard.css";
import userimg from "../Assests/image 14.png";

const UserCard = (props) => {
  let user = localStorage.getItem("user");
  let userarr = JSON.parse(user);
  let usercategory = localStorage.getItem("usercategory");
  let usercategoryarr = JSON.parse(usercategory);

  return (
    <div className="UserDiv">
      <img src={userimg} className="userimg" />
      <div className="UserInfoDiv">
        <div>
          <p className="UserInfoPara">{userarr.name}</p>
          <p className="UserInfoPara">{userarr.email}</p>
          <p className="UserNamePara">{userarr.username}</p>
        </div>

        {/* {
          usercategoryarr.length>4 ?className="UserCategoryDiv":className="UserCategoryDiv"
        } */}
        <div
          className={usercategoryarr.length > 4 ? "another" : "UserCategoryDiv"}
        >
          {usercategoryarr.map((item, index) => (
            <div className="CategoryCard" key={index}>
              <span className="CategoryName">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
