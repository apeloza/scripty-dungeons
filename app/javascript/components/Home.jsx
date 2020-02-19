import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Dice Game</h1>
        <p className="lead">
          A dice game with an enthralling title and tagline.
        </p>
        <hr className="my-4" />
        <Link
          to="/game"
          className="btn btn-lg custom-button"
          role="button"
        >
          Guest Play
        </Link>
        <Link
          to="/login"
          className="btn btn-lg custom-button"
          role="button"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="btn btn-lg custom-button"
          role="button"
        >
          Register
        </Link>
      </div>
    </div>
  </div>
);