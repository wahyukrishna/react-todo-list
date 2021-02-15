/** @jsxImportSource @emotion/react */

// import { jsx } from "@emotion/react";
// import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

import Button from "../button/ButtonClass";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

// import styles from "./header.module.css";
import * as styles from "./header.styles";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();
  return (
    <section className="header-component">
      <Container alignItems="flex-start">
        <Item flex={1}>
          <Button
            text={showAdd ? "finish" : "Add"}
            onClick={showAddToggle}
            align="left"
          />
        </Item>
        <Item flex={2}>
          <h1 css={styles.headerTitle(theme)}>Todo List</h1>
        </Item>
        <Item flex={1} align="right">
          <Button text="Clear" onClick={clearTodos} color="red" align="right" />
        </Item>
        {/* penggunaan classname dari styles.css */}
        {/* <button className="header-btn main-black-color" onClick={showAddToggle}>
        {showAdd ? "finish" : "Add"}
      </button> */}
        {/* <button className="header-btn main-red-color" onClick={clearTodos}>
        Clear
      </button> */}
      </Container>
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
