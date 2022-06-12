import React, { Fragment, useEffect } from "react";
import { Router, Route, Link, Routes, BrowserRouter } from "react-router-dom";
import AppContent from "./hooks/AppContent";
import AppFooter from "./hooks/AppFooter";

import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./hooks/AppHeader";

import "./style/App.css";

import WebFont from "webfontloader";

export default function App() {
  // const myProps = {
  //   title: "myProps title",
  //   anotherTitle: "myProps Another title",
  // };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto:300,400,500,700", "Karla:400,700"],
      },
    });
  }, []);

  return (
    <Fragment>
      {/* <AppHeader title="my app" anotherTitle="another title" {...myProps} />
      <AppHeader {...myProps} />
      <AppContent />
      <AppFooter /> */}

      <BrowserRouter>
        <div className="container karla">
          <div className="row">
            <h1 className="mt-3">¡Elige una película!</h1>
          </div>

          <div className="row">
            <div className="col-md-2">
              <nav>
                <ul className="list-group">
                  <li className="list-group-item">
                    <Link to="/">Inicio</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/movies">Películas</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/admin">Administrar catálogo</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-10">
              <Routes>
                <Route path="/movies" element={<Movies />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

function Home() {
  return <h2>home</h2>;
}

function Movies() {
  return <h2>movies</h2>;
}

function Admin() {
  return <h2>admin</h2>;
}
