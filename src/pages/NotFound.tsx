import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6">
      <h1 className="text-3xl">404</h1>
      <p className="mt-2">This page does not exist.</p>
      <Link
        to="/"
        className="mt-6 text-sm text-neutral-500 underline decoration-neutral-300 underline-offset-4 hover:text-neutral-900 dark:text-neutral-400 dark:decoration-neutral-600 dark:hover:text-neutral-100"
      >
        Go home
      </Link>
    </div>
  );
}

export default NotFound;
