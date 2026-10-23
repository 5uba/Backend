import { useState } from "react";
import DataContext from "../context/DataContext";
const DataProvider = ({ children }) => {
  const [datas, setDatas] = useState(true);
  const handleDataChange = () => {
    setDatas(!datas);
  };
  return (
    <DataContext.Provider value={{ datas, handleDataChange }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
