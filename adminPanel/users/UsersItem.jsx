import React, { useState } from "react";
import { RxTrash } from "react-icons/rx";
import { AiOutlineEdit } from "react-icons/ai";

const UsersItem = ({ user }) => {
  const [active, setActive] = useState(false);
  return (
    <tr className=" py-10 rounded-xl   text-[#d1d1d3] group  ">
      <td>
        <div className="flex justify-center text-sm group-hover:bg-[#24272e] duration-300 h-[64px] mt-1 group-hover:rounded-l-xl ">
          <span className="self-center">{user.id}</span>
        </div>
      </td>
      <td>
        <div className="flex justify-center group-hover:bg-[#24272e] duration-300 h-[64px] mt-1 ">
          <img
            src="https://thumbs.dreamstime.com/b/female-avatar-profile-picture-vector-female-avatar-profile-picture-vector-102690279.jpg"
            alt="ff"
            className="w-[40px] h-[40px] self-center rounded-[50%] "
          />
        </div>
      </td>
      <td>
        <div className="flex justify-center group-hover:bg-[#24272e] duration-300 self-center py-5 mt-1">
          {user.name}
        </div>
      </td>
      <td>
        <div className="flex justify-center group-hover:bg-[#24272e] duration-300 py-5 mt-1 ">
          {user.email}
        </div>
      </td>

      <td>
        {user.type === "admin" ? (
          <div className="flex justify-center text-btn group-hover:bg-[#24272e] duration-300 py-5 mt-1">
            {user.type}
          </div>
        ) : (
          <div className="flex justify-center group-hover:bg-[#24272e] duration-300 py-5 mt-1">
            {user.type}
          </div>
        )}
      </td>
      <td>
        <div className="flex justify-center group-hover:bg-[#24272e] duration-300 py-5 mt-1">
          {user.state === "active" ? (
            <div className="bg-[#213242] px-2 text-sm text-btn rounded-md py-[2px]">
              {user.state}
            </div>
          ) : (
            <div className="bg-[#2d2f3b] px-2 text-sm text-[#5e626e] rounded-md py-[2px]">
              {user.state}
            </div>
          )}
        </div>
      </td>
      <td>
        <div className="flex justify-center group-hover:bg-[#24272e] duration-300 py-5 mt-1">
          {user.date}
        </div>
      </td>
      <td>
        <div className="flex justify-center group-hover:bg-[#24272e] duration-300 py-5 mt-1 group-hover:rounded-r-xl">
          <div className="flex gap-2 text-[19px]">
            <span className="cursor-pointer">
              <AiOutlineEdit />{" "}
            </span>
            <span className="text-red-500 text-[20px] cursor-pointer">
              <RxTrash />
            </span>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default UsersItem;
