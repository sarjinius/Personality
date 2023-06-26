import React from "react";
import { Navbar } from "./Navbar";

export const Protected = () => {
  return (
    <div className="page-layout">
      <Navbar />
      <div className="page-layout__content" />
    </div>
  );
};