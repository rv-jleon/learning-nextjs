import React, { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNav.module.css";
import FavoritesContext from "../../store/favorites-context";

const MainNav = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetups">Add New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites{" "}
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
