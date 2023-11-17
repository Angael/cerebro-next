"use client"; // Error components must be Client Components

import { useEffect } from "react";
import css from "../not-found.module.scss";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={css.container}>
      <h1 className="h1">💥 Something went wrong! 💥</h1>
      <p className="body1">Try reloading the page.</p>
    </div>
  );
}
