import React, { useState } from "react";
import { useStateContext } from "../../contextProvider/ContextProvider";
import { Route } from "react-router-dom";
import AddMovies from "./movie/addMovie/AddMovies";
import MoviesList from "./movie/MoviesList";
import SeriesList from "./series/SeriesList";
import AddGenre from "./genre/AddGenre";
import AddSeries from "./series/AddSeries";
import GenresList from "./users/GenresList";
import Users from "./users/Users";
import AdminSideBar from "../../components/admin/AdminSideBar/AdminSideBar";
import AdminNavBar from "../../components/admin/AdminSideBar/adminNavBar/AdminNavBar";
const AdminPage = () => {
  const [mode, setMode] = useState("dark");
  const [openMenu, setOpenMenu] = useState(false);
  const [isSearchItemsShow, setIsSearchItemsShow] = useState(false);

  const { IsDarkMode } = useStateContext();
  return (
    <div
      className={`dark:text-textDark text-textLight  
    ${IsDarkMode ? "gradient-06" : "lightTheme"} `}
    >
      <div className="flex">
        <div className="lg:sticky">
          <AdminSideBar
            mode={mode}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            setMode={setMode}
          />
        </div>

        <div className="flex flex-col w-full">
          <AdminNavBar
            isSearch={isSearchItemsShow}
            setIsSearch={setIsSearchItemsShow}
            setMode={setMode}
            mode={mode}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />{" "}
          <div>
            <Route
              path={"/admin/addnewmovie"}
              exact
              component={() => <AddMovies />}
            />
            <Route path={"/admin/users"} exact component={() => <Users />} />
            <Route
              path={"/admin/movieslist"}
              exact
              component={() => <MoviesList />}
            />
            <Route
              path={"/admin/addnewseries"}
              exact
              component={() => <AddSeries />}
            />
            <Route
              path={"/admin/addnewgenre"}
              exact
              component={() => <AddGenre />}
            />
            <Route
              path={"/admin/serieslist"}
              exact
              component={() => <SeriesList />}
            />
            <Route
              path={"/admin/genreslist"}
              exact
              component={() => <GenresList />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
