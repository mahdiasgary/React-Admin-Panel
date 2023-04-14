import React, { useState } from "react";
import { BsImageFill } from "react-icons/bs";
import DragDropFile from "./DragDropFile";
import { RxTrash } from "react-icons/rx";

const AddMoveImage = ({movieCover, setMovieCover,movieBackground, setMovieBackground}) => {
  return (
    <li class="mb-16 ml-6 flex flex-col">
      <div className="flex">
        {movieCover && movieBackground ? (
          <span class="absolute flex items-center justify-center w-10 h-10 bg-btn rounded-full -left-5 ring-4 ring-white dark:ring-gray-900 dark:bg-btn">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-screenLight"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        ) : (
          <span class="absolute flex items-center justify-center w-10 h-10 text-screenLight bg-btn rounded-full -left-5 ring-4 ring-white dark:ring-gray-900 dark:bg-btn">
            <BsImageFill />
          </span>
        )}
        <h3 class="font-medium leading-tight self-center mt-2">
          Add Movie Image
        </h3>
      </div>
      <div className="mt-10">
        <div className="flex justify-center gap-5 ">
          {movieCover ? (
            <div className="min-w-[190px]  h-[270px] flex flex-col ">
              <img
                alt="not found"
                src={URL.createObjectURL(movieCover)}
                className="min-w-[190px] h-[270px] rounded-xl "
              />
              <button
                onClick={() => setMovieCover(null)}
                className=" mt-2 bg- text-red-500 py-1 rounded-xl border hover:bg-border duration-200 border-border text-center  "
              >
                <RxTrash className="self-center inline" /> Remove
              </button>
            </div>
          ) : (
            <div className="flex flex-col text-center">
              <DragDropFile
                movieCover={movieCover}
                setMovieCover={setMovieCover}
                content={"cover"}
              />
              <p className="text-btn mt-3 font-semibold">Upload Movies Cover</p>
            </div>
          )}
          {movieBackground ? (
            <div className="min-w-[190px] h-[270px] flex flex-col ">
              <img
                alt="not found"
                src={URL.createObjectURL(movieBackground)}
                className="min-w-[190px] h-[270px] rounded-xl "
              />
              <button
                onClick={() => setMovieBackground(null)}
                className=" mt-2 bg- text-red-500 py-1 rounded-xl border hover:bg-border duration-200 border-border text-center  "
              >
                <RxTrash className="self-center inline" /> Remove
              </button>
            </div>
          ) : (
            <div className="flex flex-col text-center">
              <DragDropFile
                movieBackground={movieBackground}
                setMovieBackground={setMovieBackground}
                content={"background"}
              />
              <p className="text-btn mt-3 font-semibold">
                Upload Movies Background
              </p>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default AddMoveImage;
