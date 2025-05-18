import { NavLink } from "react-router-dom";
import { Link } from "react-router";
import { sidebarLinks } from '../Data'
import { MdLogout, MdOutlineClose } from "react-icons/md";
import lapoLogo from '../assets/images/lapo-logo.png';
import buttomLogo from '../assets/images/cardinfra-logo.png';
import { HiOutlineHome } from "react-icons/hi";


const SideBar = ({ isSidebarOpen, onToggleSidebar }) => {
  const DashboardLink = { name: "Dashboard", path: "/" };

  return (
    <>
       {isSidebarOpen && (
        <div
          onClick={onToggleSidebar}
          className="fixed inset-0 bg-black/50 z-[15] xl:hidden"
        ></div>
      )}
      <nav
        className={`fixed top-0 -left-full xl:left-0 z-50 h-screen w-[250px] xl:w-230px bg-primary-color pt-8 pb-4 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "left-0" : ""}`}
      >

        <div className="pr-6 xl:hidden flex items-end justify-end">
          <MdOutlineClose
            className="text-white text-[23px] cursor-pointer"
            onClick={onToggleSidebar}
          />
        </div>


        <Link
          to="/"
          className="ml-4 mb-6"
          onClick={onToggleSidebar}
        >
          <img src={lapoLogo} alt="lapo logo" />
        </Link>

        <aside className="flex-1 flex flex-col overflow-y-auto px-4 mt-6 max-h-[calc(100vh-100px)] custom-scrollbar">
          <div>
            <NavLink
              to={DashboardLink.path}
              onClick={onToggleSidebar}
              className={({ isActive }) =>
                `flex items-center gap-2 h-9 px-2 rounded transition-colors ${
                  isActive ? "bg-link-color text-blue-dark" : "text-link-color"
                }`
              }
            >
              <span className="text-[17px]">
                <HiOutlineHome />
              </span>
              <p className="text-[16px] font-normal">Dashboard</p>
            </NavLink>
          </div>


          <div className="mt-7 ml-1">
            <p className="text-gray-p text-[16px] font-medium">Main menu</p>
          </div>

          <ul className="mt-6 flex-grow">
            {sidebarLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={onToggleSidebar}
                  className={({ isActive }) =>
                    `flex items-center gap-2 h-9 px-2 rounded transition-colors ${
                      isActive ? "bg-link-color text-blue-dark" : "text-link-text"
                    }`
                  }
                >
                  <span className="text-[17px] tag_icons">{link.icon}</span>
                  <p className="text-[16px] font-normal">{link.name}</p>
                </NavLink>
              </li>
            ))}
          </ul>


          <div className="mt-20 pl-1">
            <Link to="#" className="flex items-center gap-2 text-white hover:text-blue-dark transition-colors">
              <MdLogout className="text-link-color" />
              <p className="text-[16px] font-medium">Logout</p>
            </Link>
          </div>

          <div className="mt-6 flex flex-col gap-4 pt-4">
            <p className="text-link-color text-[16px] font-medium">POWERED BY</p>
            <div>
              <img src={buttomLogo} alt="bottom logo" />
            </div>
          </div>
        </aside>
      </nav>
    </>
  );
};

export default SideBar;