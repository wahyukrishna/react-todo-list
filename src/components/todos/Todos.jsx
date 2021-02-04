import React from "react";
import Todo from "../todo/Todo";
import PropTypes from "prop-types";
import cx from "classnames";

import styles from "./todos.module.css";

const Todos = ({ todos, completeTodo }) => {
  const classNames = cx(styles.todos);
  const classNames1 = cx(styles.todoPlaceholderText);
  const classNames2 = cx(styles.addButtonPlaceholderText);

  return (
    <section className={classNames}>
      {todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo.text}
              isCompleted={todo.isCompleted}
              completeTodo={completeTodo}
              index={index}
            />
          );
        })}
      {todos.length === 0 && (
        <div className={classNames1}>
          Add Todo by clicking <span className={classNames2}>Add</span> button
          on the top left corner
        </div>
      )}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
