import React, { useState } from "react";
import { BsImageFill, BsJournalText } from "react-icons/bs";
import { ImFilm } from "react-icons/im";
import DragDropFile from "./DragDropFile";
import AddMoveImage from "./AddMoveImage";
import LoginForm from './MovieInfo'
const AddMovies = () => {
  const [movieCover, setMovieCover] = useState(null);
  const [movieBackground, setMovieBackground] = useState(null);
  const [state, setState] = useState(false);

  return (
    <div className="mx-20 mt-10">
      <div className="text-[23px] font-bold mt-10 mb-6 ">Add New Movie </div>
      <ol class="relative text-gray-500 border-l border-gray-300 dark:border-gray-600 dark:text-gray-400">
        <AddMoveImage
          movieBackground={movieBackground}
          setMovieBackground={setMovieBackground}
          movieCover={movieCover}
          setMovieCover={setMovieCover}
        />
        <li class="mb-10 ml-6">
          {movieCover && movieBackground ? (
            !state ? (
              <span class="absolute flex text-screenLight items-center justify-center w-10 h-10 bg-btn rounded-full -left-5 ring-4 ring-white dark:ring-gray-900 ">
                <BsJournalText className="font-bold text-[20px] " />
              </span>
            ) : (
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
            )
          ) : (
            <span class="absolute flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full -left-5 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              <BsJournalText className="font-bold text-[20px] " />
            </span>
          )}

      
          <h3 class="font-medium leading-tight pt-2">Movie Info</h3>
          <p class="text-sm" onClick={()=>setState(!state)}>Step details here
          
          
          <LoginForm/>
          </p>
        </li>
        <li class="mb-10 ml-6">
          <span class="absolute flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full -left-5 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            <ImFilm className="text-[21px]" />
          </span>
          <h3 class="font-medium leading-tight">Review</h3>
          <p class="text-sm">Step details here</p>
        </li>
      </ol>
    </div>
  );
};

export default AddMovies;
