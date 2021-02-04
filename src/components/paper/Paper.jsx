import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import styles from "./paper.module.css";

const Paper = ({ children }) => {
  const classNames = cx(styles.container);
  const classNames1 = cx(styles.frame);

  return (
    <div className={classNames}>
      <div className={classNames1}>{children}</div>
    </div>
  );
};

Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Paper;
