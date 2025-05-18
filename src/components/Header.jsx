import { BiSearch } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation } from "react-router-dom";

const Header = ({ onToggleSidebar, children, className }) => {
  const location = useLocation();

  const hideSearchBox = ["/branches", "/roles", "/users", "/card-scheme", "/card-profile", "/card-request", "/stock", "/complaints-log", "/complaints-resolve"].includes(location.pathname);


    return (
      <header className={`fixed top-0 bg-white shadow z-10 py-4 xl:pl-4 w-full ml-0 xl:ml-[230px] xl:w-[calc(100%-230px)] ${className}`}>
        <div className="flex items-center justify-between px-2 xl:px-4">
            <div className="flex items-center gap-x-2">
                <div className="xl:hidden">
                  <RxHamburgerMenu className="text-black text-lg cursor-pointer" onClick={onToggleSidebar} />
                </div>

                <div className="">
                  {children}                  
                </div>
            </div>
  
            <div className="flex items-center gap-x-3">         

              {!hideSearchBox && (
                  <div className="hidden xl:flex items-center gap-x-2 border border-link-text py-1 px-2 rounded-2xl">
                      <BiSearch className="text-light-dark-2" />
                      <input className="outline-none text-base text-light-dark-2 placeholder:text-sm" type="text" placeholder="Search" />  
                  </div>
              )}
    
                <IoIosNotificationsOutline className="cursor-pointer" />
                <div className="">
                  <FiUser className="border border-link-text p-1 w-7 h-7 rounded-4xl bg-secondary-color cursor-pointer" />
                </div>
            </div>
        </div>
      </header>
    );
  };

export default Header