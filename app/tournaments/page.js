"use client";
import AuthContext from "../contexts/AuthContext";
import NavBar from "../ui/navbar";
import HorizontalTabs from "../ui/Tournaments/TournamentsList/HorizontalTabs";
import TournamentCard from "../ui/Tournaments/TournamentsList/TournamentCard";
import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";

export default function Home() {
  const { login, loading, user, isAuthenticated } = useContext(AuthContext);
  const tabs = ["Upcoming", "Ongoing", "End", "Participated"];
  useEffect(() => {
    console.log(isAuthenticated);
    console.log(user);
  }, []);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <NavBar></NavBar>
        <div className="flex flex-wrap justify-center p-4 md:p-10 max-w-7xl gap-3 md:gap-4 lg:gap-6">
          <TournamentCard
            name="Alpha Tournament"
            startDate="2024-01-25"
            endDate="2024-02-05"
            timeRemaining="10 days"
            totalCompetitors="100"
            prizes="1st Prize: $1000"
          />
          <TournamentCard
            name="Alpha Tournament"
            startDate="2024-01-25"
            endDate="2024-02-05"
            timeRemaining="10 days"
            totalCompetitors="100"
            prizes="1st Prize: $1000"
          />
          <TournamentCard
            name="Alpha Tournament"
            startDate="2024-01-25"
            endDate="2024-02-05"
            timeRemaining="10 days"
            totalCompetitors="100"
            prizes="1st Prize: $1000"
          />
          <TournamentCard
            name="Alpha Tournament"
            startDate="2024-01-25"
            endDate="2024-02-05"
            timeRemaining="10 days"
            totalCompetitors="100"
            prizes="1st Prize: $1000"
          />
          <TournamentCard
            name="Alpha Tournament"
            startDate="2024-01-25"
            endDate="2024-02-05"
            timeRemaining="10 days"
            totalCompetitors="100"
            prizes="1st Prize: $1000"
          />
          <TournamentCard
            name="Alpha Tournament"
            startDate="2024-01-25"
            endDate="2024-02-05"
            timeRemaining="10 days"
            totalCompetitors="100"
            prizes="1st Prize: $1000"
          />
        </div>
      </div>
    </>
  );
}
