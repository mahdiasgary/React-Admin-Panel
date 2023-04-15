import { useFormik } from "formik";
import { useState } from "react";
// import * as Yup from "yup";
import { Link, withRouter } from "react-router-dom";
import CreatableSelect from "react-select/creatable";

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

const i18n = { language: "en" };
const LoginForm = ({ history, theme, setTheme, changeLanguage }) => {
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
  const [selectedOption , setSelectedOption]=useState('')
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
      genres:selectedOption,
      year: values.year,
      summary: values.summary,
      
    };
    console.log(movieData);
    values.title=''
  };

  const Formik = useFormik({
    onSubmit,
    initialValues,
    // validationSchema,
    validateOnMount: true,
  });
  const handleChange = (selectedOption, actionMeta) => {
setSelectedOption(selectedOption)  };
  return (
    <div className=" flex justify-center">
      <div>
        <section className="flex flex-col dark:text-screenLight text-slate-800  self-center mt-2  ">
          <div className="rounded-md  max-w-[20vw] mx-32">
            <form onSubmit={Formik.handleSubmit} className="flex flex-col  ">








              
              <div>
              <div className="flex justify-center gap-6 ">
                <fieldset className="border border-[#787f98] px-3 rounded-lg min-w-full max-w-[100px] ">
                  <legend className="px-1 text-btn text-[17px]">Title</legend>
                  <input
                    type="text"
                    className="fa rounded-sm h-12  
                outline-none 
                bg-transparent w-full text-lg px-2
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
                <fieldset className="border border-[#787f98] text-yellow-400 px-3 rounded-lg min-w-full ">
                  <legend className="px-1  text-[17px]">imdb</legend>
                  <input
                    type="text"
                    className="fa rounded-sm h-12  
                outline-none 
                bg-transparent w-full text-lg
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

              <div className="flex mt-5 justify-center gap-6 max-w-[700px] ">
                <fieldset className="border border-[#787f98] px-3 rounded-lg min-w-full max-w-[100px] ">
                  <legend className="px-1 text-btn text-[17px]">Year</legend>
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
                <fieldset className="border border-[#787f98] px-3 rounded-lg min-w-full ">
                  <legend className="px-1 text-btn text-[17px]">Genre</legend>
                  {/* <label for="countries_multiple" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}

                  <CreatableSelect
                    options={options}
                    onChange={handleChange}
                    isMulti
                    // value={'kkkkk'}
                    // inputValue="c"
                    styles={colorStyles}
                  />
                  {Formik.errors.email && Formik.touched.email && (
                    <div className="text-red-600 text-sm ">
                      {Formik.errors.email}
                    </div>
                  )}
                </fieldset>
              </div>

              <div className="flex mt-5 justify-center gap-6 max-w-[700px] ">
                <fieldset className="border border-[#787f98] px-3 rounded-lg min-w-full max-w-[100px] ">
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
                <fieldset className="border border-[#787f98] px-3 rounded-lg min-w-full ">
                  <legend className="px-1 text-btn text-[17px]">Time</legend>
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
              </div>

              <div className="flex mt-5 justify-center gap-6 max-w-[700px] ">
                <fieldset className="border border-[#787f98] px-3 rounded-lg min-w-full max-w-[100px] ">
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
                <fieldset className="border border-[#787f98] px-3 rounded-lg min-w-full ">
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
              </div>

              <div className="flex mt-5 justify-center gap-6 max-w-[700px] ">
                <fieldset className="border border-[#787f98] px-3 rounded-lg min-w-full max-w-[100px] ">
                  <legend className="px-1 text-btn text-[17px]">Artists</legend>
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
                <fieldset className="border border-[#787f98] px-3 rounded-lg min-w-full ">
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
              <div className=" mt-5 max-w-[900px] ">
                <fieldset className="border border-[#787f98] px-3 rounded-lg w-full">
                  <legend className="px-1 text-btn text-[17px]">Summary</legend>
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

              <div className="flex justify-center mb-5 mt-10">
                <button
                  className={
                    Formik.errors.email || Formik.errors.password
                      ? "bg-[#787f98] opacity-60 px-12 py-2 rounded-lg font-semibold"
                      : "bg-oragneMain text-white px-12 py-2 rounded-lg font-semibold"
                  }
                  type="submit"
                  disabled={
                    Formik.errors.email || Formik.errors.password ? true : false
                  }
                >
                  se
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default withRouter(LoginForm);
