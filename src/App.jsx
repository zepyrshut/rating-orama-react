import React, { Fragment } from "react";
import AppContent from "./hooks/AppContent";
import AppFooter from "./hooks/AppFooter";

import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./hooks/AppHeader";

export default function App() {
  const myProps = {
    title: "myProps title",
    anotherTitle: "myProps Another title",
  };

  return (
    <Fragment>
      <AppHeader title="my app" anotherTitle="another title" {...myProps} />
      <AppHeader {...myProps} />
      <AppContent />
      <AppFooter />
    </Fragment>
  );
}
