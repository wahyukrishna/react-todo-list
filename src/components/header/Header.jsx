/** @jsxImportSource @emotion/react */

import { jsx } from "@emotion/react";
// import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";

import Button from "../button/Button";

// import styles from "./header.module.css";
import * as styles from "./header.styles";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();
  return (
    <section css={styles.header}>
      <Button
        text={showAdd ? "finish" : "Add"}
        onClick={showAddToggle}
        align="left"
      />
      {/* penggunaan classname dari styles.css */}
      {/* <button className="header-btn main-black-color" onClick={showAddToggle}>
        {showAdd ? "finish" : "Add"}
      </button> */}
      <h1 css={styles.headerTitle(theme)}>Todo List</h1>
      <Button text="Clear" onClick={clearTodos} color="red" align="right" />
      {/* <button className="header-btn main-red-color" onClick={clearTodos}>
        Clear
      </button> */}
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
