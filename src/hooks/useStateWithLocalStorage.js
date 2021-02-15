import React from "react";
import PropTypes from "prop-types";

const useStateWithLocalStorage = (localStorageKey) => {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || []
  );

  if (!localStorageKey) {
    throw new Error(
      "you have to passsed in a localStorage key as ana argument!"
    );
  }

  React.useEffect(() => {
    localStorage.setItem(localStorage, JSON.stringify(todos));
  }, [todos, localStorageKey]);

  return [todos, setTodos];
};

useStateWithLocalStorage.propTypes = {
  localStorageKey: PropTypes.string.isRequired
};

export default useStateWithLocalStorage;
