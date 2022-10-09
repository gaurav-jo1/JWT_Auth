import React,{useContext} from "react";
import { AuthContext } from "../Context/AuthContext";

const ProfilePage = () => {
  const {userName} = useContext(AuthContext)
  return (
    <div>
      <h1>Hello My name is {userName}</h1>
    </div>
  );
};

export default ProfilePage;
