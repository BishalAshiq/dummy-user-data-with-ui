import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import logo from "../../../Images/BphoneLogo.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <img style={{ width: 400 }} src={logo} alt="" />
      </div>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contacts</Link>
          <Button
            style={{ marginLeft: 60, fontWeight: "bolder" }}
            color="inherit"
          >
            Login
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
