import React from "react";
import profile from "../assets/profilePhoto.png";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import logout from "../assets/logout.png";
import myProfile from "../assets/myProfile.png";
import { useState } from "react";

function NavBar() {
  const [isProfileClicked, setIsProfileClicked] = useState(false);

  const handleProfileClicked = () => {
    setIsProfileClicked((prev) => !prev);
    if (isProfileClicked) console.log("clciked profile");
  };
  return (
    <div className="flex flex-row px-2 pr-[20px] pl-[10px] py-1 justify-between md:px-6 md:pr-[70px] md:pl-[20px] md:py-5 border bg-white border-b-gray-200 fixed top-0  left-0 right-0 z-20 ">
      <Link to="/home">
        <img
          src={logo}
          className="md:w-[300px] md:h-[30px] object-contain md:object-cover w-[180px] h-[70px] "
        ></img>
      </Link>
      <img
        src={profile}
        className="md:w-8 md:h-8  w-6 h-6 cursor-pointer mt-5 md:mt-0 "
        alt="Profile"
        onClick={handleProfileClicked}
      />

      {isProfileClicked && (
        <div className="flex flex-col fixed top-[73px] md:right-[80px] right-[20px] md:h-[160px] md:w-[200px] h-[120px] w-[150px] bg-white shadow-md shadow-gray-400 pl-5 z-10 gap-8">
          <div className="flex flex-row mt-[30px] md:ml-3 gap-3 ">
            <img src={myProfile} className="h-5 w-5 "></img>
            <p className="text-[#808080] hover:text-black cursor-pointer">
              <Link to="/myprofile"> My Profile</Link>
            </p>
          </div>
          <div className="flex flex-row  gap-3 md:ml-3">
            <img src={logout} className="h-5 w-5"></img>
            <p className="text-[#808080] hover:text-black cursor-pointer">
              Logout
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
