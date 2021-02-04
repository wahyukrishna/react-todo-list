import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import styles from "./todo.module.css";

const Todo = ({ text, completeTodo, index, isCompleted }) => {
  const classNames = cx(styles.todo);
  const classNames1 = cx(styles.todoText);
  return (
    <div className={classNames} onClick={() => completeTodo(index)}>
      <span
        className={classNames1}
        style={{ textDecoration: isCompleted ? "line-through" : "initial" }}
      >
        {text}
      </span>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired
};

export default Todo;
