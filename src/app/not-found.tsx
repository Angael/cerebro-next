import React from "react";
import css from "./not-found.module.scss";
type Props = {};

const NotFound = (props: Props) => {
  return (
    <article className={css.container}>
      <h1 className="h1">404</h1>
      <p className="body1">Page not found</p>
      <p className="body2">Please check the URL</p>
    </article>
  );
};

export default NotFound;
