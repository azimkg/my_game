import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTES_NAME } from "../../helpers/Routes";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div className="navbar">
      {ROUTES_NAME?.map((item) => (
        <Link
          key={item.id}
          to={item.link}
          className={
            pathname == item.link ? "navbar_elem-active" : "navbar_elem"
          }
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
