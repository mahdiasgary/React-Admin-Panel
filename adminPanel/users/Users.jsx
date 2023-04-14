import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import UsersItem from "./UsersItem";

const eew = [
  {
    id: 1,
    img: "",
    name: "ali",
    email: "sfAe@sd.com",
    state: "active",
    type: "user",
    date: "12/05/1402",
    amal: "sfsv",
  },
  {
    id: 2,
    img: "",
    name: "ali",
    email: "sfAe@sd.com",
    state: "Inactive",
    type: "user",
    date: "12/05/1402",
    amal: "sfsv",
  },
  {
    id: 3,
    img: "",
    name: "ali",
    email: "sfAe@sd.com",
    state: "active",
    type: "user",
    date: "12/05/1402",
    amal: "sfsv",
  },
  {
    id: 4,
    img: "",
    name: "ali",
    email: "sfAe@sd.com",
    state: "inactive",
    type: "admin",
    date: "12/05/1402",
    amal: "sfsv",
  },
  {
    id: 5,
    img: "",
    name: "ali",
    email: "sfAe@sd.com",
    state: "inactive",
    type: "user",
    date: "12/05/1402",
    amal: "sfsv",
  },
  {
    id: 3,
    img: "",
    name: "ali",
    email: "sfAe@sd.com",
    state: "active",
    type: "user",
    date: "12/05/1402",
    amal: "sfsv",
  },
  {
    id: 4,
    img: "",
    name: "ali",
    email: "sfAe@sd.com",
    state: "inactive",
    type: "admin",
    date: "12/05/1402",
    amal: "sfsv",
  },
  {
    id: 5,
    img: "",
    name: "ali",
    email: "sfAe@sd.com",
    state: "inactive",
    type: "user",
    date: "12/05/1402",
    amal: "sfsv",
  },
  {
    id: 3,
    img: "",
    name: "ali",
    email: "sfAe@sd.com",
    state: "active",
    type: "user",
    date: "12/05/1402",
    amal: "sfsv",
  },
  {
    id: 4,
    img: "",
    name: "ali",
    email: "sfAe@sd.com",
    state: "inactive",
    type: "admin",
    date: "12/05/1402",
    amal: "sfsv",
  },
  {
    id: 5,
    img: "",
    name: "ali",
    email: "sfAe@sd.com",
    state: "inactive",
    type: "user",
    date: "12/05/1402",
    amal: "sfsv",
  },
  {
    id: 3,
    img: "",
    name: "ali",
    email: "sfAe@sd.com",
    state: "active",
    type: "user",
    date: "12/05/1402",
    amal: "sfsv",
  },
  {
    id: 4,
    img: "",
    name: "ali",
    email: "sfAe@sd.com",
    state: "inactive",
    type: "admin",
    date: "12/05/1402",
    amal: "sfsv",
  },
  {
    id: 5,
    img: "",
    name: "ali",
    email: "sfAe@sd.com",
    state: "inactive",
    type: "user",
    date: "12/05/1402",
    amal: "sfsv",
  },
  {
    id: 3,
    img: "",
    name: "ali",
    email: "sfAe@sd.com",
    state: "active",
    type: "user",
    date: "12/05/1402",
    amal: "sfsv",
  },
  {
    id: 4,
    img: "",
    name: "ali",
    email: "sfAe@sd.com",
    state: "inactive",
    type: "admin",
    date: "12/05/1402",
    amal: "sfsv",
  },
  {
    id: 5,
    img: "",
    name: "ali",
    email: "sfAe@sd.com",
    state: "inactive",
    type: "user",
    date: "12/05/1402",
    amal: "sfsv",
  },
  {
    id: 3,
    img: "",
    name: "ali",
    email: "sfAe@sd.com",
    state: "active",
    type: "user",
    date: "12/05/1402",
    amal: "sfsv",
  },
  {
    id: 4,
    img: "",
    name: "ali",
    email: "sfAe@sd.com",
    state: "inactive",
    type: "admin",
    date: "12/05/1402",
    amal: "sfsv",
  },
  {
    id: 5,
    img: "",
    name: "ali",
    email: "sfAe@sd.com",
    state: "inactive",
    type: "user",
    date: "12/05/1402",
    amal: "sfsv",
  },
];
const Users = () => {
  return (
    <div className=" w-full">
      <div className="text-[23px] font-bold mt-10 mb-6 mx-10">Users List</div>

      <div className="flex justify-center w-full">
        <div className="bg-[#1c1d21]   bg-opacity-40 overflow-x-auto min-w-[70vw] max-w-[70vw] rounded-2xl">
          <table className="rounded-xl   table-auto w-full ">
            <thead>
              <tr className="bg-[#1c1d21] h-[65px] text-[#6d7077] text-sm ">
                <th className="px-3 py-2  w-[5%] ">ID</th>

                <th
                  id="a"
                  data-tooltip-content={"dddd"}
                  className="px-3 py-2  w-[10%]  "
                >
                  PROFILE
                </th>
                <th className=" py-2 w-[10%] ">NAME</th>
                <th className="w-[20%]">EMAIL</th>
                <th className="w-[10%]">ROLE</th>
                <th className="w-[10%]">STATUS</th>
                <th className="w-[20%]">DTAE</th>
                <th className="w-[10%]">ACTION</th>
              </tr>
            </thead>

            <tbody className="px-5 rounded-3xl">
              {eew.map((user) => (
                <UsersItem user={user} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ReactTooltip
        anchorId="a"
        place="bottom"
        content="Hello world! I'm a Tooltip"
      />
    </div>
  );
};

export default Users;
