import React,{useContext} from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
  const {user,setAuthTokens,setUser} = useContext(AuthContext)


  function callLogout() {
    setAuthTokens(null)
    setUser(null)
    localStorage.removeItem('authTokens')
  }
  return (
    <div>
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/profile">Profile</Link> 
      <span> | </span>
      { user ? <Link onClick={callLogout} to="/login">Logout</Link> : <Link to="/login">Login</Link>}

      { user && <h1>Hello {user.username}</h1>}
    </div>
  );
};

export default Header;
