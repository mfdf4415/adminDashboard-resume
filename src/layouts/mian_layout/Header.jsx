import { CgMenuGridR } from "react-icons/cg";
import { FaSun } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ChangeLanguage from "../../components/ChangeLanguage";

const Header = () => {
  return (
    <header className="pl-[268px] p-3 px-8 w-full fixed top-0 left-0 right-0 flex justify-between items-center">
      <div className="flex gap-8">
        <CgMenuGridR className="text-3xl text-primary cursor-pointer" />
        <ChangeLanguage />
        <FaSun className="text-text_bold text-2xl" />
      </div>
      <UserData />
    </header>
  );
};

const UserData = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();

  const handleSignout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const handleOutClick = (e) => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleOutClick);
    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, [show]);

  return (
    <div ref={ref} className="relative">
      <div
        onClick={() => setShow(!show)}
        className="flex items-center justify-center w-9 h-9 rounded-full bg-[#BC4CFC] userShadow cursor-pointer"
      >
        <BiSolidUser className=" text-[#fff] text-lg" />
      </div>
      <div
        className={`absolute transition-all right-0 top-12 w-44 shadow-md capitalize ${
          show ? "h-auto" : "opacity-0"
        }`}
      >
        <div className="px-3 py-2 transition text-sm cursor-pointer text-text_bold hover:bg-[#F3F4F6]">
          jonDoe@emial.com
        </div>
        <div className="px-3 py-2 transition text-sm cursor-pointer text-text_bold hover:bg-[#F3F4F6]">
          help
        </div>
        <div className="px-3 py-2 transition text-sm cursor-pointer text-text_bold hover:bg-[#F3F4F6]">
          acount
        </div>
        <hr className="border-[#ededed]" />
        <div
          onClick={handleSignout}
          className="px-3 py-2 transition text-sm cursor-pointer text-text_light hover:bg-[#F3F4F6]"
        >
          sign out
        </div>
      </div>
    </div>
  );
};

export default Header;
