import React,{useContext} from "react";
import { AuthContext } from "../Context/AuthContext";

const ProfilePage = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      {user && <p>You are logged in Profile page {user.username}</p>}
    </div>
  );
};

export default ProfilePage;
