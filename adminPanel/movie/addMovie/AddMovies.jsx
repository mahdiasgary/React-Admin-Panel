import React, { useState } from "react";
import { BsImageFill, BsJournalText } from "react-icons/bs";
import { ImFilm } from "react-icons/im";
import DragDropFile from "./DragDropFile";
import AddMoveImage from "./AddMoveImage";
import LoginForm from "./MovieInfo";
import { useFormik } from "formik";
import { Link, withRouter } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
// import * as Yup from "yup";

const options = [
  { label: "Grapes ", value: "graspes" },
  { label: "Mango ", value: "manasgo" },
  { label: "Strawberry ", value: "stafrawberry" },
  { label: "Grapes ", value: "graefafapes" },
  { label: "Mango ", value: "margngo" },
  { label: "Strawberry ", value: "strawbesgrrry" },
  { label: "Grapes ", value: "gruilapes" },
  { label: "Mango ", value: "mangilgo" },
  { label: "Strawberry ", value: "strawbiulerry" },
];

const AddMovies = () => {
  const [movieCover, setMovieCover] = useState(null);
  const [movieBackground, setMovieBackground] = useState(null);
  const [state, setState] = useState(false);
  const initialValues = {
    title: "",
    imdb: "",
    email: "",
    password: "",
    year: "",
    genres: "",
    languages: "",
    time: "",
    createdDate: "",
    releasedDate: "",
    countries: "",
    artists: "",
    summary: "",
  };
  const [selectedOption, setSelectedOption] = useState("");
  //   const validationSchema = Yup.object({
  //     password: Yup.string()
  //       .required(t("Perore1"))
  //       .min(8, t("Perore2"))
  //       .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, t("Perore3")),
  //   });
  const colorStyles = {
    control: (styles, { isSelected }) => ({
      ...styles,
      backgroundColor: "zink",
      border: "none",
      outlineWidth: "0px",
    }),
    option: (
      styles,
      { data, isDisabled, isFocused, isSelected, isHovered }
    ) => {
      return {
        ...styles,
        color: data.color,
        backgroundColor: "#1c1d21",
        "&:hover": {
          ...styles,
          backgroundColor: "blue",
        },
      };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        color: "zink",
        // backgroundOpacity: "10%",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
      };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
        cursor: "pointer",
        ":hover": {
          color: "#fff",
        },
      };
    },
  };
  const onSubmit = (values) => {
    const movieData = {
      title: values.title,
      imdb: values.imdb,
      email: values.email,
      password: values.password,
      artists: values.artists,
      countries: values.countries,
      releasedDate: values.releasedDate,
      createdDate: values.createdDate,
      time: values.time,
      languages: values.languages,
      genres: selectedOption,
      year: values.year,
      summary: values.summary,
    };
    console.log(movieData);
    values.title = "";
  };

  const Formik = useFormik({
    onSubmit,
    initialValues,
    // validationSchema,
    validateOnMount: true,
  });
  const handleChange = (selectedOption, actionMeta) => {
    setSelectedOption(selectedOption);
  };
  return (
    <div className=" my-10 mx-10 md:mx-28">
      <div className="text-[23px] font-bold mt-10 mb-6 ">Add New Movie </div>
      <section className=" dark:text-screenLight text-sideBarDark  self-center mt-2  ">
        <div className="">
          <form onSubmit={Formik.handleSubmit} className="">
            <ol class="relative flex flex-col text-gray-500 border-l border-gray-300 dark:border-gray-600 dark:text-gray-400">
              <AddMoveImage
                movieBackground={movieBackground}
                setMovieBackground={setMovieBackground}
                movieCover={movieCover}
                setMovieCover={setMovieCover}
              />

              {/* <li class="mb-10 ml-6">
          <span class="absolute flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full -left-5 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            <ImFilm className="text-[21px]" />
          </span>
          <h3 class="font-medium leading-tight pt-2 px-1">Add Video</h3>
          <p class=""> 
          
          
          <DragDropFile/>
          </p>
        </li> */}
              <li class="mb-10 ml-6 flex flex-col w-full">
                {movieCover && movieBackground ? (
                  !state ? (
                    <div class="absolute flex text-screenLight items-center justify-center w-10 h-10 bg-btn rounded-full -left-5 ring-4 ring-white dark:ring-gray-900 ">
                      <BsJournalText className="font-bold text-[20px] " />
                    </div>
                  ) : (
                    <div class="absolute flex items-center justify-center w-10 h-10 bg-btn rounded-full -left-5 ring-4 ring-white dark:ring-gray-900 dark:bg-btn">
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
                    </div>
                  )
                ) : (
                  <span class="absolute flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full -left-5 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                    <BsJournalText className="font-bold text-[20px] " />
                  </span>
                )}

                <h3 class="font-medium leading-tight pt-2  px-1">Movie Info</h3>
                <p class="text-sm w-full" onClick={() => setState(!state)}>
                  Step details here
                  <div className="">
                    <div className="min-w-[200px] mt-4 md:mt-8 ">
                      <div className="flex  flex-col sm:flex-row justify-center  sm:gap-6 ">
                        <fieldset className="border border-[#787f98] my-1 px-3 rounded-lg w-full  ">
                          <legend className="px-1 text-btn text-[17px]">
                            Title
                          </legend>
                          <input
                            type="text"
                            className="fa rounded-sm h-12  
                outline-none w-full
                bg-transparent  text-lg px-2
                "
                            name="text"
                            {...Formik.getFieldProps("title")}
                          />

                          {Formik.errors.email && Formik.touched.email && (
                            <div className="text-red-600 text-sm ">
                              {Formik.errors.email}
                            </div>
                          )}
                        </fieldset>
                        <fieldset className="border border-[#787f98] my-1 text-yellow-400 px-3 rounded-lg min-w-[100px] ">
                          <legend className="px-1  text-[17px]">imdb</legend>
                          <input
                            type="text"
                            className="rounded-sm h-12  
                outline-none 
                bg-transparent  text-lg w-full
                "
                            name="text"
                            {...Formik.getFieldProps("imdb")}
                          />
                          {Formik.errors.email && Formik.touched.email && (
                            <div className="text-red-600 text-sm ">
                              {Formik.errors.email}
                            </div>
                          )}
                        </fieldset>
                      </div>
                      <div className="flex flex-col sm:flex-row justify-center  sm:gap-6   ">
                        <fieldset className="border border-[#787f98] my-1 px-3 rounded-lg  ">
                          <legend className="px-1 text-btn text-[17px]">
                            Year
                          </legend>
                          <input
                            type="text"
                            className="fa rounded-sm h-12  
outline-none 
bg-transparent w-full text-lg
"
                            name="text"
                            {...Formik.getFieldProps("year")}
                          />

                          {Formik.errors.email && Formik.touched.email && (
                            <div className="text-red-600 text-sm ">
                              {Formik.errors.email}
                            </div>
                          )}
                        </fieldset>
                        <fieldset className="border border-[#787f98] my-1 px-3 rounded-lg w-full  ">
                          <legend className="px-1 text-btn text-[17px]">
                            Genre
                          </legend>

                          <CreatableSelect
                            options={options}
                            onChange={handleChange}
                            isMulti
                            // value={'kkkkk'}
                            // inputValue="c"
                            className="h-12"
                            styles={colorStyles}
                          />
                          {Formik.errors.email && Formik.touched.email && (
                            <div className="text-red-600 text-sm ">
                              {Formik.errors.email}
                            </div>
                          )}
                        </fieldset>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-center  sm:gap-6  ">
                        <fieldset className="border border-[#787f98] my-1 px-3 rounded-lg w-full  ">
                          <legend className="px-1 text-btn text-[17px]">
                            Language
                          </legend>
                          <input
                            type="text"
                            className="fa rounded-sm h-12  
outline-none 
bg-transparent w-full text-lg
"
                            name="text"
                            {...Formik.getFieldProps("language")}
                          />

                          {Formik.errors.email && Formik.touched.email && (
                            <div className="text-red-600 text-sm ">
                              {Formik.errors.email}
                            </div>
                          )}
                        </fieldset>
                        <fieldset className="border border-[#787f98] my-1 px-3 rounded-lg  ">
                          <legend className="px-1 text-btn text-[17px]">
                            Time
                          </legend>
                          <input
                            type="text"
                            className="fa rounded-sm h-12  
outline-none 
bg-transparent w-full text-lg
"
                            name="email"
                            {...Formik.getFieldProps("time")}
                          />

                          {Formik.errors.email && Formik.touched.email && (
                            <div className="text-red-600 text-sm ">
                              {Formik.errors.email}
                            </div>
                          )}
                        </fieldset>
                        <fieldset className="border border-[#787f98] my-1 px-3 rounded-lg w-full ">
                          <legend className="px-1 text-btn text-[17px]">
                            Countries
                          </legend>
                          <input
                            type="text"
                            className="fa rounded-sm h-12  
outline-none 
bg-transparent w-full text-lg
"
                            name="email"
                            {...Formik.getFieldProps("countries")}
                          />
                          {Formik.errors.email && Formik.touched.email && (
                            <div className="text-red-600 text-sm ">
                              {Formik.errors.email}
                            </div>
                          )}
                        </fieldset>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-center  sm:gap-6  ">
                        <fieldset className="border border-[#787f98] my-1 px-3 rounded-lg   min-w-[200px] ">
                          <legend className="px-1 text-btn text-[17px]">
                            Created Date
                          </legend>
                          <input
                            type="text"
                            className="fa rounded-sm h-12  
outline-none 
bg-transparent w-full text-lg
"
                            name="text"
                            {...Formik.getFieldProps("createdDate")}
                          />

                          {Formik.errors.email && Formik.touched.email && (
                            <div className="text-red-600 text-sm ">
                              {Formik.errors.email}
                            </div>
                          )}
                        </fieldset>
                        <fieldset className="border border-[#787f98] my-1 px-3 rounded-lg min-w-[200px] ">
                          <legend className="px-1 text-btn text-[17px]">
                            Released Date
                          </legend>
                          <input
                            type="text"
                            className="fa rounded-sm h-12  
outline-none 
bg-transparent w-full text-lg
"
                            name="email"
                            {...Formik.getFieldProps("releasedDate")}
                          />

                          {Formik.errors.email && Formik.touched.email && (
                            <div className="text-red-600 text-sm ">
                              {Formik.errors.email}
                            </div>
                          )}
                        </fieldset>
                        <fieldset className="border border-[#787f98] my-1 px-3 rounded-lg w-full  ">
                          <legend className="px-1 text-btn text-[17px]">
                            Artists
                          </legend>
                          <input
                            type="text"
                            className="fa rounded-sm h-12  
outline-none 
bg-transparent w-full text-lg
"
                            name="text"
                            {...Formik.getFieldProps("Artists")}
                          />

                          {Formik.errors.email && Formik.touched.email && (
                            <div className="text-red-600 text-sm ">
                              {Formik.errors.email}
                            </div>
                          )}
                        </fieldset>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-center  sm:gap-6  "></div>
                      <div className=" mt-5 max-w-[900px] ">
                        <fieldset className="border border-[#787f98] my-1 px-3 rounded-lg w-full">
                          <legend className="px-1 text-btn text-[17px]">
                            Summary
                          </legend>
                          <textarea
                            type="text"
                            className="fa rounded-sm h-12  
outline-none 
bg-transparent w-full text-lg
"
                            name="text"
                            {...Formik.getFieldProps("summary")}
                          />

                          {Formik.errors.email && Formik.touched.email && (
                            <div className="text-red-600 text-sm ">
                              {Formik.errors.email}
                            </div>
                          )}
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </p>
              </li>
              <li class="ml-6 ">
                {movieCover ? (
                   <div class="absolute mt-1 flex items-center justify-center w-10 h-10 bg-btn rounded-full -left-5 ring-4 ring-white dark:ring-gray-900 dark:bg-btn">
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
                 </div>
                ) : (
                  <div class="absolute mt-1 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full -left-5 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-slate-800"
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
                  </div>
                )}
                {/* <h3 class="font-medium leading-tight pt-2 px-1 hidden ">
                    Complite !
                  </h3> */}
                <div className="flex justify-center ">
                  <div>
                    {" "}
                    <div className="flex justify-center ">
                      <button
                        className={
                          Formik.errors.email || Formik.errors.password
                            ? "bg-[#787f98] opacity-60 px-12 py-2 rounded-lg font-semibold"
                            : "bg-btn text-white px-16 py-3 rounded-xl hover:bg-blue-800 duration-300 font-semibold"
                        }
                        type="submit"
                        disabled={
                          Formik.errors.email || Formik.errors.password
                            ? true
                            : false
                        }
                      >
                        DONE !{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddMovies;
