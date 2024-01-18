"use client";
import React, { useEffect, useState, useContext } from "react";
import AuthContext from "./contexts/AuthContext";

export default function Home() {
  const { login, loading, user, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    console.log(isAuthenticated);
    console.log(user);
  }, []);

  return (
    <>
      <p className="font-bold">Home page!</p>
      <p>{isAuthenticated ? "User authenticated" : "User not authenticated"}</p>
    </>
  );
}
