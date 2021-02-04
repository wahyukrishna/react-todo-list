import React, { useState } from "react";
import PropTypes, { arrayOf } from "prop-types";
import cx from "classnames";
// import React from "react";

import styles from "./todoform.module.css";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = useState("");

  const classNames = cx(styles.add);
  const classNames1 = cx(styles.addForm);
  const classNames2 = cx(styles.addInput);
  const classNames3 = cx(styles.addBtn, styles.mainBlackColor);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("No Blank Todo");
      return;
    }

    if (value.length > 40) {
      alert("Please create a shorter todo text!");
      setValue("");
      return;
    }

    addTodo(value);
    setValue("");
  };

  if (showAdd) {
    return (
      <section className={classNames}>
        <form className={classNames1} onSubmit={handleFormSubmit}>
          <input
            type="text"
            className={classNames2}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button className={classNames3}>Add</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default TodoForm;
