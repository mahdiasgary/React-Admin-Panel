import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDropFile({
  setMovieBackground,
  movieBackground,
  setMovieCover,
  movieCover,
  content,
}) {
  const handleChange = (file) => {
    if(content==='cover') return setMovieCover(file)
  else return setMovieBackground(file)
  };
  return (
    <div>
    
      <div>
        <FileUploader
          handleChange={handleChange}
          name="image"
          types={fileTypes}
        >
          <div class="flex items-center justify-center shadow-2xl w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full min-w-[30vw] h-[150px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  class="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-300">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or ...
                </p>
              </div>
            </label>
          </div>
        </FileUploader>
      </div>
    </div>
  );
}

export default DragDropFile;