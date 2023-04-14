// import logoImage from "../../assets/EnHomeLi.png";
// import daeklogoImage from "../../assets/EnLogo.png";
import { useFormik } from "formik";
// import * as Yup from "yup";
import { RiEyeCloseLine } from "react-icons/ri";
import { MdRemoveRedEye } from "react-icons/md";

import { useState } from "react";
import { Link, withRouter } from "react-router-dom";
const i18n ={language:'en'}
const LoginForm = ({ history, theme, setTheme, changeLanguage }) => {

    const initialValues = {
    email: "",
    password: "",
  };
//   const validationSchema = Yup.object({
//     password: Yup.string()
//       .required(t("Perore1"))
//       .min(8, t("Perore2"))
//       .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, t("Perore3")),
//   });

  const onSubmit = (values) => {
    const userData = {
      email: values.email,
      password: values.password,
    };
    localStorage.setItem("user", JSON.stringify(userData));
    // toast.success(`${t("toa1")}`, {
    //   autoClose: 1800,
    //   position: "top-right",
    // });
    history.push("/home");
  };

  const Formik = useFormik({
    onSubmit,
    initialValues,
    // validationSchema,
    validateOnMount: true,
  });
  const [show, setShow] = useState(false);

  return (
    <div className=" h-[1000px] dark:text-white">
      <div>
      
        <section className="flex flex-col dark:text-[#c9cbd3] text-slate-800  self-center mt-10  ">
          <div className="self-center border  border-[#787f98] p-5 rounded-md  w-[310px] ">
            <form onSubmit={Formik.handleSubmit}>
              <div className="flex flex-col mb-5 ">
                <label htmlFor="1" className="mb-2">
eee                </label>
                <input
                  type="text"
                  className="fa rounded-sm h-9  border border-[#787f98]
                outline-none ml-2 px-2
                bg-transparent
                "
                  name="email"
                  {...Formik.getFieldProps("email")}
                />
                {Formik.errors.email && Formik.touched.email && (
                  <div className="text-red-600 text-sm ">
                    {Formik.errors.email}
                  </div>
                )}
              </div>
              <div className="flex flex-col mb-5 ">
                <label htmlFor="1" className="mb-2">
essefcf                </label>
                <div className="flex ml-[8px]">
                  <input
                    type={show ? "text" : "password"}
                    className={`${
                      i18n.language === "fa" ? `rounded-r-sm` : `rounded-l-sm`
                    } h-9  border border-[#717374]
                  outline-none  w-full ${
                    i18n.language === "en" ? `border-r-0` : `border-l-0`
                  }  px-2 bg-transparent`}
                    name="password"
                    {...Formik.getFieldProps("password")}
                  />
                  <div
                    className={`flex border ${
                      i18n.language === "fa" ? `border-r-0` : `border-l-0`
                    }  ${
                      i18n.language === "en" ? `pr-3` : `pl-3`
                    }  border-[#717374]  ${
                      i18n.language === "en" ? `rounded-r-sm` : `rounded-l-sm`
                    } `}
                  >
                    <button
                      className="self-center"
                      onClick={(e) => {
                        e.preventDefault();
                        setShow(!show);
                      }}
                    >
                      {!show ? <RiEyeCloseLine /> : <MdRemoveRedEye />}
                    </button>
                  </div>
                </div>

                {Formik.errors.password && Formik.touched.password && (
                  <div className="text-red-600 text-sm ">
                    {Formik.errors.password}
                  </div>
                )}
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
se                </button>
              </div>
            </form>
            <div className="self-center my-8 text-oragneMain">
              <div className="flex justify-center ">
                <Link to={"/singup"}>555</Link>
              </div>
              <div className="flex justify-center">
                {/* <span className="self-center mr-2">{t("or")}</span> */}
              </div>
              <div className="flex justify-center">
                <Link>sef </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default withRouter(LoginForm);
