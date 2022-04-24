import React from "react";
import { Link } from "react-router-dom";
import './NotFoundPage.css'

function NotFoundPage() {
  return (
    <div className="not_found_page_container">
      <h1>404 Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFoundPage;
