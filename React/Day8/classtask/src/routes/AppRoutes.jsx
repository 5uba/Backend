import { Routes, Route } from "react-router-dom";
import AllSports from "../components/Allsports";
import Men from "../components/Men";
import Women from "../components/Women";
import Kids from "../components/Kids";
import Navbar from "../components/Navbar";
function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllSports />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
      </Routes>
    </>
  );
}
export default AppRoutes;