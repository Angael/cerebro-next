"use client"; // Error components must be Client Components

import { useEffect } from "react";
import css from "./SimpleError.module.scss";

export default function SimpleError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex-1 flex col gap-1 center">
      <h1 className="h1">Something went wrong</h1>
      <p className="body1">Try reloading the page.</p>

      <details className={css.details}>
        <summary className="body1">Details</summary>
        <pre className={css.stack}>{JSON.stringify(error, null, 2)}</pre>
      </details>
    </div>
  );
}
