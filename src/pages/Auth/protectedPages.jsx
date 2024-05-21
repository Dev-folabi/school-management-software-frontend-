import React, { useContext } from "react";
import { AuthContext } from "../../context/userContext/authContext";

const ProtectedPages = () => {
  const auth = useContext(AuthContext);

  return <div>welcome</div>;
};

export default ProtectedPages;
