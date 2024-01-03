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

      <details
        className={css.details}
        open={process.env.NODE_ENV !== "production"}
      >
        <summary className="body1">Details</summary>
        <pre className={css.stack}>
          {process.env.NODE_ENV === "production"
            ? `${error.name}: ${error.message}`
            : error.stack?.split("\n").map((line, i) => (
                <p key={i} className="body1">
                  {line}
                </p>
              ))}
        </pre>
      </details>
    </div>
  );
}
