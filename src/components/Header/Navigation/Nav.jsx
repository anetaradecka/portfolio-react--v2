import React from "react";
// ------ ASSETS ------
import logo from "../../../assets//img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
// ------ CUSTOM COMPONENTS ------
import NavLink from "./NavLink";
// ------ CONTEXT ------
import { useContext } from "react";
import { ThemeCtx } from "../../../store/ThemeCtx";

export default function Nav({ isSticky }) {
  const { toggleTheme } = useContext(ThemeCtx);

  function handleNavHover(event) {
    if (event.target.classList.contains("nav__link")) {
      const link = event.target;
      const siblings = link.closest(".nav").querySelectorAll(".nav__link");
      const logo = link.closest(".nav").querySelector("img");

      siblings.forEach((el) => {
        if (el !== link) el.style.opacity = this;
      });
      logo.style.opacity = this;
    }
  }

  function handleScrollToSection(event) {
    event.preventDefault();

    const id = event.target.getAttribute("href"); // selects #section--number
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }

  return (
    // this technique of passing args to an event listener would work:
    // <nav className="nav" onMouseOver={(event) => handleNavHover(event, 0.5)} onMouseOut={(event) => handleNavHover(event, 1)}>
    // but with bind we can create a new func that will not be called immediately(!) and we can bind it to a new this being 0.5 or 1
    <nav
      className={isSticky ? "nav sticky" : "nav"}
      onMouseOver={handleNavHover.bind(0.5)}
      onMouseOut={handleNavHover.bind(1)}
    >
      <img
        src={logo}
        alt="Aneta Radecka portfolio"
        className="nav__logo"
        id="logo"
      />
      <ul className="nav__links" onClick={handleScrollToSection}>
        <NavLink linkTo="section--0">Home</NavLink>
        <NavLink linkTo="section--1">About</NavLink>
        <NavLink linkTo="section--2">Projects</NavLink>
        <NavLink linkTo="section--3">Posts</NavLink>
        <NavLink linkTo="section--4">Contact</NavLink>
      </ul>
      <div className="page__version">
        <a href="#">ENG</a>
        <a href="#">DE</a>
        <a href="#">ES</a>
        <a href="#">PL</a>
        <FontAwesomeIcon
          icon={faCircleHalfStroke}
          onClick={toggleTheme}
          className="theme--toggle"
        />
      </div>
    </nav>
  );
}
