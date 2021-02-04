import React from "react";
import PropTypes from "prop-types";

import Button from "../button/Button";

import styles from "./header.module.css";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className={styles.header}>
      <Button
        text={showAdd ? "finish" : "Add"}
        onClick={showAddToggle}
        align="left"
      />
      {/* <button className="header-btn main-black-color" onClick={showAddToggle}>
        {showAdd ? "finish" : "Add"}
      </button> */}
      <h1 className={styles.headerTitle}>Todo List</h1>
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
