import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

const Main_Layout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="ml-64 pt-20">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Main_Layout;
