import React, { Fragment } from "react";

export default function AppHeader(props, myProps) {
  return (
    <Fragment>
      <p>Esto es el header de la página</p>
      <p>{props.title}</p>
      <p>{props.anotherTitle}</p>
      <p>{myProps.title}</p>
      <p>{myProps.anotherTitle}</p>
    </Fragment>
  );
}
