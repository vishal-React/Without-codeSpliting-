import { NavLink } from "react-router-dom";

const NavigateButton = () => {
  return (
    <>
      <NavLink to={"/"}>App</NavLink>
      <br />
      <NavLink to={"/home"}>Home</NavLink>
      <br />
      <NavLink to={"/more"}>More</NavLink>
      <br />
      <NavLink to={"/about"}>About</NavLink>
      <br />
      <NavLink to={"/contact"}>Contact</NavLink>
    </>
  );
};

export default NavigateButton;
