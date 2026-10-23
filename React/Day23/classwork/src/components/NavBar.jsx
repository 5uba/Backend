import React, { useContext } from "react";
import DataContext from "../context/DataContext";
const NavBar = () => {
  const { datas, handleDataChange } = useContext(DataContext);
  return (
    <div>
      <h2>{datas ? "True" : "False"}</h2>
      <button onClick={handleDataChange}>Change Data</button>
    </div>
  );
};
export default NavBar;
