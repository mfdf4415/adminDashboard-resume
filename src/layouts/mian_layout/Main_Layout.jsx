import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Main_Layout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="p-[256px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Main_Layout;
