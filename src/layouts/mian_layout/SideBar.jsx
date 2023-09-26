import { NavLink } from "react-router-dom";
import { BiSolidCategory, BiSolidVideo ,BiSolidUserCircle,BiCode} from "react-icons/bi";
const options = [
  { name: "courses", icon: BiSolidVideo, to: "/" },
  { name: "category", icon: BiSolidCategory, to: "/category" },
  { name: "course discount", icon: BiSolidVideo, to: "/course-discount" },
  { name: "user", icon: BiSolidUserCircle, to: "/user" },
  { name: "about us", icon: BiCode, to: "/about-us" },
];

const SideBar = () => {
  return (
    <aside className="fixed  bg-[#fff] h-screen w-64 p-5 shadow">
      <nav>
        <ul className="flex flex-col gap-4">
          {options.map((option) => (
            <li>
              <NavLink
                to={option.to}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 capitalize p-3 rounded-lg activeLink"
                    : "flex items-center gap-3 capitalize p-3 relative overflow-hidden transition-all hover:bg-input_bg rounded-lg text-text_bold"
                }
              >
                <option.icon className="text-xl" />
                <span className="font-medium">{option.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
