import "./Navbar.css";
import logo from "../../../assets/images/logo.icon.svg";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
function Navbar({ onThemeToggle, isLightMode }) {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logoContainer">
          <img src={logo} alt="" className="logoImg" />
          <h1>Extentions</h1>
        </div>
        <div className="iconBtn">
          <button onClick={onThemeToggle} className="themeToggle">
            {isLightMode ? (
              <BsMoonFill className="theme-icon" style={{ color: "#0ea5e9" }} />
            ) : (
              <BsSunFill className="theme-icon" style={{ color: "#facc15" }} />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
