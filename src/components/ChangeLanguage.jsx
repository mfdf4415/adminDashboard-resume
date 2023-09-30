import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "../features/languageSlice/langSlice";
import faImg from "../../public/fa.png";
import enImg from "../../public/en.png";

const ChangeLanguage = () => {
  const [show, setShow] = useState(false);
  const ref = useRef();
  const lang = useSelector((state) => state.language.lang);
  const dispatch = useDispatch();

  const handleChangelang = (value) => {
    dispatch(changeLanguage(value));
    setShow(false);
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
        className="flex items-center justify-center w-7 h-7 rounded-full cursor-pointer overflow-hidden"
      >
        <img
          src={lang === "en" ? enImg : faImg}
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className={`absolute transition-all  top-12 w-36 shadow-md capitalize ${
          show ? "h-auto" : "hidden"
        }`}
      >
        <div
          onClick={() => handleChangelang("fa")}
          className="flex items-center gap-2 px-3 py-2 transition cursor-pointer text-text_bold hover:bg-[#F3F4F6]"
        >
          <img src={faImg} className="w-7 h-4 object-cover rounded-sm" />
          <span className="text-text_bold text-sm">persian</span>
        </div>
        <div
          onClick={() => handleChangelang("en")}
          className="flex items-center gap-2 px-3 py-2 transition cursor-pointer text-text_bold hover:bg-[#F3F4F6]"
        >
          <img src={enImg} className="w-7 h-4  object-cover rounded-sm" />
          <span className="text-text_bold text-sm">english</span>
        </div>
      </div>
    </div>
  );
};

export default ChangeLanguage;
