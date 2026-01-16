import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col gap-2">
      404 Not Found
      <Link
        to="/"
        className="text-blue-600 hover:text-blue-800 hover:underline"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
