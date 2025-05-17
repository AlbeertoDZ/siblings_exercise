import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Head = () => {
  
  const email = useContext(UserContext)
  
  return <header>
  
    <h2>Este es tu email: {email} </h2>


  </header>;
};

export default Head;
