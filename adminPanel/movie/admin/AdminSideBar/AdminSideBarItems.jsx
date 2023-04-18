import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useStateContext } from "../../../contextProvider/ContextProvider";
import { styles } from "../../../styles/styles";
import { Link, withRouter } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const AdminSideBarItems = ({ history, item, menu }) => {
  const [state, setState] = useState(false);
  useEffect(()=>{
    const screenWidht=window.innerWidth
  
    if(screenWidht<1024)return setState(true)
  },[])
  const { selectedSideBarItem, setSelectedSideBarItem, rtl } =
    useStateContext();
  const pathname = history.location.pathname;
  useEffect(() => {
    setSubSelected(pathname.split("/")[2]);
    setSelectedSideBarItem(pathname.split("/")[2])
  }, [pathname]);

  const [subSelected, setSubSelected] = useState();
  const [hovered, setHovered] = useState();
  return (
    <div>
      <div>
        {item[1] ? (
          <div>
            <li
              onMouseEnter={() => setHovered(item[0].title.toLowerCase())}
              onMouseLeave={() => setHovered()}
              onClick={(e) => {
                e.preventDefault();
                setState(!state);
              }}
              className={`
          ${!menu && "pl-2 mx-0"}
          ${styles.adminSideBarItem} 
          
          ${
            selectedSideBarItem === item[0].title.toLowerCase() &&
            "border-l-[3px] "
          }
          ${rtl ? "ml-1" : "mr-1"}
          
          `}
            >
              <div className="w-full flex justify-between">
                <div className="flex">
                  <span
                    className={`
      ${
        (hovered === item[0].title.toLowerCase() ||
          selectedSideBarItem === item[0].title.toLowerCase()) &&
        "text-btn  "
      }
        self-center px-2 ${
          rtl ? "ml-2 lg:ml-1" : "mr-2 lg:mr-1"
        } mr-2 text-[24px] lg:text-[19px] lg:text-btn `}
                  >
                    {item[0].icon}
                  </span>
                  <p
                    className={`origin-left lg:text-btn ${
                      selectedSideBarItem === item[0].title.toLowerCase() &&
                      "text-btn"
                    } `}
                  >
                    {item[0].title}
                  </p>
                </div>
                <div
                  className={`text-[15px] mx-4 self-center text-btn
                   ${!state ? "rotate-0" : "-rotate-90"} 
                  duration-300`}
                >
                  <FaChevronDown />{" "}
                </div>
              </div>
            </li>
            <ul className={`origin-top`}>
              {item[1]?.map((subItem, index) => (
                <Link
                  key={index}
                  to={`/admin/${subItem.title
                    .replace(/\s+/g, "")
                    .toLowerCase()}`}
                >
                  <li
                    className={`origin-left flex  hover:text-btn border-btn  pl-8  ${
                      !state ? " py-3 duration-300" : "scale-x-0  h-0 text-0"
                    }
                   ${
                     subSelected === subItem.main &&
                     "border-l-[3px] dark:lg:bg-[#29263b] lg:bg-zinc-300  mr-1 rounded-r-lg duration-100 text-btn"
                   } `}
                  >
                    <div className="self-center mx-2 ">
                      {subSelected === subItem.main
                        ? subItem.icon2
                        : subItem.icon1}
                    </div>
                    <div className="">{subItem.title}</div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <Link to={`/${`admin/${item[0].title.toLowerCase()}`}`}>
              <li
                onMouseEnter={() => setHovered(item[0].title.toLowerCase())}
                onMouseLeave={() => setHovered()}
                onClick={() => {
                  setSelectedSideBarItem(item[0].title.toLowerCase());
                }}
                className={`
          ${!menu && "pl-2 mx-0"}
          ${styles.adminSideBarItem} 
          
          ${
            selectedSideBarItem === item[0].title.toLowerCase() &&
            "border-l-[3px] dark:lg:bg-[#29263b] lg:bg-zinc-300"
          }
          ${rtl ? "ml-1" : "mr-1"} lg:text-btn
          
          `}
              >
                <span
                  className={`
      ${
        (hovered === item[0].title.toLowerCase() ||
          selectedSideBarItem === item[0].title.toLowerCase()) &&
        "text-btn "
      }
        self-center px-2 ${rtl ? "ml-2" : "mr-2"} mr-2 text-[24px]  `}
                >
                  {item[0].icon}
                </span>
                <p
                  className={`origin-left ${
                    selectedSideBarItem === item[0].title.toLowerCase() &&
                    "text-btn "
                  } `}
                >
                  {item[0].title}
                </p>
              </li>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(AdminSideBarItems);
