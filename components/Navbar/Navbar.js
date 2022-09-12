import React from "react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const math = 2 * 2;
  const huh = math + math;
  return (
    <div className={styles.Navbar} data-testid="Navbar">
      <Avatar alt="Pung Madro" src="favicon.ico" />
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ THIS WILL BE THE NAVBAR {huh}
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    </div>
  );
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
